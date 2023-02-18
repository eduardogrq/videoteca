
function isFunction(setValue) {
    if (typeof setValue !== 'function') {
        throw new Error('useCheckFunctionProp: "setValue" argument must be a function');
    }
}

export default isFunction