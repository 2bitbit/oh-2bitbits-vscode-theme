import { Colors } from "../models"

export const standardColors: Colors = {
  chalky: "#e5c07b",
  coral: "#e06c75",
  cyan: "#56b6c2",
  error: "#f44747",
  ivory: "#abb2bf",
  malibu: "#61afef",
  sage: "#98c379",
  stone: "#5c6370",
  violet: "#c678dd",
  whiskey: "#d19a66",
}

export const vividColors: Colors = {
  chalky: "#e5c07b",
  coral: "#ef596f",
  cyan: "#2bbac5",
  error: "#f44747",
  ivory: "#bbbbbb",
  malibu: "#61afef",
  sage: "#89ca78",
  stone: "#5c6370",
  violet: "#d55fde",
  whiskey: "#d19a66",
}


export function getColors(color: Colors, isVivid: boolean) {
    return {
        // 搜索结果边框颜色
        "terminal.findMatchBorder": "#00ff0060",
        "editor.findMatchBorder": "#00ff0060",
        // 搜索结果背景颜色
        "editor.findMatchBackground": "#6e5c0e78",
        "terminal.findMatchHighlightBackground": "#6e5c0e78",
        "editor.findMatchHighlightBackground": "#6e5c0e78",
        // 鼠标拖选背景颜色
        "editor.selectionBackground": "#00660088",
        // 光标当前词的背景透明
        "editor.wordHighlightBackground": "#00000000",
    };
}