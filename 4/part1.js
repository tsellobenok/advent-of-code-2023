import { EOL } from 'os';

import { getInput } from '../utils/files.js';
import { getWinningNumbersAmount } from './utils.js';

// Day 4: Part 1
// Answer: 21919
// Time: ~0.46ms

export const getAnswer = () =>
  getInput(import.meta.url, 'input.txt')
    .trim()
    .split(EOL)
    .reduce((sum, line) => {
      const power = getWinningNumbersAmount(line) - 1;

      return sum + (power >= 0 ? Math.pow(2, power) : 0);
    }, 0);
