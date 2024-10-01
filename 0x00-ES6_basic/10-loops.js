export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array) {
    const value = idx;
    array[i++] = appendString + value;
  }

  return array;
}
