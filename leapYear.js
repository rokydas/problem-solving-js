function leapYear(year){
    var isLeap = false;
    if(year % 400 == 0){
        isLeap = true;
    }
    else{
        if(year % 4 == 0 && year % 100 != 0){
            isLeap = true;
        }
    }
    return isLeap;
}

console.log(leapYear(2000));

if(leapYear(2000) == true){
    console.log("Your year is leap year");
}

else{
    console.log("Your year is not  leap year");
}

