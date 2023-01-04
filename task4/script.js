// Вариант 1

let link = document.querySelector('#link')

link.addEventListener('click', 
  (event) => {
    event.preventDefault();
    let userText = prompt("Введите текст для замены", "default");
    let newLink = document.querySelector('#link');
    newLink.textContent = userText;
})


// Вариант 2

// document.querySelector('#link').onclick = function() {
//     event.preventDefault();
//     let userText = prompt('Введите текст для замены');
//     let newLink = document.querySelector('#link');
//     newLink.textContent = userText;
//   }