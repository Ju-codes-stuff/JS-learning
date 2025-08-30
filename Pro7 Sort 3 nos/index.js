//Sort three numbers

let x, y, z;
let asc;

//M1

if (x>y>z){
    asc = true ? console.log(`${z}, ${y}, ${x}`): console.log(`${x}, ${y}, ${z}`);
}
else if(x>z>y){
    asc = true ? console.log(`${y}, ${z}, ${x}`): console.log(`${x}, ${z}, ${y}`);
}
else if(y>x>z){
    asc = true ? console.log(`${z}, ${x}, ${y}`): console.log(`${y}, ${x}, ${z}`);
}
else if(y>z>x){
    asc = true ? console.log(`${x}, ${z}, ${y}`): console.log(`${y}, ${x}, ${z}`);
}
else if(z>x>y){
    asc = true ? console.log(`${y}, ${x}, ${z}`): console.log(`${z}, ${x}, ${y}`);
}
else{
    asc = true ? console.log(`${x}, ${y}, ${z}`): console.log(`${z}, ${y}, ${x}`);
}