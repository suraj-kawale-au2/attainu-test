strToInt = str => {
    //initilization
    let i=0;
    let sign;
    let int = 0;
    //remove all whitespace
    str = str.trim()
    //determine the sign of number
    if(str.charAt(0) == "-"){
        sign = -1;
        i++;
    }else{
        sign = 1;
    }
    //run a while from current positon of i till the length of string and covert to number one by one
    while (str.charAt(i)>="0"&&str.charAt(i)<="9") {
        int = int*10 + (str.charAt(i)-0); //doing this will convert the current char to int and add to previous value of variable int
        i++;
    }
    //once i has iterated and value of i is less than that length of string then we encountered a another character than numbers
    if(i<str.length-1){
        return 0;
    }
    
    return `${int*sign} & type is ${typeof int}`

}

console.log(strToInt("125"))
console.log(strToInt("         -125"))
console.log(strToInt("attainu10"))
console.log(strToInt("-125       "))
