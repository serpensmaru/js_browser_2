function length_img() {
    // сколько всего изображений
    let img_list = document.querySelectorAll(".slider__item")
    return img_list.length
}

function current_img() {
    // показывает индекс текущего активного img
    let img_list = document.querySelectorAll(".slider__item")
    for (let key in img_list) {
        if (img_list[key].classList.contains("slider__item_active")) {
            return Number(key)
        }
    }
}


let btn_next = document.querySelector(".slider__arrow_next"),
    btn_prev = document.querySelector(".slider__arrow_prev")


btn_next.onclick = () => {
    let num = length_img(),
        ind = current_img(),
        img_list = document.querySelectorAll(".slider__item")

        img_list[ind].className = "slider__item"
        if (ind+1 < num) {
            img_list[ind+1].className = "slider__item slider__item_active"
        } else {
            img_list[0].className = "slider__item slider__item_active"
        }
}

btn_prev.onclick = () => {
    let num = length_img(),
        ind = current_img(),
        img_list = document.querySelectorAll(".slider__item")
        img_list[ind].className = "slider__item"
        if (ind > 0) {
            img_list[ind-1].className = "slider__item slider__item_active"
        } else {
            img_list[num-1].className = "slider__item slider__item_active"
        }
}


let point = Array.from(document.querySelectorAll(".slider__dot"))
for (let key in point) {
    point[key].onclick = () => {
        let img_list = document.querySelectorAll(".slider__item")
        for (item of img_list) {
            item.className = "slider__item"
        }
        img_list[key].className = "slider__item slider__item_active"
    }

}