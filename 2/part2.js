import { EOL } from 'os';
import { getInput } from '../utils/files.js';

// Day 2: Part 2
// Answer: 60948
// Time: ~0.45ms

export const getAnswer = () =>
  getInput(import.meta.url)
    .trim()
    .split(EOL)
    .reduce((acc, line, index) => {
      const { red, blue, green } = line
        .split(': ', 2)[1]
        .split('; ')
        .reduce(
          (acc, set) => {
            const { red, green, blue } = set.split(', ').reduce(
              (acc, value) => {
                const { 0: number, 1: color } = value.split(' ');

                return {
                  ...acc,
                  [color]: Math.max(acc[color], Number(number)),
                };
              },
              {
                blue: 0,
                green: 0,
                red: 0,
              },
            );

            return {
              blue: Math.max(acc.blue, blue),
              green: Math.max(acc.green, green),
              red: Math.max(acc.red, red),
            };
          },
          {
            blue: 0,
            green: 0,
            red: 0,
          },
        );

      return acc + red * blue * green;
    }, 0);
