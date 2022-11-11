const api = {
    key: "d1d26429eea748575902a889420ce638",
    base: "http://api.openweathermap.org/data/3.0/",
    lang: "pt-br",
    units: "metric",
    city: "fortaleza"
}


fetch(`http://api.openweathermap.org/data/2.5/weather?q=jaguaribe&langpt-b&units=metric&appid=d1d26429eea748575902a889420ce638`
).then((response) =>{
    return response.json()
}).then((jsonParsed) =>{
    console.log(jsonParsed)

    
        const temperatura = jsonParsed.main.temp
        
    

        const temp_atual = jsonParsed.main.temp 
        const temperatura_max = jsonParsed.main.temp_max
        const temperatura_min = jsonParsed.main.temp_min 
        const humidade = jsonParsed.main.humidity 

        const temperatura_atual = document.getElementById('temp_atual_jb');
        temperatura_atual.innerText = ' : ' + temp_atual + ' °C'

        const temperatura_mx = document.getElementById('temp_max_jb');
        temperatura_mx.innerText = ' : ' + temperatura_max + ' °C'

        const temperatura_mn = document.getElementById('temp_min_jb');
        temperatura_mn.innerText = ' : ' + temperatura_min+ ' °C'

        const humidade_temp = document.getElementById('humidade_jb');
        humidade_temp.innerText =' : ' +  humidade + '%'
});







        