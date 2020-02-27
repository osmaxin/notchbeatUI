import '../sass/style.scss';

const writeUp = document.querySelector('.description');

writeUp.textContent = `hi I am ${2+8} years old, and setting up webpack`;
writeUp.addEventListener('click', () => {
    writeUp.classList.toggle('changed');
})
