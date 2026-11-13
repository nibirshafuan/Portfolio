const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const images = [
  { input: "public/profile.png", output: "public/profile.webp", quality: 86 },
  { input: "public/projects/kindora.png", output: "public/projects/kindora.webp", quality: 84 },
  { input: "public/projects/bazardor.png", output: "public/projects/bazardor.webp", quality: 84 },
  { input: "public/projects/fitlog.png", output: "public/projects/fitlog.webp", quality: 84 },
  { input: "public/projects/dev-stack-builder.png", output: "public/projects/dev-stack-builder.webp", quality: 84 }
];

(async () => {
  for (const image of images) {
    await sharp(image.input)
      .rotate()
      .webp({ quality: image.quality, effort: 6 })
      .toFile(image.output);

    const originalSize = fs.statSync(image.input).size;
    const optimizedSize = fs.statSync(image.output).size;
    const saving = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`${path.basename(image.output)}: ${(originalSize / 1024).toFixed(1)} KB -> ${(optimizedSize / 1024).toFixed(1)} KB (${saving}% smaller)`);
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
