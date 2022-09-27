
var chave_api = '608482c8296a477f921fc5019ffb9175'

fetch(`https://newsapi.org/v2/top-headlines?country=br&category=general&int=10&apiKey=608482c8296a477f921fc5019ffb9175`
).then((response) =>{
    return response.json();
}).then((jsonParsed) => {
    console.log(jsonParsed)

    const noticias = document.querySelector('.noticias')
    const noticias_later = document.querySelector('noticias_later')

    jsonParsed.articles.forEach(element => {
        
        const author = element.author
        const description = element.description
        const contente = element.content
        const data_publi = element.publishedAT
        const title =  element.title
        const link_noticia = element.url 
        const img_noticia = element.urlToImage


        if(img_noticia != null){
            create_noticias(author, description, data_publi, title, link_noticia,img_noticia,contente, noticias, noticias_later);
        }
        
    });

})

function create_noticias(author, description, data_publi, title, link_noticia,img_noticia,contente, noticias_principal,noticias_laterais){

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



    divImg_noticia.classList.add('img_noticia')
    divInforNot.classList.add('inforNot')
    divTitle.classList.add('title')
    divDescrip.classList.add('descript')
    divPai.classList.add('divPai')
    divFilho.classList.add('divFilho')
    link_noti.classList.add('link')


    img_not.src = img_noticia
    h3Title.textContent  = title
    articleDes.textContent = description
    link_noti.textContent = "Veja a notícia completa"
    link_noti.href = link_noticia



    divPai.appendChild(divImg_noticia)
    divPai.appendChild(divFilho)
    divFilho.appendChild(divInforNot)
    divFilho.appendChild(divDescrip)
    noticias_principal.appendChild(divPai)

    divImg_noticia.appendChild(img_not)

    divInforNot.appendChild(divTitle)
    divTitle.appendChild(h3Title)
    divDescrip.appendChild(articleDes)
    divDescrip.appendChild(link_noti)

    

}