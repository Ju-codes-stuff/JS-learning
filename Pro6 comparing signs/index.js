//Goal: find the sign of the product of three numbers.
let x, y, z;


// M1

let prod= x**y*z;
prod > 0 ? console.log("The sign is +ve") : console.log("The sign is -ve");


//M2 : without multiplying the numbers.

if ((x>0 && y>0 && z>0) || (x<0 && y<0 && z>0) || (x<0 && z<0 && y>0) || (y<0 && z<0 && x>0)){
    console.log("The sign is +ve");
}

else if(x == 0 || y == 0 || z == 0 ){
    console.log("The sign is +ve");
}
else{
    console.log("The sign is -ve");
}

//m3 :without multiplying the numbers.
//  without considering all the different cases.
let a = 0;
if(x>=0){
    a++;
}
else if(y>=0){
    a++;
}
else if(z>=0){
    a++;
}

(a==2) ?console.log("The sign is -ve") :console.log("The sign is +ve");
