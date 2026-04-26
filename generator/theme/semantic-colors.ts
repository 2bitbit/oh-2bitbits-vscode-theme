import { Colors } from "../models"

export function getSemanticTokenColors(colors: Colors) {
  return {
    enumMember: colors.whiskey,
    property: colors.coral,
    "variable.defaultLibrary": colors.chalky,
    "variable.callable": colors.malibu, // #61afef 刚好对应主题的 malibu 变量
  }
}