import Queue from "./Queue";

/*
  Breadth-First search DOES NOT preserve the tree's shape
*/
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const queue = new Queue<BinaryNode<number>>();
  queue.enqueue(head);

  while (queue.length) {
    const current = queue.deque();

    if (current?.value === needle) {
      return true;
    }

    if (current?.left) {
      queue.enqueue(current.left);
    }

    if (current?.right) {
      queue.enqueue(current.right);
    }
  }

  return false;
}
