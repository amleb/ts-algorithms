function recursiveInsertionSort<T>(list: T[], listLength?: number): T[] {
  if (typeof listLength === 'undefined') {
    listLength = list.length;
  }

  if (listLength <= 1) {
    return list;
  }

  recursiveInsertionSort(list, listLength - 1);

  const lastValue = list[listLength - 1];
  let i = listLength - 2;

  while (i >= 0 && list[i] > lastValue) {
    list[i + 1] = list[i];
    --i;
  }

  list[i + 1] = lastValue;

  return list;
}

export default recursiveInsertionSort;
