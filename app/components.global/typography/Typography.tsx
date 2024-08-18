import type React from "react";
import { type TypographyVariants, typographyRecipe } from "./Typography.css";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";

type PolymorphicProps<T extends React.ElementType> = {
	as?: T;
	children: React.ReactNode;
	variant?: HeadingLevel;
	className?: string;
} & React.ComponentPropsWithoutRef<T> &
	TypographyVariants;

export const Typography = <T extends React.ElementType = "p">({
	as,
	children,
	variant,
	className,
	...props
}: PolymorphicProps<T>) => {
	const Component = as || "p";
	const recipeClassName = typographyRecipe({ variant });

	return (
		<Component className={`${recipeClassName} ${className || ""}`} {...props}>
			{children}
		</Component>
	);
};
