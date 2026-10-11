const fs = require('fs');
const report = JSON.parse(fs.readFileSync('scratch/buttons_report.json', 'utf8'));
const appJs = fs.readFileSync('app.js', 'utf8');

const unhandled = [];
const handled = [];

report.buttons.forEach(btn => {
  let isHandled = false;
  let reason = '';

  if (btn.id) {
    if (appJs.includes(btn.id)) {
      isHandled = true;
      reason = 'id referenced in app.js: ' + btn.id;
    }
  }

  if (!isHandled && btn.className) {
    const classes = btn.className.split(/\s+/);
    for (const cls of classes) {
      if (['btn', 'primary', 'secondary', 'icon-btn'].includes(cls)) continue;
      if (appJs.includes(cls)) {
        isHandled = true;
        reason = 'class referenced in app.js: ' + cls;
        break;
      }
    }
  }

  // Check type="submit" or type="reset" in a form
  if (!isHandled && btn.className && (btn.className.includes('submit') || btn.text.toLowerCase().includes('submit') || btn.text.toLowerCase().includes('search'))) {
    reason = 'form submit/search candidate';
  }

  if (isHandled) {
    handled.push({ ...btn, reason });
  } else {
    unhandled.push({ ...btn, reason });
  }
});

console.log('Handled buttons:', handled.length);
console.log('Unhandled buttons:', unhandled.length);

fs.writeFileSync('scratch/unhandled_buttons.json', JSON.stringify(unhandled, null, 2));
console.log('\n--- Unhandled Buttons Sample ---');
unhandled.forEach(u => console.log(`Line ${u.line}: [id=${u.id}] [class=${u.className}] "${u.text}"`));
