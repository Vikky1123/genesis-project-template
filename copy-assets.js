
const fs = require('fs');
const path = require('path');

// Source and target directories
const sourceDir = path.join(__dirname, 'PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads');
const targetDir = path.join(__dirname, 'public/assets/img/uploads');

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function copyDirectory(source, target) {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // Read all files/directories in the source directory
  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    // Check if it's a directory or file
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Recursively copy directory
      copyDirectory(sourcePath, targetPath);
    } else {
      // Copy file
      ensureDirectoryExistence(targetPath);
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied: ${sourcePath} → ${targetPath}`);
    }
  });
}

// Main execution
console.log('Starting asset copying process...');

try {
  copyDirectory(sourceDir, targetDir);
  console.log('Asset copying completed successfully!');
} catch (error) {
  console.error('Error during asset copying:', error);
}
