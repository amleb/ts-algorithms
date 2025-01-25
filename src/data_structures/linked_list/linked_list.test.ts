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
  });
});
