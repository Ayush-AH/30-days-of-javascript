var con = document.querySelector("#container")
var icon = document.querySelector("#centre")
var bttm = document.querySelector("#bttm")
//  --------- big  heart wala code------
con.addEventListener("dblclick", function () {
    icon.style.transform = "translate(-50%,-50%)  scale(1)";
    icon.style.opacity = "0.8"
    bttm.classList.remove("ri-heart-3-line");
    bttm.classList.add("ri-heart-3-fill");
    bttm.style.color = "red";

    setTimeout(() => {
        icon.style.opacity = "0";
    }, 1000);
    setTimeout(() => {
        icon.style.transform = "translate(-50%,-50%)  scale(0)";
    }, 3000);
})
// -----------  small heart wala code---------
bttm.addEventListener("click", function () {
    if (bttm.classList.contains("ri-heart-3-line")) {
        bttm.classList.remove("ri-heart-3-line");
        bttm.classList.add("ri-heart-3-fill");
        bttm.style.color = "red";
    }
    else {
        bttm.classList.add("ri-heart-3-line");
        bttm.classList.remove("ri-heart-3-fill");
        bttm.style.color = "black";

    }
})