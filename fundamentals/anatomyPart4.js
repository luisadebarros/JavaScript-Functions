(function (a, b, c) {
    let x = 5
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 3, 5);

(function () {
    let x = 8
    console.log(x)
})();

// function arrow a
(() => {
    console.log('arrow 1')
})();

// arrow 2
(() => console.log('arrow 2'))();