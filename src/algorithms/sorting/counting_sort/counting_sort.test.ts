import sortingTestCases from '../test_cases';
import countingSort from './counting_sort';

const testCases = sortingTestCases.filter((test) => !test.negativeNumbers);

describe('countingSort', () => {
  test.each(testCases)(`$testType`, (testCase) => {
    expect(countingSort([...testCase.unsorted])).toEqual(testCase.sorted);
  });
});
