function shellSort<T>(list: T[]): T[] {
  const listLength = list.length;
  let h = 1;
  while (h < listLength / 3) h = Math.floor(3 * h + 1);

  while (h >= 1) {
    for (let i = h; i < listLength; i++) {
      for (let j = i; j >= h && list[j] < list[j - h]; j -= h) {
        [list[j], list[j - h]] = [list[j - h], list[j]];
      }
    }

    h = Math.floor(h / 3);
  }

  return list;
}

export default shellSort;
