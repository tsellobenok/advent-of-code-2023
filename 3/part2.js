import { EOL } from 'os';

import { getInput } from '../utils/files.js';
import { getAdjacentNumbers } from './utils.js';

// Day 3: Part 2
// Answer: 84584891
// Time: ~0.86ms

export const getAnswer = () =>
  getInput(import.meta.url, 'input.txt')
    .trim()
    .split(EOL)
    .reduce(
      (sum, line, lineIndex, lines) =>
        sum +
        [...line].reduce(
          (sumPerLine, character, index) =>
            sumPerLine +
            (character === '*'
              ? getAdjacentNumbers(lines, lineIndex, index).reduce(
                  (result, curr) => (result || 1) * Number(curr),
                  0,
                )
              : 0),
          0,
        ),
      0,
    );
