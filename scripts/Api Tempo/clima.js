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
})