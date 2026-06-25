const fs = require('fs');
const path = require('path');

const pdfDir = path.join(__dirname, 'public', 'pdfs');
const files = fs.readdirSync(pdfDir).filter(f => f.endsWith('.pdf'));

const pdfFiles = [];

files.forEach(file => {
  const stat = fs.statSync(path.join(pdfDir, file));
  const sizeMB = (stat.size / (1024 * 1024)).toFixed(1) + ' MB';
  let title = file.replace('.pdf', '');
  let subject = 'General';
  let color = '#9CA3AF';
  let classNum = 0; // Default for non-NCERT so they appear FIRST
  let author = 'NCERT';
  let isNcert = file.toLowerCase().includes('ncert') || file.toLowerCase().includes('class') || file.toLowerCase().match(/\d/);

  const lowerFile = file.toLowerCase();

  // Subject assignment
  if (lowerFile.includes('history') || lowerFile.includes('past') || lowerFile.includes('struggle')) {
    subject = 'History'; color = '#EC4899';
  } else if (lowerFile.includes('geo') || lowerFile.includes('resource') || lowerFile.includes('environmemnt') || lowerFile.includes('environment') || lowerFile.includes('india people and economy')) {
    subject = 'Geography'; color = '#14B8A6';
  } else if (lowerFile.includes('polity') || lowerFile.includes('political') || lowerFile.includes('demo') || lowerFile.includes('democratic')) {
    subject = 'Polity & Governance'; color = '#6366F1';
  } else if (lowerFile.includes('econ')) {
    subject = 'Economy'; color = '#F59E0B';
  } else if (lowerFile.includes('science')) {
    if (lowerFile.includes('social')) {
      if (lowerFile.includes('past')) { subject = 'History'; color = '#EC4899'; }
      else if (lowerFile.includes('demo') || lowerFile.includes('political') || lowerFile.includes('7.pdf') || lowerFile.includes('part 3')) { subject = 'Polity & Governance'; color = '#6366F1'; }
      else if (lowerFile.includes('8.pdf') || lowerFile.includes('class 8.pdf')) { subject = 'Geography'; color = '#14B8A6'; }
      else { subject = 'Polity & Governance'; color = '#6366F1'; }
    } else {
      subject = 'Science & Technology'; color = '#8B5CF6';
    }
  }
  
  if (lowerFile.includes('environment') && lowerFile.includes('shankar')) {
    subject = 'Environment & Ecology'; color = '#22C55E';
  }
  
  if (lowerFile.includes('laxmikanth')) {
    subject = 'Polity & Governance'; color = '#6366F1';
  }

  // Author assignment
  if (lowerFile.includes('shankar')) author = 'Shankar IAS';
  if (lowerFile.includes('leong')) author = 'GC Leong';
  if (lowerFile.includes('ramesh')) author = 'Ramesh Singh';
  if (lowerFile.includes('bipin')) author = 'Bipin Chandra';
  if (lowerFile.includes('laxmikanth')) author = 'M. Laxmikanth';

  if (author !== 'NCERT') isNcert = false;

  // Class assignment
  const match = lowerFile.match(/class\s*-?\s*(\d{1,2}|xi{1,2}|ix|x|v?i{1,3})/);
  if (match) {
    const clsStr = match[1];
    if (clsStr === '6' || clsStr === 'vi') classNum = 6;
    else if (clsStr === '7' || clsStr === 'vii') classNum = 7;
    else if (clsStr === '8' || clsStr === 'viii') classNum = 8;
    else if (clsStr === '9' || clsStr === 'ix') classNum = 9;
    else if (clsStr === '10' || clsStr === 'x') classNum = 10;
    else if (clsStr === '11' || clsStr === 'xi') classNum = 11;
    else if (clsStr === '12' || clsStr === 'xii') classNum = 12;
  } else {
    if (lowerFile.includes('polity6') || lowerFile.includes('history6')) classNum = 6;
    if (lowerFile.includes('social science 7')) classNum = 7;
    if (lowerFile.includes('part 3 class 8') || lowerFile.includes('part 2 class 8')) classNum = 8;
  }

  // Prettify Title
  if (isNcert && classNum !== 0) {
    title = `NCERT Class ${classNum} ${subject}`;
    if (lowerFile.includes('part 1') || lowerFile.includes('part-1')) title += ' (Part 1)';
    if (lowerFile.includes('part 2') || lowerFile.includes('part-2')) title += ' (Part 2)';
    if (lowerFile.includes('part 3') || lowerFile.includes('part-3')) title += ' (Part 3)';
    if (lowerFile.includes('practical')) title += ' (Practical Work)';
  } else if (!isNcert) {
    if (lowerFile.includes('leong')) title = 'Certificate Physical and Human Geography';
    if (lowerFile.includes('ramesh')) title = 'Indian Economy (10th Edition)';
    if (lowerFile.includes('bipin')) title = "India's Struggle for Independence";
    if (lowerFile.includes('shankar')) title = 'Environment (10th Edition)';
    if (lowerFile.includes('laxmikanth')) title = 'Indian Polity (8th Edition)';
  }

  pdfFiles.push({
    id: file.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 20),
    title,
    author,
    subject,
    color,
    filename: file,
    size: sizeMB,
    classNum,
  });
});

console.log(JSON.stringify(pdfFiles, null, 2));
