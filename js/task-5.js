const button = document.querySelector(".change-color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  const change = getRandomHexColor();
  document.body.style.backgroundColor = change;
  console.log(`background is: ${change}`);
})

