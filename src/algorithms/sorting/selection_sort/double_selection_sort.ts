function doubleSelectionSort<T>(arr: T[]): T[] {
  const length = arr.length;
  const middle = length / 2;
  const end = length - 1;

  for (let i = 0; i <= middle; i++) {
    let minIdx = i;
    let maxIdx = end;

    for (let j = i; j <= end; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }

      if (arr[j] > arr[maxIdx]) {
        maxIdx = j;
      }
    }

    if (i !== minIdx) {
      if (arr[i] == arr[maxIdx]) {
        maxIdx = minIdx;
      }

      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }

    if (end !== maxIdx) {
      [arr[end], arr[maxIdx]] = [arr[maxIdx], arr[end]];
    }
  }

  return arr;
}

export default doubleSelectionSort;
