// type SortingTestCase = [number[], number[]];
const sortingTestCases = [
  { unsorted: [], sorted: [], testType: "empty array" },
  { unsorted: [3], sorted: [3], testType: "an array with one element" },
  { unsorted: [1, 2], sorted: [1, 2], testType: "two sorted elements" },
  {
    unsorted: [2, 1],
    sorted: [1, 2],
    testType: "two elements in reversed order",
  },
  {
    unsorted: [1, 2, 3, 4, 5, 6],
    sorted: [1, 2, 3, 4, 5, 6],
    testType: "sorted array",
  },
  {
    unsorted: [6, 5, 4, 3, 2, 1],
    sorted: [1, 2, 3, 4, 5, 6],
    testType: "reversed array",
  },
  {
    unsorted: [5, 3, 6, 1, 2, 4],
    sorted: [1, 2, 3, 4, 5, 6],
    testType: "unsorted array with even number of elements",
  },
  {
    unsorted: [5, 3, 6, 1, 2, 7, 4],
    sorted: [1, 2, 3, 4, 5, 6, 7],
    testType: "unsorted array with odd number of elements",
  },
  {
    unsorted: [1, 1, 1, 2, 2, 4, 4],
    sorted: [1, 1, 1, 2, 2, 4, 4],
    testType: "an array with duplicates",
  },
  {
    unsorted: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    sorted: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    testType: "an array with identical elements",
  },
  {
    unsorted: [-5, 3, -6, 1, 2, 4],
    sorted: [-6, -5, 1, 2, 3, 4],
    testType: "an array with negative values",
  },
];

//tests should not mutate test cases
sortingTestCases.forEach(({ sorted, unsorted }) => {
  Object.freeze(sorted);
  Object.freeze(unsorted);
});

export default sortingTestCases;
