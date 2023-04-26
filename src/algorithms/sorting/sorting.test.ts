import bubbleSort from './bubble_sort/bubble_sort';
import optimizedBubbleSort from './bubble_sort/optimized_bubble_sort';
import recursiveBubbleSort from './bubble_sort/recursive_bubble_sort';
import insertionSort from './insertion_sort/insertion_sort';
import recursiveInsertionSort from './insertion_sort/recursive_insertion_sort';
import doubleSelectionSort from './selection_sort/double_selection_sort';
import selectionSort from './selection_sort/selection_sort';
import sortingTestCases from './test_cases';
import shellSort from './shell_sort/shell_sort';

describe.each(
  [
    selectionSort,
    doubleSelectionSort,
    bubbleSort,
    recursiveBubbleSort,
    optimizedBubbleSort,
    insertionSort,
    recursiveInsertionSort,
    shellSort,
  ].map((fn) => {
    return { fn, name: fn.name };
  }),
)('$name', ({ fn }) => {
  test.each(sortingTestCases)(`$testType`, (testCase) => {
    expect(fn([...testCase.unsorted])).toEqual(testCase.sorted);
  });
});
