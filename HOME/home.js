function HOME() {
    window.location.href = "http://127.0.0.1:5501/HOME/home.html";
}
function invent() {
    window.location.href = "http://127.0.0.1:5501/tela_categorais/tela_categorias.html";
}


document.getElementById('btncadastar').addEventListener('click', HOME);
document.getElementById('btninventario').addEventListener('click', invent);