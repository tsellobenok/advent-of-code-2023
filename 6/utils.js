export const getRange = pair => {
  const { 0: ms, 1: mm } = pair.map(Number);

  const time1 = Math.ceil((ms - Math.sqrt(ms * ms - 4 * mm)) / 2);
  const time2 = Math.floor((ms + Math.sqrt(ms * ms - 4 * mm)) / 2);

  return time2 - time1 + 1;
};
