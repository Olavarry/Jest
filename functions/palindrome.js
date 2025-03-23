const isPalindrome = wordToCheck => {
    
    //remove spaces before validations
    noSpacesWord = wordToCheck.replace(/\s/g, '').toLowerCase()
    if(/^[a-zA-Z]+$/.test(noSpacesWord)){
        
        return (noSpacesWord.toLowerCase().split("").reverse().join("")===noSpacesWord)
            
    }else{
        return 'Word contains non-alphabetical characters'
    }
}

module.exports = { isPalindrome }