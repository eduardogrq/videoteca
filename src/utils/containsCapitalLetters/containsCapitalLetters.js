// Function to check if string contains Capital letters
const containsCapitalLetters = (text) => {
    const regex = /[A-Z]/u
    return regex.test(text)
}

export default containsCapitalLetters;