import { BinaryHeap } from '../../../data_structures/heap/binary_heap';

export default function heapSort<T>(list: T[], heap: BinaryHeap<T>): T[] {
  let i = 0;
  const length = list.length;
  const newList = [];

  heap.heapify(list);

  while (i < length) {
    newList[i++] = heap.extractRoot();
  }

  return newList;
}
