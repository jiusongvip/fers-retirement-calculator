const subsetFont = require("subset-font");
const fs = require("fs");
const path = require("path");

// All Phosphor icon codepoints used in the site (extracted from the icon classes)
const glyphs = "\uE538\uE4F6\uE184\uE308\uE224\uE434\uE30C\uE038\uE1CA\uE3DC\uE1BE\uE20C\uE4AE\uE6A4\uE0B4\uE628\uE0F4";

(async () => {
  const src = path.join(__dirname, "..", "node_modules", "@phosphor-icons", "web", "src", "regular", "Phosphor.woff2");
  const input = fs.readFileSync(src);
  const subset = await subsetFont(input, glyphs, { targetFormat: "woff2" });
  const out = path.join(__dirname, "..", "public", "fonts", "phosphor-icons.woff2");
  fs.writeFileSync(out, subset);
  console.log("subset KB:", Math.round(subset.length / 102.4) / 10);
  console.log("full KB:", Math.round(input.length / 102.4) / 10);
})();
