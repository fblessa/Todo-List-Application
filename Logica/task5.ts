import { array1, array2, array3 } from './mock/people.ts';

const list = [array1, array2, array3];

function mergeArrays(lists: Record<string, any>[][]): Record<string, any>[] {
  const combinedMap: Record<number, Record<string, any>> = {};

  lists.forEach(list => {
    list.forEach(item => {
      if (combinedMap[item.id]) {
        combinedMap[item.id] = { ...combinedMap[item.id], ...item };
      } else {
        combinedMap[item.id] = { ...item };
      }
    });
  });
  return Object.values(combinedMap);
}

const mergedArray = mergeArrays(list);
console.log(mergedArray);