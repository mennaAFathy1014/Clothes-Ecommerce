const burgerIcon = document.querySelector(".burger-icon");
const nav = document.querySelector('nav');

let clicked = false;


burgerIcon.addEventListener("click", () => {
    if (!clicked) {
        clicked = true;
        nav.style.display = 'block';
    }
    else {
        clicked = false;
        nav.style.display = 'none';
    }
});