const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const lines = html.split('\n');
let currentSection = 'root';
lines.forEach((line, idx) => {
  const secMatch = line.match(/data-section-name=['"]([^'"]+)['"]/);
  if (secMatch) currentSection = secMatch[1];
  const subMatch = line.match(/id=['"](about-[^'"]+|admin-[^'"]+|academics-[^'"]+|students-[^'"]+|ranking-[^'"]+|alumni-[^'"]+|placement-[^'"]+)['"]/);
  if (subMatch) currentSection = subMatch[1];

  const btnMatches = line.match(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi);
  if (btnMatches) {
    btnMatches.forEach(b => {
      const text = b.replace(/<[^>]+>/g, '').trim().substring(0, 45);
      console.log(`[${currentSection}] Line ${idx + 1}: ${text || 'icon'}`);
    });
  }
});
