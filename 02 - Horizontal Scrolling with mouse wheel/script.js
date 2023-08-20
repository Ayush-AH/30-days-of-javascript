const backBtn =document.getElementById("backBtn");
const nextBtn =document.getElementById("nextBtn");
const gallery =document.getElementById("gallery");

gallery.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    gallery.scrollLeft += evt.deltaY;
    gallery.style.scrollBehavior ="auto"

})
nextBtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior ="smooth"
    gallery.scrollLeft += 900;
})
backBtn.addEventListener("click",()=>{
    gallery.style.scrollBehavior ="smooth"
    gallery.scrollLeft -= 900;
})

