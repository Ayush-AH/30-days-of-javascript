var selectedFeild = document.getElementById("selectedFeild");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("option")
var list = document.getElementById("list");
var arrow = document.getElementById("arrow")



selectedFeild.onclick = function () {
    list.classList.toggle("hide")
    arrow.classList.toggle("rotate")
}
for (option of options) {
    option.onclick = function () {
           selectText.innerHTML = this.textContent
           list.classList.toggle("hide")
    } 
}
