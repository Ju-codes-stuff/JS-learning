/*

let i;
let m = 0;


for(i=1; i<1000; i++){
    if(i%3==0 || i%5==0){
        m += i;
    }
}
console.log(m);
*/




/*
let today = new Date();


let dayA =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date1 = today.getDate;
let day = today.getDay;
let hour = today.getHours;
let mins = today.getMinutes;
let secs = today.getSeconds;

today = date1;
console.log(date1);
today = dayA[day];
console.log(day);
today = hour;
console.log(hour);
today = mins;
console.log(mins);
today = secs;
console.log(secs);
//console.log(`Today is ${dayA[day]}. The date is ${date}. The time is ${hour}:${mins}:${secs}.`);

*/




/*
let year;

if( year%4==0 && year%100!==0){
    return("Leap year.")
}
else{
    return("Not a leap year.")
}

*/


/*

try {
    const Undef = undefined;
    console.log(Undef.property);
}

catch(error) {
    if (error instanceof TypeError){
        console.log("The object is undefined");
    }
    else {
        throw error;
    }
}*/



/*
let x, y;

function divide(x, y){
    if(y===0){
        console.log("Error: Division by zero not possible.")
    }

    else{
        console.log(x/y);
    }
}
divide(22, 58);
divide(19, 0);  */




/*
function Array_Element( array, element){
    try {
        const element = array[index];

        if (element === undefined) {
            throw new RangeError ("Element is out of index.");
        }

        console.log(element);
    }

    catch {
        if (error instanceof RangeError) {
            console.log("Invalid Index.");
        }
        else{
            console.log ("Error unknown");
        }
    }
}
tums = [22,54,14,352,52];
Array_Element( tums, 3);
Array_Element( tums, 8);

*/




/*
function reverse(num1) {
    let revnum = num1.toString();
    const revnum1 = revnum.split(""); 
    let num2 = "";

    for (let i = revnum1.length - 1; i >= 0; i--){
       num2 += revnum1[i];
    }
    console.log(num2);
    return (num2);
}

reverse();
*/



/*
function Checkpalindrome(Str11){
    const myarr = Str11.split("");

    const revmyarr = myarr.reverse();

    if (myarr == revmyarr){
        return (Str11 +" is a palindrome");
    }
    else{
        return (Str11 +" is not a palindrome");
    }
}

console.log(Checkpalindrome("nurses run"));

*/



// power set generator of a string. 
// basically all possible combination of alphabets in string.
/*
function PowerSetGen(str) {
    const result = [];
    function gen (current, index) {
        if (index == str.length){
            result.push(current);
            return;
        }

        gen(current, index+1);

        gen(current + str[index], index + 1);

    }
    gen("", 0);
    return result;
}
const arr23 = PowerSetGen("ABCD");
arr23.sort();
console.log(arr23);

//bitwise instead of recursive
function powerset(str) {
  const arr = str.split("");
  const result = [];

  const total = 1 << arr.length; // 2^n subsets

  for (let i = 0; i < total; i++) {
    let subset = "";
    for (let j = 0; j < arr.length; j++) {
      if (i & (1 << j)) {
        subset += arr[j];
      }
    }
    result.push(subset);
  }

  return result.join(",");
}

console.log(powerset("afagab"));
*/


//Sorts the string alphabetically
/*
function stringsort(str){
    const arr1 = str.split("");
    arr1.sort();
    let result = "";
    for (let a = 0; a <= str.length; a++){
        result += arr1[a];
    }
    return result;
}
console.log(stringsort("pvkvepknvabc"));
*/



//to find the longest word in the sentence.
/*
function longestword(str){
    const arr1 = str.split(" ");
    let temp = arr1[0].length;
    let res = "";
    for ( let a = 0; a < arr1.length; a++){
        if(temp <= arr1[a].length){
            res = arr1[a];
            temp = arr1[a].length;
        }
    }
    return res;
}

console.log(longestword("Here is the longest word."));
*/



//Prime factor lister. Dont use for large nos
/*
function primecheckRecur(num2) {
    let na = "";
    if (num2 == 1){
        return false;
}
    else if (num2 == 2){
        return true;
    }
    else{
        for (let n = 2; n < num2; n++){
            
            if (num2%n == 0){
               na += `${n}, `;
            }
        }
    }
    return na;
}
console.log(primecheckRecur(2350));

*/



