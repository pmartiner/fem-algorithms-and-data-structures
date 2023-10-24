interface StackNode<T> {
  value: T;
  prev: StackNode<T> | null;
}
export default class Stack<T> {
  public length: number;
  private tail: StackNode<T> | null;

  constructor() {
    this.length = 0;
    this.tail = null;
  }

  push(item: T): void {
    ++this.length;

    if (!this.tail) {
      this.tail = {
        value: item,
        prev: null,
      } as StackNode<T>;

      return;
    }

    const oldTail = this.tail;

    this.tail = {
      value: item,
      prev: oldTail,
    };
  }
  pop(): T | null {
    if (!this.tail) {
      return null;
    }

    const newTail = this.tail.prev;
    const oldTail = this.tail;

    this.tail = newTail;
    --this.length;

    return oldTail.value;
  }
  peek(): T | null {
    return this.tail?.value ?? null;
  }
}
