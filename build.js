const fs = require("fs").promises;
const colors = require("./src/color_definitions");

async function main() {
  const themes = (await fs.readdir("./src/", { withFileTypes: true }))
    .filter(e => e.isFile() && e.name.endsWith(".json"))
    .map(e => e.name);
  for await (const theme of themes) {
    let text = await fs.readFile(`./src/${theme}`, { encoding: "utf8" });
    for (const [color, hexvalue] of Object.entries(colors)) {
      text = text.replace(RegExp(color, "g"), hexvalue);
    }
    const out_path = `./themes/${theme}`;
    await fs.writeFile(out_path, text);
    console.log(`Wrote ${out_path}`);
  }
}

main();
