export class ListNode<T> {
  constructor(public data: T, public next?: ListNode<T>) {}
}

export class LinkedList<T> {
  protected length: number;

  constructor(protected head?: ListNode<T>) {
    this.length = head ? 1 : 0;
  }

  append(node: ListNode<T>) {
    ++this.length;

    if (!this.head) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  prepend(node: ListNode<T>) {
    node.next = this.head;
    this.head = node;

    ++this.length;
  }

  size() {
    return this.length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
