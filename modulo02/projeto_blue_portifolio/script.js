let nome = document.getElementById('titulo-logo');
const botao = document.getElementById('botao-logo');
const img = document.getElementById('img-logo');

botao.onclick = function(){
    if (botao.value === '1'){
        img.src = 'img/AZA.png';
        botao.value = '2';
    }
    else if(botao.value === '2'){
        img.src = 'img/nonsense.png';
        botao.value = '1';
    }
}