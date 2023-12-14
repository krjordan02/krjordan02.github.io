const addFooter = () => {
    let container = document.getElementsByClassName('footer-container');
    console.log(container)

    let copyright = document.createElement('div');
    copyright.innerHTML = '<p class="footer-text">© 2023 Keegan Jordan</p>';
    copyright.classList = 'copyright';

    let socials = document.createElement('div');
    socials.innerHTML = 
    '<a href="https://github.com/krjordan02" class="footer-text-link">GitHub</a>' +
    '<a href="https://www.linkedin.com/in/keeganjordan02/" class="footer-text-link">Linkedin</a>';
    socials.classList = 'socials';

    for(let element of container){
        element.appendChild(copyright);
        element.appendChild(socials);
    }
}

addFooter();