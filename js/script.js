// Условие задачи:
// Дано: номер телефона из 10 цифр  - формат число (пример - 7923456223)
// Найти: строку в формате (***) - *** - ** - ** (пример - (792) - 345 - 62 - 23)

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

//Вариант №2
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.toString()

    if (cleaned.length !== 10) {
        return "Error";
    }

    return cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+($1)-$2-$3-$4');
}

console.log(formatPhoneNumber("9123456789"));
console.log(formatPhoneNumber("1234567800"));
console.log(formatPhoneNumber("9876543210"));
console.log(formatPhoneNumber("9876543210"));


//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!//КОСЯК !!!!!!!!!!!!!!!!!!!
