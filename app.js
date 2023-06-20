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

const musica = new Audio('/audio/musica.mp3')
const barbieSound = new Audio('/audio/barbie.mp3')
const barbieSound2 = new Audio('/audio/barbie2.mp3')
const barbieSound3 = new Audio('/audio/barbie3.mp3')

play.addEventListener('click', () => {
  musica.play()
  aPlay.classList.add('hidden')
  aPause.classList.toggle('hidden')
})

barbieRosa.addEventListener('click', () => {
  barbieSound.play()
})

barbieAzul.addEventListener('click', () => {
  barbieSound2.play()
})

barbieAmarilla.addEventListener('click', () => {
  barbieSound3.play()
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
