const password = document.getElementById("password");
const icon = document.getElementById("eyeIcon");
var mess = document.getElementById("message");
var str = document.getElementById("strength");

 // ------------- eye button-------------
function handleIcon() {
    if (password.type === "password") {
        password.type = "text"
        icon.src ="eye-open.png"
    } else {
        password.type = "password"
        icon.src ="eye-close.png"
    }
}
 // ------------- password Strength-------------
password.addEventListener("input",function () {
    if (password.value.length > 0) {
        mess.style.display = "block"
    }else{
        mess.style.display = "none"

    }
    if (password.value.length < 4) {
        mess.style.color = "red"
        str.innerHTML = "week"
    }
    else if (password.value.length >= 4 && password.value.length <= 8) {
        mess.style.color = "yellow"
        str.innerHTML = "medium"
    }
    else if (password.value.length > 8) {
        mess.style.color = "green"
        str.innerHTML = "strong"
    }
})