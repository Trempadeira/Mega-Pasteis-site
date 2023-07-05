var modal = document.getElementById("janela-car");
var btn = document.getElementById("carrinho");
var span = document.getElementsByClassName("fechar")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}