function insertionSort<T>(list: T[]): T[] {
  const listLength = list.length;

  for (let i = 1; i < listLength; i++) {
    let j = i;
    while (j > 0 && list[j] < list[j - 1]) {
      [list[j], list[j - 1]] = [list[j - 1], list[j]];
      --j;
    }
  }

  return list;
}

export default insertionSort;
