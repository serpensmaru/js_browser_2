const menu = document.querySelectorAll(".menu__link") // все ссылки

for (let item of menu) {
    let par1 = item.closest(".menu_sub") // если у ссалыки найдется родитель с классом вложенности
    if (par1) {  // исключаем ссылки у которых нет вложенности (т.е те кто null т.к. не нашлись родители с .menusub)
        let radix = par1.closest(".menu__item").querySelector(".menu__link") // ищем первую ссылку

        radix.onclick = () => {
            if (par1.className == "menu menu_sub menu_active") { // если меню открыто то закроем
                console.log(par1)
                par1.className = "menu menu_sub"
            } else {
                // если нажать на другое меню при уже открытом то прошлое закроется
                let count_open_menu = document.getElementsByClassName("menu menu_sub menu_active")
                if (count_open_menu.length == 1) {
                    for (i of count_open_menu) {
                        i.className = "menu menu_sub"
                    }
                }
                // открыть меню на которое нажали
                par1.className = "menu menu_sub menu_active"
                return false    // выкл переход по ссылке\
            }
        }   
    }

}

