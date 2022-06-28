function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // BOMDIA!
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
  } else {
    //BOA NOITE!
    document.body.style.background = '#515154'
    img.src = 'fotonoite.png'
  }
}
