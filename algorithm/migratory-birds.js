function migratoryBirds(arr) {
  // Write your code here
  // Time Complexity: O(n)
  const result = arr
    .reduce((freq, value) => (freq[value - 1]++, freq), new Array(5).fill(0))
    .reduce((k, v, i, arr) => (arr[k] < v ? i : k), 0);

  return result + 1;
}
