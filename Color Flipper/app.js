const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.getElementById('spn');
btn.addEventListener('click',function(){
    let randomNumber =getRandomNunber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNunber(){
    return Math.floor(Math.random()*colors.length);
}