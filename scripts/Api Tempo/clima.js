const api = {
    key: 'd1d26429eea748575902a889420ce638',
    base: 'http://api.openweathermap.org/data/3.0/',
    lang: 'pt-br',
    units: 'metric',
    city: 'fortaleza'
}


fetch(`${api.base}weather?q=${api.city}&lang${api.lang}&units=${api.units}&appid=${api.key}`
).then((response) =>{
    return response.json();
}).then((jsonParsed) =>{
    console.log(jsonParsed)
})