import { defaultCompareFn } from '../../../lib/helpers/sorting';

function sort<T>(
  list: T[],
  listLength: number,
  compareFn = defaultCompareFn,
): T[] {
  if (listLength <= 1) {
    return list;
  }

  sort(list, listLength - 1, compareFn);

  const lastValue = list[listLength - 1];
  let i = listLength - 2;

  while (i >= 0 && compareFn(list[i], lastValue) === 1) {
    list[i + 1] = list[i];
    --i;
  }

  list[i + 1] = lastValue;

  return list;
}

function recursiveInsertionSort<T>(
  list: T[],
  compareFn = defaultCompareFn,
): T[] {
  return sort(list, list.length, compareFn);
}

export default recursiveInsertionSort;
