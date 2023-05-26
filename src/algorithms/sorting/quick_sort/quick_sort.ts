import { defaultCompareFn } from '../../../lib/helpers/sorting';

function partition<T>(
  list: T[],
  left: number,
  right: number,
  compareFn = defaultCompareFn<T>,
): number {
  let pivotPosition = left;
  const pivotValue = list[left];

  for (let i = left + 1; i <= right; i++) {
    if (compareFn(list[i], pivotValue) === -1) {
      ++pivotPosition;
      if (pivotPosition !== i) {
        [list[i], list[pivotPosition]] = [list[pivotPosition], list[i]];
      }
    }
  }

  [list[left], list[pivotPosition]] = [list[pivotPosition], list[left]];

  return pivotPosition;
}

function sort<T>(
  list: T[],
  left: number,
  right: number,
  compareFn = defaultCompareFn<T>,
): T[] {
  if (left >= right) {
    return list;
  }

  const pivotPosition = partition(list, left, right, compareFn);
  sort(list, left, pivotPosition - 1, compareFn);
  sort(list, pivotPosition + 1, right, compareFn);

  return list;
}

function quickSort<T>(list: T[], compareFn = defaultCompareFn<T>): T[] {
  return sort(list, 0, list.length - 1, compareFn);
}

export default quickSort;
