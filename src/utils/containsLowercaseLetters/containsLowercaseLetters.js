
// Function to check if text contains for at least 1 lowecase letter
const containsLowercaseLetters = (text) => {
    const lowercaseRegex = /[a-z]/u
    return lowercaseRegex.test(text)
}

export default containsLowercaseLetters;