import { getColors } from "./colors"
import { getTokenColors } from "./tokenColors"

export const buildTheme = () => {
    return {
        "name": "Jungle Pup",
        "colors": getColors(),
        "tokenColors": getTokenColors(),
    }
}
