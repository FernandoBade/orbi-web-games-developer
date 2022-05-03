const yourShip = document.getElementById('playerShooter');
const playArea = document.getElementById('playerShooter');


//funcoes de movimento e tiro
function flyShip(e) {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveUp();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveDown();
    } else if (e.key === ' ') {
        e.preventDefault();
        fireLaser();
    }
}

//funcao de movimento para cima
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === '5px') {
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = position + 'px';
    }
}

//funcao de movimento para baixo
function moveDown() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === '505px') {
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = position + 'px';
    }
}

//funcao de tiro
function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}


//funcao de criar o laser 
function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = './img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = xPosition + 'px';
    newLaser.style.top = (yPosition - 10) + 'px';
    return newLaser;
}

//funcaode movimentar o laser 
function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);

        if (xPosition === 340) {
            laser.remove();
        } else {
            laser.style.left = (xPosition + 8) + 'px';
        }

    }, 10);
}

window.addEventListener('keydown', flyShip);