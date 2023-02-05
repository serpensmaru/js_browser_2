function getListImg() {
    // Список изображений
    return Array.from(document.querySelectorAll(".slider__item"))
}

function getCurrentImg() {
    // Показывает индекс текущего активного img
    let imgList = getListImg()
    return imgList.findIndex((elem) => {if (elem.classList.contains("slider__item_active")) {return true}})
}

function activeImg(numImg) {
    // Показывает слайд по его индексу (numImg) и выключает включенный слайд
    let imgList = getListImg()
    for (let elem of imgList) {
            elem.className = "slider__item"
    }
    imgList[numImg].className = "slider__item slider__item_active"
    
}

function activeDot(numDot) {
    // активирует точку по индексу
    let points = Array.from(document.querySelectorAll(".slider__dot"))
    for (let dot of points) {
        dot.className = "slider__dot"
    }
    points[numDot].className = "slider__dot slider__dot_active"
}

function activeSlide(numInd) {
    // По индексу активирует точку и изображение и выключает то что было активированно
    activeDot(numInd)
    activeImg(numInd)
}

// чтобы активировалась точка при загрузки страницы
let indImg = getCurrentImg()
activeSlide(indImg)

let btnNext = document.querySelector(".slider__arrow_next"),
    btnPrev = document.querySelector(".slider__arrow_prev")

function nextSlide() {
    let numInd = getCurrentImg() + 1,
    maxImg = Number(getListImg().length) 
    if (numInd < maxImg) {
        activeSlide(numInd)
    } else {
        activeSlide(0)
    }
}

function prevSlide() {
    // функция вперед (ее можно теперь прикреплять к разным событиям)
    let numInd = getCurrentImg(),
    maxImg = Number(getListImg().length)
    if (numInd == 0) {
        activeSlide(maxImg -1)
    } else {
        activeSlide(numInd - 1)
    }
}

function nextKeyboard(e) {
    if (e.code == "ArrowRight") {nextSlide()}
}
function prevKeyboard(e) {
    if (e.code == "ArrowLeft") {prevSlide()}
}

window.addEventListener("keyup", nextKeyboard)
window.addEventListener("keyup", prevKeyboard)
btnNext.addEventListener("click", nextSlide)
btnPrev.addEventListener("click", prevSlide)



let points = Array.from(document.querySelectorAll(".slider__dot"))
for (let key in points) {
    points[key].onclick = () => {
        activeSlide(key)
    }
}