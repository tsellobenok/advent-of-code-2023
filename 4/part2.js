import { EOL } from 'os';

import { getInput } from '../utils/files.js';
import { getWinningNumbersAmount } from './utils.js';

// Day 4: Part 1
// Answer: 9881048
// Time: ~0.45ms

export const getAnswer = () =>
  getInput(import.meta.url, 'input.txt')
    .trim()
    .split(EOL)
    .reduce((cards, line, i) => {
      const winningNumbersAmount = getWinningNumbersAmount(line);

      for (let j = 0; j <= winningNumbersAmount; j++) {
        cards[i + j] = (cards[i + j] || 1) + (j > 0 ? (cards[i] || 1) : 0);
      }

      return cards;
    }, [])
    .reduce((sum, cards, i) => sum + cards, 0);
