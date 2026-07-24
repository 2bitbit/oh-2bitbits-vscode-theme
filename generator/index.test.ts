import { describe, expect, test } from "bun:test";
import { generateTheme } from "./index";

describe("generateTheme", () => {
	test("should generate valid VSCode theme object", () => {
		const theme = generateTheme();

		expect(theme).toBeDefined();
		expect(theme.name).toBe("2bitbit One Dark Vivid");
		expect(theme.type).toBe("dark");
		expect(theme.semanticHighlighting).toBe(true);
		expect(typeof theme.colors).toBe("object");
		expect(Array.isArray(theme.tokenColors)).toBe(true);
		expect(typeof theme.semanticTokenColors).toBe("object");
	});

	test("should contain expected core editor token colors", () => {
		const theme = generateTheme();

		expect(theme.colors["editor.background"]).toBe("#282c34");
		expect(theme.colors["activityBar.background"]).toBe("#282c34");
	});
});
