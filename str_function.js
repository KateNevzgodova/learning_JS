// Задачи на функции работы со строками
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));
// Методы substr, substring, slice
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
let str1 = 'aaa bbb ccc';
let sub = str1.slice(3, 7);
console.log('вырезаем из строки' + ' ' + sub);
console.log('вырезаем из строки через substring' + ' ' + str1.substring(3, 7));
console.log('вырезаем через substr' + ' ' + str1.substr(4, 3));
//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
let date = '2025-12-31';
let newDate = date.split('-');
console.log(newDate[2] + '/' + newDate[1] + '/' + newDate[0]);
//Работа с регистром символов
//Дана строка 'js'. Сделайте из нее строку 'JS'.
let str2 = 'js';
console.log('тренировка toUpperCase' + ' ' + str2.toUpperCase());
// Дана строка 'JS'. Сделайте из нее строку 'js'.
let str3 = 'JS';
console.log('тренировка toLowerCase' + ' ' + str3.toLowerCase());
//Работа с length, substr, substring, slice. Работа с indexOf
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str4 = 'я учу javascript!';
console.log('в вашей строке' + ' ' + str4.length + ' ' + 'символов');
// Дана строка 'я учу javascript!'. Вырежите из нее 'учу' и 'javascript' способами (через substr, substring, slice).
console.log('вырезаем учу и js через substr' + ' ' + str4.substr(1, 15));
console.log('вырезаем учу и js через substring' + ' ' + str4.substring(2, 16));
console.log('вырезаем учу и js через slice' + ' ' + str4.slice(2, 16));
// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
console.log('в вашей строке запрашиваемое слово находится на позиции:' + ' ' + str4.indexOf('учу'));
// Дана переменная str, в которой хранится текст.
// Реализуйте обрезание по принципу: если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.
let str5 = 'i have no idea what i should write here d t d f y f y y b u i g u f y t y u g i g h v y y u t y gjbygjfyftcthcgcghuiyujvcxxghcghchgcgchg';
let n = 20;
let result = '';
let a = str5.length;
if (a > n) {
    result = str5.slice(0, n)
    console.log(result + '...')
} else {
    result = str5;
    console.log(result)
}
//Работа с replace
// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str6 = 'Я-учу-javascript!';
console.log(str6.replace(/-/g, '!'));
//Работа с split
//Дана строка 'я-учу-javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let arr = str6.split('-');
console.log(arr);
//Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str7 = 'я учу javascript!';
let arr1 = str7.split('');
console.log(arr1);
//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
let date1 = '2025-12-31';
let arr2 = date1.split('-').reverse().join('.');
console.log(arr2);
// Работа с join
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arr3 = ['я', 'учу', 'javascript', '!'];
let str8 = arr3.join('+');
console.log(str8);
//Преобразуйте первую букву строки в верхний регистр.
let name = 'kate nevzgodova';
let nameResult = name.slice(0, 1).toUpperCase() + name.slice(1);
console.log(nameResult);
// Преобразуйте первую букву каждого слова строки в верхний регистр.
let nameWords = name.split(' ');
for (let i = 0; i < nameWords.length; i++) {
    nameWords[i] = nameWords[i].slice(0, 1).toUpperCase() + nameWords[i].slice(1);
}
let resultName = nameWords.join(' ');
console.log(resultName);
// Преобразуйте строку 'var_test_text' в 'VarTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
let test = 'var_test_text';
let testSplit = test.split('_');
for (let i = 0; i < testSplit.length; i++) {
    testSplit[i] = testSplit[i].slice(0, 1).toUpperCase() + testSplit[i].slice(1);
}
let testResult = testSplit.join('');
console.log(testResult);