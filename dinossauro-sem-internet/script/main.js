const dino = document.getElementById('dinossauro');
const fundo = document.getElementById('fundo');
const somPulo = document.getElementById('somPulo');
const fim = document.getElementById('fim');
let estaPulando = false
let posicao = 0;

let gameOver = false;


function espacoPula(e) {
    if (e.keyCode === 32) {
        if (!estaPulando) {
            pula();
        }
    }
}

function pula() {
    estaPulando = true
    somPulo.play();
    let intervaloPulo = setInterval(() => {
        if (posicao >= 150) {
            //descendo
            clearInterval(intervaloPulo);
            let intervaloQueda = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(intervaloQueda);
                    estaPulando = false;
                } else {
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20);
        } else {
            //subindo
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criarCactus() {

    const cactus = document.createElement('div');
    let posicaoCactus = 2000;
    let tempoAleatorio = Math.random() * 6000;

    if (gameOver) return;

    cactus.classList.add('cactus');
    fundo.appendChild(cactus);
    cactus.style.left = posicaoCactus + 'px';

    let tempoMovimentacao = setInterval(() => {
        if (posicaoCactus < -60) {
            //Saiu da tela
            clearInterval(tempoMovimentacao);
            fundo.removeChild(cactus);
        } else if (posicaoCactus > 0 && posicaoCactus < 60 && posicao < 60) {
            //Game over
            gameOver = true;
            posicao = 5000;
            clearInterval(tempoMovimentacao);
            document.body.innerHTML = `
            <div class="fim" id="fim">
            <img class="game-over-img" src="./img/game-over.png">
            <audio autoplay>
            <source src="./sound/gameover.wav" type="audio/wav">
            </audio>
            <img class="btn" src="./img/btn.png" onclick="recarregaPagina()">
            `;
        } else {
            posicaoCactus -= 10;
            cactus.style.left = posicaoCactus + 'px';
        }
    }, 20);
    setTimeout(criarCactus, tempoAleatorio);
}

function recarregaPagina(){
    return location.reload();
}

criarCactus();
document.addEventListener('keydown', espacoPula);