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

const addCard = (parent, title, img, info, link) => {
    let container = document.getElementsByClassName(parent);

    let card = document.createElement('div');
    card.innerHTML = '<p class="card-title">' + title + '</p>' +
    '<img src="./' + img + '" alt="Project Image" class="card-img">' +
    '<p class="card-info">' + info + '</p>' +
    '<div class="explore-button-card-container">' +
        '<a href="' + link + '" class="explore-button">Explore<i class="bi bi-arrow-right" id="explore-button-arrow" ></i></a>' +
    '</div>';
    card.classList = 'card';

    for(let element of container){
        element.appendChild(card);
    }

}
