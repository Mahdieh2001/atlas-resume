var slice = 360 / 16;
var radius = 387.5;
var circleL = document.getElementById('circleL');
var circleR = document.getElementById('circleR');
var offsetToCircleCenter = parseInt(circleL.offsetWidth / 2); // assumes parent is square
var offsetToChildCenter = 0;
var totalOffset = offsetToCircleCenter - offsetToChildCenter;

// Function to create small circle elements
function createSmallCircle() {
    var childdiv = document.createElement('div');
    childdiv.className = 'smallCircle';
    childdiv.style.position = 'absolute';
    return childdiv;
}

// Create and append small circles to both circles
for (var i = 1; i <= 16; ++i) {
    var smallCircleL = createSmallCircle();
    var smallCircleR = createSmallCircle();
    var y = Math.sin((slice * i) * (Math.PI / 180)) * radius;
    var x = Math.cos((slice * i) * (Math.PI / 180)) * radius;
    smallCircleL.style.top = (y + totalOffset + window.innerHeight / 2 - 465).toString() + "px";
    smallCircleL.style.left = (x + totalOffset + window.innerWidth / 2 - 966).toString() + "px";
    smallCircleR.style.top = (y + totalOffset + window.innerHeight / 2 - 465).toString() + "px";
    smallCircleR.style.left = (x + totalOffset + window.innerWidth / 2 - 966).toString() + "px";
    circleL.appendChild(smallCircleL);
    circleR.appendChild(smallCircleR);
}

function moveCircles() {
    const smallCircles = document.getElementsByClassName('smallCircle');
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
    
    // Apply transition effect to small circles
    for (let i = 0; i < smallCircles.length; i++) {
        smallCircles[i].style.transition = 'left 2s, top 2s';
    }
    
    // Move circles for different j values
    for (let j = 1; j <= 60; j++) {
        for (let i = 0; i < smallCircles.length; i++) {
            var y = Math.sin((slice * (i + 1) + j) * (Math.PI / 180)) * radius;
            var x = Math.cos((slice * (i + 1) + j) * (Math.PI / 180)) * radius;
            smallCircles[i].style.top = (y + totalOffset + window.innerHeight / 2 - 465).toString() + "px";
            smallCircles[i].style.left = (x + totalOffset + window.innerWidth / 2 - 966).toString() + "px";
        }
    }
    
    // Add animation to move the logo up
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

    // Add classes to move circles
    const circleL = document.getElementById('circleL');
    const circleR = document.getElementById('circleR');
    circleL.classList.add('move-left');
    circleR.classList.add('move-right');
}
