
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
    const circleRR = document.querySelector('.circleRR');
    const circleLL = document.querySelector('.circleLL');

    circleR.style.animation = 'moveRight 3s forwards';
    circleL.style.animation = 'moveLeft 3s forwards';
    logo.style.animation = 'moveLogoUp 2s forwards';
    logoo.style.animation = 'moveLogooUp 2s forwards';
    t1.style.animation = 'movet1Up 2s forwards';
    t2.style.animation = 'movet2Up 2s forwards';
    p1.style.animation = 'showp1 3s forwards';
    p2.style.animation = 'showp2 3s forwards';
    p3.style.animation = 'showp3 3s forwards';
    linkedin.style.animation = 'showlinkedin 1.5s forwards';
    whatsapp.style.animation = 'showwhatsapp 1.5s forwards';
    instagram.style.animation = 'showinstagram 1.5s forwards';
    circleRR.style.animation = 'showR 3s forwards';
    circleLL.style.animation = 'showL 3s forwards';

}

function moveCircleLL() {
    const circleLL = document.querySelector('.circleLL');
    const circleRR = document.querySelector('.circleRR');
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
    const diskmenu = document.querySelector('.diskmenu');
    // const home = document.querySelector('.home');

    circleLL.style.animation = 'moveLL 2s forwards';
    circleRR.style.animation = 'moveRR 2s forwards';
    logo.style.animation = 'moveLogo 2s forwards';
    logoo.style.animation = 'moveLogoo 2s forwards';
    t1.style.animation = 'movet1 2s forwards';
    t2.style.animation = 'movet2 2s forwards';
    p1.style.animation = 'movep1 2s forwards';
    p2.style.animation = 'movep2 2s forwards';
    p3.style.animation = 'movep3 2s forwards';
    linkedin.style.animation = 'movelinkedin 2s forwards';
    whatsapp.style.animation = 'movewhatsapp 2s forwards';
    instagram.style.animation = 'moveinstagram 2s forwards';
    diskmenu.style.animation = 'showdisk 2s forwards';
    // home.style.animation = 'moveH 2s forwards';
}

function moveCircleRR() {
    const circleLLR = document.querySelector('.circleLL');
    const circleRRR = document.querySelector('.circleRR');
    const logo = document.querySelector('.logo');
    const logoo = document.querySelector('.logoo');
    const t1 = document.querySelector('.t1');
    const t2 = document.querySelector('.t2');
    const p1 = document.querySelector('.p1');
    const p2R = document.querySelector('.p2');
    const p3R = document.querySelector('.p3');
    const linkedin = document.querySelector('.linkedin');
    const whatsapp = document.querySelector('.whatsapp');
    const instagram = document.querySelector('.instagram');
    // const home = document.querySelector('.home');

    circleLLR.style.animation = 'moveLLR 2s forwards';
    circleRRR.style.animation = 'moveRRR 2s forwards';
    logo.style.animation = 'moveLogo 2s forwards';
    logoo.style.animation = 'moveLogoo 2s forwards';
    t1.style.animation = 'movet1 2s forwards';
    t2.style.animation = 'movet2 2s forwards';
    p1.style.animation = 'movep1 2s forwards';
    p2R.style.animation = 'movep2R 2s forwards';
    p3R.style.animation = 'movep3R 2s forwards';
    linkedin.style.animation = 'movelinkedin 2s forwards';
    whatsapp.style.animation = 'movewhatsapp 2s forwards';
    instagram.style.animation = 'moveinstagram 2s forwards';
    // home.style.animation = 'moveH 2s forwards';
}

const items = document.querySelectorAll('.item');
const radius = 680; // Radius of the disc
let angle = 0;

function moveItemsUp() {
  angle += 30; // Adjust the rotation angle as needed
  updateItemsPosition();
}

function moveItemsDown() {
  angle -= 30; // Adjust the rotation angle as needed
  updateItemsPosition();
}

function updateItemsPosition() {
  items.forEach((item, index) => {
    const itemAngle = (angle + 360 / items.length * index) % 360;
    const itemX = radius * Math.cos(itemAngle * Math.PI / 180);
    const itemY = radius * Math.sin(itemAngle * Math.PI / 180);
    item.style.transform = `translate(${itemX}px, ${itemY}px)`;
  });
}

updateItemsPosition(); // Initialize item positions
