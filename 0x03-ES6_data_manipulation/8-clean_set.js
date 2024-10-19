export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const filteredArr = [...set]
    .filter((elem) => typeof elem === 'string' && elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length));

  return filteredArr.join('-');
}
