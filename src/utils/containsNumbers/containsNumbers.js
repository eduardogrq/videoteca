
const containsNumbers = (str) => {
    const regex = /\d+/;
    return regex.test(str)
}

export default containsNumbers;