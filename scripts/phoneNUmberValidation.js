function telephoneCheck(str) {

    /*    let string = Array.from(str[1]) == ' ' && Array.from(str[5] == ')') ? false : str.replace(/ |-|[(]|[)]/g, '')

       if (string.length !== 10 && string[0] != 1) {
           return false
       } else if (string.length === 11 && string[0] == 1) {
           return true
       } else if (string.length === 10) {
           return true
       } */

    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str)
}



console.log(telephoneCheck("1 555-555-5555"))

// 1 - replace all symbols
// 2 - check if first digit is 1
// check array length

/* 

return condition1 ? value1
        : condition2 ? value2
        : condition3 ? value3
        : value4;
*/

// get string only if 5 is not } while 1 is ''


return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str)