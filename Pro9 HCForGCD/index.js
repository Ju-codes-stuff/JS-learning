let x = 90000;
let y = 360;
let m="";
let MINI = Math.min(x, y);
for(let i=1; i<=MINI; i++){
    if(x%i==0 && y%i==0){
        m+= `${i},`;
    }
}
const num_array = m.split(",");
let GCD = num_array[num_array.length -2];
console.log(`${GCD}`);