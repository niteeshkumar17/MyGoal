const fs = require('fs');

const syllabusPath = './src/pages/Syllabus.jsx';
const jsonPath = './output.json';

const syllabusContent = fs.readFileSync(syllabusPath, 'utf-8');
const pdfFilesJson = fs.readFileSync(jsonPath, 'utf16le'); // Read as UTF-16LE

// Parse the json and add the missing deduplication logic to ensure unique IDs, and sort by classNum
let pdfFilesArray = JSON.parse(pdfFilesJson.replace(/^\uFEFF/, ''));
// Deduplicate
const uniqueMap = new Map();
pdfFilesArray.forEach(p => {
  if (!uniqueMap.has(p.filename)) {
    uniqueMap.set(p.filename, p);
  }
});
pdfFilesArray = Array.from(uniqueMap.values());

// We want to format it nicely back into JS code
const arrayString = JSON.stringify(pdfFilesArray, null, 2).replace(/"([^"]+)":/g, '$1:');

const regex = /const pdfFiles = \[[\s\S]*?\];/;
if (regex.test(syllabusContent)) {
  const newContent = syllabusContent.replace(regex, 'const pdfFiles = ' + arrayString + ';');
  fs.writeFileSync(syllabusPath, newContent, 'utf-8');
  console.log('Successfully updated Syllabus.jsx');
} else {
  console.error('Could not find markers');
}
