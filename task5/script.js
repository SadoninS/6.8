
let input = document.querySelector('input');

input.addEventListener('keypress', function(output) {
  let outputText = document.querySelector('#duplicate')
  outputText.textContent = output.target.value
})

let outputText = document.querySelector('#duplicate');
document.querySelector('button').addEventListener('click', function(submit) {
    submit.preventDefault();
    console.log(outputText);
} )

 
