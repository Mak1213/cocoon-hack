const menuSlide = document.querySelector('.slide-menu');
const menuBtn = document.querySelector('.menu-btn');
const TsInsertStart = document.querySelector('.Ts-insert-start');
const LineUp = document.querySelector(`.LineUp`);
const forOff = document.querySelector('.for-off');
const menuClick = document.querySelectorAll('.menu-click');
const fadeinOptions = {
    threshold: 0.2,
};


// lists
const LuLists = [
    {
        img: '1.png',
        name: 'EDMを食って生きてる',
    },
    {
        img: '2.png',
        name: 'Key林（けいばやし）',
    },
    {
        img: '3.png',
        name: 'ねこ',
    },
    {
        img: '4.png',
        name: 'Smiler',
    },
    {
        img: '5.png',
        name: 'はとぽっぽくらぶ',
    },
    {
        img: 'dj_icon.png',
        name: 'カズにいにい',
    },
    {
        img: '7.png',
        name: 'Syng',
    },
    {
        img: '8.png',
        name: 'Kochanfactory',
    },
    {
        img: '9.png',
        name: 'さとうたくみ',
    },
    {
        img: '10.png',
        name: 'Takine',
    },
    {
        img: '11-dry.png',
        name: 'Dry',
    },
    {
        img: '11-choregi.png',
        name: 'ちょれぎ',
    },
    {
        img: '12.png',
        name: 'Яa¹',
    },
    {
        img: '13.png',
        name: '元カラオケバイト店員',
    },
    {
        img: '14.png',
        name: 'Bubble Tea',
    },
    {
        img: '15.png',
        name: 'Sona',
    },
    {
        img: 'dj_icon.png',
        name: 'DJ Sioki',
    },
    {
        img: '17.png',
        name: 'やぎぶた',
    },
    {
        img: '18.png',
        name: 'ツイン・ウィスピー',
    },
    {
        img: '19.png',
        name: 'インターネットボーイズ２',
    },
];

const TsLists = [
    {
        time: '13:30-13:40',
        title: 'EDMを食って生きてる',
    },
    {
        time: '13:40-13:50',
        title: 'Key林（けいばやし）',
    },
    {
        time: '13:50-14:00',
        title: 'ねこ',
    },
    {
        time: '14:00-14:10',
        title: 'Smiler',
    },
    {
        time: '14:10-14:30',
        title: 'はとぽっぽクラブ',
    },
    {
        time: '14:30-14:40',
        title: 'カズにいにい',
    },
    {
        time: '14:40-14:50',
        title: 'Syng',
    },
    {
        time: '14:50-15:00',
        title: 'Kochanfactory',
    },
    {
        time: '15:00-15:10',
        title: 'さとうたくみ',
    },
    {
        time: '15:10-15:20',
        title: 'Takine',
    },
    {
        time: '15:20-15:40',
        title: 'Dry & ちょれぎ',
    },
    {
        time: '15:40-15:50',
        title: 'Яa¹',
    },
    {
        time: '15:50-16:00',
        title: '元カラオケバイト店員',
    },
    {
        time: '16:00-16:20',
        title: 'Bubble Tea',
    },
    {
        time: '16:20-16:30',
        title: 'Sona',
    },
    {
        time: '16:30-16:40',
        title: 'DJ Sioki',
    },
    {
        time: '16:40-16:50',
        title: 'やぎぶた',
    },
    {
        time: '16:50-17:00',
        title: 'ツイン・ウィスピー',
    },
    {
        time: '17:00-17:20',
        title: 'インターネットボーイズ２',
    },
];


// menu setting
const menuOn =()=> {
    menuSlide.animate(
        {
            opacity: [0, 1],
            zIndex: ['-1', 999],
        },
        {
            duration: 400,
            easing: 'ease-out',
            fill: 'forwards',
        }
    );
    forOff.animate(
                {
            opacity: [0, 1],
            zIndex: ['-2', 998],
        },
        {
            duration: 400,
            easing: 'ease-out',
            fill: 'forwards',
        }

    );
};
const menuOff =()=> {
    menuSlide.animate(
        {
            opacity: [1, 0],
            zIndex: [999, '-1'],
        },
        {
            duration: 400,
            easing: 'ease-out',
            fill: 'forwards',
        }
    );
    forOff.animate(
                {
            opacity: [1, 0],
            zIndex: [998, '-2'],
        },
        {
            duration: 400,
            easing: 'ease-in',
            fill: 'forwards',
        }

    );

};
menuBtn.addEventListener('click', menuOn);
forOff.addEventListener('click', menuOff);
menuClick.forEach((clicked) => {
    clicked.addEventListener('click', menuOff);
});

