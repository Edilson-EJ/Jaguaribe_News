const api = {
    key: "d1d26429eea748575902a889420ce638",
    base: "http://api.openweathermap.org/data/3.0/",
    lang: "pt-br",
    units: "metric",
    city: "fortaleza"
}


fetch(`http://api.openweathermap.org/data/2.5/weather?q=fortaleza&langpt-b&units=metric&appid=d1d26429eea748575902a889420ce638`
).then((response) =>{
    return response.json();
}).then((jsonParsed) =>{
    console.log(jsonParsed)

    jsonParsed.main.forEach(element =>{
        const temp_atual = element.temp 
        const temperatura_max = element.temp_max
        const temperatura_min = element.temp_min 
        const humidade = element.humidity 

        const temperatura_atual = document.getElementById('temp_atual');
        temperatura_atual.innerText = temp_atual + '°'

        const temperatura_mx = document.getElementById('temp_max');
        temperatura_mx.innerText = temperatura_max + '°'

        const temperatura_mn = document.getElementById('temp_min');
        temperatura_mn.innerText = temperatura_min+ '°'

        const humidade_temp = document.getElementById('humidade');
        humidade_temp.innerText = humidade + '%'
    })

})



        