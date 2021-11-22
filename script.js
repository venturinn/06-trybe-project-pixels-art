// Aplicando cores para a palheta de corres

let palheta = document.getElementsByClassName('color');

let cores = ['Black', 'pink', 'yellow', 'green']

for (let i = 0; i < palheta.length; i += 1) {

    palheta[i].style.backgroundColor = cores[i]

}

// Adicionando 25 pixels ao elemento id pixel-board

let pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i += 1) {

    let pixel = document.createElement('div');

    pixel.className = 'pixel';
    pixel.style.height = '40px';
    pixel.style.width = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.style.backgroundColor = 'white';

    pixelBoard.appendChild(pixel);

}

// Definindo a cor preta como sendo a cor inicial

palheta[0].className = 'color select';

// Aplicando a seleção das cores da palheta conforme o click
// Lembrando: a variável palheta possui o array com as 4 opções de cor


function selectReset() {
    for (let i = 0; i < palheta.length; i += 1) {
        palheta[i].className = 'color';
    }
}

function select01(event) {
    selectReset()
    palheta[0].className = 'color select';
}

function select02(event) {
    selectReset()
    palheta[1].className = 'color select';
}

function select03(event) {
    selectReset()
    palheta[2].className = 'color select';
}

function select04(event) {
    selectReset()
    palheta[3].className = 'color select';
}

palheta[0].addEventListener('click', select01);
palheta[1].addEventListener('click', select02);
palheta[2].addEventListener('click', select03);
palheta[3].addEventListener('click', select04);


// Pintando os pixels com a cor selecionada

function paint(event) {

    let selectColor = document.querySelector('.select');
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