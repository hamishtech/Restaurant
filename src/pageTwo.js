function generatePageTwo() {
  let prevContainer = document.querySelector(".content");
  document.body.removeChild(prevContainer);
  let content = document.createElement("div");
  let header = document.createElement("h1");
  header.textContent = "Page 2: Menu";
  content.appendChild(header);
  document.body.appendChild(content);
}
export { generatePageTwo };
