import { getColors } from './colors'
import { getTokenColors } from './tokenColors'

export const buildTheme = (): Record<string, unknown> => {
  return {
    name: 'Jungle Pup',
    colors: getColors(),
    tokenColors: getTokenColors()
  }
}
