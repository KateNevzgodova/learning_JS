function buttonClick(test1) {
    var input = document.getElementById('test1')
    alert(input.value);
}

function func(input1) {
    var input = document.getElementById('input1')
    input.value = 'ой, я поменяла текст!';
}

function go() {
    elem = document.getElementById('test2');
    elem.src = '2.jpg';
}

function func(elem) {
    elem.value = 'oh, you need love^_^';
}

function button1Click(test4) {
    document.getElementById('test4').style.color = 'red';
}

function hide(test5) {
    input = document.getElementById('test5');
    input.style.display = 'none';
}

function show(test5) {
    input = document.getElementById('test5');
    input.style.display = 'inline-block';
}

function button2Click(test6) {
    var input = document.getElementById('test6');
    input.value = 'here we go';
    input.style.color = 'blue';
    input.style.fontFamily = 'roboto';
}

function block() {
    var block = document.getElementById('block');
    var unblock = document.getElementById('unblock');
    block.value = 'О, теперь на меня больше не нажать!';
    block.disabled = true;
    unblock.style.display = 'block';
}

function unblock() {
    var block = document.getElementById('block');
    var unblock = document.getElementById('unblock');
    block.value = 'О, на меня снова можно нажимать!';
    block.disabled = false;
    unblock.style.display = 'none';
}

function button3Click(elem) {
    elem.value = parseInt(elem.value) + 1;
}

function button4Click(test7) {
    elem = document.getElementById('test7');
    elem.value = 'OMG';
    elem.style.cssFloat = 'right';
}

function button5Click() {
    var input1 = document.getElementById('test8');
    var input2 = document.getElementById('test9');
    var tmp = input1.value;
    input1.value = input2.value;
    input2.value = tmp;
}

function button6Click(test10) {
    var test10 = document.getElementById('test10');
    var value = test10.value;
    var result = document.getElementById('result');
    result.value = value * value;
}

function button7Click(test11) {
    var test11 = document.getElementById('test11');
    var value11 = test11.value;
    if (!isNaN(value11)) {
        var result2 = document.getElementById('result2')
        result2.value = value11 * value11;
    } else {
        alert('no number!');
    }
}

function go1(elem) {
    elem.disabled = true;
    elem.style.cursor = 'not-allowed';
}

function add(text) {
    var input12 = document.getElementById('input12');
    input12.value = input12.value + text;
}