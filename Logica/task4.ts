import items from './mock/items';

type Item = {
  name: string;
  category: string;
};

function groupByCategory(itemsList: Item[]): Record<string, Item[]> {
  return itemsList.reduce((acc, item) => {
    if (acc[item.category]) {
      acc[item.category].push(item);
    } else {
      acc[item.category] = [item];
    }
    return acc;
  }, {});
}

const itemsByCategory = groupByCategory(items);
console.log(itemsByCategory);