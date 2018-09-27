$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({ fullWidth: false });
    $('.carousel.carousel-slider').carousel();
    $('.dropdown-button').dropdown({ hover: false });
    $('.carousel').carousel();
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});
