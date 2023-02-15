  setTimeout(() => {
    window.location.reload(1);
  }, 30000);

function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#img')
    
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora > 0 && hora < 6) {
        msg.innerHTML = `Agora são ${hora} horas e ${min}, boa madrugada!`
        img.src = 'img/madrugada.jpg'
        document.body.style.background = '#202020'
    } else if (hora < 12) {
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos, bom dia!`
        document.body.style.background = '#f1fcb4'
        img.src = 'img/manha.jpg'
    } else if (hora < 18) {
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos, boa tarde!`
        img.src = 'img./tarde.jpg'
        document.body.style.background = '#ffa07a'
    } else {
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos, boa noite!`
        img.src = 'img/noite.jpg'
        document.body.style.background =   '#9d7aff'
    }
}