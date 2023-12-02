// To support overlapping numbers
export const NUMBERS = {
  one: 'o1e',
  two: 't2o',
  three: 'th3e',
  four: 'fo4r',
  five: 'fi5e',
  six: '6',
  seven: 'se7en',
  eight: 'ei8ht',
  nine: 'ni9e',
};
export const REGEXP = new RegExp(Object.keys(NUMBERS).join('|'), 'g');
