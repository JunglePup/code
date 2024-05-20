import { getColors } from './colors'
import { getTokenColors } from './tokenColors'
import { LightPalette } from '../palette'
import { capitalizeFirstLetter } from '../utils'
import { basename } from 'path'

const thisFlavour = capitalizeFirstLetter(basename(__dirname))

export const buildTheme = (): Record<string, unknown> => {
  return {
    name: 'Jungle Pup ' + thisFlavour,
    colors: getColors(LightPalette),
    tokenColors: getTokenColors(LightPalette)
  }
}
