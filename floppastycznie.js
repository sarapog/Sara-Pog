const blokPrawy = document.querySelector('.blok-prawy');

//pobieramy przyciski
const przyciski = document.querySelectorAll('button');

//obsluga pierwszego przycisku
przyciski[0].addEventListener('click', function () {
    blokPrawy.style.backgroundColor = 'Indigo';
});
przyciski[1].addEventListener('click', function () {
    blokPrawy.style.backgroundColor = 'SteelBlue';
});
przyciski[2].addEventListener('click', function () {
    blokPrawy.style.backgroundColor = 'Olive';
});