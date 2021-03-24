function generatePageTwo() {
  let prevContainer = document.querySelector(".content");
  document.body.removeChild(prevContainer);
  let content = document.createElement("div");
  content.classList.add("content");
  let title = document.createElement("h1");
  title.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur facere adipisci ducimus tempore voluptatibus vitae ut quod blanditiis alias veritatis expedita, placeat maxime suscipit tenetur ullam odio eum, soluta rem?";
  content.appendChild(title);
  let pictureGrid = document.createElement("div");
  document.body.appendChild(content);
}
export { generatePageTwo };
