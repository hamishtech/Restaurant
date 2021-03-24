function generatePageStart() {
  let prevContainer = document.querySelector(".content");
  document.body.removeChild(prevContainer);
  let content = document.createElement("div");
  content.classList.add("content");
  let title = document.createElement("h1");
  title.textContent = " Welcome to BurgerWorld";
  content.appendChild(title);
  document.body.appendChild(content);
}
export { generatePageStart };
