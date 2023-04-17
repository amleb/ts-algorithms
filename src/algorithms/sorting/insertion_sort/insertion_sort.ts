function insertionSort<T>(arr: T[]): T[] {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      --j;
    }
  }

  return arr;
}

export default insertionSort;
