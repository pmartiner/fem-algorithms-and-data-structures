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
  // 1. Recursion
  // We traverse all left nodes...
  walk(currentNode.left, path);
  // ...and then all the right-side ones
  walk(currentNode.right, path);

  // 2. We visit the node's value
  path.push(currentNode.value);

  // 3. Post-recursion
  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
