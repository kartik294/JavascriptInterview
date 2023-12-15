// Implement a function to construct a table of contents from an HTML document.

function generateTableOfContents() {
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const tableOfContents = [];

  headings.forEach((heading) => {
    const headingText = heading.textContent;
    const headingLevel = parseInt(heading.tagName.charAt(1));

    tableOfContents.push({
      text: headingText,
      level: headingLevel,
    });
  });

  return tableOfContents;
}

// Example usage:
const toc = generateTableOfContents();
console.log(toc);
