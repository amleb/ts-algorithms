function bubbleSort<T>(list: T[]): T[] {
  const listLength = list.length;

  for (let i = 0; i < listLength; i++) {
    for (let j = 0; j < listLength - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j + 1], list[j]] = [list[j], list[j + 1]];
      }
    }
  }

  return list;
}

export default bubbleSort;
