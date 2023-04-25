const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients')

const items = ingredients.map(option => {
  const itemEl = document.createElement('li')
  itemEl.textContent = option
  itemEl.classList.add('item')
  return itemEl
} 
  )

  list.append(...items)


