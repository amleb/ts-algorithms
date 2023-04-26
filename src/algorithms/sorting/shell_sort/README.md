# Shell Sort

A generalization of insertion sort. Starts with sorting elements that are far from each other, then progressively reducing the gap (h) between the elements.
By comparing distant elements it can exchange their position faster than insertion sort.

Worst case complexity: O(N<sup>2</sup>)

Best case complexity: Ω(n log(n)) (for already sorted list)

Average case complexity: O(n\*log n) ~ O(n1.25) (depends on the selected interval)
