export default function cleanSet(set, startString) {
  const filteredArr = [...set]
    .filter((elem) => startString !== '' && elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length));

  return filteredArr.join('-');
}
