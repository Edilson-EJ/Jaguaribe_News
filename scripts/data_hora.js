
var data = new Date();

var dia_semana = data.getDay();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

var meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto", "Setembro","Outubro","Novembro","Dezembro")
var semanas = new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado-Feira")

const data_clima = document.querySelector("#data")

data_clima.innerText = semanas[dia_semana] + " , " + dia + " de " + meses[mes] + " de " + ano;


    




const relogio = setInterval(function time(){

    const hora_clima = document.querySelector("#hora");

    let dateToday = new Date();
    let horas = dateToday.getHours()
    let minutos = dateToday.getMinutes()
    let segundos = dateToday.getSeconds()

    if(horas < 10){
        horas = '0' + horas
    }

    if(minutos < 10){
        minutos = '0' + minutos
    }

    if(segundos < 10){
        segundos = '0' + segundos
    }

    hora_clima.textContent = horas + ':' + minutos + ':' + segundos 

})

