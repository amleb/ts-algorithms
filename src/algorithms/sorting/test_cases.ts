// type SortingTestCase = [number[], number[]];
const sortingTestCases = [
  { unsorted: [], sorted: [], testType: 'empty array' },
  { unsorted: [3], sorted: [3], testType: 'an array with one element' },
  { unsorted: [1, 2], sorted: [1, 2], testType: 'two sorted elements' },
  {
    unsorted: [2, 1],
    sorted: [1, 2],
    testType: 'two elements in reversed order',
  },
  {
    unsorted: [1, 2, 3, 4, 5, 6],
    sorted: [1, 2, 3, 4, 5, 6],
    testType: 'sorted array',
  },
  {
    unsorted: [6, 5, 4, 3, 2, 1],
    sorted: [1, 2, 3, 4, 5, 6],
    testType: 'reversed array',
  },
  {
    unsorted: [
      11, -5, 3, -6, 1, 2, 4, 10, -2, -4, 5, -7, -8, 7, 9, -10, -9, 6, 8, -3,
      -1, 0,
    ],
    sorted: [
      -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ],
    testType: 'an array with negative values',
  },
  {
    unsorted: [
      -5, 3, -6, 1, 2, 4, 10, -2, -4, 5, -7, -8, 7, 9, -10, -9, 6, 8, -3, -1, 0,
    ],
    sorted: [
      -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ],
    testType: 'an array with negative values',
  },
  {
    unsorted: [1, 1, 1, 2, 2, 4, 4, 1, 2, 4],
    sorted: [1, 1, 1, 1, 2, 2, 2, 4, 4, 4],
    testType: 'an array with duplicates',
  },
  {
    unsorted: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    sorted: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    testType: 'an array with identical elements',
  },
];

//tests should not mutate test cases
sortingTestCases.forEach(({ sorted, unsorted }) => {
  Object.freeze(sorted);
  Object.freeze(unsorted);
});

export default sortingTestCases;
