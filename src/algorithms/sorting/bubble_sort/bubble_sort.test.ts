import bubbleSort from './bubble_sort';
import sortingTestCases from '../test_cases';

describe('bubble sort', () => {
  test.each(sortingTestCases)('bubble sort: $testType', (testCase) => {
    expect(bubbleSort([...testCase.unsorted])).toEqual(testCase.sorted);
  });
});
