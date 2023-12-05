
const Url = "https://stocktracker--pauloharaujo345.repl.co/produtos"


function carregaDadosJSONServer(func) {
    fetch(Url)
        .then(function (response) { return response.json() })
        .then(function (dados) {
            Produtos = dados
            func()
        })
}




function salvaDados(dados) {

    localStorage.setItem('db', JSON.stringify(dados));
}


function incluirDados() {

    let Produtos = leDados();


    let nome = document.getElementById('camponome').value;
    let peso = document.getElementById('campopeso').value;
    let valor = document.getElementById('campovalor').value;
    let Qtd = document.getElementById('campoqtd').value;
    let MinQtd = document.getElementById('campoMinqtd').value;

    let novoprod = {
        nome: nome,
        peso: peso,
        valor: valor,
        Qtd: Qtd,
        MinQtd: MinQtd,
    };
    Produtos.produtos.push(novoprod);


    salvaDados(Produtos);


    imprimeDados();
}

function imprimeDado() {

    let nome = document.getElementById('campoNome');
    let peso = document.getElementById('campoPeso');
    let valor = document.getElementById('campoValor');
    let Qtd = document.getElementById('campoQtd');
    let MinQtd = document.getElementById('campoMinQtd');
    let srtHTML = '';
    let srtHTMLp = '';
    let srtHTMLv = '';
    let srtHTMLq = '';
    let srtHTMLmq = '';
    let Produtos = leDados()
    for (i = 0; i < Produtos.produtos.Frutas.length; i++) {
        if (i % 2 == 0) {
            srtHTML += `<p class="cc" id="c">${Produtos.produtos.Frutas[i].nome}</p>`
            srtHTMLp += `<p class="cc" id="c">${Produtos.produtos.Frutas[i].peso}</p>`
            srtHTMLv += `<p class="cc" id="c">${Produtos.produtos.Frutas[i].valor}</p>`
            srtHTMLq += `<p class="cc" id="c">${Produtos.produtos.Frutas[i].Qtd}</p>`
            srtHTMLmq += `<p class="cc" id="c">${Produtos.produtos.Frutas[i].MinQtd}</p>`
        } else {
            srtHTML += `<p class="cc" >${Produtos.produtos.Frutas[i].nome}</p>`
            srtHTMLp += `<p class="cc" >${Produtos.produtos.Frutas[i].peso}</p>`
            srtHTMLv += `<p class="cc" >${Produtos.produtos.Frutas[i].valor}</p>`
            srtHTMLq += `<p class="cc" >${Produtos.produtos.Frutas[i].Qtd}</p>`
            srtHTMLmq += `<p class="cc" >${Produtos.produtos.Frutas[i].MinQtd}</p>`
        }

    }

    nome.innerHTML = srtHTML
    peso.innerHTML = srtHTMLp
    valor.innerHTML = srtHTMLv
    Qtd.innerHTML = srtHTMLq
    MinQtd.innerHTML = srtHTMLmq

}

function HOME() {
    window.location.href = "http://127.0.0.1:5501/HOME/home.html";
}
function invent() {
    window.location.href = "http://127.0.0.1:5501/tela_categorais/tela_categorias.html";
}

document.getElementById('btnIncluirContato').addEventListener('click', incluirDados);
document.getElementById('btncadastar').addEventListener('click', HOME);
document.getElementById('btninventario').addEventListener('click', invent);
