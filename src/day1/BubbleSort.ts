function swap(i: number, j: number, arr: number[]): void {
  const tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
}

export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
}
