const one = document.querySelector('#one');
const input = document.querySelector('input');
const buttons = document.querySelectorAll('.digit');
const clear = document.querySelector('.clear');


buttons.forEach(item=> item.addEventListener('click',()=> input.value += item.textContent));
clear.addEventListener('click', () => input.value = '');


