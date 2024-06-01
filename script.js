
function moveCircles() {
    const circleR = document.querySelector('.circleR');
    const circleL = document.querySelector('.circleL');
    const logo = document.querySelector('.logo');
    const logoo = document.querySelector('.logoo');
    const t1 = document.querySelector('.t1');
    const t2 = document.querySelector('.t2');
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const p3 = document.querySelector('.p3');
    const linkedin = document.querySelector('.linkedin');
    const whatsapp = document.querySelector('.whatsapp');
    const instagram = document.querySelector('.instagram');

    // Add animation to move the logo up
    circleR.style.animation = 'moveRight 2s forwards';
    circleL.style.animation = 'moveLeft 2s forwards';
    logo.style.animation = 'moveLogoUp 2s forwards';
    logoo.style.animation = 'moveLogooUp 2s forwards';
    t1.style.animation = 'movet1Up 2s forwards';
    t2.style.animation = 'movet2Up 2s forwards';
    p1.style.animation = 'showp1 4s forwards';
    p2.style.animation = 'showp2 4s forwards';
    p3.style.animation = 'showp3 4s forwards';
    linkedin.style.animation = 'showlinkedin 1.5s forwards';
    whatsapp.style.animation = 'showwhatsapp 1.5s forwards';
    instagram.style.animation = 'showinstagram 1.5s forwards';
}
