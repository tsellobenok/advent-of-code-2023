const SYMBOL_REGEXP = /[^\d.]/;
const NUMBER_REGEXP = /\d+/g;

export const getWholeNumber = (line, startFrom) => {
  if (!line) {
    return null;
  }

  let start = startFrom;
  let end = startFrom;

  while (line[start - 1] && /\d/.test(line[start - 1])) {
    start--;
  }

  while (line[end] && /\d/.test(line[end + 1])) {
    end++;
  }

  return line.slice(start, end + 1);
};

export const getSquare = (lines, currentLineIndex, start, end) => {
  const startOfLine = Math.max(start - 1, 0);
  const endOfLine = end + 2;

  return [
    lines[currentLineIndex - 1]?.slice(startOfLine, endOfLine),
    lines[currentLineIndex].slice(startOfLine, endOfLine),
    lines[currentLineIndex + 1]?.slice(startOfLine, endOfLine),
  ];
};

export const hasAdjacentSymbol = (lines, i, start, end) =>
  getSquare(lines, i, start, end).some(
    line => !!line && SYMBOL_REGEXP.test(line),
  );

export const getAdjacentNumbers = (lines, currentLineIndex, startFrom) => {
  const {
    0: top,
    1: middle,
    2: bottom,
  } = getSquare(lines, currentLineIndex, startFrom, startFrom);

  const topMatches = !!top ? Array.from(top.matchAll(NUMBER_REGEXP)) : [];
  const middleMatches = !!middle
    ? Array.from(middle.matchAll(NUMBER_REGEXP))
    : [];
  const bottomMatches = !!bottom
    ? Array.from(bottom.matchAll(NUMBER_REGEXP))
    : [];

  return [...topMatches, ...middleMatches, ...bottomMatches].length === 2
    ? [
        ...topMatches.map(match =>
          getWholeNumber(
            lines[currentLineIndex - 1],
            startFrom - 1 + match.index,
          ),
        ),
        ...middleMatches.map(match =>
          getWholeNumber(lines[currentLineIndex], startFrom - 1 + match.index),
        ),
        ...bottomMatches.map(match =>
          getWholeNumber(
            lines[currentLineIndex + 1],
            startFrom - 1 + match.index,
          ),
        ),
      ]
    : [];
};
