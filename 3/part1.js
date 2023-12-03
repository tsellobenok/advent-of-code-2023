import { EOL } from 'os';

import { getInput } from '../utils/files.js';
import { hasAdjacentSymbol } from './utils.js';

// Day 3: Part 1
// Answer: 540025
// Time: ~0.48ms

export const getAnswer = () =>
  getInput(import.meta.url, 'input.txt')
    .trim()
    .split(EOL)
    .reduce((sum, line, i, lines) => {
      let start = null;
      let end = null;
      let toAdd = 0;

      for (let j = 0; j < line.length; j++) {
        // Number in progress
        if (/\d/.test(line[j])) {
          start = start ?? j;

          if (j !== line.length - 1) {
            continue;
          }

          // Number ends at the end of the line
          end = line.length - 1;
        }

        // No number in progress
        if (start === null) {
          continue;
        }

        end = end ?? j - 1; // Number ends at the previous symbol

        if (hasAdjacentSymbol(lines, i, start, end)) {
          toAdd += Number(line.slice(start, end + 1));
        }

        start = null;
        end = null;
      }

      return sum + toAdd;
    }, 0);
