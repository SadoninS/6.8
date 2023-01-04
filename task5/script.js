let outputText = document.querySelector('#duplicate');
let input = document.querySelector('input');

input.addEventListener('input', function(output) {
  outputText.textContent = output.target.value
})

document.querySelector('button').addEventListener('click', function(submit) {
    submit.preventDefault();
    outputText.textContent = "";
    console.log(input.value);
    input.value = "";
    
} )


 // оставил закоментированным код, поправленный Видякиным Алексеем, постарался на его основе доработать свой скрипт, чтобы все работало.

// let input = document.querySelector("input");
// let outputText = document.querySelector("#duplicate");
// let button = document.querySelector("button");

// input.addEventListener("input", function () {
//   outputText.textContent = input.value;
// });

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   outputText.textContent = "";
//   console.log(input.value);
//   input.value = "";
// });