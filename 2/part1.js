import { getInput } from '../utils/files.js';
import { isValidSet } from './utils.js';

// Day 2: Part 1
// Answer: 2169
// Time: ~0.25ms

export const getAnswer = () =>
  getInput(import.meta.url)
    .trim()
    .split('\n')
    .reduce((acc, line, index) => {
      const sets = line.split(': ', 2)[1].split(';');
      const isValid = !!sets.length && sets.every(isValidSet);

      return acc + (isValid ? index + 1 : 0);
    }, 0);
