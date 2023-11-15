function countingSort(inputArray: number[]): number[] {
  if (inputArray.length <= 0) {
    return inputArray;
  }

  const maxValue = Math.max(...inputArray);
  const countArray = Array(maxValue + 1).fill(0);

  for (const i in countArray) {
    countArray[i] = inputArray.reduce((counter, value) => {
      if (value === parseInt(i)) {
        ++counter;
      }

      return counter;
    }, 0);
  }

  for (let i = 1, len = countArray.length; i < len; i++) {
    countArray[i] = countArray[i - 1] + countArray[i];
  }

  const outputArray = Array(inputArray.length);
  for (let i = inputArray.length - 1; i >= 0; i--) {
    outputArray[countArray[inputArray[i]] - 1] = inputArray[i];
    --countArray[inputArray[i]];
  }

  return outputArray;
}

export default countingSort;
