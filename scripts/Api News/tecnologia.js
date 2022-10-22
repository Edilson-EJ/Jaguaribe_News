var chave_api = '608482c8296a477f921fc5019ffb9175'

fetch(`https://newsapi.org/v2/top-headlines?country=br&category=technology&int=10&apiKey=608482c8296a477f921fc5019ffb9175`
).then((response) =>{
    return response.json();
}).then((jsonParsed) => {
    console.log(jsonParsed)

    const noticias = document.querySelector('.noticias')

    jsonParsed.articles.forEach(element => {
        
        const author = element.author
        const description = element.description
        const data_publi = element.publishedAT
        const title =  element.title
        const link_noticia = element.url 
        const img_noticia = element.urlToImage


        if(img_noticia != null){
            create_noticias(author, description, data_publi, title, link_noticia,img_noticia, noticias);
        }
        
    });

})

function create_noticias(author, description, data_publi, title, link_noticia,img_noticia, noticias_principal){

    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    

    const  divImg_noticia = document.createElement('div')
    const img_not = document.createElement('img')

    const  divInforNot = document.createElement('div')
    const  divTitle = document.createElement('div')
    const  h3Title = document.createElement('h3')
    const  divDescrip = document.createElement('div')
    const articleDes = document.createElement('article')
    const link_noti = document.createElement('a')

    const divAuthor = document.createElement('div')
    const  h6Author = document.createElement('h6')
    const  pDataPubli = document.createElement('p')


    divImg_noticia.classList.add('img_noticia')
    divInforNot.classList.add('inforNot')
    divTitle.classList.add('title')
    divDescrip.classList.add('descript')
    divAuthor.classList.add('author')
    divPai.classList.add('divPai')
    divFilho.classList.add('divFilho')
    link_noti.classList.add('link')

    img_not.src = img_noticia
    h3Title.textContent  = title
    articleDes.textContent = description
    link_noti.textContent = "Veja a notícia completa"
    link_noti.href = link_noticia
    h6Author.textContent = author
    pDataPubli.textContent = data_publi

    divPai.appendChild(divImg_noticia)
    divPai.appendChild(divFilho)
    divFilho.appendChild(divInforNot)
    divFilho.appendChild(divDescrip)
    divFilho.appendChild(divAuthor)
    noticias_principal.appendChild(divPai)

    divImg_noticia.appendChild(img_not)

    divInforNot.appendChild(divTitle)
    divTitle.appendChild(h3Title)
    divDescrip.appendChild(articleDes)
    divDescrip.appendChild(link_noti)

    divAuthor.appendChild(h6Author)
    divAuthor.appendChild(pDataPubli)


}