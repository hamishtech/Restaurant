import { generatePageThree } from "./pageThree";
import { generatePageTwo } from "./pageTwo";
import { generatePageStart } from "./startPage";

// // generate header which remains unchanged ---IFFY
(function () {
  let headerContainer = document.createElement("div");
  headerContainer.classList.add("headerContainer");
  let logo = document.createElement("div");
  logo.classList.add("logo");
  let logoImg = document.createElement("img");
  logoImg.src =
    "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png";
  logo.appendChild(logoImg);
  headerContainer.appendChild(logo);
  let tabContainer = document.createElement("div");
  tabContainer.classList.add("tabContainer");
  let menu = document.createElement("div");
  let contact = document.createElement("div");
  let home = document.createElement("div");
  home.classList.add("home");
  home.dataset.type = "tab";
  home.textContent = "Home";
  menu.classList.add("menu");
  menu.textContent = "Menu";
  menu.dataset.type = "tab";
  contact.classList.add("contact");
  contact.textContent = "Contact";
  contact.dataset.type = "tab";
  tabContainer.appendChild(home);
  tabContainer.appendChild(menu);
  tabContainer.appendChild(contact);
  headerContainer.appendChild(tabContainer);
  document.body.appendChild(headerContainer);
  let content = document.createElement("div");
  content.classList.add("content");
  document.body.appendChild(headerContainer);
  document.body.appendChild(content);
})();

generatePageStart();

//adding event listeners
let tabContent = document.querySelectorAll('[data-type="tab"]');
tabContent.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabContent.forEach((tab1) => {
      tab1.classList.remove("active");
    });
    if (e.target.classList == "menu") {
      generatePageTwo();
      e.target.classList.toggle("active");
    } else if (e.target.classList == "contact") {
      generatePageThree();
      e.target.classList.toggle("active");
    } else {
      generatePageStart();
      e.target.classList.toggle("active");
    }
  });
});
