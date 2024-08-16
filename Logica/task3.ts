import fruits from './mock/fruits';

function countOccurrences(fruitsList: string[]): Record<string, number> {
  return fruitsList.reduce((acc, fruit) => {
    if (acc[fruit]) {
      acc[fruit]++;
    } else {
      acc[fruit] = 1;
    }
    return acc;
  }, {});
}

const fruitsCount = countOccurrences(fruits);
console.log(fruitsCount);