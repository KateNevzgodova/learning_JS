function sum(a, b, c) {
    const result = a + b + c;
    console.log("sum=" + result);
}
sum(2, 3, 5);


function hello(a) {
    console.log("Hello," + a);

}
hello("veronika");
hello("kate");

function print(name, number) {
    for (i = 0; i < number; i++) {
        console.log("Hi," + name);
    }
}


print("Veronika", 5)

function compare(a, b) {
    if (a < b) {
        console.log("max=" + b);
    } else if (a > b) {
        console.log("max=" + a);

    } else if (a == b) {
        console.log("equal");

    }
}

compare(5, 7)
compare(5, 3)
compare(7, 7)

function check(a) {
    if (typeof a == "string") {
        console.log("строка");
    } else if (typeof a == "number") {
        console.log("число")
    } else {
        console.log("остальное")
    }
}
check("tom")
check(45)
check()

function check2(a, b) {
    if (a === 6 && b === 5) {
        console.log("sum=" + (a + b))
    } else {
        console.log("невозможно")
    }
}

let num = 5

check2(6, 5)
check2("5", 5)
check2("katya")
check2(num)

console.log(num)

function test(a) {
    let result = 0

    while (a > 0) {
        result += (a - 1.5)
        a -= 1.5

    }
    console.log(result)
}

test(100)
test(10)