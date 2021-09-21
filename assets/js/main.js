/* Show menu*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {navMenu.classList.add('show-menu')});
}

/* Hide menu */

if (navClose) {
    navClose.addEventListener('click', () => {navMenu.classList.remove('show-menu')});
}

/*Remove mobile menu whenver a link in the navbar is clicked*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Skills */

const skillsContent = document.getElementsByClassName('skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills () {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close';

    }
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) => {el.addEventListener('click', toggleSkills)});

/* Qualification tabs */

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
        tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
    })

})

/* Services modal */

const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* Clear form after submission */
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

/* Scroll reveal animation */
const sr = ScrollReveal ({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false
})

//Reveal home section
sr.reveal('.home_title', {})
sr.reveal('.home_img', {delay: 200, origin: 'right'})
sr.reveal('.home_rem', {delay: 1000, distance: '0px'})

//Reveal About Me
sr.reveal('.about', {delay: 800, distance: 0})

//Reveal skills
sr.reveal('.s_title', {delay: 100, distance: 0})
sr.reveal('.skills_content', {delay: 100, origin: 'bottom'})

//Reveal qualifications
sr.reveal('.qualification_container', {delay: 120, origin: 'bottom'})

//Reveal portfolio
sr.reveal('.portfolio_container', {delay: 120, origin: 'left'})
//sr.reveal('.services_content', {delay: 300, distance: 0, scale: 0.5})

//Reveal contact me
sr.reveal('.contact', {delay: 200, distance: '100px', origin: 'bottom'})

// Typing animation for home subtitle
typer('.home_subtitle').line('A 3rd Year Computer Engineering Student @ UofT')
.pause(2000)
.back(44)
.continue('Research Assistant @ MEDCVR')
.pause(2000)
.back(27)
.continue('Basketball Player')
.pause(2000)
.back(19)

.continue('A 3rd Year Computer Engineering Student @ UofT')
.pause(3000)
.end()


