const cursor = document.querySelector("#cursor");
const hh = document.querySelector("h1");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x  +"px";
    cursor.style.top = dets.y  +"px" ;
})

hh.addEventListener("mouseenter",function(dets){
    cursor.style.left = dets.x  +"px";
    cursor.style.top = dets.y  +"px" ;
    cursor.style.transform = "scale(2.5)";
})
hh.addEventListener("mouseleave",function(dets){
    cursor.style.left = dets.x  +"px";
    cursor.style.top = dets.y  +"px" ;
    cursor.style.transform = "scale(1)";
})