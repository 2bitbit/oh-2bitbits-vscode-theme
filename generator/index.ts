import { writeFileSync } from "fs"
import { join } from "path"

import { standardColors, vividColors } from "./theme/colors"
import { editorTokens } from "./theme/editor"
import { getSemanticTokenColors } from "./theme/semantic-colors"
import {
  alwaysBoldTokens,
  alwaysItalicTokens,
  getStandardTokens,
  getTokenColors,
} from "./theme/theme"

export function generateTheme() {
  const colors = vividColors

  const tokenColors = [
    getStandardTokens(colors),
    alwaysItalicTokens,
    alwaysBoldTokens,
    getTokenColors(colors, true),
  ].reduce((aggregate, curr) => aggregate.concat(...curr), [])

  return {
    colors: editorTokens,
    name: "2bitbit One Dark Vivid",
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokenColors(colors),
    tokenColors,
    type: "dark",
  }
}

writeFileSync(
  join(__dirname, "..", "themes", "one-dark-vivid.json"),
  JSON.stringify(generateTheme())
)
