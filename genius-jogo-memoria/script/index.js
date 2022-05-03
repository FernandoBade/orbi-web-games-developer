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
let pontosNaTela = document.querySelector('.score');

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
    num = num * 100;
    setTimeout(() => {
        e.classList.add('selected');
        setTimeout(() => {
            e.classList.remove('selected');
        }, 500);
    }, num + 500);
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
        pontosNaTela.innerHTML = pontuacao;
        // alert(`Pontuação: ${pontuacao}\nVocê acertou! iniciando próximo nível...`);
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
            break;
        case 1:
            return vermelho;
            break;
        case 2:
            return amarelo;
            break;
        case 3:
            return azul;
            break;
    }
}

let proximoNivel = () => {
    pontuacao++
    ordemAleatoria();
}

let perdeu = () => {
    alert(`Você perdeu! Obrigado por ter jogado!`)
    ordem = []
    pontuacao = 0;
    ordemClick = []
    location.reload();
}

let comecarJogo = () => {
    pontosNaTela.innerHTML = `${pontuacao}`;
    alert(`Bem vindo ao jogo de memória!\nObserve as cores e clique na mesma ordem em que piscarem.\nBoa sorte!`);
    pontuacao = 0;
    proximoNivel();
}

// verde.addEventListener('click', click(0));
// vermelho.addEventListener('click', click(1));
// amarelo.addEventListener('click', click(2));
// azul.addEventListener('click', click(3));


verde.onclick = () => { click(0) };
vermelho.onclick = () => { click(1) };
amarelo.onclick = () => { click(2) };
azul.onclick = () => { click(3) };
