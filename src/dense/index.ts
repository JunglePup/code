import { getColors } from './colors.ts'
import { getTokenColors } from './tokenColors.ts'
import { DensePalette } from '../palette.ts'
import { capitalizeFirstLetter } from '../utils.ts'
import { basename } from 'node:path'

const thisFlavour = capitalizeFirstLetter(basename(__dirname))

export const buildTheme = (): Record<string, unknown> => {
  return {
    name: 'Jungle Pup ' + thisFlavour,
    colors: getColors(DensePalette),
    tokenColors: getTokenColors(DensePalette)
  }
}
