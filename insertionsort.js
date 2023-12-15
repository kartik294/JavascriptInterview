function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// Example usage:
const arrayToSort = [5, 2, 4, 6, 1, 3];
console.log("Original Array:", arrayToSort);
const sortedArray = insertionSort(arrayToSort);
console.log("Sorted Array:", sortedArray);
