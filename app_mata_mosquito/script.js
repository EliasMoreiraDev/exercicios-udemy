var altura = 0
var largura = 0
var vidas = 1
function redimencionarPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
redimencionarPalco()

function posicaoRandomica() {

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        if(vidas>3){
            window.location.href = 'game_over.html'
        }else{
        document.getElementById('v' + vidas).src = 'imagens/imagens/coracao_vazio.png'
        vidas++
        }
    }
    var posicaoX = Math.floor(Math.random() * largura) - 100
    var posicaoY = Math.floor(Math.random() * altura) - 100
    console.log(posicaoX,  posicaoY)
    posicaoX = posicaoX < 0? 0 : posicaoX
    posicaoY = posicaoY < 0? 0 : posicaoY


    var img = document.createElement('img')
    img.src = 'imagens/imagens/mosca.png'
    img.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

    img.style.position = 'absolute'
    img.style.left = posicaoX+'px'
    img.style.top = posicaoY +'px'
    img.id = 'mosquito'
    img.onclick = function(){
        this.remove()
    }
    document.body.appendChild(img)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}