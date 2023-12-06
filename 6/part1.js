import { EOL } from 'os';

import { getInput } from '../utils/files.js';
import { getRange } from './utils.js';

// Day 6: Part 1
// Answer: 227850
// Time: ~0.01ms

export const getAnswer = () =>
  getInput(import.meta.url, 'input.txt')
    .trim()
    .split(EOL)
    .reduce((acc, row, index) => {
      const numbers = row.split(': ', 2)[1].trim().split(/\s+/);

      if (index > 0) {
        return acc.map((item, index) => [item, numbers[index]]);
      }

      return numbers;
    }, [])
    .reduce((acc, pair) => acc * getRange(pair), 1);
