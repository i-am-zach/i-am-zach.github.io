// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
// Open menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
// Close menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

const contactBtn = document.querySelector('.contact-btn')
contactBtn.onclick = () => location.assign('#contact')