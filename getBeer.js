function getFact(num) {
    if(num == 1 || num == 0) return 1 //guard clause

    return num * getFact(num - 1)
}

console.log(getFact(3));
console.log(getFact(5));