export function generatePageThree() {
  let prevContainer = document.querySelector(".content");
  document.body.removeChild(prevContainer);
  let content = document.createElement("div");
  content.classList.add("content");
  let title = document.createElement("h1");
  title.textContent = "Contact Us Here";
  content.appendChild(title);
  document.body.appendChild(content);
}
