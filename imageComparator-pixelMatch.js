const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
// requires pngjs, pixelmatch --- npm install pngjs pixelmatch
function readImage(filePath) {
  return PNG.sync.read(fs.readFileSync(filePath));
}

// Load images
const img1 = readImage("screenshots\\v1\\Source-Samsung.png");
const img2 = readImage("screenshots\\v2\\Target-Samsung.png");

// Determine the largest width & height
const maxWidth = Math.max(img1.width, img2.width);
const maxHeight = Math.max(img1.height, img2.height);

// Create blank images with the same size
function createBlankImage(width, height, fillColor = { r: 0, g: 0, b: 0, a: 0 }) {
  const blankImage = new PNG({ width, height });

  for (let i = 0; i < blankImage.data.length; i += 4) {
    blankImage.data[i] = fillColor.r; // Red
    blankImage.data[i + 1] = fillColor.g; // Green
    blankImage.data[i + 2] = fillColor.b; // Blue
    blankImage.data[i + 3] = fillColor.a; // Alpha (transparent)
  }

  return blankImage;
}

const newImg1 = createBlankImage(maxWidth, maxHeight);
const newImg2 = createBlankImage(maxWidth, maxHeight);
const diff = createBlankImage(maxWidth, maxHeight);

// Copy pixel data from original images to new blank images
function copyImageData(source, target) {
  for (let y = 0; y < source.height; y++) {
    for (let x = 0; x < source.width; x++) {
      const srcIdx = (y * source.width + x) * 4;
      const tgtIdx = (y * target.width + x) * 4;

      target.data[tgtIdx] = source.data[srcIdx]; // R
      target.data[tgtIdx + 1] = source.data[srcIdx + 1]; // G
      target.data[tgtIdx + 2] = source.data[srcIdx + 2]; // B
      target.data[tgtIdx + 3] = source.data[srcIdx + 3]; // A
    }
  }
}

copyImageData(img1, newImg1);
copyImageData(img2, newImg2);

// Compare images
pixelmatch(newImg1.data, newImg2.data, diff.data, maxWidth, maxHeight, { threshold: 0.5 });

// Save the difference image
fs.writeFileSync("diff-pixelMatch.png", PNG.sync.write(diff));
console.log("Differences saved to diff-pixelMatch.png");
