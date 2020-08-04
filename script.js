const red = document.querySelector('#stopLight')
const stop = document.querySelector('#stopButton')
const yellow = document.querySelector('#slowLight')
const slow = document.querySelector('#slowButton')
const green = document.querySelector('#goLight')
const go = document.querySelector('#goButton')

stop.addEventListener('click', () => {
  red.style.backgroundColor = 'red'
  yellow.style.backgroundColor = 'black'
  green.style.backgroundColor = 'black'
})

slow.addEventListener('click', () => {
  yellow.style.backgroundColor = 'yellow'
  red.style.backgroundColor = 'black'
  green.style.backgroundColor = 'black'
})

go.addEventListener('click', () => {
  green.style.backgroundColor = 'green'
  red.style.backgroundColor = 'black'
  yellow.style.backgroundColor = 'black'
})