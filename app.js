function validateUsr(username) {
    // res =  //regex here/.test(username) ;
    if (username.length >= 4 && username == username.toLowerCase() && /\s/.test(username) == false) {
        return true;
    } else {
        return false;
    }
}

console.log(validateUsr('asddsa')); // true
console.log(validateUsr('a')); // false
console.log(validateUsr('Hass')); // false
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas')); // false
console.log(validateUsr('')); // false
console.log(validateUsr('____')); // true
console.log(validateUsr('012')); // false
console.log(validateUsr('p1pp1')); // true
console.log(validateUsr('asd43 34')); // false
console.log(validateUsr('pasd43_34')); // true