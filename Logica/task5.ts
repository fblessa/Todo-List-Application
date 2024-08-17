import { array1, array2, array3 } from './mock/people.ts';

const list = [array1, array2, array3];

function mergeTwoArrays(list1: Record<string, any>[], list2: Record<string, any>[]): Record<string, any>[] {
  const combinedMap = [...list1, ...list2].reduce((acc, item) => {
    acc[item.id] = { ...(acc[item.id] || {}), ...item };
    return acc;
  }, {} as Record<string, any>);

  return Object.values(combinedMap);
}

const mergedTwoArrays = mergeTwoArrays(list[0], list[1]);
console.log(mergedTwoArrays);

function mergeMultipleArrays(lists: Record<string, any>[][]): Record<string, any>[] {
  const combinedMap = lists.flat().reduce((combinedMap: any, item: any) => {
    combinedMap[item.id] = { ...(combinedMap[item.id] || {}), ...item };
    return combinedMap;
  }, {} as Record<number, Record<string, any>>);
  
  return Object.values(combinedMap);
}

const mergedArray = mergeMultipleArrays(list);
console.log(mergedArray);