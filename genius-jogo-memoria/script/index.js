// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const ordemJogo = []; 
const ordemJogador = [];
const pontuacao = 0;

const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const azul = document.querySelector('.azul');

const ordemAleatoria = () => {
    const ordem = Math.floor(Math.random() * 4);
    ordemJogo[ordemJogo.length] = ordem;

    for(let i in ordem){
    let corJogada = createColorElement(order[i]);
    corLight(corJogada, Number([i] + 1));
    }
}

let corLight = (e, num) => {
    num = num * 500;
    setTimeout(() => {
        e.classList.add('selected');
    }, num - 250);
    setTimeout(() => {
        e.classList.remove('selected');
    }, num + 250);
}


