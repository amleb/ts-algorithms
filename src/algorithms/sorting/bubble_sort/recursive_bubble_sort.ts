import { defaultCompareFn } from '../../../lib/helpers/sorting';

function sort<T>(list: T[], fromIndex = 0, compareFn = defaultCompareFn): T[] {
  const listLength = list.length;
  let swapped = false;

  if (fromIndex >= listLength) {
    return list;
  }

  for (let i = 0; i < listLength - fromIndex - 1; i++) {
    if (compareFn(list[i], list[i + 1]) === 1) {
      [list[i + 1], list[i]] = [list[i], list[i + 1]];
      swapped = true;
    }
  }

  if (swapped) {
    return sort(list, ++fromIndex, compareFn);
  }

  return list;
}

function recursiveBubbleSort<T>(list: T[], compareFn = defaultCompareFn) {
  return sort(list, 0, compareFn);
}

export default recursiveBubbleSort;
