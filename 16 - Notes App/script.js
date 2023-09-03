const btn = document.getElementById("btn")
const notesbox= document.getElementById("notesbox")
let notes = document.querySelectorAll(".input-box")

function updatestorage() {
    localStorage.setItem("notes" , notesbox.innerHTML);
}
(function showData() {
    notesbox.innerHTML = localStorage.getItem("notes");
})();

btn.addEventListener("click",function () {
    let inputbox = document.createElement("p")
    let img = document.createElement('img')
    inputbox.className = "input-box"
    inputbox.setAttribute("contenteditable","true")
    img.src = "images/delete.png"

    notesbox.appendChild(inputbox).appendChild(img)
})

notesbox.addEventListener("click",function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestorage();  
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt=>{
            nt.onkeyup = function () {
                updatestorage(); 
            }
        })
    }
})