(function () {
    const header = document.querySelector('.header');
    let active = false;

    window.onscroll = () => {
        if (window.pageYOffset > 50 && !active) {
            header.classList.add('header_active')
            active = true;
            console.log(true)
        } else if (window.pageYOffset <= 50 && active) {
            header.classList.remove('header_active')
            active = false;
            console.log(false)
        }
    }
}())

    // Burger handler

    (function () {
        const burgerItem = document.querySelector('.burger');
        const menu = document.querySelector('.header__nav');
        const menuCloseItem = document.querySelector('.header__nav-close')

        burgerItem.addEventListener('click', () => {
            menu.classList.add('header__nav_active');
        })

        menuCloseItem.addEventListener('click', () => {
            menu.classList.remove('header__nav_active')
        })
    }())