function getElementWidth(content, padding, border) {
    const invalidArgs = []
    for (let i = 0; i < arguments.length; i++) {
        if (isNaN(Number.parseFloat(arguments[i]))) {
            invalidArgs.push(arguments[i])
        }
    }

    if (invalidArgs.length) {
        throw Error(invalidArgs.join(', ') + 'can not be parsed as number')
    }

    return Number.parseFloat(content) + (Number.parseFloat(padding) + Number.parseFloat(border)) * 2
}


try { 
    console.log(getElementWidth("50px", "8px", "4px")); // 74
    console.log(getElementWidth("60px", "12px", "8.5px")); // 101
    console.log(getElementWidth("200px", "0px", "0px")); // 200 
} catch (e) {
    console.error(e.message)
}
