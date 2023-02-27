// Function to check if text contains special chars
const containsSpecialChars = (text) => {
    const specialCharactersRegex = /[$*.[\]{}()?"!@#%&/\\,><':;|_~`+=-]/;
    return specialCharactersRegex.test(text);
}

export default containsSpecialChars;