import { getInput } from '../utils/files.js';
import { NUMBERS, REGEXP } from './const.js';

// Day 1: Part 2
// Answer: 54265
// Time: ~0.85ms

export const getAnswer = () =>
  getInput(import.meta.url)
    .trim()
    .replace(REGEXP, match => NUMBERS[match])
    .replace(REGEXP, match => NUMBERS[match])
    .replace(/[a-z]/g, '')
    .split('\n')
    .reduce((acc, line) => acc + Number(line[0] + line[line.length - 1]), 0);
