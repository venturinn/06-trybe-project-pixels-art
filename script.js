// Aplicando cores para a palheta de corres

let palheta = document.getElementsByClassName('color');

let cores = ['black', 'pink', 'yellow', 'green']

for (let i = 0; i < palheta.length; i += 1) {

    palheta[i].style.backgroundColor = cores[i]

}


// Adicionando 25 pixels ao elemento id pixel-board

let pixelBoard = document.getElementById('pixel-board');

let pixelNumer = 25;

creatPixels();

function creatPixels() {

    for (let i = 0; i < pixelNumer; i += 1) {

        let pixel = document.createElement('div');

        pixel.className = 'pixel';
        pixel.style.height = '40px';
        pixel.style.width = '40px';
        pixel.style.border = '1px solid black';
        pixel.style.display = 'inline-block';
        pixel.style.backgroundColor = 'white';

        pixelBoard.appendChild(pixel);
    }
}

// Definindo a cor preta como sendo a cor inicial

palheta[0].className = 'selected color';

// Aplicando a seleção das cores da palheta conforme o click
// Lembrando: a variável palheta possui o array com as 4 opções de cor


function selectReset() {
    for (let i = 0; i < palheta.length; i += 1) {
        palheta[i].className = 'color';
    }
}

function select01(event) {
    selectReset()
    palheta[0].className = 'color selected';
}

function select02(event) {
    selectReset()
    palheta[1].className = 'color selected';
}

function select03(event) {
    selectReset()
    palheta[2].className = 'color selected';
}

function select04(event) {
    selectReset()
    palheta[3].className = 'color selected';
}

palheta[0].addEventListener('click', select01);
palheta[1].addEventListener('click', select02);
palheta[2].addEventListener('click', select03);
palheta[3].addEventListener('click', select04);


// Pintando os pixels com a cor selecionada

function paint(event) {

    let selectColor = document.querySelector('.selected');
    let color = selectColor.style.backgroundColor;

    if (event.target.className === 'pixel') {
        event.target.style.backgroundColor = color;
    }
}

document.addEventListener('click', paint);

// Limpando o quadro de Pixels:


function clear() {

    let allPixels = document.getElementsByClassName('pixel');

    for (let i = 0; i < allPixels.length; i += 1) {

        allPixels[i].style.backgroundColor = 'white';
    }
}

let button = document.querySelector('#clear-board');
button.addEventListener('click', clear);

// Gerando um quadro com tamanho escolhido pelo usuário 


// Função para zerar os pixels

let pixelBoard2 = document.getElementById('pixel-board')
let pixels = document.getElementsByClassName('pixel')

function resetBoard() {

    for (; pixels.length > 0;) {
        pixelBoard2.removeChild(pixels[0]);
    }
}

function newBoard(event) {


    if (event.key === 'Enter' || event.type === 'click') {

        if (enter.value === '') {
            alert('Board inválido!');
        } else if (enter.value <= 5) {

            pixelNumer = 25;
            pixelBoard2.style.height = '210px';
            pixelBoard2.style.width = '210px';
            resetBoard();
            creatPixels();

        } else if (enter.value > 50) {

            pixelNumer = 2500;
            pixelBoard2.style.height = '2100px';
            pixelBoard2.style.width = '2100px';
            resetBoard();
            creatPixels();

        } else {

            pixelNumer = enter.value * enter.value;
            let lado = ((enter.value * 40) + (enter.value * 2));
            let ladoString = String(lado);

            pixelBoard2.style.height = ladoString + 'px';
            pixelBoard2.style.width = ladoString + 'px';

            resetBoard();
            creatPixels();
        }
    }
}

let newClick = document.getElementById('generate-board');
newClick.addEventListener('click', newBoard);

let enter = document.getElementById('board-size');
enter.addEventListener('keypress', newBoard);