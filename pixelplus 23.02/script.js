$(function(){
    PopUpHide();
});

function PopUpShow(){
    $("#popup1").show();
}

function PopUpHide(){
    $("#popup1").hide();
}

function validateField(field) {
    if (!field.value) {
        field.style.borderColor = 'red';
        field.style.boxShadow = 'inset 0 0 25px #ff8383';
        field.placeholder = 'Поле обязательно для заполнения';
    } else {
        field.style.borderColor = '';
        field.placeholder = '';
    }
}

function validateForm() {
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');

    validateField(name);
    validateField(phone);
    validateField(email);
}

document.getElementById('submitBtn').addEventListener('click', validateForm);




var slides = document.querySelectorAll('.slider_slide');
var currentSlide = 0;
var nextBtn = document.querySelector('.slider_button_next');
var prevBtn = document.querySelector('.slider_button_prev');
var interval = setInterval(nextImage, 4000);

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

function nextImage() {
    clearInterval(interval);
    goToSlide(currentSlide + 1);
}

function prevImage() {
    clearInterval(interval);
    goToSlide(currentSlide - 1);
}

function goToSlide(index) {
    interval = setInterval(nextImage, 4000);
    slides[currentSlide].classList.remove('slider_slide_show');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('slider_slide_show');
}

$(function(){
    MenuHide();
});

function MenuShow(){
    $("burgermenu2").show();
}

function MenuHide(){
    $("#burgermenu2").hide();
}