import { createVar, globalStyle, style } from "@vanilla-extract/css";

// Define color variables
const primaryColor = createVar();
const secondaryColor = createVar();
const backgroundColor = createVar();
const textColor = createVar();
const linkColor = createVar();
const visitedLinkColor = createVar();

globalStyle(":root", {
	vars: {
		[primaryColor]: "#3498db",
		[secondaryColor]: "#2ecc71",
		[backgroundColor]: "#ecf0f1",
		[textColor]: "#2c3e50",
		[linkColor]: "#3498db",
		[visitedLinkColor]: "#8e44ad",
	},
});

export const container = style({
	fontFamily: "sans-serif",
	padding: "2rem",
	maxWidth: "800px",
	margin: "0 auto",
	backgroundColor: backgroundColor,
	color: textColor,
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
});

export const heading = style({
	color: primaryColor,
});

export const list = style({
	listStyleType: "disc",
	paddingLeft: "1.5rem",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
});

export const listItem = style({
	fontSize: "1.1rem",
});

export const link = style({
	color: linkColor,
	textDecoration: "underline",
	":hover": {
		color: secondaryColor,
	},
	":visited": {
		color: visitedLinkColor,
	},
});

export const section = style({
	marginTop: "2rem",
	padding: "1.5rem",
	backgroundColor: "rgba(255, 255, 255, 0.7)",
	borderRadius: "8px",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
});

export const sectionHeading = style({
	color: secondaryColor,
});
