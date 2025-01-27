const form = document.querySelector("form");

form.addEventListener("submit", chek);

function chek() {
    event.preventDefault();
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (password === "" || email === "") {
        return alert("All form fields must be filled in!");
    }
    console.log(`Password: ${password}, email: ${email}`);
    form.reset();
}

