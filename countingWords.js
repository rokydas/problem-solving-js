function wordCounter(sentence) {
    counter = 1;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == ' ') {
            if(sentence[i-1] != ' '){
                counter++;
            }  
        }
    }
    return counter;
}

let sentence = "I am Roky Das. I  am learning  web developing  with Jhankar      Mahbub and Programming Hero team";
console.log(wordCounter(sentence));

sentence[3] = "u"; // It's not possible to change a value of an index of the string. 

