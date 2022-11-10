


function BuscarCidadeUsuario(){

        const campoTexto = document.querySelector("#campo")

        const cidade = campoTexto.value 

        console.log("cidade:", cidade)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&langpt-b&units=metric&appid=d1d26429eea748575902a889420ce638`
    ).then((response) =>{
        return response.json()
    }).then((jsonParsed) =>{
        console.log(jsonParsed)

        
            const temperatura = jsonParsed.main.temp
            
        

            const temp_atual = jsonParsed.main.temp 
            const temperatura_max = jsonParsed.main.temp_max
            const temperatura_min = jsonParsed.main.temp_min 
            const humidade = jsonParsed.main.humidity 

            const temperatura_atual = document.getElementById('buscarTemperatura');
            temperatura_atual.innerText = ' : ' + temp_atual + '°'

            const temperatura_mx = document.getElementById('buscarMax');
            temperatura_mx.innerText = ' : ' + temperatura_max + '°'

            const temperatura_mn = document.getElementById('buscarMin');
            temperatura_mn.innerText = ' : ' + temperatura_min+ '°'

            const humidade_temp = document.getElementById('buscarHumidade');
            humidade_temp.innerText = ' : ' + humidade + '%'

            const cidade_buscar = document.querySelector("#cidade_busca")

            cidade_buscar.textContent = cidade.toUpperCase()
    });

}

