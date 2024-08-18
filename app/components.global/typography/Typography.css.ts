import { style } from "@vanilla-extract/css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

const responsiveFontSize =
	(minSize: number) => (preferredSize: number) => (maxSize: number) => ({
		fontSize: `clamp(${minSize}rem, ${preferredSize}vw, ${maxSize}rem)`,
	});

const goldenRatio = 1.618;
const applyGoldenRatio = (fontSize: number) => ({
	lineHeight: `${fontSize * goldenRatio}rem`,
	marginBottom: `${fontSize / goldenRatio}rem`,
});

const baseTypography = style({
	fontFamily: "Satoshi, sans-serif",
});

const createTypographyVariant =
	(minSize: number) =>
	(preferredSize: number) =>
	(maxSize: number) =>
	(fontWeight: number) =>
		style([
			baseTypography,
			{
				...responsiveFontSize(minSize)(preferredSize)(maxSize),
				fontWeight,
				...applyGoldenRatio(maxSize),
			},
		]);

const baseSize2PreferredSize5 = createTypographyVariant(2)(5);
const h1Variant = baseSize2PreferredSize5(4.5)(700);
const h2Variant = baseSize2PreferredSize5(3)(700);

export const typographyRecipe = recipe({
	variants: {
		variant: {
			h1: h1Variant,
			h2: h2Variant,
			h3: createTypographyVariant(1.6)(3)(2.5)(600),
			h4: createTypographyVariant(1.4)(2.5)(2)(600),
			h5: createTypographyVariant(1.2)(2)(1.5)(500),
			h6: createTypographyVariant(1)(1.5)(1.25)(500),
			body: createTypographyVariant(0.875)(1)(1)(400),
		},
	},
	defaultVariants: {
		variant: "body",
	},
});

export type TypographyVariants = RecipeVariants<typeof typographyRecipe>;
