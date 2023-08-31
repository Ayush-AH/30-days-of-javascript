const quote = document.getElementById("quote")
const author = document.getElementById("author")
const apiURL ="https://api.quotable.io/random";

 async function GenerateQuote(URL) {
    const url = await fetch(URL);
    var data = await url.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
 }
 GenerateQuote(apiURL);

 function tweet() {
   window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}`)
 }