// lineup setting
for(let i = 0; i < LuLists.length; i++){
    const LuContents = `<div class="grass lineUp-box lineUp-margin fade-in">
                            <img src="image/${LuLists[i].img}" alt="">
                            <p class="lineUp-title yellow-text">${LuLists[i].name}</p>
                        </div>`

    LineUp.insertAdjacentHTML("beforeend", LuContents);
};

// timeschedule setting
for(let i = 0; i < TsLists.length; i++){
    const TsContents = `<tr>
                        <td class="yellow-text font-size-res">${TsLists[i].time}</td>
                        <td class="white-text font-size-res">${TsLists[i].title}</td>
                        </tr>`

    TsInsertStart.insertAdjacentHTML("beforebegin", TsContents);
};

// fade-in animation
const fadeIns = document.querySelectorAll('.fade-in');

const showFadeIn = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['-20% 0', '0 0'],
            };

            const options = {
                duration: 600,
                delay: 150,
                fill: 'both',
                easing: 'ease',
            };

            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
};

const fadeInObserver = new IntersectionObserver(showFadeIn, fadeinOptions);

fadeIns.forEach((fadeIn) => {
    fadeInObserver.observe(fadeIn);
});


// fade-in for about section animation
const PFadeinOptions = {
    threshold: 0.8,
};
const pFadeIns = document.querySelector('.p-fade-in');

const showPFadeIns = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['-20% 0', '0 0'],
            };

            const options = {
                duration: 600,
                delay: 300,
                fill: 'both',
                easing: 'ease',
            };

            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
};

const PFadeInObserver = new IntersectionObserver(showPFadeIns, PFadeinOptions);
PFadeInObserver.observe(pFadeIns);

// info animaton
const InfFadeIns = document.querySelectorAll('.Inf-fade-in');

const showInfFadeIns = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['-10% 0', '0 0'],
            };

            const options = {
                duration: 600,
                delay: 150,
                fill: 'both',
                easing: 'ease',
            };

            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
};

const InfFadeInObserver = new IntersectionObserver(showInfFadeIns, fadeinOptions);
InfFadeIns.forEach((InfFadeIn) => {
    InfFadeInObserver.observe(InfFadeIn);
});


// about-subtitle animation
const ABsubtitles = document.querySelectorAll('.title-fadein');

const showABsubtitle = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                backgroundPosition: ['-100vw 0', 'center top'],
            };

            const options = {
                duration: 600,
                fill: 'both',
                easing: 'ease',
            };

            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
};

const ABsubtitleObserver = new IntersectionObserver(showABsubtitle, fadeinOptions);
ABsubtitles.forEach((ABfadeIn) => {
    ABsubtitleObserver.observe(ABfadeIn);
});

// SubTitle animation
const titleFadeIn = document.querySelector('.SubTitle-fadein');

const showTitleFadeIn = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                backgroundPosition: ['-100vw 2px', '-30px 2px'],
            };

            const options = {
                duration: 600,
                delay: 200,
                fill: 'both',
                easing: 'ease',
            };

            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
};

const titleFadeInObserver = new IntersectionObserver(showTitleFadeIn, fadeinOptions);
titleFadeInObserver.observe(titleFadeIn);


// SubTitle2 animation
const title2FadeIn = document.querySelector('.SubTitle2');

const showTitle2FadeIn = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                backgroundPosition: ['50vw 2px', '0 2px'],
                translate: ['0 0', '8% 0'],
            };

            const options = {
                duration: 600,
                delay: 200,
                fill: 'both',
                easing: 'ease',
            };

            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
};

const title2FadeInObserver = new IntersectionObserver(showTitle2FadeIn, fadeinOptions);
title2FadeInObserver.observe(title2FadeIn);

// hero animation
const heroAnimates = document.querySelectorAll('.hero-animate');

const showHeroAnimate = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const keyframes = {
                opacity: [0, 1],
                translate: ['0 -10%', '0 0']
            };

            const options = {
                duration: 600,
                delay: 150,
                fill: 'both',
                easing: 'ease',
            };

            entry.target.animate(keyframes, options);
            observer.unobserve(entry.target);
        }
    });
};

const heroAnimateObserver = new IntersectionObserver(showHeroAnimate, fadeinOptions);
heroAnimates.forEach((heroAnimate) => {
    heroAnimateObserver.observe(heroAnimate);
});