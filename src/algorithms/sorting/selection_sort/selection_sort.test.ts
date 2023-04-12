import selectionSort from "./selection_sort";

test("selection sort", () => {
  expect(selectionSort([5, 3, 6, 1, 2, 4])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(selectionSort(["d", "a", "c", "b", "e"])).toEqual([
    "a",
    "b",
    "c",
    "d",
    "e",
  ]);
});
