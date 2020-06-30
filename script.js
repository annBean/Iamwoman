var menuBlock = document.querySelector(".header_menu");
var burger = document.querySelector(".burger");
var cross = document.querySelector(".cross")

var btnLeft = document.querySelector('#btn-left')
var btnRight = document.querySelector('#btn-right')
var slideList = document.querySelectorAll('.product__item')
var currentSlide = document.querySelector('.slider-active')
var slideNum = 0;

btnRight.addEventListener("click", (evt)=>{
    if(slideNum < slideList.length - 1){
        slideNum++;
    }else{
        slideNum = 0;
    }
    document.querySelector('.slider-active').classList.remove('slider-active');
    slideList[slideNum].classList.add('slider-active');

})

btnLeft.addEventListener("click", (evt)=>{
    if(slideNum > 0){
        slideNum--;
    }else{
        slideNum = slideList.length - 1;
    }
    document.querySelector('.slider-active').classList.remove('slider-active');
    slideList[slideNum].classList.add('slider-active');

})

burger.addEventListener("click", (evt)=>{
    evt.preventDefault();
    menuBlock.classList.add("active");
})

cross.addEventListener("click", (evt)=>{
    evt.preventDefault();
    menuBlock.classList.remove("active");
})