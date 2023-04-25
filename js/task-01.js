const mainList = document.querySelector('ul#categories',)

console.log(`Number of categories: ${mainList.children.length}`)

const mainListItem = document.querySelectorAll('li.item')

mainListItem.forEach(element => {
 console.log(`Categories: ${element.firstElementChild.textContent}`)
 const elements = element.lastElementChild.querySelectorAll('li')
 console.log(`Elements: ${elements.length}`) 
}
);




