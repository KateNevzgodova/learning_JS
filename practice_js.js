//переменная str = 'abcde'. выведите на экран символ 'a', символ 'b', символ 'e'.
var str = 'abcde';

console.log(str[0]);
console.log(str[1]);
console.log(str[4]);

// Напишите скрипт, который считает количество секунд в часе.
console.log(60 * 60);

// перепишите следующий код : var num = 1;
//num = num + 12;
//num = num - 14;
//num = num * 5;
//num = num / 7;
//num = num + 1;
//num = num - 1;
//alert(num);
var nam = 1;
nam += 12;
nam -= 14;
nam *= 5;
nam /= 7;
nam++;
nam--;
console.log(nam);

//переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
let num = 3;
console.log(num);
//перем. a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
a = 10;
b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//c=15 и d=2. Просуммируйте их, а результат присвойте переменной result
c = 15;
d = 2;
let result = c + d;
console.log(result);
//a=10, b=2 и c=5. Выведите на экран их сумму.
a = 10;
b = 2;
c = 5;
console.log(a + b + c);
//a=17 и b=10. Отнимите от a переменную b и рез. присвойте перем. c. создайте перем d, присвойте ей значение 7. Сложите  c и d, а рез запишите в перем. result. Выведите значение перем result.
const a2 = 17;
const b2 = 10;
let c2 = (a2 - b2);
let d2 = 7;
let result2 = c2 + d2;
console.log(result2);
//Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной.
let str1 = "Hi,World!";
console.log(str1);
//str1='Привет, ' и str2='Мир!'. выведите на экран фразу 'Привет, Мир!'.
let str2 = "Hi,";
let str3 = "World!";
console.log(str2 + str3);
//name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
let name = "Kate";
console.log("Hi," + name);
//age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
let age = 28;
console.log('i am ' + age);
// имя пользователя с prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
// let nameUser = prompt('Your name');
// alert("Your name is " + nameUser);
//Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
// let num1 = prompt('Your number');
// console.log(num1 * num1);
//переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
let num2 = '12345';
let result3 = 1;
for (let i = 0; i < num2.length; i++) {
    result3 = +num2[i] + result3;
}
console.log("result3", result3);


//Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце
const sec = 60;
secInHour = sec * sec;
console.log(secInHour);
console.log(secInHour * 24);
console.log(secInHour * 24 * 31);
//ри переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
let hour = 16;
let minut = 4;
let sec1 = 30;
console.log('час:' + hour, 'минута:' + minut, 'секунда:' + sec1);
//Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
let num3 = 32;
num3 = Math.pow(32, 2);
console.log("resultMath", num3);
//Переделайте этот код:
//var num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// alert(num);
let num4 = 47;
num4 += 7;
num4 -= 18;
num4 *= 10;
num4 /= 15;
console.log(num4);
//Переделайте этот код:
// var num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// alert(num);
let num5 = 10;
num5++;
num5++;
num5--;
console.log(num5);
//массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
let arr = ['Hi,', 'world', '!'];
console.log(arr[0] + arr[1] + arr[2]);
//массив с элементами 'Привет, ', 'мир' и '!'. записать в text 'Привет, мир!', а затем вывести содержимое переменной.
let arr2 = ['Hi,', 'world', '!'];
text = arr2[0] + arr2[1] + arr[2];
console.log(text);
//массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока'
let arr3 = ['Hi', 'world', '!'];
arr3[0] = 'Bye';
console.log(arr3[0] + arr3[1] + arr[2]);
//ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.
var str7 = { 'олег': 200, 'петя': 300, 'коля': 400 };
console.log(str7['петя']);
console.log(str7['коля']);
//Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.
// var obj = new Object('key1':1,'key2':2,'key3':3,'key4':4);
// var str8=Array(1,2,3,4);
//var obj=();
// obj[0]=1;
// obj[1]=2;
// obj[2]=3;
// obj[3]=4;

//Дан многомерный массив arr:
var arr4 = {
    'ru': ['голубой', 'красный', 'зеленый'],
    'en': ['blue', 'red', 'green'],
};
// Выведите с его помощью слово 'голубой'.
console.log(arr4['ru'][0]);

//Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
var arr5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr5[1][0]);
//Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'
//не получилось!
var obj = {
    'js': ['jQuery', 'Angular'],
    'php': ['hello'],
    'css': ['world']
}
console.log(obj['js'][0]);
// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то),
// а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day.
// То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
var lang = 'ru';
var day = 3;
var obj1 = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'суб', 'вск'],
    'en': ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun']
}
console.log(obj1[lang][day - 1]);


