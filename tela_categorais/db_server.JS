/* ----------------- CARREGAR O BANCO DE DADOS ----------*/

const Url = "https://stocktracker--pauloharaujo345.repl.co/produtos"


function carregaDadosJSONServer (func) {
    fetch(Url)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            Produtos = dados
            func ()
        })
}



/* ---------------------------------------------------*/
function HOME() {
    window.location.href = "http://127.0.0.1:5501/HOME/home.html";
}
function invent() {
    window.location.href = "http://127.0.0.1:5501/tela_categorais/tela_categorias.html";
}


document.getElementById('btncadastar').addEventListener('click', HOME);
document.getElementById('btninventario').addEventListener('click', invent);