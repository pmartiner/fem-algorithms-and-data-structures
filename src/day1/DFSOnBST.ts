function search(
  currentNode: BinaryNode<number> | null,
  needle: number,
): boolean {
  if (!currentNode) {
    return false;
  }

  if (currentNode.value === needle) {
    return true;
  }

  if (currentNode.value < needle) {
    return search(currentNode.right, needle);
  }

  return search(currentNode.left, needle);
}

export default function dfs(
  head: BinaryNode<number> | null,
  needle: number,
): boolean {
  return search(head, needle);
}
