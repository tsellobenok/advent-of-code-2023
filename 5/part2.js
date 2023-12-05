import { EOL } from 'os';

import { getInput } from '../utils/files.js';
import { findCorrespondingNumber } from './utils.js';

// Day 5: Part 2
// Answer: ???
// Time: ???

// TODO: Seems like we need to convert ranges to ranges, not just numbers to numbers
export const getAnswer = () =>
  Math.min(
    ...getInput(import.meta.url, 'input.txt')
      .trim()
      .split(new RegExp(`${EOL}{2}`))
      .reduce(
        (acc, map, index) =>
          index
            ? acc.map(numStr =>
              findCorrespondingNumber(numStr, map.split(EOL).slice(1)),
            )
            : map.split(': ', 2)[1].split(' '),
        [],
      ),
  );

console.log(getAnswer());
