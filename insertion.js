function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than currentElement
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}

[4,2,3,1,6]

module.exports = insertionSort;