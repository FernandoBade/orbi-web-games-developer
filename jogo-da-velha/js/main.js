var jogador = null
var vencedor = null
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor != null) {
        return;
    }
    const quadrado = document.getElementById(id)
    if (quadrado.innerHTML !== '-') {
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    verificaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function verificaVencedor() {
    const quadrado1 = document.getElementById(1)
    const quadrado2 = document.getElementById(2)
    const quadrado3 = document.getElementById(3)
    const quadrado4 = document.getElementById(4)
    const quadrado5 = document.getElementById(5)
    const quadrado6 = document.getElementById(6)
    const quadrado7 = document.getElementById(7)
    const quadrado8 = document.getElementById(8)
    const quadrado9 = document.getElementById(9)
    if (verificaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if (verificaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;

    }
    if (verificaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;

    }
    if (verificaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;

    }
    if (verificaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;

    }
    if (verificaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;

    }
    if (verificaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;

    }
    if (verificaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }

}

function mudarVencedor(quadrado) {
    setTimeout(function () {
        vencedor = quadrado.innerHTML;
        alert("O vencedor é " + vencedor);
    }, 500);
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.backgroundColor = "lightgreen";
    quadrado2.style.backgroundColor = "lightgreen";
    quadrado3.style.backgroundColor = "lightgreen";
}

function verificaSequencia(quadrado1, quadrado2, quadrado3) {
    var ehIgual = false;
    if (quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        ehIgual = true;
    }
    return ehIgual;
}


function reiniciar() {
    location.reload();
}