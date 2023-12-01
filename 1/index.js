import fs from 'fs';

console.time('time');

const NUMBERS = {
  'one': 'o1e',
  'two': 't2o',
  'three': 'th3e',
  'four': 'fo4r',
  'five': 'fi5e',
  'six': 's6x',
  'seven': 'se7en',
  'eight': 'ei8ht',
  'nine': 'ni9e',
};
const REGEXP = new RegExp(Object.keys(NUMBERS).join('|'), 'g');

const input = fs.readFileSync(new URL('input.txt', import.meta.url), { encoding: 'utf-8' });
const sum = input.trim()
  .replace(REGEXP, (match) => NUMBERS[match])
  .replace(REGEXP, (match) => NUMBERS[match])
  .replace(/[a-z]/g, '')
  .split('\n')
  .reduce((acc, line) => acc + Number(line[0] + line[line.length - 1]), 0);

console.timeEnd('time'); // ~1.5ms
console.log(sum); // 54265
