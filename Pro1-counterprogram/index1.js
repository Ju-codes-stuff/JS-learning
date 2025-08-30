const DecBtn = document.getElementById("DecBtn");
const ResetBtn = document.getElementById("ResetBtn");
const IncBtn = document.getElementById("IncBtn");
const Countlabel = document.getElementById("Countlabel");
let count = 0;

IncBtn.onclick = function(){
    count++;
    Countlabel.textContent = count;
}
DecBtn.onclick = function(){
    count--;
    Countlabel.textContent = count;
}
ResetBtn.onclick = function(){
    count = 0;
    Countlabel.textContent = count;
}