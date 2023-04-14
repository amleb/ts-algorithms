import selectionSort from "./selection_sort";
import doubleSelectionSort from "./double_selection_sort";
import sortingTestCases from "../test_cases";

describe("selection sort", () => {
  test.each(sortingTestCases)("selection sort: $testType", (testCase) => {
    expect(selectionSort([...testCase.unsorted])).toEqual(testCase.sorted);
  });

  test.each(sortingTestCases)(
    "double selection sort: $testType",
    (testCase) => {
      expect(doubleSelectionSort([...testCase.unsorted])).toEqual(
        testCase.sorted
      );
    }
  );
});
