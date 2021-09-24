function rotate(array, n) {
    for (let i = 0; i < n; i++) {
        let current = array.pop()
        array.unshift(current)
    }
    console.log(array.join(" "))
}

rotate(['1', '2', '3', '4'], 2)
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15)