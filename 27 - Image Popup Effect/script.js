const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("#centre")
    .addEventListener("mousemove", throttleFunction((dets) => {
        var div =document.createElement("div")
        div.classList.add("imgdiv")
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";
        document.body.appendChild(div);

        var img =document.createElement("img")
        img.setAttribute("src","https://images.unsplash.com/photo-1657808741509-dced0cde853f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")
        div.appendChild(img);
        
        gsap.to(img ,{
            y:"0",
            ease: Power3,
            duration: .6
        });
        gsap.to(img ,{
            y:"100%",
            delay: .6,
            ease: Power2
        });

        setTimeout(() => {
            div.remove();
        }, 1000);
    }, 400));