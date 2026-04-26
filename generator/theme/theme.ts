import { Colors, TokenGroup } from "../models"

// 在 generator/theme/theme.ts 的 getTokenColors 函数返回的数组中添加：

export function getTokenColors(color: Colors, isVivid: boolean) {
    return [
        // 1. 你的自定义斜体规则 (One Dark italic)
        {
            name: "My Custom Italic",
            scope: [
                "comment",
                "entity.other.attribute-name",
                "keyword",
                "markup.underline.link",
                "storage.modifier",
                "storage.type",
                "string.url",
                "variable.language.super",
                "variable.language.this"
            ],
            settings: {
                fontStyle: "italic"
            }
        },
        // 2. 你的自定义斜体取消规则 (One Dark italic reset)
        {
            name: "My Custom Italic Reset",
            scope: [
                "keyword.operator",
                "keyword.other.type",
                "storage.modifier.import",
                "storage.modifier.package",
                "storage.type.built-in",
                "storage.type.function.arrow",
                "storage.type.generic",
                "storage.type.java",
                "storage.type.primitive"
            ],
            settings: {
                fontStyle: ""
            }
        },
        // 3. 终极悬浮窗加粗文本变色规则 (解决之前无法变色的痛点)
        {
            name: "Markdown Bold Hover Widget Injection",
            scope: [
                "markup.bold",
                "markup.bold.markdown",
                "punctuation.definition.bold.markdown"
            ],
            settings: {
                foreground: color.chalky, // 原主题变量中，#E5C07B 对应的是 chalky (黄棕色)
                fontStyle: "bold"
            }
        }
    ];
}

export const getStandardTokens = (colors: Colors): TokenGroup[] => [
  {
    name: "Chalky",
    scope: [
      "entity.name.type",
      "entity.other.inherited-class",
      "keyword.other.type",
      "punctuation.definition.annotation",
      "storage.modifier.import",
      "storage.modifier.package",
      "storage.type.annotation",
      "storage.type.built-in",
      "storage.type.generic",
      // storage.type.java and storage.type.groovy are necessary because
      // storage.type uses violet for JS/TS const, let, and var
      "storage.type.java",
      "storage.type.groovy",
      "storage.type.primitive",
      "support.class",
      "support.other.namespace",
      "support.type",
      "variable.language.this",
    ],
    settings: {
      foreground: colors.chalky,
    },
  },
  {
    name: "Coral",
    scope: [
      "constant.other.character-class",
      "entity.name.tag",
      "heading",
      "meta.object-literal.key",
      "punctuation.definition.list.begin.markdown",
      "punctuation.definition.list.end.markdown",
      "punctuation.definition.template-expression",
      "punctuation.section.embedded",
      "support.type.property-name",
      "variable.object.property",
      "variable.other.enummember",
    ],
    settings: {
      foreground: colors.coral,
    },
  },
  {
    name: "Cyan",
    scope: [
      "constant.character.escape",
      "keyword.operator",
      "markup.underline.link",
      "string.regexp",
      "string.url",
    ],
    settings: {
      foreground: colors.cyan,
    },
  },
  {
    name: "Malibu",
    scope: [
      "entity.name.function",
      "entity.other.attribute-name.id.css",
      "meta.function-call.generic",
      "string.other.link",
      "support.function",
      "variable.language.super",
    ],
    settings: {
      foreground: colors.malibu,
    },
  },
  {
    name: "Ivory",
    scope: [
      "meta.brace",
      "punctuation.accessor",
      "punctuation.definition.block",
      "punctuation.separator",
      "support.type.property-name.css",
    ],
    settings: {
      foreground: colors.ivory,
    },
  },
  {
    name: "Sage",
    scope: [
      "markup.inline",
      "markup.quote",
      "source.ini",
      "string.other.link.description",
      "string",
    ],
    settings: {
      foreground: colors.sage,
    },
  },
  {
    name: "Stone",
    scope: ["comment"],
    settings: {
      foreground: colors.stone,
    },
  },
  {
    name: "Violet",
    scope: [
      "keyword.operator.new",
      "keyword",
      "markup.italic",
      "punctuation.definition.block.tag",
      "storage.modifier",
      "storage.type",
    ],
    settings: {
      foreground: colors.violet,
    },
  },
  {
    name: "Whiskey",
    scope: [
      "constant",
      "entity.other.attribute-name",
      "keyword.operator.quantifier.regexp",
      "markup.bold",
      "support.constant",
      "variable.other.constant",
      "variable.parameter",
    ],
    settings: {
      foreground: colors.whiskey,
    },
  },
]

export const alwaysItalicTokens: TokenGroup[] = [
  {
    name: "Always italic",
    scope: ["markup.quote", "markup.italic"],
    settings: {
      fontStyle: "italic",
    },
  },
]

export const alwaysBoldTokens: TokenGroup[] = [
  {
    name: "Always bold",
    scope: ["heading", "markup.bold"],
    settings: {
      fontStyle: "bold",
    },
  },
]
