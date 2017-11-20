function some () {
    let i = 0

    return function () {
        return ++i
    }
}

const increment = some()
for (let _ = 0; _ < 100; _++) {
    console.log(increment())
}