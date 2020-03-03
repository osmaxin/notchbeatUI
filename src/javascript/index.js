import '../sass/style.scss';

const searchBox = document.querySelector(".search-box .popUp-container");

const searchIcon = document.querySelector('.search-box .fa-search');
const exitNavMenuBtn = document.querySelector('.nav-bar-container .go-back') 
const navBarMenuContent = document.querySelector('.nav-bar-wrapper');
const navBarMenuBtn = document.querySelector('nav .menu-icon');


// This function shows and hides the search box on page header
const toggleSearchBox = () => {
    const scl = searchBox.classList;
    if(scl.contains('hide-search-box')){
        scl.remove('hide-search-box');
        scl.add('show-search-box');
    } else {
        scl.add('hide-search-box');
        scl.remove('show-search-box');
    }
}
searchIcon.addEventListener('click', toggleSearchBox);


// This function shows and hides the navBarMenuContent
const toggleNavBarMenuContent = () => {
    if(searchBox.classList.contains('show-search-box')) {
        searchBox.classList.remove('show-search-box');
        searchBox.classList.add('hide-search-box');
    }
    navBarMenuContent.classList.toggle('show-nav-menu');
};
navBarMenuBtn.addEventListener('click', toggleNavBarMenuContent);
exitNavMenuBtn.addEventListener('click', toggleNavBarMenuContent);
