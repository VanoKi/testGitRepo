function telNumb(numb) {
    return String(numb).split('').reduce((acc, item, index) => {
        if (index === 1) {
            acc += '-(' + item
        } else if (index === 3) {
            acc += item + ')-'
        } else if (index === 6 || index === 8) {
            acc += item + '-'
        } else {
            acc += item
        }
        return acc
    }, '')
}

console.log(telNumb(79234562233));