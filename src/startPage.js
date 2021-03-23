import { generatePageThree } from "./pageThree";
import { generatePageTwo } from "./pageTwo";

function generatePageStart() {
  let content = document.createElement("div");
  content.classList.add("content");
  let header = document.createElement("h1");
  header.textContent = "Page 1: Welcome to Restaurant X";
  content.appendChild(header);
  let menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", () => {
    console.log("button clicked");
    generatePageTwo();
  });
  content.appendChild(menuBtn);
  let aboutBtn = document.createElement("button");
  aboutBtn.textContent = "Contact Us";
  aboutBtn.addEventListener("click", () => {
    console.log("button clicked");
    generatePageThree();
  });
  content.appendChild(aboutBtn);
  document.body.appendChild(content);
}
export { generatePageStart };
