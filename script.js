function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var tempo = window.document.getElementById('time')

const relogio = setInterval(function time(){
        var data = new Date()
        var hora = data.getHours()
        var minutos = data.getMinutes()
        var segundos = data.getSeconds()
        if (minutos < 10){
            minutos = `0${minutos}`
        }
        if (hora < 10){
            hora = `0${hora}`
        }
        if (segundos < 10){
            segundos = `0${segundos}`
        }
        msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`
        if (hora >= 0 && hora < 6){
            img.src = 'madrugada.jpg'
            tempo.innerHTML = 'BOA MADRUGADA!'
            document.body.style.background = 'black'
        } else if (hora >= 6 && hora < 12){
            img.src = 'manhã.jpg'
            document.body.style.background = '#e2cd9f'
            tempo.innerHTML = 'BOM DIA!'
        } else if (hora >= 12 && hora < 18){
            img.src = 'tarde.jpg'
            document.body.style.background = '#b9846f'
            tempo.innerHTML = 'BOA TARDE!'
        } else {
            img.src = 'noite.jpg'
            document.body.style.background = '#515154'
            tempo.innerHTML = "BOA NOITE!"
        }
    })
}