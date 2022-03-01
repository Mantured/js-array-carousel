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

// aggiungo le immagini al file html
let carouselContent  = '';

for (let i = 0 ; i < items.length ; i++){
    carouselContent  += `
    <div class="my-img">
        <img src="${items[i]}" alt="Random picture">
    </div>`
}


const carouselWrapper = document.querySelector('div.carousel-container');
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
});
