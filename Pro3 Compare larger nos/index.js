let Int1, Int2;

do{
    Int1 = Number(window.prompt(`Enter the 1st number:`));
    Int2 = Number(window.prompt(`Enter the 2nd number:`));
    
    if(isNaN(Int1) || isNaN(Int2)){
        window.alert(`Enter Valid numbers`);
    }
}while( isNaN(Int1) || isNaN(Int2));


if(Int1 > Int2){
    window.alert(`First number is larger`);
}
else if(Int1 < Int2){
    window.alert(`Second number is larger.`);
}
else{
    window.alert(`Both numbers are equal.`)
}