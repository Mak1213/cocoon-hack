const menuSlide = document.querySelector('.slide-menu');
const menuBtn = document.querySelector('.menu-btn');

const menuOn =()=> {
    menuSlide.animate(
        {
            opacity: [0, 1],
        },
        {
            duration: 400,
            easing: 'ease-out',
            fill: 'forwards',
        }
    );
};

menuBtn.addEventListener('click', menuOn);