var slideIndex = [1];
var slideId = ["slides1"]
showSlides(1, 0);


function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("slides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 4000);
}

let slideIndex3 = 1;
showSlides3(slideIndex3);


function currentSlide(a) {
    showSlides3(slideIndex3 = a);
}

function showSlides3(a) {
    let j;
    let slides3 = document.getElementsByClassName("slides3");
    let dots = document.getElementsByClassName("dot");
    if (a > slides3.length) { slideIndex3 = 1 }
    if (a < 1) { slideIndex3 = slides3.length }
    for (j = 0; j < slides3.length; j++) {
        slides3[j].style.display = "none";
    }
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides3[slideIndex3 - 1].style.display = "block";
    dots[slideIndex3 - 1].className += " active";
}

function goTimer() {
    window.timerId = window.setInterval(timer, 1000);
}

function stopTimer() {
    window.clearInterval(window.timerId);
}

function timer() {
    let elem = document.getElementById('test');
    elem.value = parseInt(elem.value) + 1;
}

function go() {
    window.timerId = window.setInterval(timer, 1000);
    document.getElementById('go').disabled = true;
}

function go1() {
    window.timerId = window.setInterval(timer2, 1000);
    document.getElementById('go1').disabled = true;
    document.getElementById('stop').disabled = false;
}

function stop() {
    window.clearInterval(window.timerId);
    document.getElementById('go1').disabled = false;
    document.getElementById('stop').disabled = true;
}

function timer2() {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var img5 = document.getElementById('img5');
    var img6 = document.getElementById('img6');
    var tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = img5.src;
    img5.src = img6.src;
    img6.src = tmp;
}
let elements = document.getElementsByTagName('input');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('blur', func);
}

function func() {
    let correctLength = this.dataset.length; //правильное количество
    let inputDataLength = this.value.length; //вбитое в инпут количество
    if (correctLength == inputDataLength) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}