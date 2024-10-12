export const opacity = (color: string, opacity: number): string => {
  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity has to be between 0 and 1')
  }
  opacity = Math.floor(255 * opacity)
  return `${color}${opacity.toString(16)}`
}

export function capitalizeFirstLetter (s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
