export default function cleanSet(set, startString) {
  const filteredArr = [...set]
    .filter((elem) => typeof elem === 'string' && startString !== '' && elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length));

  return filteredArr.join('-');
}
