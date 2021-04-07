// Работа с %
// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
let a = 10;
let b = 3;
console.log(a % b);
// Даны переменные a и b. Проверьте, что a делится без остатка на b.
// Если это так - выведите 'Делится' и результат деления, иначе 'Делится с остатком' и остаток от деления.
let a1 = 53;
let b1 = 25;
let rest = a1 % b1;
if (rest != 0) {
    console.log('делится с остатком' + ' ' + rest);
} else {
    console.log('делится без остатка');
}
//Возведите 2 в 10 степень. Результат запишите в переменную st.
let a2 = 2;
console.log('квадратный корень из вашего числа = ' + ' ' + Math.sqrt(a2));
// Найдите квадратный корень из 245.
let a3 = 245;
console.log('srqt = ' + ' ' + Math.sqrt(a3));
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
// Найдите квадрат корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
// let cub = 0;
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum += Math.pow(element, 3);
}
console.log(Math.sqrt(sum));
// Работа с функциями округления
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
console.log('квадратный корень из 379', Math.sqrt(379));
console.log(+Math.sqrt(379).toFixed(2));
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed());
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let obj = {};
obj['floor'] = Math.floor(Math.sqrt(587));
obj['ceil'] = Math.ceil(Math.sqrt(587));
console.log(obj);
// Нахождение максимального и минимального числа
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log('максимальное число:' + ' ' + Math.max(4, -2, 5, 19, -130, 0, 10));
console.log('минимальное число:' + ' ' + Math.min(4, -2, 5, 19, -130, 0, 10));
// Работа с рандомом
// Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('ваше рандомное число:' + ' ' + getRandomInt(1, 100));
// Заполните массив 10-ю случайными целыми числами.
let myArray = [];
let arrayMax = 10;
for (var i = 0; i < arrayMax; i++) {
    myArray.push(Math.floor(Math.random() * 11));
}
console.log('myArray', myArray);
//Работа с модулем
// Даны переменные a и b. Найдите модуль a-b. Проверьте работу скрипта самостоятельно для различных a и b.
let a4 = 5;
let b2 = 9;
console.log('модуль разности ваших чисел:' + ' ' + Math.abs(a4 - b2));
// Даны a и b. a-b, и результат присвойте переменной c. Сделайте так, чтобы в любом случае в c записалось положительное значение.
let a5 = 2;
let b3 = 100;
let c = Math.abs(a5 - b3);
console.log('ваша с = ' + ' ' + c);
// Дан массив arr. Найдите среднее ариф его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let arr1 = [12, 15, 20, 25, 59, 79];
let sum1 = 0;
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    sum1 += element;
}
let average = sum1 / arr1.length;
console.log('сред.ариф. вашего массива:' + ' ' + average);
// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !)
// это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
let fact = 1;
let num = 4;
for (let i = 1; i <= num; i++) { fact = fact * i; }
console.log(fact);