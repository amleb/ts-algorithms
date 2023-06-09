export function defaultCompareFn<T>(a: T, b: T) {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

export function compareReversedFn<T>(a: T, b: T) {
  if (a === b) {
    return 0;
  }

  return a < b ? 1 : -1;
}
