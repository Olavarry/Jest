const isPalindrome = wordToCheck => {
    
    //remove spaces before validations
    noSpacesWord = wordToCheck.replace(/\s/g, '')
    if(/^[a-zA-Z]+$/.test(noSpacesWord)){
        
        return (noSpacesWord.split("").reverse().join("")==noSpacesWord)
            
    }else{
        return 'Word contains non-alphabetical characters'
    }
   
}

module.exports = { isPalindrome }