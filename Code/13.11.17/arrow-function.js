// normal anonymous function
const someFunction = function (a, b) {
    let result = doSomething(a, b)
    return result
}

// arrow function
const arrowFunction = (a, b) => {
    let result = doSomething(a, b)
    return result
}

// no arguments
const anonymous = function () {
    doSomething()
}

const arrow = () => {
    doSomething()
}

// normal function again
const anotherFunction = function (argument) {
    return result * 2
}

// arrow function (again!)
const coolArrow = argument => argument * 2

// context differences in arrow functions
let Popup = {
    text: 'I am hidden',
    makeHandler: function (type) {
        if (type === 'arrow') {
            return () => {
                this.text = 'I am shown (arrow)'
            }
        } else {
            return function () {
                this.text = 'I am shown (anon)'
            }
        }
    }
}

$el.addEventListener('hover', Popup.makeHandler())
$el.addEventListener('hover', Popup.makeHandler('arrow'))