export function defaultCompareFn<T>(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}
