const ElementValue = document.querySelector('#value');
const clickDecrement = document.querySelector('button[data-action="decrement"]');
const clickIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

clickDecrement.addEventListener('click', () => {
    counterValue -= 1;
    ElementValue.textContent = counterValue;
});
clickIncrement.addEventListener('click', () => {
    counterValue += 1;
    ElementValue.textContent = counterValue;
});