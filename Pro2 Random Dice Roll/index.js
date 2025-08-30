const But1 = document.getElementById("But1");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randum;

But1.onclick = function(){
    randum = Math.floor(Math.random() * max) + min;
    randum2 = Math.floor(Math.random() * max) + min;
    randum3 = Math.floor(Math.random() * max) + min;
    mylabel.textContent = randum;
    mylabel2.textContent = randum2;
    mylabel3.textContent = randum3;
}