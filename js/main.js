
var nav = document.querySelector('.nav');
var toggle = document.querySelector('.nav__toggle');
var search = document.querySelector('.nav__search');
var searchInput = document.querySelector('.nav__search-input');
var icon = document.querySelector('.nav__search-icon-tablet');

nav.classList.remove('nav--opened');

toggle.addEventListener('click', function() {
  if(toggle.classList.contains('nav__toggle--opened')) {
    toggle.classList.remove('nav__toggle--opened');
    toggle.classList.add('nav__toggle--closed');
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  } else {
    toggle.classList.remove('nav__toggle--closed');
    toggle.classList.add('nav__toggle--opened');
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  }
});

icon.addEventListener('click', function() {
  search.classList.remove('nav__search--closed');
  search.classList.add('nav__search--opened');
  searchInput.classList.remove('nav__search-input--closed');
  searchInput.classList.add('nav__search-input--opened');
  icon.classList.add('nav__search-icon-tablet--opened');
});

document.addEventListener('click', function (e) {
  var target = e.target;
  var its_search = target == search || search.contains(target);
  if (!its_search) {
    search.classList.remove('nav__search--opened');
    search.classList.add('nav__search--closed');
    icon.classList.remove('nav__search-icon-tablet--opened');
    icon.classList.add('nav__search-icon-tablet--closed');
    searchInput.classList.remove('nav__search-input--opened');
    searchInput.classList.add('nav__search-input--closed');
  }
});
