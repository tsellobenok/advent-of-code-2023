export const getWinningNumbersAmount = line => {
  const { 1: numbers } = line.split(': ', 2);
  const { 0: winning, 1: my } = numbers
    .split(' | ', 2)
    .map(i => i.split(/\s+/));

  return my.filter(i => winning.includes(i)).length;
};
