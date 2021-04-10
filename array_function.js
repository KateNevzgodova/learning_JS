// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
let a = ['a', 'b', 'c'];
let b = [1, 2, 3]
let c = a.concat(b);
console.log('with concat:', c);
//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let d = ['a', 'b', 'c'];
d.push(1, 2, 3);
console.log('with push:', d);
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
let array = arr.concat(arr1);
console.log(array)
    // Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let arr2 = [1, 2, 3];
let array1 = arr2.reverse();
console.log('перевернутый массив:', array1)
    // Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let array2 = [1, 2, 3];
array2.push(4, 5, 6);
console.log('в конец с push', array2);
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr3 = [1, 2, 3];
arr3.unshift(4, 5, 6);
console.log('в начале с unshift', arr3);
//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let array3 = ['js', 'css', 'jq'];
let elem = array3.shift();
console.log('первый элемент массива', elem);
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let elem1 = array3.pop();
console.log('последний элемент массива', elem1);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let array4 = [1, 2, 3, 4, 5];
let elem2 = array4.slice(0, 3);
console.log('вырезанные элементы', elem2);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let elem3 = array4.slice(3);
console.log('вырезанные последние элементы', elem3);
//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
array4.splice(1, 4, 4, 5);
console.log('массив с добавлением и удалением ч/з splice:', array4);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let array5 = [1, 2, 3, 4, 5];
array5.splice(-1, 1);
array5.splice(0, 1);
console.log('без первого и последнего элемента', array5);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let array6 = [1, 2, 3, 4, 5];
array6.splice(2, 0, 'a', 'b', 'c');
console.log('добавили новые три элемента', array6);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let array7 = [1, 2, 3, 4, 5];
array7.splice(1, 0, 'a', 'b');
array7.splice(6, 0, 'c');
array7.splice(8, 0, 'e');
console.log('вводим новые эементы на 1,2,6,8 места', array7);
//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let array8 = [3, 4, 1, 2, 7];
console.log('сортируем элементы массива', array8.sort());
//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let obj = { js: 'test', jq: 'hello', css: 'world' };
console.log('ключи вашего массива:', Object.keys(obj));

// Отработка стандартных функций JavaScript
// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл.
let str = 'think of all the horrors that I promised you I would bring';
str = str[0].toUpperCase() + str.substr(1);
console.log(str);
// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
let str1 = '123456';
let str1Reverse = str1.split('').reverse().join();
console.log(str1Reverse);
// Проверьте, что строка начинается на http://. // Проверьте, что строка заканчивается на .html.
let str2 = 'http:// old code mu .html';
console.log('начинается ли с указанного элемента', str2.indexOf('http://', [0]));
console.log('где указанный элемент', str2.indexOf('.html', [0]));
// или
if (str2.substr(0, 7) == 'http://') {
    console.log('начинается с http://')

} else {
    console.log('элемента http:// нет в начале строки')
}
if (str2.substr(-5) == '.html') {
    console.log('заканчивается на .html')
} else {
    console.log('заканчивается на другой элемент')
}