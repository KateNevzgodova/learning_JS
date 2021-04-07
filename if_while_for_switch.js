// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
let a = 10;
if (a == 10) {
    console.log('Right!')

} else {
    console.log('Wrong!');
}
// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число.
let min = 44;
if (min <= 15) {
    console.log('The first!');
} else if (min >= 16 && min <= 30) {
    console.log('To the second!');
} else if (min >= 31 && min <= 45) {
    console.log('To the third!')
} else { console.log('to the last one') }
// Перемен lang принимает 2 знач: 'ru' 'en'. Если знач 'ru', то в arr запишем массив на рус языке, а если 'en' – на англ.
// Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.
let lang = 'ru';
let arr = {
        'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
        'en': ['mo', 'tu', 'wd', 'th', 'fr', 'sa', 'su']
    }
    //1)
if (lang == 'ru') {
    //let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
    console.log(arr[lang]);
} else {
    //let arr = ['mo', 'tu', 'wd', 'th', 'fr', 'sa', 'su']
    console.log(arr[lang]);
}
//2) 
switch (lang) {
    case 'ru':
        //let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
        console.log(arr[lang])
        break;
    case 'en':
        //arr = ['mo', 'tu', 'wd', 'th', 'fr', 'sa', 'su']
        console.log(arr[lang]);
        break;
}

console.log('new one' + ' ' + arr[lang]);
// Работа с if-else
//  Если перем a равна нулю, то выведите 'Верно', иначе 'Неверно'. Проверьте при a, равном 1, 0, -3.
let a1 = -3;
if (a1 == 0) {
    console.log("Right!")
} else { console.log("Wrong!") }
//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let a2 = -3;
if (a2 > 0) {
    console.log('Right, it is > 0')
} else {
    console.log('Wrong!It is <= 0')
}
//  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let a3 = -3;
if (a3 < 0) {
    console.log("thats right!")
} else {
    console.log("no, its >= 0")
}
//  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let a4 = -3;
if (a4 >= 0) {
    console.log('yep, its >= 0')
} else {
    console.log('wrong, its < 0')
}
//  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let a5 = -3;
if (a5 <= 0) {
    console.log('right, your number is <= 0')
} else {
    console.log('wrong, your number is >= 0')

}
//  Если a не равна нулю, то выведите 'Верно', иначе 'Неверно'. Проверьте при a, равном 1, 0, -3.
let a6 = 0;
if (a6 != 0) {
    console.log('right, a6 !=0')
} else {
    console.log('wrong, a6 = 0')
}
//  Если a равна 'test', то выведите 'Верно', иначе 'Неверно'. Проверьте при a, равном 'test', 'тест', 3.
let a7 = 'тест';
if (a7 == 'test') {
    console.log('this is your test!')
} else {
    console.log('this is not a test!')
}
//  Если a равна '1' по значению и по типу, то выведите 'Верно', иначе'Неверно'. Проверьте при a, равном '1', 1, 3.
let a8 = '1';
if (a8 === '1') {
    console.log('right, you got it')
} else {
    console.log('wrong, redo it!')
}
// Работа с логическими переменными
// Если test равна true, то выведите 'Верно', иначе 'Неверно'. Проверьте при test, равном true, false.
// Напишите: с короткой записью и с длинной.
let test = true;
// a) длинная: if (test = true) {
//     console.log("ye, this is a test")
// } else {
//     console.log("no, this is not a test!")
// }
if (test = true) console.log('ye, this is a short form');
else console.log('no, this is not a test!');

const resTest = (test) ? 'ye, this is a short form' : 'no, this is not a test!';
console.log(resTest)

// Если test не равна true, то выведите 'Верно', иначе 'Неверно'. Проверьте при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью и с длинной.
let test1 = true;
// if (test1 != true) {
//     console.log('right')

// } else { console.log('wrong') }
if (test1 != true) console.log('test1 != true');
else console.log('test1 = true');

