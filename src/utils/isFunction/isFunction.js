
function isFunction(setValue) {
    if (typeof setValue !== 'function') {
        throw new Error('useCheckFunctionProp: argument must be a function');
    }
}

export default isFunction