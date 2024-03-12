const colorBtn = document.querySelector(".colorBtn");
const bodyBg = document.querySelector("body");
const colors = ["yellow", "red", "green", "blue", "pink", "purple", "orange"];
colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBg.style.backgroundColor = colors[random];
}
