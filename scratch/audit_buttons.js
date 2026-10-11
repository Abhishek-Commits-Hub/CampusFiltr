const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find all buttons
const btnRegex = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
let match;
const buttons = [];
while ((match = btnRegex.exec(html)) !== null) {
  const attrs = match[1];
  const text = match[2].replace(/<[^>]+>/g, '').trim().substring(0, 50);
  const idMatch = attrs.match(/id=["']([^"']+)["']/i);
  const classMatch = attrs.match(/class=["']([^"']+)["']/i);
  buttons.push({
    id: idMatch ? idMatch[1] : null,
    className: classMatch ? classMatch[1] : null,
    text: text || '(icon/empty)',
    line: html.substring(0, match.index).split('\n').length
  });
}

// Find all links that look like buttons (e.g. class="btn...")
const aBtnRegex = /<a\b([^>]*class=["'][^"']*btn[^"']*["'][^>]*)>([\s\S]*?)<\/a>/gi;
const aButtons = [];
while ((match = aBtnRegex.exec(html)) !== null) {
  const attrs = match[1];
  const text = match[2].replace(/<[^>]+>/g, '').trim().substring(0, 50);
  const idMatch = attrs.match(/id=["']([^"']+)["']/i);
  const classMatch = attrs.match(/class=["']([^"']+)["']/i);
  const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
  aButtons.push({
    id: idMatch ? idMatch[1] : null,
    className: classMatch ? classMatch[1] : null,
    href: hrefMatch ? hrefMatch[1] : null,
    text: text || '(icon/empty)',
    line: html.substring(0, match.index).split('\n').length
  });
}

console.log('Total <button> tags:', buttons.length);
console.log('Total <a class="btn..."> tags:', aButtons.length);

fs.writeFileSync('scratch/buttons_report.json', JSON.stringify({ buttons, aButtons }, null, 2));
console.log('Report written to scratch/buttons_report.json');
