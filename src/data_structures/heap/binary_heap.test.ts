import { MaxBinaryHeap, MinBinaryHeap } from './binary_heap';

describe('binary heap', () => {
  test('min binary heap', () => {
    const minHeap = new MinBinaryHeap();
    minHeap.insert(5);
    minHeap.insert(3);
    minHeap.insert(4);
    minHeap.insert(2);

    expect(minHeap.getMin()).toEqual(2);

    minHeap.setValue(3, 1);
    expect(minHeap.getMin()).toEqual(1);

    minHeap.extractMin();
    expect(minHeap.getMin()).toEqual(2);

    minHeap.extractMin();
    expect(minHeap.getMin()).toEqual(3);

    minHeap.extractMin();
    expect(minHeap.getMin()).toEqual(4);
  });

  test('max binary heap', () => {
    const maxHeap = new MaxBinaryHeap();
    maxHeap.insert(1);
    maxHeap.insert(3);
    maxHeap.insert(4);
    maxHeap.insert(2);

    expect(maxHeap.getMax()).toEqual(4);

    maxHeap.setValue(3, 5);
    expect(maxHeap.getMax()).toEqual(5);

    maxHeap.extractMax();
    expect(maxHeap.getMax()).toEqual(4);

    maxHeap.extractMax();
    expect(maxHeap.getMax()).toEqual(3);
  });
});
