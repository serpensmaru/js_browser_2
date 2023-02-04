let wind1 = document.getElementById("modal_main")
wind1.className = "modal modal_active"


const active_wind2 = document.getElementsByClassName("btn btn_danger modal__close show-success")[0]
active_wind2.onclick = () => {
    let wind2 = document.getElementById("modal_success"),
        wind1 = document.getElementById("modal_main")
    wind2.className = "modal modal_active"
    
    wind1.className = "modal"
}

const closed_winds = document.getElementsByClassName("modal__close modal__close_times")
for (let close of closed_winds) {
    console.log(close)
    close.onclick = () => {
        close.closest(".modal").className = "modal"
    }
  }