import type { z } from "zod";
import type {
	insertCarSchema,
	requestSchema,
	selectCarSchema,
} from "../entities/car.entity";

export type Car = z.infer<typeof selectCarSchema>;
export type NewCar = z.infer<typeof insertCarSchema>;
export type CarRequest = z.infer<typeof requestSchema>;

type CarType = Readonly<
	| { type: "sports" }
	| { type: "muscle" }
	| { type: "tuner" }
	| { type: "exotic" }
	| { type: "classic" }
>;

type MovieAppearance = Readonly<
	| { movie: "the_fast_and_the_furious" }
	| { movie: "2_fast_2_furious" }
	| { movie: "tokyo_drift" }
	| { movie: "fast_furious" }
	| { movie: "fast_five" }
	| { movie: "fast_six" }
	| { movie: "furious_7" }
	| { movie: "fate_of_the_furious" }
	| { movie: "f9" }
>;

type Option<T> = { some: T } | { none: true };

type QuarterMileTime = Readonly<{
	quarterMileTime: Option<number>;
}>;

type Driver = Readonly<{
	driver: Option<string>;
}>;

type FamousQuote = Readonly<{
	famousQuote: Option<string>;
}>;

type MovieAppearanceInfo = Readonly<{
	movieAppearance: Option<MovieAppearance>;
}>;

export type CarProperties = {
	make: string;
	model: string;
	year: number;
	color: string;
	vin: string;
	carType: CarType;
	hasNos: boolean;
} & QuarterMileTime &
	Driver &
	FamousQuote &
	MovieAppearanceInfo;
