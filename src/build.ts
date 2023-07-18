import { join } from "path";
import { writeFile} from "fs/promises"
import { buildTheme as buildRegularTheme} from "./regular";

const out_dir = join(__dirname, "..", "themes")
const flavours = {
  "regular": buildRegularTheme(),
}

async function main() {
  for await (const [name, theme] of Object.entries(flavours)) {
    const out_file = `JunglePup-${name}-color-theme.json`
    await writeFile(join(out_dir, out_file), JSON.stringify(theme, null, 2));
    console.log(`Wrote ${out_dir}/${out_file}`);

  }
}

main();
