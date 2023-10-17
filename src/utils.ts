export const opacity = (color: string, opacity: number): string => {
  opacity = Math.floor(255*opacity);
  return `${color}${opacity.toString(16)}`;
};
