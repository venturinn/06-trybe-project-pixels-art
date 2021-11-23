// Aplicando cores para a palheta de corres, sendo a primeira black e as outras aleatórias

const palheta = document.getElementsByClassName('color');

const cores = ['black'];

for (let i = 0; i < palheta.length; i += 1) {
  const r = String(Math.random() * 255);
  const g = String(Math.random() * 255);
  const b = String(Math.random() * 255);

  cores.push(`${'rgb('}${r},${g},${b})`);
  palheta[i].style.backgroundColor = cores[i];
}

// Adicionando 25 pixels ao elemento id pixel-board

const pixelBoard = document.getElementById('pixel-board');

let pixelNumer = 25;

function creatPixels() {
  for (let i = 0; i < pixelNumer; i += 1) {
    const pixel = document.createElement('div');

    pixel.className = 'pixel';
    pixel.style.height = '40px';
    pixel.style.width = '40px';
    pixel.style.border = '1px solid black';
    pixel.style.display = 'inline-block';
    pixel.style.backgroundColor = 'white';

    pixelBoard.appendChild(pixel);
  }
}

creatPixels();

// Definindo a cor preta como sendo a cor inicial

palheta[0].className = 'selected color';

// Aplicando a seleção das cores da palheta conforme o click
// Lembrando: a variável palheta possui o array com as 4 opções de cor

function selectReset() {
  for (let i = 0; i < palheta.length; i += 1) {
    palheta[i].className = 'color';
  }
}

const classColor = 'color selected';

function select01() {
  selectReset();
  palheta[0].className = classColor;
}

function select02() {
  selectReset();
  palheta[1].className = classColor;
}

function select03() {
  selectReset();
  palheta[2].className = classColor;
}

function select04() {
  selectReset();
  palheta[3].className = classColor;
}

palheta[0].addEventListener('click', select01);
palheta[1].addEventListener('click', select02);
palheta[2].addEventListener('click', select03);
palheta[3].addEventListener('click', select04);

// Pintando os pixels com a cor selecionada

function paint(event) {
  const selectColor = document.querySelector('.selected');
  const color = selectColor.style.backgroundColor;

  if (event.target.className === 'pixel') {
    const catEvent = event.target;
    catEvent.style.backgroundColor = color;
  }
}

document.addEventListener('click', paint);

// Limpando o quadro de Pixels:

function clear() {
  const allPixels = document.getElementsByClassName('pixel');

  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', clear);

// Gerando um quadro com tamanho escolhido pelo usuário

// Função para zerar os pixels

const pixelBoard2 = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');

function resetBoard() {
  for (; pixels.length > 0;) {
    pixelBoard2.removeChild(pixels[0]);
  }
}

const enter = document.getElementById('board-size');

function newBoard2() {
  if (enter.value <= 5) {
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
  }
}

function newBoard3() {
  pixelNumer = enter.value * enter.value;
  const lado = ((enter.value * 40) + (enter.value * 2));
  const ladoString = String(lado);
  pixelBoard2.style.height = `${ladoString}px`;
  pixelBoard2.style.width = `${ladoString}px`;
  resetBoard();
  creatPixels();
}

function newBoard() {
  if (enter.value === '') {
    alert('Board inválido!');
  } else if (enter.value <= 5 || enter.value > 50) {
    newBoard2();
  } else {
    newBoard3();
  }
}

enter.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    newBoard();
  }
}, false);

const newClick = document.getElementById('generate-board');
newClick.addEventListener('click', newBoard);
