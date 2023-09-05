const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult= document.getElementById("search-result")
const showMore = document.getElementById("show-more")


var keyword = "";
var page = 1;

async function searchImage() {
    keyword = searchBox.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=eP31DsJJMzCqZotXOty0JN8-WhIKzu_IZfzNvx88Jtk`;
    const response = await fetch(url);
    const data = await response.json();
    const results =data.results;
    if (page === 1) {
        searchResult.innerHTML =""
    } 
    results.map((result)=>{
        const img = document.createElement("img");
        img.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "blank";
        imageLink.appendChild(img);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display = "Block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})

showMore.addEventListener("click", ()=>{
    page++;
    searchImage();
})