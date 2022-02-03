console.log("even numbers ascending")

for (i = 1; i <= 10; i ++) {
    if (i % 2 == 0){
        console.log(i)
    }
}

console.log(" ")
console.log("divisible by 3 descending")

for (i = 100; i >= 0; i --) {
    if (i % 3 == 0){
        console.log(i)
    }
}

console.log(" ")
console.log("subtracting 1.5")

var i = 4
while (i >= -4) {
    console.log(i);
    i -= 1.5;
}

console.log(" ")
console.log("sigma adding them all")

var sum = 0
for (i = 1; i <= 100; i ++) {
    sum += i;
}
console.log(sum)

console.log(" ")
console.log("factorial")

var product = 1
for (i = 1; i <= 12; i ++) {
    product = product * i;
}
console.log(product)