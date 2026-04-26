import { join } from "path"

import { getColors, standardColors, vividColors } from "./theme/colors"
import { editorTokens } from "./theme/editor"
import { getSemanticTokenColors } from "./theme/semantic-colors"
import {
  alwaysBoldTokens,
  alwaysItalicTokens,
  getStandardTokens,
} from "./theme/theme"
import { writeFile } from "./utils"

export function generateTheme() {
  const colors = vividColors

  const tokenColors = [
    getStandardTokens(colors),
    alwaysItalicTokens,
    alwaysBoldTokens,
  ].reduce((aggregate, curr) => aggregate.concat(...curr), [])

  return {
    colors: { ...editorTokens, ...getColors(colors, true) },
    name: "2bitbit One Dark Vivid",
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokenColors(colors),
    tokenColors,
    type: "dark",
  }
}

writeFile(
  join(__dirname, "..", "themes", "one-dark-vivid.json"),
  generateTheme()
)
