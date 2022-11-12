
fetch(`http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,ETH-BRL,EUR-USD,ARS-BRL`
).then((response) =>{
    return response.json()
}).then((jsonParsed) =>{
    console.log(jsonParsed) 


})

