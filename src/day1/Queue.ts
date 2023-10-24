interface QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;
}

export default class Queue<T> {
  public length: number;
  private head: QueueNode<T> | null;
  private tail: QueueNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(item: T): void {
    ++this.length;
    const newNode = {
      value: item,
      next: null,
    } as QueueNode<T>;

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;

      return;
    }

    // The old tail will now point to the new node as its new next
    this.tail!.next = newNode;
    // Since we've now updated the old tail data, we replace the current tail node
    this.tail = newNode;
  }
  deque(): T | null {
    if (!this.head) {
      return null;
    }

    const itemToDeque = this.head;
    const newHead = this.head!.next;

    this.head = newHead;
    --this.length;

    itemToDeque.next = null;
    return itemToDeque.value;
  }

  peek(): T | null {
    return this.head?.value ?? null;
  }
}
