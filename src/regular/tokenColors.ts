import { Palette } from '../palette'

export const getTokenColors = (): Array<Record<string, unknown>> => {
  return [
    {
      settings: {
        foreground: Palette.text
      }
    },
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: Palette.accent3
      }
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        foreground: Palette.accent2
      }
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: Palette.accent5
      }
    },
    {
      name: 'Built-in constant',
      scope: 'constant.language',
      settings: {
        foreground: Palette.accent5
      }
    },
    {
      name: 'User-defined constant',
      scope: [
        'constant.character',
        'constant.other'
      ],
      settings: {
        foreground: Palette.accent5
      }
    },
    {
      name: 'Variable',
      scope: 'variable',
      settings: {
        fontStyle: ''
      }
    },
    {
      name: 'Keyword',
      scope: 'keyword',
      settings: {
        foreground: Palette.accent1
      }
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        fontStyle: '',
        foreground: Palette.accent1
      }
    },
    {
      name: 'Storage type',
      scope: 'storage.type',
      settings: {
        fontStyle: 'italic',
        foreground: Palette.accent2
      }
    },
    {
      name: 'Class name',
      scope: 'entity.name.class',
      settings: {
        fontStyle: 'underline',
        foreground: Palette.accent1
      }
    },
    {
      name: 'Inherited class',
      scope: 'entity.other.inherited-class',
      settings: {
        fontStyle: 'italic underline',
        foreground: Palette.accent1
      }
    },
    {
      name: 'Function name',
      scope: 'entity.name.function',
      settings: {
        fontStyle: '',
        foreground: Palette.accent1
      }
    },
    {
      name: 'Function argument',
      scope: 'variable.parameter',
      settings: {
        fontStyle: 'italic',
        foreground: Palette.accent6
      }
    },
    {
      name: 'Tag name',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: '',
        foreground: Palette.accent5
      }
    },
    {
      name: 'Tag attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        fontStyle: '',
        foreground: Palette.accent6
      }
    },
    {
      name: 'Library function',
      scope: 'support.function',
      settings: {
        fontStyle: '',
        foreground: Palette.accent2
      }
    },
    {
      name: 'Library constant',
      scope: 'support.constant',
      settings: {
        fontStyle: '',
        foreground: Palette.accent2
      }
    },
    {
      name: 'Library class/type',
      scope: [
        'support.type',
        'support.class'
      ],
      settings: {
        fontStyle: 'italic',
        foreground: Palette.accent2
      }
    },
    {
      name: 'Library variable',
      scope: 'support.other.variable',
      settings: {
        fontStyle: ''
      }
    },
    {
      name: 'Invalid',
      scope: 'invalid',
      settings: {
        fontStyle: '',
        foreground: Palette.subtle
      }
    },
    {
      name: 'Invalid deprecated',
      scope: 'invalid.deprecated',
      settings: {
        foreground: Palette.subtle
      }
    },
    {
      name: 'Self',
      scope: 'variable.language.special.self',
      settings: {
        foreground: Palette.accent6
      }

    },
    {
      name: 'Function calls',
      scope: 'meta.function-call.generic',
      settings: {
        foreground: Palette.accent1
      }

    }
  ]
}