const lang2 = {
    en: {
        translations: {
            tree: "Olive",
            food: "Cucumber",
            holiday: "Tomorrow"
        },
        caption: "English"
    },
    ru: {
        translations: {
            tree: "Оливка",
            food: "Огурец"
        },
        caption: "Русский"
    },
    fr: {
        translations: {
            tree: "Оливка",
            food: "Огурец",
            holiday: "Bonjour"
        },
        caption: "France"
    }
}

console.log(lang2['ru']['caption']);
console.log(lang2.ru.caption)
console.log(lang2.en.translations.tree);

console.log(Object.keys(lang2))
const languages = Object.keys(lang2);
for (let index = 0; index < languages.length; index++) {
    const lnCode = languages[index];
    // console.log(lang2[lnCode]['caption']);
    console.log(lang2[lnCode]['caption'] + ' ' + lang2[lnCode].translations.food)
}
for (let index = 0; index < languages.length; index++) {
    const code = languages[index];
    if (lang2[code].translations.holiday) {
        console.log(lang2[code].translations.holiday)



    } else console.log(lang2[code].translations.tree)

}

let num7 = 1;
let result4
switch (num7) {
    case 1:
        result4 = 'зима'
        break;
    case 2:
        result4 = 'весна';
        break;
    case 3:
        result4 = 'лето';
        break;
    case 4:
        result4 = 'осень';
        break;
    default:
        result4 = 'not right!'
        break;
}
console.log(result4);

let day7 = 5;
if (day7 <= 10) {
    console.log('First part')
} else if (day7 >= 11 && day7 <= 21) {
    console.log('Second part')

} else {
    console.log('Third part')
}

//Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
var arr8 = [
    [1, 2, 3],
    [4, 5, 6],
    [4, 5, 67, 46, 9],
    [4, 5, 67, 46, 4],
    [4, 5, 67, 46, 4, 66, 6, 89, 3],
    [4, 5, 67, 46, 4, 66, 6, 89, 3],
    [4, 5, 67, 46, 4, 66, 6, 4, 3],
    [4, 5, 67, 46, 4, 66, 2, 4, 3],
    [4, 5, 67, 3, 4, 66, 2, 89, 3],
    [4, 5, 67, 3, 4, 66, 2, 89, 3],
    [4, 5, 67, 3, 45, 66, 6, 89, 3],
    [4, 5, 67, 46, 4, 66, 6, 89, 3],
    [7, 8, 9]
];

for (let index = 0; index < arr8.length; index++) {
    const row = arr8[index];
    let sumInRow = 0;
    for (let index = 0; index < row.length; index++) {
        const element = row[index];
        sumInRow = sumInRow + element;
    }
    console.log(sumInRow)
}

// // console.log(arr5[1][0]);

// // for (let index = 0; index < arr8.length; index++) {
// //     const row = arr8[index]; //[1, 2, 3],
// //     let sumRow=r

// // }

// const arr9 = [1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776, 1, 2, 3, 4, 4, 776]

// console.log(arr9[0] + arr9[1] + arr9[2] + arr9[3]);
// let sum;
// for (let index = 0; index < arr9.length; index++) {
//     const apple = arr9[index];
//     sum = sum + apple

// }
// let sumApl = 0;
// let sumPeach = 0;

// const arr10 = ["Apple", "Apple", "Peach", "Apple", "Peach", "Peach", "Apple"]

// for (let index = 0; index < arr10.length; index++) {
//     const a = array[index];

//     if (a === 'Apple') {
//         sumApl = sumApl + a;
//     } else sumPeach = sumPeach + a;
// }
// console.log(sumApl)
// console.log(sumPeach)

// const arr11 = [0, 2, 89, -6, 9, -73, 3749, 99, 0, 1, -2]
//     // let sumPos = 0;
//     // let u = 1;
//     // for (let index = 0; index < arr11.length; index++) {
//     //     const a = arr11[index];
//     //     if (a >= 0) {
//     //         sumPos = sumPos + a;
//     //     } else u = u * a;
//     // }
//     // console.log(sumPos)
//     // console.log(b)
// let sumAll = 0;
// for (let index = 0; index < arr11.length; index++) {
//     const a = arr11[index];
//     if (a < 0) {
//         sumAll = sumAll + Math.abs(a)
//     } else sumAll = sumAll + a
// }
// console.log(sumAll)