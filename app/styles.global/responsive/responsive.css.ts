import { style, type CSSProperties } from "@vanilla-extract/css";
import { applyAtBreakpoint } from "./responsive";

export const composedMediaHelperExample = style(
  applyAtBreakpoint("mobile")({
    background: "red",
  }),
);

const atMobile = applyAtBreakpoint("mobile");
const atTablet = applyAtBreakpoint("tablet");
const atDesktop = applyAtBreakpoint("desktop");

export const responsiveFlexLayout = (
  mobileStyles: CSSProperties = {},
  tabletUpStyles: CSSProperties = {},
): CSSProperties => ({
  ...applyAtBreakpoint("mobile")({
    display: "flex",
    flexDirection: "column",
    ...mobileStyles,
  }),
  ...applyAtBreakpoint("tablet")({
    display: "flex",
    flexDirection: "row",
    ...tabletUpStyles,
  }),
});

export const mobRed = style(
  atMobile({
    background: "red",
  }),
);

export const tabletBlue = style(
  atTablet({
    background: "blue",
  }),
);

export const desktopGreen = style(
  atDesktop({
    background: "green",
  }),
);

export const allSizes = style([
  { color: "black" },
  atDesktop({
    background: "green",
  }),
  atTablet({
    background: "red",
  }),
  atMobile({
    background: "blue",
  }),
]);

export const allSizesWithColors = style([mobRed, tabletBlue, desktopGreen]);
