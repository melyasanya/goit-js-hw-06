const counterValue = document.querySelector('#value')

const decrBtn = document.querySelector('button[data-action="decrement"]')

const incrBtn = document.querySelector('button[data-action="increment"]')

decrBtn.addEventListener('click', () => {
    const counter = Number(counterValue.textContent)
   counterValue.textContent = counter - 1
})

incrBtn.addEventListener('click', () => {
    const counter = Number(counterValue.textContent)
    counterValue.textContent = counter + 1
})