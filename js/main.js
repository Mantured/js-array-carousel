const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]




// mi trasformo i miei elementi in variabili const che poi non tocco più

/* const myImg = document.getElementById('my-img-main');
const myTitle = document.getElementById('title');
const description = document.getElementById('description');
const carouselContainer = document.getElementById('carousel-container');

//mi serve un indicatore che conti dove sono partendo da zero index [0]

let elementIndex = 0;

for (let i = 0; i < items.length; i++) {
    if (i === 0) {
        myImg.src = items[i];
        myTitle.innerHTML = title[i];
        description.innerHTML = text[i];
    }
    // aggiungo le immagini al file html
    // let carouselContent  = '';
    // aggiungo la variabile che va a crearmi img dentro il div l
    const myNewImg = document.createElement('img');
    //devo aggiungere le immagini del carosello lateraale
    //adesso mynewimg assume il vaolore del iesimo item
    myNewImg.src = items[i];
    myNewImg.classList.add('carousel-side');
    // condizione per non spaccare tutto che non va più avanti if
    //mi serve la variabile container carousel
    if (i === 0) myNewImg.classList.add('active');
    carouselContainer.appendChild(myNewImg);
}

const upBtn = document.getElementById('up');

function next() {
    const imgList = document.querySelector('.carousel-side');

    for (let i = 0; i < imgList.length; i++) {
        imgList[i].classList.remove('active');
    }
    //ripesco l'elementindex
    elementIndex++; // elementindex = elementindex + 1
    myImg.src = items[elementIndex];
    imgList[elementIndex].classList.add('active');
    myTitle.innerHTML = title[elementIndex];
    description.innerHTML = text[elementIndex];
}

upBtn.addEventListener(`click`, next); */


/* const carouselWrapper = document.querySelector('div.carousel-container');
carouselWrapper.innerHTML += carouselContent ;
//ora ho le img non visibili nel file html all'interno di my-img

//lista elementi aggiunti al container principale !attenzione la "s" è fondamentale
const carouselElements = document.getElementsByClassName('my-img');
console.log(carouselElements); //ottimo

carouselElements[0].classList.add('my-active');

// inizializzo il bottone o freccia che sia
const nextBtn = document.querySelector('i.fa-arrow-right-long');
const previousBtn = document.querySelector('i.fa-arrow-left-long');

let activeElement = 0;
let unActiveElement = !activeElement;

// sia il caso di creare una funzione e poi un EventListner?

nextBtn.addEventListener('click', function () {
    carouselElements[activeElement].classList.remove('my-active');
    activeElement++;
    carouselElements[activeElement].classList.add('my-active');
}); */
