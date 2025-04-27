// Step 1: Select an h1 element and change its style
d3.select("h1")
  .style("color", "green");

// Step 2: Select a div and append a paragraph with text
d3.select("div")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Step 3: Append an SVG and add a rectangle with attributes
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");