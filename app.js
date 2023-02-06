const text = "hello"
const text2 = "how r u"


var burulai = function (text) {
    var sum = ''
    for (var i = text.length - 1; i > -1; i--) {
        sum += text[i];
    }
    return sum
}

console.log(burulai(text));

console.log(burulai(text2));


function getAllNum(...args) {
    let result = 0
    for (let i = 0; i < args.length; i++) {
        result += args[i]
    }
    let sum = result / args.length
    return sum
}

console.log(getAllNum(123456789, 98765432))