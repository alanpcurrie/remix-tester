import {
	boolean,
	integer,
	pgEnum,
	pgTable,
	serial,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const carTypeEnum = pgEnum("car_type", [
	"sports",
	"muscle",
	"tuner",
	"exotic",
	"classic",
]);
export const movieAppearanceEnum = pgEnum("movie_appearance", [
	"the_fast_and_the_furious",
	"2_fast_2_furious",
	"tokyo_drift",
	"fast_furious",
	"fast_five",
	"fast_six",
	"furious_7",
	"fate_of_the_furious",
	"f9",
]);

const cars = pgTable("cars", {
	id: serial("id").primaryKey(),
	make: varchar("make", { length: 50 }).notNull(),
	model: varchar("model", { length: 50 }).notNull(),
	year: integer("year").notNull(),
	color: varchar("color", { length: 20 }).notNull(),
	vin: varchar("vin", { length: 17 }).notNull(),
	type: carTypeEnum("type").notNull(),
	hasNos: boolean("has_nos").notNull().default(false),
	quarterMileTime: integer("quarter_mile_time"),
	movieAppearance: movieAppearanceEnum("movie_appearance"),
	driver: varchar("driver", { length: 50 }),
	famousQuote: varchar("famous_quote", { length: 255 }),
	createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertCarSchema = createInsertSchema(cars, {
	id: (schema) => schema.id.positive(),
	year: (schema) => schema.year.min(1900).max(new Date().getFullYear() + 1),
	vin: (schema) => schema.vin.length(17),
	type: z.enum(["sports", "muscle", "tuner", "exotic", "classic"]),
	quarterMileTime: (schema) =>
		schema.quarterMileTime.min(8000).max(20000).optional(),
	movieAppearance: z
		.enum([
			"the_fast_and_the_furious",
			"2_fast_2_furious",
			"tokyo_drift",
			"fast_furious",
			"fast_five",
			"fast_six",
			"furious_7",
			"fate_of_the_furious",
			"f9",
		])
		.optional(),
});

export const selectCarSchema = createSelectSchema(cars);

export const supra = insertCarSchema.parse({
	make: "Toyota",
	model: "Supra",
	year: 1994,
	color: "Orange",
	vin: "JT2JA82J6R0018967",
	type: "sports",
	hasNos: true,
	quarterMileTime: 10500,
	movieAppearance: "the_fast_and_the_furious",
	driver: "Brian O'Conner",
	famousQuote: "You never had me. You never had your car.",
});

export const requestSchema = insertCarSchema.pick({
	make: true,
	model: true,
	year: true,
	color: true,
	type: true,
	hasNos: true,
	quarterMileTime: true,
	movieAppearance: true,
	driver: true,
});
