//  Вариант №1 
// document.querySelector('#consoleLog').onclick = function() {alert('Данный метод выводит сообщение в консоль');}
// document.querySelector('#alert').onclick = function() {alert('Данный метод выводит всплывающее окно с некой информацией');}
// document.querySelector('#prompt').onclick = function() {alert('Данный метод выводит всплывающее окно с формой ввода данных');}

//  Вариант №2 
document.querySelector('#consoleLog').addEventListener('click', 
  (e) => {
    console.log('Сообщение в консоли!')
    alert('Данный метод выводит сообщение в консоль');
})

document.querySelector('#alert').addEventListener('click', 
  (e) => {
    alert('Данный метод выводит всплывающее окно с некой информацией');
})

// Данное в коментарии ниже решение было указано, как точное выполнение задания, 
// но закоментированно в пользу последнего решения, выводящего вместо простого 
// всплывающего окна по методу alert форму ввода медодом prompt, т.к. это более логично,
// ведь именно этод метод она должна наглядно демонстрировать.

// document.querySelector('#prompt').addEventListener('click', 
//   (e) => {
//     alert('Данный метод выводит всплывающее окно с формой ввода данных');
// }) 


 document.querySelector('#prompt').addEventListener('click', 
  (e) => {
    prompt('Данный метод выводит всплывающее окно с формой ввода данных. Введите данные и нажмите кнопку OK или отмените ввод, нажав кнопку ОТМЕНА:');
})