var chave_api = '608482c8296a477f921fc5019ffb9175'

fetch(`https://newsapi.org/v2/top-headlines?country=br&category=entertainment&int=10&apiKey=608482c8296a477f921fc5019ffb9175`
).then((response) =>{
    return response.json();
}).then((jsonParsed) => {
    console.log(jsonParsed)

    const noticias_entrenimento = document.querySelector('.noticias_entre')

    jsonParsed.articles.forEach(element => {
        
        const img_entretenimento = element.ulrToImage 
        const description_entretenimento = element.description 



    
            create_noticias_entrenimento(img_entretenimento, description_entretenimento, noticias_entrenimento);

        
    });

})

function create_noticias_entrenimento( img_entretenimento, description_entretenimento, noticias_ent){

    const divPai = document.createElement('div')
    const imgEntret = document.createElement('img')
    const pDescrip = document.createElement('p')

    divPai.classList.add('conteudo_entretenimento')

    imgEntret.src = img_entretenimento
    pDescrip.textContent = description_entretenimento

    divPai.appendChild(imgEntret)
    divPai.appendChild(pDescrip)
    noticias_ent.appendChild(divPai)
    

}