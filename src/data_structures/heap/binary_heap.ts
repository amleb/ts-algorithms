import { compareReversedFn, defaultCompareFn } from '../../lib/helpers/sorting';

export abstract class BinaryHeap<T> {
  private readonly list: T[];
  private readonly compareFn: (a: T, b: T) => 0 | 1 | -1;

  protected constructor(compareFn: (a: T, b: T) => 0 | 1 | -1) {
    this.list = [];
    this.compareFn = compareFn;
  }

  abstract delete(i: number): void;

  left(i: number): number {
    return 2 * i + 1;
  }

  right(i: number): number {
    return 2 * i + 2;
  }

  parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  getRoot(): T {
    return this.list[0];
  }

  shiftUp(i: number) {
    const list = this.list;

    while (i > 0 && this.compareFn(list[this.parent(i)], list[i]) === 1) {
      const p = this.parent(i);
      [list[i], list[p]] = [list[p], list[i]];
      i = p;
    }
  }

  shiftDown(i: number) {
    const list = this.list;
    const length = list.length;

    if (length === 1) {
      return;
    }

    const left = this.left(i);
    const right = this.right(i);
    let next: number;

    if (left < length && this.compareFn(list[left], list[i]) === -1) {
      next = left;
    }

    if (right < length && this.compareFn(list[right], list[i]) === -1) {
      if (!next || this.compareFn(list[left], list[right]) === 1) {
        next = right;
      }
    }

    if (next && next !== i) {
      [list[i], list[next]] = [list[next], list[i]];
      this.shiftDown(next);
    }
  }

  insert(value: T) {
    this.shiftUp(this.list.push(value) - 1);
  }

  setValue(i: number, value: T) {
    this.list[i] = value;
    this.shiftUp(i);
  }

  extractRoot() {
    const list = this.list;
    if (list.length === 1) {
      return list.pop();
    }

    const rootValue = list[0];
    list[0] = list.at(-1);
    list.pop();
    this.shiftDown(0);

    return rootValue;
  }
}

export class MinBinaryHeap extends BinaryHeap<number> {
  constructor(compareFn = defaultCompareFn<number>) {
    super(compareFn);
  }

  getMin(): number {
    return this.getRoot();
  }

  extractMin(): number {
    return this.extractRoot();
  }

  delete(i: number) {
    this.setValue(i, -Infinity);
  }
}

export class MaxBinaryHeap extends BinaryHeap<number> {
  constructor(compareFn = compareReversedFn<number>) {
    super(compareFn);
  }

  getMax(): number {
    return this.getRoot();
  }

  extractMax(): number {
    return this.extractRoot();
  }

  delete(i: number) {
    this.setValue(i, +Infinity);
  }
}
