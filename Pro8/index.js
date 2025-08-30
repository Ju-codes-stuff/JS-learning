//P1
/*let a;
for(a=0; a<16; a++) {
    a%2==0 ? console.log(`${a} is even.`) : console.log(`${a} is odd.`);
}*/



//P2
/*
for(let i=1; i<101; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");

    }
    else if(i%5==0){
        console.log("Buzz");

    }
    else{
        console.log(i);
    }
}*/







// Function to check if a number is a happy number

/*
function happy_number(num) {
    var m, n;
    var c = [];

    // Continue loop until the number becomes 1 or enters a cycle
    while (num !== 1 && c[num] !== true) {
        c[num] = true;
        m = 0;

        // Calculate the sum of the squares of digits
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }

        num = m;
    }

    return (num === 1);
}

// Variables to track the count and current number
var cnt = 5;
var num = 1;
var f5 = '';

// Find the first 5 happy numbers
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;

    f5 = f5 + (num + ", ");
    num++;
}
console.log('First 5 happy numbers are: ' + f5); 

*/









function Armstrong_num() {
    for(var n1 = 1; n1<10; n1++){
        for(var n2 = 0; n2<10; n2++){
            for(var n3 = 0; n3<10; n3++){
                 let sum = n1*n1*n1 + n2*n2*n2 + n3*n3*n3; 
                   let num = n1*100 + n2*10 + n3;

                   if (sum === num){
                    console.log(num);
                }
            }
                
        }
    }

}

Armstrong_num();

