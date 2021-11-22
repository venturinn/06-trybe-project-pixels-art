// Aplicando cores para a palheta de corres

let palheta = document.getElementsByClassName('color');

let cores = ['Black', 'pink', 'yellow', 'green']

for (let i = 0; i < palheta.length; i += 1) {

    palheta[i].style.backgroundColor = cores[i]

}