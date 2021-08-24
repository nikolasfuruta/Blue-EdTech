const img = document.getElementById('img1');
const botao = document.getElementById('botao');

function troca_img(){
    if (botao.value === '1'){
        img.src = 'pet2.jpg';
        botao.value = '2';

    }
    else {
        img.src = 'pet1.jpg';
        botao.value = '1';
    } 
}
