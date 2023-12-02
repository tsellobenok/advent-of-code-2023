import { differenceInDays } from 'date-fns';
import { measurePerformance } from './utils/performance.js';

const daysPassed = Math.min(
  differenceInDays(new Date(), new Date('2023-11-30')),
  25,
);
const results = [];

for (let i = 0; i < daysPassed; i++) {
  const {
    0: { getAnswer: getPart1Answer },
    1: { getAnswer: getPart2Answer },
  } = await Promise.all([
    import(`./${i + 1}/part1.js`),
    import(`./${i + 1}/part2.js`),
  ]);

  results.push(
    {
      Day: `Day ${i + 1}: Part 1`,
      Answer: getPart1Answer(),
      Time: measurePerformance(getPart1Answer),
    },
    {
      Day: `Day ${i + 1}: Part 2`,
      Answer: getPart2Answer(),
      Time: measurePerformance(getPart2Answer),
    },
  );
}

console.table(results);
