#!/usr/bin/env node
const fs = require('fs');
const path = require('path');


const SOLUTIONS_DIR = path.join(__dirname, '..', 'solutions');
const MACHINE_TEST_DIR = path.join(__dirname, '..', 'machine-test');
const OUT_README = path.join(__dirname, '..', 'README.md');

function readMeta(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const metaMatch = text.match(/\/\*\*([\s\S]*?)\*\//);
  if (!metaMatch) return null;
  const lines = metaMatch[1].split(/\r?\n/).map(l => l.replace(/^\s*\*\s?/, '').trim());
  const meta = {};
  for (const line of lines) {
    const m = line.match(/^([^:]+):\s*(.*)$/);
    if (m) meta[m[1].toLowerCase()] = m[2];
  }
  return meta;
}

function walkSolutions(dir) {
  const result = [];
  const difficulties = fs.readdirSync(dir).filter(d => fs.statSync(path.join(dir, d)).isDirectory());
  for (const diff of difficulties) {
    const folder = path.join(dir, diff);
    const files = fs.readdirSync(folder).filter(f => f.endsWith('.js'));
    for (const f of files) {
      const full = path.join(folder, f);
      const meta = readMeta(full) || {};
      const title = meta.title || path.basename(f, '.js');
      const tags = meta.tags || '';
      const problem = meta.problem || '';
      result.push({
        filePath: path.relative(path.join(__dirname, '..'), full).replace(/\\/g, '/'),
        difficulty: diff.toLowerCase(),
        title,
        tags,
        problem
      });
    }
  }
  return result;
}

function buildReadme(items) {
  const byDiff = items.reduce((acc, it) => {
    acc[it.difficulty] = acc[it.difficulty] || [];
    acc[it.difficulty].push(it);
    return acc;
  }, {});

  const ordered = ['easy', 'medium', 'hard'];
  let md = `# Data Structures & Algorithms — JavaScript\n\n`;
  md += `Auto-generated README. Problems grouped by difficulty.\n\n`;

  // Summary counts
  md += `## Summary\n\n`;
  for (const d of ordered) {
    const count = (byDiff[d] || []).length;
    md += `- **${d.charAt(0).toUpperCase() + d.slice(1)}**: ${count}\n`;
  }
  md += `\n---\n`;

  // Problems per difficulty
  for (const d of ordered) {
    const list = byDiff[d] || [];
    if (list.length === 0) continue;
    md += `\n## ${d.charAt(0).toUpperCase() + d.slice(1)} (${list.length})\n\n`;
    md += `| # | Problem | Tags | Solution |\n|---|---|---|---|\n`;
    list.forEach((it, idx) => {
      const link = `./${it.filePath}`;
      const tags = it.tags ? it.tags.replace(/,/g, ', ') : '';
      md += `| ${idx + 1} | ${it.title} | ${tags} | [code](${link}) |\n`;
    });
    md += `\n`;
  }

  md += `\n---\n\n_Last updated: ${new Date().toISOString()}_\n`;
  return md;
}
function buildMachineTestSection(items) {
  if (!items.length) return '';

  const byCat = items.reduce((acc, it) => {
    acc[it.category] = acc[it.category] || [];
    acc[it.category].push(it);
    return acc;
  }, {});

  const ordered = ['javascript', 'react', 'vue'];

  let md = `\n## Machine Tests\n\n`;

  for (const cat of ordered) {
    const list = byCat[cat] || [];
    if (!list.length) continue;

    md += `### ${cat.charAt(0).toUpperCase() + cat.slice(1)} (${list.length})\n\n`;
    md += `| # | Title | Tags | Solution |\n|---|---|---|---|\n`;

    list.forEach((it, idx) => {
      const link = `./${it.filePath}`;
      const tags = it.tags ? it.tags.replace(/,/g, ', ') : '';
      md += `| ${idx + 1} | ${it.title} | ${tags} | [code](${link}) |\n`;
    });

    md += `\n`;
  }

  return md;
}
function walkMachineTests(dir) {
  if (!fs.existsSync(dir)) return [];

  const result = [];
  const categories = fs.readdirSync(dir).filter(d =>
    fs.statSync(path.join(dir, d)).isDirectory()
  );

  for (const cat of categories) {
    const folder = path.join(dir, cat);
    const files = fs.readdirSync(folder).filter(f => f.endsWith('.js'));

    for (const f of files) {
      const full = path.join(folder, f);
      const meta = readMeta(full) || {};

      result.push({
        filePath: path.relative(path.join(__dirname, '..'), full).replace(/\\/g, '/'),
        category: cat.toLowerCase(), // javascript | react | vue
        title: meta.title || path.basename(f, '.js'),
        tags: meta.tags || '',
      });
    }
  }

  return result;
}

// main
(function main() {
  if (!fs.existsSync(SOLUTIONS_DIR)) {
    console.error('No solutions directory found:', SOLUTIONS_DIR);
    process.exit(1);
  }
  const dsaItems = walkSolutions(SOLUTIONS_DIR);
  const machineItems = walkMachineTests(MACHINE_TEST_DIR);

  let md = buildReadme(dsaItems);
  md += buildMachineTestSection(machineItems);
  fs.writeFileSync(OUT_README, md, 'utf8');
  console.log('README generated with', dsaItems.length, 'solutions and ', machineItems.length, 'machine tests');
})();
