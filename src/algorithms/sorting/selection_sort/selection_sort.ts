function selectionSort<T>(list: T[]): T[] {
  const listLength = list.length;

  for (let i = 0; i < listLength - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < listLength; j++) {
      if (list[j] < list[minIdx]) {
        minIdx = j;
      }
    }

    if (i !== minIdx) {
      [list[minIdx], list[i]] = [list[i], list[minIdx]];
    }
  }

  return list;
}

export default selectionSort;
