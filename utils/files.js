import fs from 'fs';

export const getInput = (url, fileName = 'input.txt') =>
  fs.readFileSync(new URL(fileName, url), { encoding: 'utf-8' });
