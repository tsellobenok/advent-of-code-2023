import { getInput } from '../utils/files.js';

// Day 2: Part 2
// Answer: 60948
// Time: ~0.49ms

export const getAnswer = () =>
  getInput(import.meta.url)
    .trim()
    .split('\n')
    .reduce((acc, line, index) => {
      const sets = line.split(': ', 2)[1].split(';');
      const minimums = {
        red: 0,
        blue: 0,
        green: 0,
      };

      sets.forEach(set => {
        const values = Array.from(set.matchAll(/(\d+) (\w+)/g));

        values.forEach(
          ({ 1: number, 2: color }) =>
            minimums[color] < Number(number) &&
            (minimums[color] = Number(number)),
        );
      });

      return (
        acc + Object.values(minimums).reduce((acc, value) => acc * value, 1)
      );
    }, 0);
