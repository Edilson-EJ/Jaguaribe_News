
var chave_api = '608482c8296a477f921fc5019ffb9175'

fetch(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${chave_api}`
).then((response) =>{
    return response.json();
}).then((jsonParsed) => {
    console.log(jsonParsed)

    document.querySelector('.noticias')

})