export const opacity = (color: string, opacity: number): string => {
  opacity = Math.floor(255 * opacity)
  return `${color}${opacity.toString(16)}`
}

export function capitalizeFirstLetter (s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
