
const chave = "TIJ11Y04Y5JSOKV8"
const petrobras = "PETR4.SA"

fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=PETR4.SA&apikey=TIJ11Y04Y5JSOKV8`
).then((response) =>{
    return response.json()
}).then((jsonParsed) =>{
    console.log(jsonParsed) 

    

})