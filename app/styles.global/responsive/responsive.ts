import type { CSSProperties } from "@vanilla-extract/css";
import { composeStyleProps } from "./utils";

type MobileBreakpoint = "600px";
type TabletBreakpoint = "768px";
type DesktopBreakpoint = "1024px";
type Breakpoint = MobileBreakpoint | TabletBreakpoint | DesktopBreakpoint;
export type BreakpointDevice = "mobile" | "tablet" | "desktop";

type MediaQuery =
	| `@media (min-width: ${Breakpoint})`
	| `@media (max-width: ${Breakpoint})`
	| `@media (min-width: ${Breakpoint}) and (max-width: ${Breakpoint})`;

type MediaRecord = Record<BreakpointDevice, MediaQuery>;

export const media = {
	mobile: "@media (max-width: 600px)",
	tablet: "@media (min-width: 600px) and (max-width: 1024px)",
	desktop: "@media (min-width: 1024px)",
} as const satisfies MediaRecord;

// export const applyAtBreakpoint =
//   (breakpoint: BreakpointDevice) =>
//   (rulesToApply: CSSProperties): CSSProperties => ({
//     [media[breakpoint]]: rulesToApply,
//   });

export const applyAtBreakpoint =
	(breakpoint: BreakpointDevice) =>
	(rulesToApply: CSSProperties): CSSProperties =>
		composeStyleProps({
			[media[breakpoint]]: rulesToApply,
		})({});

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
	it("should apply given rules within the specified breakpoint", () => {
		const result = applyAtBreakpoint("mobile")({
			color: "red",
		} as CSSProperties);

		const expectedOutput = {
			[media.mobile]: {
				color: "red",
			},
		};

		expect(result).toEqual(expectedOutput);
	});

	it("should handle an undefined breakpoint gracefully", () => {
		const result = applyAtBreakpoint("undefinedBreakpoint" as BreakpointDevice)(
			{
				color: "",
			} as CSSProperties,
		);

		const expectedOutput = {
			undefined: {
				color: "",
			},
		};

		expect(result).toEqual(expectedOutput);
	});
}
