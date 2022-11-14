const data = [
  {
    img: 'url("./images/image2.1.jpg")',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
  },
  {
    img: 'url("./images/image3.jpg")',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
  },
  {
    img: 'url("./images/image2.jpg")',
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
  },
]

let currentIndex = 0

const buttons = document.getElementsByClassName('slider__button')
const circle = document.getElementsByClassName('slider__circle')

const img = document.querySelector('.slider__images')
const city = document.getElementById('city')
const area = document.getElementById('area')
const time = document.getElementById('time')
const cost = document.getElementById('cost')

function setCurrentParams(index) {
  for (let i = 0; i < data.length; i++) {
    buttons[i].classList.remove('slider__button--current')
    circle[i].classList.remove('slider__circle--current')
  }
  buttons[index].classList.add('slider__button--current')
  circle[index].classList.add('slider__circle--current')

  img.style.backgroundImage = data[index].img
  area.textContent = data[index].area
  time.textContent = data[index].time
  cost.textContent = data[index].cost
  city.textContent = data[index].city
  currentIndex = index
}
const arrowLeft = document.querySelector('.slider__arrow--left')
arrowLeft.addEventListener('mousedown', e => {
  if (currentIndex == 0) {
    setCurrentParams(data.length - 1)
  } else {
    setCurrentParams(currentIndex - 1)
  }
})

const arrowRight = document.querySelector('.slider__arrow--right')
arrowRight.addEventListener('mousedown', e => {
  if (currentIndex < data.length - 1) {
    setCurrentParams(currentIndex + 1)
  } else {
    setCurrentParams(0)
  }
})

for (let i = 0; i < 3; i++) {
  const Circle = document.querySelectorAll('.slider__circle')[i]
  Circle.addEventListener('mousedown', function() {
    setCurrentParams(i)
  })

  const Button = document.querySelectorAll('.slider__button')[i]
  Button.addEventListener('mousedown', function() {
    setCurrentParams(i)
  })
}
