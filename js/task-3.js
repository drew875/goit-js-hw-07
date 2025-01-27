const catchName = document.querySelector("#name-input");
const changeName = document.querySelector("#name-output");

catchName.addEventListener("input", () => {
    const inputValue = catchName.value.trim();
    changeName.textContent = inputValue || "Anonymous";
});