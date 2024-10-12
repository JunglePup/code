import { join } from 'node:path'
import { writeFile } from 'node:fs/promises'
import { buildTheme as buildDenseTheme } from './dense/index.ts'
import { buildTheme as buildLightTheme } from './field/index.ts'

const OutDir = join(__dirname, '..', 'themes')
const flavours = {
  // TODO: can this be automated?
  dense: buildDenseTheme(),
  // TODO: decide on the final theme
  field: buildLightTheme()
}

async function main (): Promise<void> {
  for await (const [name, theme] of Object.entries(flavours)) {
    const OutFile = `JunglePup-${name}-color-theme.json`
    await writeFile(
      join(OutDir, OutFile),
      JSON.stringify(theme, null, 2)
    )
    console.log(`Wrote ${OutDir}/${OutFile}`)
  }
}

(async () => {
  await main()
})().catch(() => { process.exit(1) })
