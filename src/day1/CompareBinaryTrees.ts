export default function compare(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null,
): boolean {
  // Structural check:
  // We check if both child nodes hit null (no children) at the same time,
  // which would mean that they are structurally the same
  if (a === null && b === null) {
    return true;
  }

  // Structural check:
  // We check if both child nodes hit null (no children) on different levels,
  // which would mean that they are structurally different
  if (a === null || b === null) {
    return false;
  }

  // Value check:
  // If we reached this condition, we know that the structure is the same
  // and we want to know if their value's are also equal
  if (a.value !== b.value) {
    return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
}
