import { join } from 'node:path'
import { writeFile, readFile } from 'node:fs/promises'
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
  let filesChanged = false
  for await (const [name, theme] of Object.entries(flavours)) {
    const FileName = `JunglePup-${name}-color-theme.json`
    const File = join(OutDir, FileName)
    const buf = await readFile(
      File
    )
    const themeStr = JSON.stringify(theme, null, 2)
    if (buf.toString() !== themeStr) {
      filesChanged = true
    }
    await writeFile(
      File,
      themeStr
    )
    console.log(`Wrote ${File}`)
  }
  if (filesChanged) { process.exit(2) }
}

(async () => {
  await main()
})().catch(() => { process.exit(1) })
