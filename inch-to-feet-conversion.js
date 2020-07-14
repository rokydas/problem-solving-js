function inchToFeet(inch) {
    var feet = Math.floor(inch / 12);
    inch = inch % 12;
    if(inch == 0){
        console.log(feet + " foot");
    }
    else{
        console.log(feet + " foot " + inch + " inch");
    }
    
}

inchToFeet(100);
inchToFeet(256);
inchToFeet(456);