// Работа с && (и) и || (или)
//  Если a больше нуля и меньше 5-ти, то'Верно', иначе 'Неверно'. Проверьте при a, равном 5, 0, -3, 2.
let b = 4;
if (b > 0 && b < 5) console.log('right, b >0 & <5');
else console.log('wrong, b is not in the right range');
//  Если a равна нулю или равна двум, то прибавьте 7, иначе поделите на 10. Выведите новое значение. Проверьте при a, равном 5, 0, -3, 2.
let b1 = 2;
if (b1 == 0 || b1 == 2) {
    b1 = b1 + 7;
    console.log(b1)
} else {
    b1 = b1 / 10
    console.log(b1)
}
//  Если a равна или меньше 1, а b больше или равна 3, то выведите сумму этих переменных, иначе их разность. Проверьте при a и b, равном 1 и 3, 0 и 6, 3 и 5.
let a9 = 3;
let b2 = 5;
let sum = 0;
let dif = 0;
if (a9 <= 1 && b2 >= 3) {
    sum = a9 + b2;
    console.log("sum:" + sum);
} else {
    dif = a9 - b2;
    console.log('dif:' + dif)
}
//  Если a больше 2-х и меньше 11-ти, или b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', иначе 'Неверно'.
let a10 = 11;
let b3 = 6;
if ((a10 > 2 && a10 < 11) || (b >= 6 && b < 14)) {
    console.log('right')
} else {
    console.log("wrong")
}
// На switch-case
// num может принимать значения: 1, 2, 3 или 4. Если она '1', то в result запишем 'зима', если '2' – 'весна'...
let num = 5;
let result = 0;
switch (num) {
    case 1:
        result = "winter";
        console.log(result);
        break;
    case 2:
        result = 'spring';
        console.log(result);
        break;
    case 3:
        result = 'summer';
        console.log(result);
        break;
    case 4:
        result = 'autumn';
        console.log(result)
    default:
        console.log('i hate summer, you?')
        break;
}
// В day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца...
let day = 50;
if (day >= 1 && day <= 10) {
    console.log("the first:" + day);
} else if (day >= 11 && day <= 20) {
    console.log('the second:' + day);
} else if (day >= 21 && day <= 31) {
    console.log("the third:" + day)
} else {
    console.log('there is no such date in this month')
}
// В month лежит число от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let day1 = 8;
if (day1 > 0 && day1 <= 2 || day1 == 12) {
    console.log('do you miss winter?')
} else if (day1 >= 3 && day1 <= 5) {
    console.log('isnt it spring outside?');
} else if (day1 >= 6 && day1 <= 8) {
    console.log('too hot for me, cause it is summer');
} else if (day1 >= 9 && day1 < 12) {
    console.log('it is much better than in summer, cause winter is coming')
} else {
    console.log("you need a nap")
}
// Дана строка 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если yes - выведите 'да', or 'нет'.
let str = 'abcde';
if (str[0] == 'a') {
    console.log('lets start with a')
} else {
    console.log('there is no a')
}
// Дана строка '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str1 = '12345';
if (str1[0] > 0 && str1[0] <= 3) {
    console.log('i can see your number here')
} else {
    console.log('try again')
}
// Дана строка из 3-х цифр. Найдите сумму этих цифр.
let str2 = '424'
let sum2 = 0;
for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    sum2 = sum2 + +element;
    //  если прописать здесь вывод значения sum2, то в консоле будут выведены сначала сумма первого числа строки, потом 0+1 и т.д.
}
console.log('the sum of this str =' + ' ' + sum2)

// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str3 = '122003';
let sumFirst = 0;
let sumSecond = 0;
for (let i = 0; i < 3; i++) {
    const element = str3[i];
    sumFirst = +element + sumFirst;
}
console.log(sumFirst);
for (let i = 3; i < 6; i++) {
    const element1 = str3[i];
    sumSecond = +element1 + sumSecond;
}
console.log(sumSecond);
if (sumSecond == sumFirst) {
    console.log('they are =');
} else {
    console.log('they are !=');
}
// Выведите столбец чисел от 1 до 50. Используйте абзац
let i = 1;
// while (i <= 50) {
//     document.write(i + '<br>');
//     i++;
// }
// или
for (let i = 1; i < 50; i++) {
    console.log(i);
}
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let arr1 = [1, 2, 3, 4, 5];
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element);
}
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
let arr2 = [2, 3, 4, 5];
let multip = 1;
for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    multip *= element;
}
console.log(multip);
//Дан obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
//С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
let obj = {
    'минск': 'беларусь',
    'Москва': 'россия',
    'киев': 'украина'
}
for (let key in obj) {
    console.log(key + ' ' + '- это' + ' ' + obj[key] + '.');
}
//Циклы while и for. Решите эти задачи сначала через цикл while, а затем через цикл for.
//Выведите столбец чисел от 1 до 100.
// let j = 1;
// while (j < 101) {
//     document.write(j + '<br>');
//     j++;
// }
for (let j = 11; j < 101; j++) {
    console.log(j);
}
//Выведите столбец чисел от 11 до 33.
// let k = 11;
// while (k < 34) {
//     document.write(k + '<br>');
// }
// for (let k = 11; k < 34; k++) {
//     console.log(k);
// }
//Выведите столбец четных чисел в промежутке от 0 до 100.
// let k = 2;
// while (k < 100) {
//     console.log(k);
//     k += 2;
// }
// for (let k = 0; k < 100;) {
//     k = k + 2;
//     console.log(k);
// }
//С помощью цикла найдите сумму чисел от 1 до 100.
// let k = 1;
// let sum3 = 0;
// while (k < 100) {
//     sum3 = sum3 + k;
//     k++;
// }
// console.log(sum3);
let sum4 = 0;
for (let k = 1; k < 100; k++) {
    sum4 = sum4 + k;

}
console.log(sum4);

// Работа с for для массивов
//Дан массив с [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let arr4 = [1, 2, 3, 4, 5]
for (let index = 0; index < arr4.length; index++) {
    console.log(arr4[index]);
}
//Дан массив с [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов. Запишите ее в переменную result.
let arr5 = [1, 2, 3, 4, 5];
let result1 = 0;
for (let index = 0; index < arr5.length; index++) {
    const element = arr5[index];
    result1 += element;

}
console.log('your result is' + ' ' + result1);
// Работа с for-in
// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
let obj1 = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
}
for (key in obj1) {
    console.log(key);
}
for (key in obj1) {
    console.log(obj1[key]);
}
// Дан obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
// С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
let obj2 = {
    'коля': 200,
    'вася': 300,
    'петя': 400,
}
for (key in obj2) {
    console.log(key + '- зарплата' + ' ' + obj2[key] + 'долларов');
}
//Дан массив с 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите столбец эл., которые больше 3-х, но меньше 10.
let arr6 = [2, 5, 9, 15, 0, 4];
for (let index = 0; index < arr6.length; index++) {
    const element = arr6[index];
    if (element > 3 && element < 10) {
        console.log(element);
    }
}
//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let arr7 = [1, -4, 5, 20, -5, 30, -2, -8, 4, -10, 0, 3, 5, 7, -9, -100, 110];
let sum5 = 0;
for (let index = 0; index < arr7.length; index++) {
    const elem = arr7[index];
    if (elem >= 0) {
        sum5 += elem;

    }
}
console.log(sum5);
//Дан массив с 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли элемент со значением,
//равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
let arr8 = [1, 2, 5, 9, 4, 13, 10];
for (let index = 0; index < arr8.length; index++) {
    const el = arr8[index];
    if (el == 4) {
        console.log('есть такое число');
    }
}
//Дан массив [10, 20, 30, 50, 235, 3000]. Выведите на экран числа из массива, которые начинаются на цифру 1, 2 или 5.
// dont get it((((
let arr9 = [10, 20, 30, 50, 235, 3000];
console.log(arr9.filter(num => ['1', '2', '5'].includes(num.toString()[0])));
//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = '';
for (let index = 0; index < arr10.length; index++) {
    const element = arr10[index];
    res += '-' + element;
}
console.log(res);
//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let arr11 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
for (let index = 0; index < 5; index++) {
    const element = arr11[index];
    console.log(element);
}
for (let index = 5; index < 7; index++) {
    const element = arr11[index];
    document.write('<b>' + element + '</b>' + '<br>');
}
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.
// Текущий день должен храниться в переменной day.
let arr12 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
let day2 = '';
for (let index = 0; index < arr12.length; index++) {
    const element = arr12[index];
    if (element == 'среда') {
        document.write('<i>' + ' ' + element + '</i>' + ' ');
    }
    document.write(' ' + element + ' ');
}
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let n = 1000;
let num1 = 0;
while (n >= 50) {
    n = n / 2;
    num1++;
}
console.log(n);
console.log(num1);