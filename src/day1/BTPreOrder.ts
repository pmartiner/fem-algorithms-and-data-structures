/*
  type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
  }
*/

function walk(
  currentNode: BinaryNode<number> | null,
  path: number[],
): number[] {
  if (!currentNode) {
    return path;
  }
  // Recursion steps:
  // 1. Pre-recursion
  // 2. Recursion
  // 3. Post-recursion

  // Since this is a pre-order traversal, we visit the node before we recurse
  // 1. Pre-recursion
  path.push(currentNode.value);

  // 2. Recurse
  // We traverse all left nodes...
  walk(currentNode.left, path);
  // ...and then all the right-side ones
  walk(currentNode.right, path);

  // 3. Post-recursion
  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
