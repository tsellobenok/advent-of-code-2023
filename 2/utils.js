import { MAX } from './const.js';

export const isValidSet = set => {
  for (let value of set.split(',')) {
    const { 1: number, 2: color } = value.split(' ');

    if (MAX[color] < parseInt(number)) return false;
  }

  return true;
};
