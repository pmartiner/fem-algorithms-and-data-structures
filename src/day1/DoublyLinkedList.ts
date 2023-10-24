interface DoublyLinkedNode<T> {
  item: T;
  next: DoublyLinkedNode<T> | null;
  prev: DoublyLinkedNode<T> | null;
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head: DoublyLinkedNode<T> | null;
  private tail: DoublyLinkedNode<T> | null;

  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  prepend(item: T): void {
    ++this.length;
    if (!this.head) {
      this.head = {
        item,
        prev: null,
        next: null,
      };
      this.tail = this.head;

      return;
    }

    const oldFirstNode = this.head;
    this.head = {
      item,
      prev: null,
      next: oldFirstNode,
    };
    oldFirstNode.prev = this.head;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      return;
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    if (idx === this.length) {
      this.append(item);
      return;
    }

    ++this.length;
    let currentNode = this.getAt(idx);
    const prevNode = currentNode?.prev ?? null;
    const nextNode = currentNode?.next ?? null;
    const newNode = {
      item,
      prev: prevNode,
      next: currentNode,
    };

    if (nextNode) {
      nextNode.prev = newNode;
    }

    if (prevNode) {
      prevNode.next = newNode;
    }
  }

  append(item: T): void {
    ++this.length;

    if (!this.tail) {
      this.tail = {
        item,
        prev: null,
        next: null,
      };
      this.head = this.tail;

      return;
    }

    const oldTail = this.tail;
    this.tail = {
      item,
      next: null,
      prev: oldTail,
    };
    oldTail.next = this.tail;
  }

  remove(item: T): T | null {
    if (!item) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode?.item === item) {
        break;
      }
      currentNode = currentNode?.next ?? null;
    }

    if (!currentNode) {
      return null;
    }

    return this.removeNode(currentNode!);
  }

  get(idx: number): T | null {
    return this.getAt(idx)?.item ?? null;
  }

  removeAt(idx: number): T | null {
    let currentNode = this.getAt(idx);

    if (!currentNode) {
      return null;
    }

    return this.removeNode(currentNode);
  }

  private removeNode(node: DoublyLinkedNode<T>): T | null {
    --this.length;

    if (this.length === 0) {
      const removed = this.head?.item ?? null;
      this.head = this.tail = null;
      return removed;
    }

    const prevNode = node.prev;
    const nextNode = node.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }

    if (nextNode) {
      nextNode.prev = prevNode;
    }

    if (node === this.head) {
      this.head = nextNode;
    }
    if (node === this.tail) {
      this.tail = prevNode;
    }

    node.next = null;
    node.prev = null;

    return node.item ?? null;
  }

  private getAt(index: number): DoublyLinkedNode<T> | null {
    let currentNode = this.head;

    for (let i = 0; currentNode && i < index; ++i) {
      currentNode = currentNode?.next ?? null;
    }

    return currentNode;
  }
}
