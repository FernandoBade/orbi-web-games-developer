// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

let ordem = [];
let ordemClick = [];
let pontuacao = 0;

let verde = document.querySelector('.verde');
let vermelho = document.querySelector('.vermelho');
let amarelo = document.querySelector('.amarelo');
let azul = document.querySelector('.azul');

//criacao das cores aleatoriamente

let ordemAleatoria = () => {
    let ordemCor = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCor;
    ordemClick = [];

    for (let i in ordem) {
        let corElemento = criaCorElemento(ordem[i]);
        corLight(corElemento, Number((i) + 1));
    }
}

//acende a próxima cor

let corLight = (e, num) => {
    num = num * 50;
    setTimeout(() => {
        e.classList.add('selected');
    }, num + 250);
    setTimeout(() => {
        e.classList.remove('selected');
    });
}

//confere a ordem das jogadas

let confereOrdem = () => {
    for (let i in ordemClick) {
        if (ordem[i] !== ordemClick[i]) {
            perdeu();
            break;
        }
    }
    if (ordem.length === ordemClick.length) {
        alert(`Pontuação: ${pontuacao}\nVocê acertou! iniciando próximo nível...`);
        proximoNivel();
    }
}

//funcao para o click do jogador

let click = (cor) => {
    ordemClick[ordemClick.length] = cor;
    criaCorElemento(cor).classList.add('selected');
    setTimeout(() => {
        criaCorElemento(cor).classList.remove('selected');
        confereOrdem();
    }, 250);
}


//funcao que retorna a cor

let criaCorElemento = (cor) => {
    switch (cor) {
        case 0:
            return verde;
        case 1:
            return vermelho;
        case 2:
            return amarelo;
        case 3:
            return azul;
    }
}

let proximoNivel = () => {
    pontuacao++
    ordemAleatoria();
}

let perdeu = () => {
    alert(`Pontuação: ${pontuacao}\nVocê perdeu! Clique em OK para iniciar um novo jogo`);
    ordem = []
    ordemClick = []
    comecarJogo();
}

let comecarJogo = () => {
    alert(`Bem vindo ao jogo de memória!\nIniciando um novo jogo...`);
    pontuacao = 0; 
    proximoNivel();
}

// verde.addEventListener('click', click(0));
// vermelho.addEventListener('click', click(1));
// amarelo.addEventListener('click', click(2));
// azul.addEventListener('click', click(3));


verde.onclick = () => { click(0)};
vermelho.onclick = () => { click(1)};
amarelo.onclick = () => { click(2)};
azul.onclick = () => { click(3)};




comecarJogo();