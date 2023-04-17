import selectionSort from './selection_sort/selection_sort';
import doubleSelectionSort from './selection_sort/double_selection_sort';
import bubbleSort from './bubble_sort/bubble_sort';
import optimizedBubbleSort from './bubble_sort/optimized_bubble_sort';
import sortingTestCases from './test_cases';

describe.each(
  [selectionSort, doubleSelectionSort, bubbleSort, optimizedBubbleSort].map(
    (fn) => {
      return { fn, name: fn.name };
    },
  ),
)('$name', ({ fn }) => {
  test.each(sortingTestCases)(`$testType`, (testCase) => {
    expect(fn([...testCase.unsorted])).toEqual(testCase.sorted);
  });
});