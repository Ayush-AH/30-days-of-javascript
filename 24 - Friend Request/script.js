var addfrnd = document.getElementById("addfrnd")
var dostiKesih = document.querySelector("h2")
var check = 0 ;
addfrnd.addEventListener("click", function () {
    if (check == "0") {
        dostiKesih.innerHTML = "Friends"
        dostiKesih.style.color = "green"
        addfrnd.innerHTML = "Remove"
        addfrnd.style.backgroundColor = "rgba(5, 136, 243, 0.518)"
        check = 1;
    }else{
        dostiKesih.innerHTML = "Stangers"
        dostiKesih.style.color = "red"
        addfrnd.innerHTML = "Add Frined"
        addfrnd.style.backgroundColor = "rgba(5, 53, 243, 0.874)"

        check = 0;
    }
    
})