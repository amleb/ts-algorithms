import { LinkedList, ListNode } from './linked_list';

describe('linked list', () => {
  test('append items', () => {
    const list: LinkedList<number> = new LinkedList();
    list.append(new ListNode<number>(1));
    list.append(new ListNode<number>(2));
    list.append(new ListNode<number>(3));

    expect(list.size()).toEqual(3);
    expect(list.getFirst().data).toEqual(1);
    expect(list.getLast().data).toEqual(3);
  });

  test('prepend item', () => {
    const list: LinkedList<number> = new LinkedList();
    list.append(new ListNode<number>(1));
    list.append(new ListNode<number>(2));
    list.append(new ListNode<number>(3));

    list.prepend(new ListNode<number>(4));

    expect(list.size()).toEqual(4);
    expect(list.getFirst().data).toEqual(4);
    expect(list.getLast().data).toEqual(3);
  });
});
