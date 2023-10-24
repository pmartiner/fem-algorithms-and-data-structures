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

  // Since this is a in-order traversal, we traverse the left node before we recurse
  // 1. Pre-recursion
  walk(currentNode.left, path);

  // 2. Recurse
  // We visit the node...
  path.push(currentNode.value);
  // ...and then we traverse all the right-side ones
  walk(currentNode.right, path);

  // 3. Post-recursion
  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
