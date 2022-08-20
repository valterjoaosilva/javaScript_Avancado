var lamborguini = {}
lamborguini.qtdPorta = 4
lamborguini.ligado = false
lamborguini.cor = "vermelho"
lamborguini.combustivel = 100
console.log(lamborguini)
lamborguini.ligar = function() { 
    if(lamborguini.ligado) {
        console.log('lamborguini ligada')
    }else{
        this.ligado = true;
        console.log('Start lamborguini')

    }
     
}
var camaro = {}
camaro.qtdPorta = 4
camaro.ligado = false
camaro.cor = "vermelho"
camaro.combustivel = 100
console.log(camaro)
camaro.ligar = function() {
    this.ligado = true 
}

lamborguini.ligar()
lamborguini.ligar()

