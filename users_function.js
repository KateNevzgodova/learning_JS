// Сделайте функцию, которая возвращает куб числа. Число передается параметром.
function cube($numb) {
    return $numb * $numb * $numb;
}
console.log('куб вашего числа:', cube(2));
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function expon(numb) {
    return Math.pow(numb, 2);
}
console.log('квадрат 3 = ', expon(3))
    // Сделайте функцию, которая возвращает сумму двух чисел.
function sum(numb1, numb2) {
    return numb1 + numb2;
}
console.log('сумма чисел  = ', sum(10, 15))
    // Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function act(numb3, numb4, numb5) {
    return (numb3 - numb4) / numb5;
}
console.log('результат вычитания и деления:', act(100, 55, 5))
    // Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function dayNumber(numbDay) {
    switch (numbDay) {
        case 1:
            return 'понедельник';

        case 2:
            return 'вторник';
            break;
        case 3:
            return 'среда';
            break;
        case 4:
            return 'четверг';
            break;
        case 5:
            return 'пятница';
            break;
        case 6:
            return 'суббота';
            break;
        case 7:
            return 'воскресение';
            break;
        default:
            return 'There is no day with such number'
            break;
    }
}
console.log(dayNumber(1));
// работа с флагами
// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
function hasElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
            return true;
        }
    }

    return false;
}
let arr = [1, 2, 3, 4, 5];
console.log('есть ли в вашем массиве искомое число:', hasElem(arr));
//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
//Если число не делится - выведите 'false', а если делится - выведите 'true'.
function isSimple(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log('является ли ваше число простым:', isSimple(31));
//Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - 'нет'.
let arr1 = [8, 7, 4, 4, 16, 22, 33, 55, 4, 8, 9];

function check(arr1) {
    for (var i = 1; i < arr1.length; ++i) {
        if (arr1[i] === arr1[i - 1]) {
            return true;
        }
    }
    return false;
}
console.log(check(arr1) ? "Да,одинаковые числа подряд" : "Нет, одинаковых чисел нет рядом друг с другом");
// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - вернет true, а если не равны - false.
function equal(a, b) {
    if (a === b) {
        return true;
    }
    return false;
}
console.log('ваши числа равны - ', equal(4, 82));
// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
function sumOfNumbers(c, d) {
    if ((c + d) > 10) {
        return true
    }
    return false
}
console.log('сумма ваших чисел > 10 -', sumOfNumbers(12, 41));
//Сделайте функцию, которая параметром принимает число и проверяет отрицательное ли оно.
// Если отрицательное - вернет true, а если нет - false.
function negative(e) {
    if (e < 0) {
        return true;
    }
    return false;
}
console.log('ваше число отрицательное - ', negative(-8));
// Пирамидки
// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
let str = '';
for (let i = 1; i < 10; i++) {
    str += i;
}
console.log('ваша строка:', str);
// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
let str1 = '';
for (let i = 9; i > 0; i--) {
    str1 += i;
}
console.log('ваша перевернутая строка:', str1);
// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9' и запишите ее в переменную str.
let str2 = '';
for (let i = -1; i > -10; i--) {
    str2 += i;
}
console.log('ваша отрицательная строка', str2);
// Нарисуйте пирамиду, у вашей пирамиды должно быть 20 рядов.
let str3 = '';
for (let i = 0; i < 20; i++) {
    str3 += 'a';
    document.write(str3 + '<br>');
}
// нарисуйте пирамидку:
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        document.write(i);
    }
    document.write('<br>');
}
// Заполнение массивов
// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
let arr2 = [];
let str4 = '';
for (let index = 0; index < 10; index++) {
    str4 += 'x';
    arr2.push(str4)
}
console.log(arr2);
//  Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
let arr3 = [];
let str5;
for (let index = 1; index < 10; index++) {
    str5 = '';
    for (let j = 0; j <= index; j++) {
        str5 += index;
    }
    arr3.push(str5);
}
console.log(arr3);
// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill(elem, amount) {
    let arr4 = [];
    for (let index = 0; index < amount; index++) {
        arr4.push(elem)
    }
    return arr4;
}
console.log(arrayFill('x', 5));
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
arr5 = [1, 2, 3, 4, 5, 1, 0, 8, 1];
let sumOfElem = 0;
let result;
for (let index = 0; index < arr5.length; index++) {
    sumOfElem += arr5[index];
    if (sumOfElem > 10) {
        break;
    }
    result = index + 1;
}
console.log('количество попыток:', result);
// Переворот массива
// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
arr7 = [15, 20, 40, 50, 60, 70];
let arr7Reverse = [];
for (let index = arr7.length - 1; index >= 0; index--) {
    arr7Reverse.push(arr7[index]);
}
console.log('ваш перевернутый массив', arr7Reverse);
// Многомерные массивы
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arr8 = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sumArr8 = 0;
for (let index = 0; index < arr8.length; index++) {
    for (let j = 0; j < arr8[index].length; j++) {
        sumArr8 += arr8[index][j];
    }
}
console.log('сумма элементов двухмерного массива:', sumArr8);
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
let arr9 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let sumArr9 = 0;
for (let index = 0; index < arr9.length; index++) {
    for (let j = 0; j < arr9[index].length; j++) {
        for (let k = 0; k < arr9[index][j].length; k++) {
            sumArr9 += arr9[index][j][k];
        }
    }
}
console.log('сумма трехмерного массива:', sumArr9);
// Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
let arr10 = [1, -2, 3, -4, 5, 7, 19, -20, -5];

