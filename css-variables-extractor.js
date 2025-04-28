
// CSS Variables Extractor Script
const fs = require('fs');
const path = require('path');

// Function to extract CSS variables from a file
function extractCssVariables(fileContent) {
  const regex = /--[a-zA-Z0-9-_]+\s*:\s*[^;]+;/g;
  const matches = fileContent.match(regex) || [];
  return matches;
}

// Function to search recursively for CSS files
function findCssFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      results = results.concat(findCssFiles(filePath));
    } else if (file.endsWith('.css')) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Main function
function main() {
  try {
    console.log('Searching for CSS files...');
    const cssFiles = findCssFiles('./src/assets/css');
    console.log(`Found ${cssFiles.length} CSS files`);

    let allVariables = new Set();
    let fileVariablesMap = {};

    // Process each CSS file
    for (const file of cssFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const variables = extractCssVariables(content);
        
        if (variables.length > 0) {
          fileVariablesMap[file] = variables;
          variables.forEach(v => allVariables.add(v));
        }
      } catch (err) {
        console.error(`Error reading file ${file}:`, err.message);
      }
    }

    // Generate a summary
    console.log('\n=== CSS Variables Summary ===');
    console.log(`Total unique CSS variables found: ${allVariables.size}\n`);
    
    // Output files with variables
    console.log('Files containing CSS variables:');
    Object.keys(fileVariablesMap).forEach(file => {
      console.log(`${file}: ${fileVariablesMap[file].length} variables`);
    });

    // Generate consolidated variables CSS file
    const consolidatedContent = `:root {\n  ${Array.from(allVariables).join('\n  ')}\n}`;
    const outputPath = 'src/assets/css/consolidated-variables.css';
    fs.writeFileSync(outputPath, consolidatedContent);
    
    console.log(`\nConsolidated variables written to: ${outputPath}`);
    console.log('Add this file to your index.css imports');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
