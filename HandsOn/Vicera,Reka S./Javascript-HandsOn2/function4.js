let result = ``;
for (let i = 7; i <= 62; i++) {
    if ((i % 7) == 0) {
        result += ` ${i}`;
    }
}
console.log(result);