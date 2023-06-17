const aPlay = document.querySelector('.aPlay')
const aPause = document.querySelector('.aPause')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const fecha = document.querySelector('.fecha')
const invitacion = document.querySelector('.invitacion')
const modalInvitacion = document.querySelector('.modalInvitacion')
const modalContador = document.querySelector('.modalContador')
// const star = document.querySelector('.star')

const barbieRosa = document.querySelector('.barbieRosa')
const barbieAzul = document.querySelector('.barbieAzul')
const barbieAmarilla = document.querySelector('.barbieAmarilla')

const pincelRosa = document.querySelector('.pincelRosa')
const pincelAzul = document.querySelector('.pincelAzul')
const pincelAmarillo = document.querySelector('.pincelAmarillo')

const musicas = ['/audio/musica.mp3', '/audio/musica2.mp3', '/audio/musica3.mp3']
const musica = new Audio(musicas[Math.floor(Math.random() * musicas.length)])
const marioSound = new Audio('/audio/mario.mp3')
const hongoSound = new Audio('/audio/hongo.mp3')
const luigiSound = new Audio('/audio/luigi.mp3')
const peaches = ['/audio/peach.mp3', '/audio/peach2.mp3']
const peachSound = new Audio(peaches[Math.floor(Math.random() * peaches.length)])
const bowsers = ['/audio/bowser.mp3', '/audio/bowser2.mp3']
const bowserSound = new Audio(bowsers[Math.floor(Math.random() * bowsers.length)])

play.addEventListener('click', () => {
  musica.play()
  aPlay.classList.add('hidden')
  aPause.classList.toggle('hidden')
})

pause.addEventListener('click', () => {
  musica.pause()
  aPlay.classList.toggle('hidden')
  aPause.classList.toggle('hidden')
})

invitacion.addEventListener('click', () => {
  modalInvitacion.classList.toggle('hidden')
  modalContador.classList.add('hidden')
  star.classList.add('hidden')
})

fecha.addEventListener('click', () => {
  modalContador.classList.toggle('hidden')
  modalInvitacion.classList.add('hidden')
  star.classList.toggle('hidden')
})

pincelRosa.addEventListener('click', () => {
  // pincelRosaSound.play()
  barbieRosa.classList.remove('hidden')
  barbieAzul.classList.add('hidden')
  barbieAmarilla.classList.add('hidden')
})

pincelAzul.addEventListener('click', () => {
  barbieAzul.classList.remove('hidden')
  barbieRosa.classList.add('hidden')
  barbieAmarilla.classList.add('hidden')
})

pincelAmarillo.addEventListener('click', () => {
  barbieAmarilla.classList.remove('hidden')
  barbieRosa.classList.add('hidden')
  barbieAzul.classList.add('hidden')
})
