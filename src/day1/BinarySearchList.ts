export default function bs_list(haystack: number[], needle: number): boolean {
  let upperBound = haystack.length;
  let lowerBound = 0;

  while (lowerBound < upperBound) {
    const middleIndex = Math.floor((upperBound + lowerBound) / 2);
    const middleValue = haystack[middleIndex];

    if (middleValue === needle) {
      return true;
    }

    if (middleValue < needle) {
      lowerBound = middleIndex + 1;
    } else {
      upperBound = middleIndex;
    }
  }

  return false;
}
