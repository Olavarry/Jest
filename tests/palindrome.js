const isPalindrome = wordToCheck => {
    
    //remove spaces to normal and reversed word
    return (wordToCheck.split("").reverse().join("").replace(/\s/g, '')===wordToCheck.replace(/\s/g, ''))
    
}

//console.log(isPalindrome('anita lava la tina'))
module.exports = { isPalindrome }