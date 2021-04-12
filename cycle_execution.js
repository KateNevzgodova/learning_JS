//Изменение текста в span
function func() {
    let elem = document.getElementById('elem');
    elem.innerHTML = 'поменял!'
}
// Замена span на тег b без изменения текста
function buttonClick() {
    let elem = document.getElementById('elem1');
    elem.outerHTML = '<b>' + elem.innerHTML + '<b>';
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
        elements[index].innerHTML = index + 1;
    }
}