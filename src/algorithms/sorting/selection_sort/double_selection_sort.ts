function doubleSelectionSort<T>(list: T[]): T[] {
  const listLength = list.length;
  const middlePosition = listLength / 2;

  for (let i = 0; i < middlePosition; i++) {
    let minIdx = i;
    const end = listLength - (i + 1);
    let maxIdx = end;

    for (let j = i; j <= end; j++) {
      if (list[j] < list[minIdx]) {
        minIdx = j;
      }

      if (list[j] > list[maxIdx]) {
        maxIdx = j;
      }
    }

    if (i !== minIdx) {
      if (list[i] === list[maxIdx]) {
        maxIdx = minIdx;
      }

      [list[minIdx], list[i]] = [list[i], list[minIdx]];
    }

    if (end !== maxIdx) {
      [list[end], list[maxIdx]] = [list[maxIdx], list[end]];
    }
  }

  return list;
}

export default doubleSelectionSort;
