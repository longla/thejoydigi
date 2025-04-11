const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg"];

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  const webpPath = filePath.replace(ext, ".webp");

  try {
    await sharp(filePath).webp({ quality: 80 }).toFile(webpPath);
    console.log(`Converted ${filePath} to ${webpPath}`);
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
}

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await convertToWebP(filePath);
    }
  }
}

async function main() {
  console.log("Starting image conversion to WebP...");
  await processDirectory(PUBLIC_DIR);
  console.log("Image conversion completed!");
}

main().catch(console.error);
