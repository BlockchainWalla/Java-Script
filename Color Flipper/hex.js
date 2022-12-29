const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.getElementById('spn');
btn.addEventListener('click',function(){
    let hexCode = getHexcode();
    document.body.style.background=hexCode;
    color.textContent=hexCode;

})
function getHexcode(){
    let hexCode='#';
    for(let i =0;i<6;i++){
        let randomNumber = Math.floor(Math.random()*hex.length);
        hexCode = hexCode+hex[randomNumber];
    }
    return hexCode
}
