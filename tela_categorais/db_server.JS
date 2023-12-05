const Url = "https://stocktracker--pauloharaujo345.repl.co/produtos"


function carregaDadosJSONServer (func) {
    fetch(Url)
        .then (function (response) { return response.json() })
        .then (function (dados) {
            Produtos = dados
            func ()
        })
}