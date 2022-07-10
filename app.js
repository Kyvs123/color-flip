const colors = ["green", "red", "rgb(255, 0, 208)", "aqua", 'rgb(255, 25, 208)', 'rgb(231, 10, 20)', 'chartreuse', 'darkorange', 'rgb(1, 248, 75)', 'grey'];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
//get random number
    let randomNumber = getRandomNumber()
//var. q armazena o num gerado
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]; 
//DOM do body pra mudar de cor pra q for gerada
    color.textContent = colors[randomNumber] 
//mostra no spam o resultado gerado
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
};