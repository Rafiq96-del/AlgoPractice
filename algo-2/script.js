function countThreeDigitNumbersEndingWithZero() {
    let count = 0;
    for (let i = 100; i < 1000; i++) {
        if (i % 10 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countThreeDigitNumbersEndingWithZero())