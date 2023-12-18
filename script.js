const addFooter = () => {
    let container = document.getElementsByClassName('footer-container');

    let copyright = document.createElement('div');
    copyright.innerHTML = '<p class="footer-text">© 2023 Keegan Jordan</p>';
    copyright.classList = 'copyright';

    let socials = document.createElement('div');
    socials.innerHTML = 
    '<a href="mailto: keeganrjordan@gmail.com" class="footer-text-link"><i class="bi bi-envelope-at-fill"></i></a>' +
    '<a href="https://github.com/krjordan02" class="footer-text-link"><i class="bi bi-github"></i></a>' +
    '<a href="https://www.linkedin.com/in/keeganjordan02/" class="footer-text-link"><i class="bi bi-linkedin"></i></a>';
    socials.classList = 'socials';

    for(let element of container){
        element.appendChild(copyright);
        element.appendChild(socials);
    }
}

const injectCard = (parent, inst) => {
    let container = document.getElementsByClassName(parent);

    let card = document.createElement('div');
    card.innerHTML = '<p class="card-title">' + inst.title + '</p>' +
    '<img src="./' + inst.img + '" alt="Project Image" class="card-img">' +
    '<p class="card-info">' + inst.info + '</p>' +
    '<div class="explore-button-card-container">' +
        '<a href="' + inst.link + '" class="explore-button">Explore<i class="bi bi-arrow-right" id="explore-button-arrow" ></i></a>' +
    '</div>';
    card.classList = 'card';

    for(let element of container){
        element.appendChild(card);
    }

}

const makeCard = (title, img, info, link) => {
    card = {title: title,
            img: img,
            info: info,
            link: link};
    cards.push(card);
};

const injectAllCards = (cards) => {
    for(let i = 0; i < cards.length; i++){
        injectCard('project-cards-sub-container', cards[i]);
    }

    for(let i = 0; i < 3; i++){
        injectCard('feature-project-cards-sub-container', cards[i]);
    }
}
const cards = [];

makeCard('Real Time Bus Tracker', 'media/readMeImgBus.jpeg', 'A live bus tracker that displays the current location of all the busses in Boston.', 'https://krjordan02.github.io/Real-Time-Bus-Tracking/');
makeCard('PackMen Exercise', 'media/readMeImgPacMen.jpeg', 'A PackMan generator that adds a PackMan to the web page.', 'https://krjordan02.github.io/PacMen-Exercise/');
makeCard('Eyes Exercise', 'media/readMeImgEyes.jpeg', 'A pair of eyes that track and follow your mouse around the screen with their gaze.', 'https://krjordan02.github.io/Eye-Exercise/');
makeCard('Bouncing Ball', 'media/readMeImgBall.jpeg', 'A ball that bounces around your screen, taking walls into consideration.', 'https://krjordan02.github.io/Bouncing-Ball/');

injectAllCards(cards);

addFooter();