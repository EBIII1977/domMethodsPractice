const bodyElement = document.querySelector('body')

const buttonDiv = document.createElement('button')
const text =document.createTextNode('Remove')
buttonDiv.appendChild(text)

bodyElement.append(buttonDiv)

let makeMainDiv = document.createElement('main')
bodyElement.append(makeMainDiv)

const reset_button = document.querySelector('button')
reset_button.addEventListener('click', function() {
      makeMainDiv.remove('main')
})

let imgDiv = document.createElement('img')
imgDiv.className = 'image'
imgDiv.src = './burger.jpg'

let mainElement = document.querySelector('main')
mainElement.append(imgDiv)

let aDiv = document.createElement('A')
aDiv.className = 'link'
aDiv.append('Try out this website about food') 
aDiv.href = 'https://www.foodnetwork.com/'
mainElement.append(aDiv)
