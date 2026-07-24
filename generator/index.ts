import { vividColors } from "./theme/colors";
import { editorTokens } from "./theme/editor";
import { getSemanticTokenColors } from "./theme/semantic-colors";
import {
	alwaysBoldTokens,
	alwaysItalicTokens,
	getStandardTokens,
	getTokenColors,
} from "./theme/theme";

/**
 * 生成 VSCode 主题配置对象
 */
export function generateTheme() {
	const colors = vividColors;

	const tokenColors = [
		getStandardTokens(colors),
		alwaysItalicTokens,
		alwaysBoldTokens,
		getTokenColors(colors, true),
	].reduce((aggregate, curr) => aggregate.concat(...curr), []);

	return {
		colors: editorTokens,
		name: "2bitbit One Dark Vivid",
		semanticHighlighting: true,
		semanticTokenColors: getSemanticTokenColors(colors),
		tokenColors,
		type: "dark",
	};
}

const outputPath = new URL("../themes/one-dark-vivid.json", import.meta.url);
await Bun.write(outputPath, `${JSON.stringify(generateTheme(), null, 2)}\n`);
