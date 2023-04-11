var pesoDaBobina = document.querySelector("#insert-value1");

var larguraBob = document.querySelector("#insert-value2");

var larguraTira = document.querySelector("#insert-value3");

var quantidadeDeTira = document.querySelector("#insert-value4");



var resultado = document.querySelector("span");

var sucata = document.querySelector("number");



function somar() {
  resultado.innerHTML = parseInt((pesoDaBobina.value / larguraBob.value) * larguraTira.value * quantidadeDeTira.value) ;
  sucata.innerHTML = parseInt(pesoDaBobina.value - resultado.innerHTML)
}
