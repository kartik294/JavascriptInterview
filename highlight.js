// Implement a function to highlight text if searched terms appear within it.

function highlightText(text, searchTerm) {
  const regex = new RegExp(searchTerm, "gi");
  return text.replace(
    regex,
    (match) => `<span class="highlight">${match}</span>`
  );
}

// Example usage:
const originalText = "This is a sample text to highlight certain words.";
const searchTerm = "highlight";

const highlightedText = highlightText(originalText, searchTerm);
console.log(highlightedText);
