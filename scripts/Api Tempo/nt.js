fetch(`http://api.openweathermap.org/data/2.5/weather?q=natal&langpt-b&units=metric&appid=d1d26429eea748575902a889420ce638`
).then((response) =>{
    return response.json()
}).then((jsonParsed) =>{
    console.log(jsonParsed)

    
        const temperatura = jsonParsed.main.temp
        
    

        const temp_atual = jsonParsed.main.temp 
        const temperatura_max = jsonParsed.main.temp_max
        const temperatura_min = jsonParsed.main.temp_min 
        const humidade = jsonParsed.main.humidity 

        const temperatura_atual = document.getElementById('temp_atual_nt');
        temperatura_atual.innerText = ' : ' + temp_atual + ' °C'

        const temperatura_mx = document.getElementById('temp_max_nt');
        temperatura_mx.innerText = ' : ' + temperatura_max + ' °C'

        const temperatura_mn = document.getElementById('temp_min_nt');
        temperatura_mn.innerText = ' : ' + temperatura_min+ ' °C'

        const humidade_temp = document.getElementById('humidade_nt');
        humidade_temp.innerText = ' : ' + humidade + '%'
});
