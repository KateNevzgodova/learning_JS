//Изменение текста в span
function func() {
    let elem = document.getElementById('elem');
    elem.innerHTML = 'поменял!'
}
// Замена span на тег b без изменения текста
function buttonClick() {
    let elem = document.getElementById('elem1');
    elem.outerHTML = '<b>' + elem.innerText + '<b>';
}
//  Дан HTML код (см. под задачей). Поменяйте содержимое абзацев на их порядковый номер в коде.
// <h2>Заголовок, не поменяется.</h2>
/* <p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p> */
function func1() {
    let elems = document.getElementsByTagName('p');
    for (let index = 0; index < elems.length; index++) {
        elems[index].innerHTML = index + 1;
    }
}
//На getElementsByClassName
// Дан HTML код (см. под задачей). Поменяйте содержимое элементов с классом zzz на их порядковый номер в коде.
// <h2 class="zzz">Заголовок с классом zzz.</h2>
// <p class="zzz">Абзац с классом zzz.</p>
// <p class="zzz">Абзац с классом zzz.</p>
// <p>Просто абзац, не поменяется.</p>
function func2() {
    let elements = document.getElementsByClassName('zzz');
    for (let index = 0; index < elements.length; index++) {
        elements[index].innerHTML = index + 1;
    }
}
// На querySelectorAll
// Дан HTML код (см. под задачей). Поменяйте содержимое абзацев с классом zzz на их порядковый номер в коде.
/* <h2 class="zz">Заголовок с классом zz, не поменяется.</h2>
    <p class="zz">Абзац с классом zz.</p>
    <p class="zz">Абзац с классом zz.</p>
    <p>Просто абзац, не поменяется.</p> */
function func3() {
    let elements = document.querySelectorAll('p.zz');
    for (let index = 0; index < elements.length; index++) {
        elements[index].innerText = index + 1;
    }
}
// Свойства innerHTML, outerHTML
function func4() {
    let elementsInput = document.getElementById('testText');
    elementsInput.innerHTML = 'Ку - ку! А я <b> жирный</b>';
}
// текст в абзаце превращается в заголовок h3
function func5() {
    let pToH = document.getElementById('changeToH3');
    pToH.outerHTML = '<h3>Абзац превратился в h3!</h3>';
}
// При нажатии на кнопку абзац станет h3, но текст останется.
function func6() {
    let test1 = document.getElementById('test1');
    test1.outerHTML = '<h3>' + test1.innerText + '</h3>';
}
// две формы для введения числа пользователем, при нажатии на кнопку выводится в третьем окошке сумма
function go() {
    var input1 = +document.getElementById('input1').value;
    var input2 = +document.getElementById('input2').value;
    var result = document.getElementById('result');
    result.innerHTML = input1 + input2;
}