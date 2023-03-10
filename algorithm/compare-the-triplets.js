function compareTriplets(a, b) {
    // Time Complexity: O(n)
    // n is the length of a
    let result = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            result[0] += 1;
        } else if (b[i] > a[i]) {
            result[1] += 1;
        }
    }
    return result;
}