const lists = document.getElementsByClassName("list");
const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");

for(list of lists){
    list.addEventListener("dragstart",function (dets) {
        let selected = dets.target; 

        rightBox.addEventListener("dragover",function (dets) {
            dets.preventDefault();
        })
        rightBox.addEventListener("drop",function (dets) {
            rightBox.appendChild(selected);
            selected = null;        
        })
        leftBox.addEventListener("dragover",function (dets) {
            dets.preventDefault();
        })
        leftBox.addEventListener("drop",function (dets) {
            leftBox.appendChild(selected);
            selected = null;
        })
    })
}
