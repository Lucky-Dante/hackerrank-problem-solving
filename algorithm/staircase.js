function staircase(n) {
    // Timecomplexity: O(|n|^2)
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}