const burgerIcon = document.querySelector(".burger-icon");
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-list')
const layout = document.querySelector('.layout');

const cartCounter = document.querySelector('.counter');

burgerIcon.addEventListener('click', () => {
    navList.classList.add('right');
    layout.classList.remove('hide');
    
});

nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('layout') || e.target.classList.contains('close')) {
        navList.classList.remove('right');
        layout.classList.add('hide');
    }

});
