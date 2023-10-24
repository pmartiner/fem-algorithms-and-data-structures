function swap(arr: number[], i: number, j: number): void {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let index = low;

  for (let i = low; i < high; ++i) {
    if (arr[i] < pivot) {
      swap(arr, i, index);
      ++index;
    }
  }

  swap(arr, high, index);

  return index;
}

function qs(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pivotIndex = partition(arr, low, high);

  qs(arr, low, pivotIndex - 1);
  qs(arr, pivotIndex + 1, high);
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
