//This is process 1
function reverseString1(str){
    revStr = "";
    for(let i = str.length-1; i >= 0 ; i--){
        revStr = revStr.concat(str[i]);
    }
    return revStr;
    console.log(revStr);
}

//This is process 2
function reverseString2(str){
    revStr = "";
    for(i = 0; i < str.length; i++){
        revStr = str[i] + revStr;
    }
    return revStr;
}

console.log(reverseString1("Roky Das"));
console.log(reverseString2("Roky Das"));