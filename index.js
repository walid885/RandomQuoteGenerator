const btnEL = document.getElementById("btn");
const quoteEL = document.getElementById("quote")
const authorEL = document.getElementById("author")
const apiURL = "https://api.quotable.io/random"

async function getQuote(){
    try {
        btnEL.innerText="Loading .. ."
        btnEL.disabled= true 
        quoteEL.innerText = " Upadating "
        authorEL.innerText = " Upadating "
        const response = await  fetch(apiURL)
        const data = await response.json()
        const quoteContent = data.content
        const quoteAuthor  = data.author
        quoteEL.innerText = quoteContent
        authorEL.innerText = quoteAuthor
        btnEL.innerText="Get a quote "
        btnEL.disabled= false  
            console.log(data);
    } catch (error) {
        authorEL.innerText=" an error happend Try later"
        quoteEL.innerText=" an error happend Try later"
    }
 
}

btnEL.addEventListener("click",getQuote)
getQuote()