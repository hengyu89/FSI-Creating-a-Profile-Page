let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

// First div tag
let container = document.createElement('div')
container.setAttribute('class', 'dog-content')
// img tag right after the "div" tag
let img = document.createElement("img")
img.setAttribute('class', 'dog-image')
img.setAttribute('src', './assets/rizzo.jpg')
container.append(img)
// Create the second "div" tag
let container2 = document.createElement('div')
container2.setAttribute('class', 'dog-details')
header = document.createElement('h3')
header.append('Description.')
container2.append(header)
container.append(container2)
content.append(container)
// Create 'p' tag
let p = document.createElement("p")
content = document.createTextNode('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
p.append(content)
container2.append(p)
// Create second 'h3' tag
header = document.createElement('h3')
header.append('Feeding Times:')
container2.append(header)
// Create 'ul tag
ul = document.createElement('ul')
header = document.createElement('li')
header.append('9:00 am')
ul.append(header)

header = document.createElement('li')
header.append('12:00 pm')
ul.append(header)

header = document.createElement('li')
header.append('5:00 pm')
ul.append(header)
container2.append(ul)