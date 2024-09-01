export interface Palette {
  // Background
  back: string
  ui: string
  overlay: string

  // Text colors
  muted: string
  subtle: string
  text: string

  // Highlights
  highlight_low: string
  highlight_med: string
  highlight_high: string

  // Accents
  // TODO: some of these are important to stay roughly the same color for git diff view to make intuitive sense
  accent1: string // pink
  accent2: string // blue
  accent3: string // camel
  accent4: string // green
  accent5: string // purple
  accent6: string // red
};

export const DensePalette: Palette = {
  // Background
  back: '#002118',
  ui: '#003124',
  overlay: '#003E2E',

  // Text colors
  muted: '#848484',
  subtle: '#AAAAAA',
  text: '#D9D9D9',

  // Highlights
  highlight_low: '#2d2625',
  highlight_med: '#473d3b',
  highlight_high: '#544846',

  // Accents
  accent1: '#D15B8F', // pink
  accent2: '#61A0C2', // blue
  accent3: '#c19a6b', // camel
  accent4: '#569C5B', // green
  accent5: '#8A79C7', // purple
  accent6: '#C63D3D' // red
}

export const LightPalette: Palette = {
  // Background
  back: '#FFD6E0',
  ui: '#FFC2D1',
  overlay: '#FFADC2',

  // Text colors
  muted: '#464034',
  subtle: '#403B2F',
  text: '#2F2B23',

  // Highlights
  highlight_low: '#DEB9FF',
  highlight_med: '#D29EFF',
  highlight_high: '#CE96FF',

  // Accents
  accent1: '#9C33FF', // purple
  accent2: '#3A6AF8', // blue
  accent3: '#C16200', // brown
  accent4: '#5C9963', // green
  accent5: '#4E0250', // orange
  accent6: '#F72C25' // red
}
