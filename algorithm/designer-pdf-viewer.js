function designerPdfViewer(h, word) {
    // Write your code here
    // Time Complexity: O(|word|)
  
    return (
      Math.max(...Array.from(word).map((value) => h[value.charCodeAt() - 97])) *
      word.length
    );
  }
  