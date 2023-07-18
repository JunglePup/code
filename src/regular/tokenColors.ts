import { Palette } from "../palette"

export const getTokenColors = () => {
    return [
		{
			"settings": {
				"foreground": Palette.text
			}
		},
		{
			"name": "Comment",
			"scope": "comment",
			"settings": {
				"foreground": Palette.camel
			}
		},
		{
			"name": "String",
			"scope": "string",
			"settings": {
				"foreground": Palette.blue
			}
		},
		{
			"name": "Number",
			"scope": "constant.numeric",
			"settings": {
				"foreground": Palette.purple
			}
		},
		{
			"name": "Built-in constant",
			"scope": "constant.language",
			"settings": {
				"foreground": Palette.purple
			}
		},
		{
			"name": "User-defined constant",
			"scope": [
				"constant.character",
				"constant.other"
			],
			"settings": {
				"foreground": Palette.purple
			}
		},
		{
			"name": "Variable",
			"scope": "variable",
			"settings": {
				"fontStyle": ""
			}
		},
		{
			"name": "Keyword",
			"scope": "keyword",
			"settings": {
				"foreground": Palette.pink
			}
		},
		{
			"name": "Storage",
			"scope": "storage",
			"settings": {
				"fontStyle": "",
				"foreground": Palette.pink
			}
		},
		{
			"name": "Storage type",
			"scope": "storage.type",
			"settings": {
				"fontStyle": "italic",
				"foreground": Palette.blue
			}
		},
		{
			"name": "Class name",
			"scope": "entity.name.class",
			"settings": {
				"fontStyle": "underline",
				"foreground": Palette.pink
			}
		},
		{
			"name": "Inherited class",
			"scope": "entity.other.inherited-class",
			"settings": {
				"fontStyle": "italic underline",
				"foreground": Palette.pink
			}
		},
		{
			"name": "Function name",
			"scope": "entity.name.function",
			"settings": {
				"fontStyle": "",
				"foreground": Palette.pink
			}
		},
		{
			"name": "Function argument",
			"scope": "variable.parameter",
			"settings": {
				"fontStyle": "italic",
				"foreground": Palette.red
			}
		},
		{
			"name": "Tag name",
			"scope": "entity.name.tag",
			"settings": {
				"fontStyle": "",
				"foreground": Palette.purple
			}
		},
		{
			"name": "Tag attribute",
			"scope": "entity.other.attribute-name",
			"settings": {
				"fontStyle": "",
				"foreground": Palette.red
			}
		},
		{
			"name": "Library function",
			"scope": "support.function",
			"settings": {
				"fontStyle": "",
				"foreground": Palette.blue
			}
		},
		{
			"name": "Library constant",
			"scope": "support.constant",
			"settings": {
				"fontStyle": "",
				"foreground": Palette.blue
			}
		},
		{
			"name": "Library class/type",
			"scope": [
				"support.type",
				"support.class"
			],
			"settings": {
				"fontStyle": "italic",
				"foreground": Palette.blue
			}
		},
		{
			"name": "Library variable",
			"scope": "support.other.variable",
			"settings": {
				"fontStyle": ""
			}
		},
		{
			"name": "Invalid",
			"scope": "invalid",
			"settings": {
				"fontStyle": "",
				"foreground": Palette.subtle
			}
		},
		{
			"name": "Invalid deprecated",
			"scope": "invalid.deprecated",
			"settings": {
				"foreground": Palette.subtle
			}
		},
		{
			"name": "Self",
			"scope": "variable.language.special.self",
			"settings": {
				"foreground": Palette.red
			}

		},
		{
			"name": "Function calls",
			"scope": "meta.function-call.generic",
			"settings": {
				"foreground": Palette.pink
			}

		},
    ]
}