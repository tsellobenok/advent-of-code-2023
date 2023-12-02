import { getInput } from '../utils/files.js';

// Day 1: Part 1
// Answer: 54450
// Time: ~0.55ms

export const getAnswer = () =>
  getInput(import.meta.url)
    .trim()
    .replace(/[a-z]/g, '')
    .split('\n')
    .reduce((acc, line) => acc + Number(line[0] + line[line.length - 1]), 0);
