function optimizedBubbleSort<T>(list: T[]): T[] {
  const listLength = list.length;

  for (let i = 0; i < listLength; i++) {
    let swapped = false;

    for (let j = 0; j < listLength - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j + 1], list[j]] = [list[j], list[j + 1]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return list;
}

export default optimizedBubbleSort;
