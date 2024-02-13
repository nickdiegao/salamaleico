const titulo = document.getElementById('titulo');
const imagem = document.getElementById('imagem');
let botaoSim = document.getElementById('botaoSim');
let botaoNao = document.getElementById('botaoNao');

let count = 0

function maisUmaVez() {
    botaoNao.addEventListener('click', function() {
        let estilo = window.getComputedStyle(botaoSim, null).getPropertyValue('font-size');
        let tamanhoTotal = parseFloat(estilo)
        botaoSim.style.fontSize = (tamanhoTotal + 2) + 'px'  
        titulo.innerHTML = `É sériooooooooooooooooooooo?`
        count++
        if (count > 3) {
            titulo.innerHTML = `Eu posso ficar nessa brincadeira o dia todo!`
        } if (count > 6) {
            titulo.innerHTML = `Aceita isso logo mulher`
            imagem.src = 'imgs/solo-leveling.jpg'
        }
    })
}

maisUmaVez()

function assimQueEuGosto() {
    botaoSim.addEventListener('click', function() {
        document.body.innerHTML = `
        <h1 class="titulo1" id="titulo">Eu te amo</h1>
        <img src="imgs/alice.gif" alt="cachorrokkkkkkkkkk" class="imagem-final-1" id="imagem">
        <img src="imgs/kuromi.jpg" alt="cachorrokkkkkkkkkk" class="imagem-final-2" id="imagem">
        <img src="imgs/1.jpg" alt="cachorrokkkkkkkkkk" class="imagem-final-3" id="imagem">
        <img src="imgs/hutao.jpg" alt="cachorrokkkkkkkkkk" class="imagem-final-4" id="imagem">
        <img src="imgs/IMG_2510.jpg" alt="cachorrokkkkkkkkkk" class="imagem-final-5" id="imagem">
        `
    })
}

assimQueEuGosto()