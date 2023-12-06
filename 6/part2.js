import { EOL } from 'os';

import { getInput } from '../utils/files.js';
import { getRange } from './utils.js';

// Day 6: Part 2
// Answer: 42948149
// Time: ~0.01ms

export const getAnswer = () =>
  getRange(
    getInput(import.meta.url, 'input.txt')
      .trim()
      .split(EOL)
      .reduce(
        (acc, row, index) => [
          ...acc,
          row.split(': ', 2)[1].trim().split(/\s+/).join(''),
        ],
        [],
      ),
  );
