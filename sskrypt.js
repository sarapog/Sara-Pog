// pobiermay formularz
const formularz = document.querySelector('form');
// pobieramy diva w ktorym umieszczac bedziemy wynik zapytania
const divUzytkownicy = document.querySelector('div.uzytkownicy')

//tworzymy funkcje uzytkownicy ktora bedzie obslugiwala zapytanie ajax
const uzytkownicy = function(e){
    e.preventDefault();
    //pobieramy  wartosc pol 
    const iloscOsob = document.querySelector('[name="liczba_osob"]').value;
    const plec = document.querySelector('[name="plec"]').value;
    //tworzymy adres url z zapytaniem
    const url = `https://randomuser.me/api?results=${iloscOsob}&gender=${plec == 'both' ? 'male,female' : plec}`;

    fetch(url)
    .then()
    .then()
    .catch()
    

};

//obsluga zafarzenia submit formularza
formularz.addEventListener('submit', uzytkownicy);