function isPositive(a) {
    if (a > 0) {
        return true;
    } else {
        return false;
    }
}
let positiveArr10 = [];
for (let index = 0; index < arr10.length; index++) {
    if (isPositive(arr10[index])) {
        positiveArr10.push(arr10[index]);
    }
}
console.log('новый массив с положительными элементами', positiveArr10);
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(b) {
    if (b > 0 && b < 10) {
        return true;
    }
    return false;
}
console.log('ваше число в указанном промежутке - ', isNumberInRange(10));
// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
let newArr10 = [];
for (let index = 0; index < arr10.length; index++) {
    if (isNumberInRange(arr10[index])) {
        newArr10.push(arr10[index]);
    }
}
console.log('новый массив из элементов старого массива:', newArr10);
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(digit) {
    digit = String(digit);
    let sumDigit = 0;
    for (let index = 0; index < digit.length; index++) {
        sumDigit += Number(digit[index]);
    }
    return sumDigit;
}
console.log('сумма цифр вашего числа-', getDigitsSum(28));
// Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
let years = [];
for (let index = 1; index < 2022; index++) {
    if (getDigitsSum(index) == 13) {
        years.push(index);
    }
}
console.log('все года с суммой 13:', years);
//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(even) {
    if (even % 2 == 0) {
        return true;
    }
    return false;
}
console.log('ваше число чётное - ', isEven(14));
//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
arr11 = [32, -5, 83, 69, -90, 382, 215, -48];
let evenArr11 = [];
for (let index = 0; index < arr11.length; index++) {
    if (isEven(arr11[index])) {
        evenArr11.push(arr11[index]);
    }
}
console.log('новый массив с чётными числами:', evenArr11);
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
// (чисел, на которое делится данное число).
function getDivisors(num1) {
    let resultDiv = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i == 0) {
            resultDiv.push(i);
        }

    }
    return resultDiv;
}
console.log('делители вашего числа:', getDivisors(100));
// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Cделайте функцию ucfirst, кополучать строку,
// делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
function ucfirst(str6) {
    let arr12 = str6.split(' ');
    let newArr12 = [];
    for (var i = 0; i < arr12.length; i++) {
        newArr12.push(arr12[i][0].toUpperCase() + arr12[i].slice(1));
    }
    return newArr12.join(' ');
}
console.log(ucfirst('я действительно не генератор фраз'));
// Дана строка вида 'var_text_hello'. Сделайте из него текст 'VarTextHello'.

function capitalLetters(str7) {
    let arr13 = str7.split('_');
    let newArr13 = [];
    let newStr7 = '';
    for (let i = 0; i < arr13.length; i++) {
        newArr13.push(arr13[i][0].toUpperCase() + arr13[i].slice(1));
        newStr7 = newArr13.join('');
    }
    return newStr7;
}
console.log(capitalLetters('var_text_hello'));
// йте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.
function inArray(value, arr14) {
    for (let i = 0; i < arr14.length; i++) {
        if (arr14[i] == value) {
            return true;
        }
    }
    return false;
}
console.log('такое слово есть - ', inArray('хей', ['я', 'говорю', 'хей']));
// Дана строка, например, '123456'. Сделайте из нее '214365'.
function nstr(line) {
    let arr15 = line.split('');
    let newArr15 = [];
    let newStr8 = '';
    for (i = 0; i < arr15.length; i++) {
        newArr15.push(arr15[1], arr15[0], arr15[3], arr15[2], arr15[4], arr15[5]);
        newstr15 = newArr15.join('');
        return newArr15;
    }
}
console.log(nstr('123456'));
// Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
function func(arr16) {
    console.log(arr16[0]);
    arr16.splice(0, 1);
    if (arr16.length > 0) {
        func(arr16);
    }
}
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока
// сумма не станет однозначным числом (9 и менее).
var f = 26878;

function sum(f) {
    let arr17 = String(f).split('');
    let resultArr17 = 0;
    for (let i = 0; i < arr17.length; i++) {
        resultArr17 += Number(arr17[i]);
    }

    if (resultArr17 > 9) {
        f = resultArr17;
        sum(f);
    } else {
        console.log('сумма цифр вашего числа стала <9 -', resultArr17);
    }
}

sum(f);