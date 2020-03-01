import '../sass/style.scss';

const searchBox = document.querySelector(".search-box .popUp-container");

const searchIcon = document.querySelector('.search-box .fa-search');

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