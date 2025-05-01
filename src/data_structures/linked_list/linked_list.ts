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

  insert(position: number, node: ListNode<T>) {
    if (position < 0 || position > this.length) {
      return;
    }

    if (position === 0) {
      this.prepend(node);
      return;
    }

    if (position === this.length) {
      this.append(node);
      return;
    }

    let currentNode = this.head;
    let i = 0;

    while (currentNode.next) {
      if (i === position - 1) {
        node.next = currentNode.next;
        currentNode.next = node;
        ++this.length;
        break;
      }

      ++i;
      currentNode = currentNode.next;
    }
  }

  search(value: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  delete(position: number) {
    if (position < 0 || position >= this.length || !this.head) {
      return;
    }

    if (position === 0) {
      this.head = this.head.next;
      --this.length;

      return;
    }

    if (position === this.length - 1) {
      let currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      --this.length;

      return;
    }

    const currentNode = this.head;
    for (let i = 0; i < position; i++) {
      if (i === position - 1) {
        currentNode.next = currentNode.next.next;
        --this.length;
        break;
      }
    }
  }

  print() {
    let currentNode = this.head;
    const result = [];

    while (currentNode) {
      result.push(`${currentNode.data}`);
      currentNode = currentNode.next;
    }

    return result.join(' -> ');
  }

  reverse() {
    if (!this.head || !this.head.next) {
      return;
    }

    let prevNode = null;
    let currentNode = this.head;
    let nextNode = this.head.next;

    while (nextNode.next) {
      const tmp = nextNode.next;
      nextNode.next = currentNode;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      nextNode = tmp;
    }

    nextNode.next = currentNode;
    this.head = nextNode
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
