
var data = new Date();

var dia_semana = data.getDay();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

var meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto", "Setembro","Outubro","Novembro","Dezembro")
var semanas = new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado-Feira")

const data_clima = document.querySelector("#data")

data_clima.innerText = semanas[dia_semana] + " , " + dia + " de " + meses[mes] + " de " + ano;

function moveRelogio(){
    
var horas = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();

const hora_clima = document.querySelector("#hora");

if(horas.lenght == 1){
    horas = "0" + horas
}

if(minutos.lenght == 1){
    minutos = "0" + minutos
}

if(segundos.lenght == 1){
    segundos = "0" + segundos
}

console.log(segundos)

hora_clima.innerText =  horas + ":" + minutos +":" + segundos


}

setTimeout("moveRelogio()",1000);