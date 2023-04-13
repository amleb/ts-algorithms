function selectionSort<T>(arr: T[]): T[] {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (i !== minIdx) {
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
  }

  return arr;
}

export default selectionSort;
