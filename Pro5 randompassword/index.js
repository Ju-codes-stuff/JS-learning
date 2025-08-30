

function GenPass(length, includelowercase, includeuppercase, includenumbers, includesymbols){

    const lowercaseChars = "abcdefghiujklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includelowercase ? lowercaseChars : "";
    allowedChars += includeuppercase ? uppercaseChars : "";
    allowedChars += includenumbers ? numberChars : "";
    allowedChars += includesymbols ? symbolChars : "";

    if(length <= 0){
        return "(password length must be atleast 1)";
    }

    if(allowedChars.length === 0){
        return "(At least 1 set of characters must be selected)";
    }

    for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;


const password = GenPass(passwordlength, includelowercase, includeuppercase, 
    includenumbers, includesymbols);

console.log(`Generated password: ${password}`);