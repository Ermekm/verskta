(function () {
    const header = document.querySelector('.header');
    let active = false;

    window.onscroll = () => {
        if (window.pageYOffset > 50 && !active) {
            header.classList.add('header_active')
            active = true;
            console.log(true)
        } else if (window.pageYOffset <= 50 && active){
            header.classList.remove('header_active')
            active = false;
            console.log(false)
        }
    }
}())