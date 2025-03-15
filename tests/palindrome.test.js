const { isPalindrome } = require('./palindrome.js')

const validPalindrome = "noon"
const invalidPalindrome = "Luis"
const validPaliWithSpaces = "was it a cat i saw"
const invalidPalWithSpaces = "hello how are you"
const nonalphabetic = "no55on"
const validLowerUpper = "Refer"
const invalidLowerUpper = "Reference"

test('Test valid palindrome',()=>{
    const result = isPalindrome(validPalindrome)
    expect(result).toBe(true)
})

test('Test is not palindrome',()=>{
    const result = isPalindrome(invalidPalindrome)
    expect(result).toBe(false)
})

test('Test valid palindrom with spaces',()=>{
    const result = isPalindrome(validPaliWithSpaces)
    expect(result).toBe(true)
})

test('Test invalid word with spaces',()=>{
    const result = isPalindrome(invalidPalWithSpaces)
    expect(result).toBe(false)
})

test('Test nonalphabetic string',()=>{
    const result = isPalindrome(nonalphabetic)
    expect(result).toBe('word contains non-alphabetic characters')
    
})