export const findCorrespondingNumber = (srcNumberStr, maps) => {
  const srcNumber = parseInt(srcNumberStr);

  let destNum = srcNumber;

  maps.forEach(line => {
    const {
      0: destRangeStr,
      1: srcRangeStr,
      2: rangeLengthStr,
    } = line.split(' ');

    const destRangeStart = parseInt(destRangeStr);
    const srcRangeStart = parseInt(srcRangeStr);
    const rangeLength = parseInt(rangeLengthStr);

    if (srcNumber >= srcRangeStart && srcNumber < srcRangeStart + rangeLength) {
      destNum = destRangeStart + (srcNumber - srcRangeStart);
    }
  });

  return destNum;
};
