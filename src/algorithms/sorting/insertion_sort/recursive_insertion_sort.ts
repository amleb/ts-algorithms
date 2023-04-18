function recursiveInsertionSort<T>(arr: T[], length?: number): T[] {
  if (typeof length === 'undefined') {
    length = arr.length;
  }

  if (length <= 1) {
    return arr;
  }

  recursiveInsertionSort(arr, length - 1);

  const lastValue = arr[length - 1];
  let j = length - 2;

  while (j >= 0 && arr[j] > lastValue) {
    arr[j + 1] = arr[j];
    --j;
  }

  arr[j + 1] = lastValue;

  return arr;
}

export default recursiveInsertionSort;
