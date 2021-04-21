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