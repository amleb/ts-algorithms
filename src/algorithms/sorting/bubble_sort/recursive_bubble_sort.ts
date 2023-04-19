function recursiveBubbleSort<T>(list: T[], fromIndex = 0): T[] {
  const listLength = list.length;
  let swapped = false;

  if (fromIndex >= listLength) {
    return list;
  }

  for (let i = 0; i < listLength - fromIndex - 1; i++) {
    if (list[i] > list[i + 1]) {
      [list[i + 1], list[i]] = [list[i], list[i + 1]];
      swapped = true;
    }
  }

  if (swapped) {
    return recursiveBubbleSort(list, ++fromIndex);
  }

  return list;
}

export default recursiveBubbleSort;
