/*==================== MENU SHOW Y HIDDEN ====================*/

/*===== MENU SHOW =====*/
const showMenu = (toggleClass, close, navClass) => {
    const toggleMenu = document.querySelector(toggleClass),
          closeMenu = document.querySelector(close),
          navMenu = document.querySelector(navClass),
          btns = [toggleMenu, closeMenu];
    
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                navMenu.classList.toggle('show-menu');
            })
        });
    
};


showMenu('.nav__toggle', '.nav__close', '.nav__menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.querySelector('.nav__menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 