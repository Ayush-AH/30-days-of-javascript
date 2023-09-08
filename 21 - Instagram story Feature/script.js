var arr = [
    {
        dp: "https://images.unsplash.com/photo-1685821935645-92a918ca51b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80", story: "https://images.unsplash.com/photo-1500027014421-46ccc843776a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1692035053386-76667a66067a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", story: "https://images.unsplash.com/photo-1690043544608-6660975bdd29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1681474936032-65e35149b123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80", story: "https://images.unsplash.com/photo-1691655245135-cccad4661ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1689193505830-2f3bfa599822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", story: "https://images.unsplash.com/photo-1689009117682-2ebb831164ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1687441266692-de2df8197665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80", story: "https://images.unsplash.com/photo-1687777238205-d7c572cde6cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1686041673559-a763bd15d2f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80", story: "https://images.unsplash.com/photo-1684598273405-a228a231c66f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
    }
]
var fullScreen = document.getElementById("full-screen");
var storiyan = document.getElementById("storiyan");
var clutter = "";

arr.forEach(function (elem, idx) {
    clutter += `<div id="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function (dets) {
    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    console.log(arr[dets.target.id].story);
    
    

    setTimeout(() => {
    fullScreen.style.display = "none";
    }, 3000);
})