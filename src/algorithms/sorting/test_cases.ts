// type SortingTestCase = [number[], number[]];
export const sortingTestCases = [
  { unsorted: [], sorted: [] },
  { unsorted: [3], sorted: [3] },
  { unsorted: [1, 2], sorted: [1, 2] },
  { unsorted: [2, 1], sorted: [1, 2] },
  { unsorted: [1, 2, 3, 4, 5, 6], sorted: [1, 2, 3, 4, 5, 6] },
  { unsorted: [6, 5, 4, 3, 2, 1], sorted: [1, 2, 3, 4, 5, 6] },
  { unsorted: [5, 3, 6, 1, 2, 4], sorted: [1, 2, 3, 4, 5, 6] },
  { unsorted: [1, 1, 1, 2, 4], sorted: [1, 1, 1, 2, 4] },
  {
    unsorted: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    sorted: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  { unsorted: [-5, 3, -6, 1, 2, 4], sorted: [-6, -5, 1, 2, 3, 4] },
];
