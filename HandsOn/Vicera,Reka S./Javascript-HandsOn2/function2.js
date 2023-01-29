let result = ``;
for (let i = 3; i <= 20; i++) {
    if ((i % 2) == 1) {
        result += ` ${i}`;
    }
}
console.log(result);