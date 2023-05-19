import { defaultCompareFn } from '../../../lib/helpers/sorting';

function merge<T>(
  list: T[],
  left: number,
  right: number,
  mid: number,
  compareFn = defaultCompareFn,
): T[] {
  const tmpLeft = [];
  const tmpRight = [];
  const endTmp1 = mid - left + 1;
  const endTmp2 = right - mid;

  for (let i = 0; i < endTmp1; i++) {
    tmpLeft.push(list[left + i]);
  }

  for (let i = 0; i < endTmp2; i++) {
    tmpRight.push(list[mid + i + 1]);
  }

  let i = 0;
  let j = 0;
  let mergedArrayIndex = left;

  while (i < endTmp1 && j < endTmp2) {
    if (compareFn(tmpLeft[i], tmpRight[j]) <= 0) {
      list[mergedArrayIndex++] = tmpLeft[i++];
    } else {
      list[mergedArrayIndex++] = tmpRight[j++];
    }
  }

  while (i < endTmp1) {
    list[mergedArrayIndex++] = tmpLeft[i++];
  }

  while (j < endTmp2) {
    list[mergedArrayIndex++] = tmpRight[j++];
  }

  return list;
}

function sort<T>(
  list: T[],
  left: number,
  right: number,
  compareFn = defaultCompareFn,
): T[] {
  if (left >= right) {
    return list;
  }

  const mid = left + Math.floor((right - left) / 2);

  sort(list, left, mid, compareFn);
  sort(list, mid + 1, right, compareFn);
  merge(list, left, right, mid, compareFn);
  return list;
}

function mergeSort<T>(list: T[], compareFn = defaultCompareFn): T[] {
  return sort(list, 0, list.length - 1, compareFn);
}

export default mergeSort;
