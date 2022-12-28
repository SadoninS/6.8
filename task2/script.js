//  Вариант №1 
// document.querySelector('#consoleLog').onclick = function() {alert('Данный метод выводит сообщение в консоль');}
// document.querySelector('#alert').onclick = function() {alert('Данный метод выводит всплывающее окно с некой информацией');}
// document.querySelector('#prompt').onclick = function() {alert('Данный метод выводит всплывающее окно с формой ввода данных');}

//  Вариант №2 
document.querySelector('#consoleLog').addEventListener('click', 
  (e) => {
    alert('Данный метод выводит сообщение в консоль');
})

document.querySelector('#alert').addEventListener('click', 
  (e) => {
    alert('Данный метод выводит всплывающее окно с некой информацией');
})

document.querySelector('#prompt').addEventListener('click', 
  (e) => {
    alert('Данный метод выводит всплывающее окно с формой ввода данных');
})