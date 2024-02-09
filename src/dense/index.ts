import { getColors } from './colors'
import { getTokenColors } from './tokenColors'
import { DensePalette } from '../palette'

export const buildTheme = (): Record<string, unknown> => {
  return {
    name: 'Jungle Pup Dense', // TODO: can Dense be automate out of here?
    colors: getColors(DensePalette),
    tokenColors: getTokenColors(DensePalette)
  }
}
