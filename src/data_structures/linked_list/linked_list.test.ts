import { LinkedList, ListNode } from './linked_list';

function createLinkedList(items: any[] = []) {
  const list: LinkedList<number> = new LinkedList();
  for (const item of items) {
    list.append(new ListNode<number>(item));
  }

  return list;
}

describe('linked list', () => {
  test('append items', () => {
    const list = createLinkedList([1,2,3]);

    expect(list.size()).toEqual(3);
    expect(list.getFirst().data).toEqual(1);
    expect(list.getLast().data).toEqual(3);
  });

  test('prepend item', () => {
    const list = createLinkedList([1,2,3]);

    list.prepend(new ListNode<number>(4));

    expect(list.size()).toEqual(4);
    expect(list.getFirst().data).toEqual(4);
    expect(list.getLast().data).toEqual(3);
  });

  test('search item', () => {
    const list = createLinkedList([1,2,3]);

    expect(list.search(2)).toBeTruthy();
    expect(list.search(4)).toBeFalsy()
  });

  test('print list', () => {
    const list = createLinkedList([1,2,3]);

    expect(list.print()).toBe('1 -> 2 -> 3');
  });

  test('delete first list item', () => {
    const list = createLinkedList([1,2,3]);

    list.delete(0);

    expect(list.print()).toBe('2 -> 3');
  });

  test('delete last list item', () => {
    const list = createLinkedList([1,2,3]);

    list.delete(2);

    expect(list.print()).toBe('1 -> 2');
  });

  test('delete list item at a specific position', () => {
    const list = createLinkedList([1,2,3]);

    list.delete(1);

    expect(list.print()).toBe('1 -> 3');

    list.delete(0);

    expect(list.print()).toBe('3');
  });

  test('reverse an empty list', () => {
    const list = createLinkedList([]);

    list.reverse();

    expect(list.print()).toBe('');
  });

  test('reverse a list with one element', () => {
    const list = createLinkedList([1]);

    list.reverse();

    expect(list.print()).toBe('1');
  });

  test('reverse a list', () => {
    const list = createLinkedList([1,2,3,4]);

    list.reverse();

    expect(list.print()).toBe('4 -> 3 -> 2 -> 1');
  });

  test('insert element at a specific position', () => {
    const list = createLinkedList([1,2,3]);

    list.insert(1, { data: 4 });

    expect(list.print()).toBe('1 -> 4 -> 2 -> 3');
  });

  test('insert element at the first position', () => {
    const list = createLinkedList([1,2,3]);

    list.insert(0, { data: 4 });

    expect(list.print()).toBe('4 -> 1 -> 2 -> 3');
  });

  test('insert element at the last position', () => {
    const list = createLinkedList([1,2,3]);

    list.insert(3, { data: 4 });

    expect(list.print()).toBe('1 -> 2 -> 3 -> 4');
  });
});
