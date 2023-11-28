//o .JSON não ta funcionado



function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            produtos: [
                {
                    nome: "Nome",
                    peso: "Peso(g)",
                    valor: "Preço",
                    Qtd: "Und",
                    MinQtd: "UndMin"
                }
            ]
        }

    }



    return objDados;
}


function salvaDados(dados) {

    localStorage.setItem('db', JSON.stringify(dados));
}


function incluirDados() {

    let objDados = leDados();


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
    objDados.produtos.push(novoprod);


    salvaDados(objDados);


    imprimeDados();
}

window.onload = function imprimeDado() {

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
    let objDados = leDados()
    for (i = 0; i < objDados.produtos.length; i++) {
        if (i % 2 == 0) {
            srtHTML += `<p class="cc" id="c">${objDados.produtos[i].nome}</p>`
            srtHTMLp += `<p class="cc" id="c">${objDados.produtos[i].peso}</p>`
            srtHTMLv += `<p class="cc" id="c">${objDados.produtos[i].valor}</p>`
            srtHTMLq += `<p class="cc" id="c">${objDados.produtos[i].Qtd}</p>`
            srtHTMLmq += `<p class="cc" id="c">${objDados.produtos[i].MinQtd}</p>`
        } else {
            srtHTML += `<p class="cc" >${objDados.produtos[i].nome}</p>`
            srtHTMLp += `<p class="cc" >${objDados.produtos[i].peso}</p>`
            srtHTMLv += `<p class="cc" >${objDados.produtos[i].valor}</p>`
            srtHTMLq += `<p class="cc" >${objDados.produtos[i].Qtd}</p>`
            srtHTMLmq += `<p class="cc" >${objDados.produtos[i].MinQtd}</p>`
        }

    }

    nome.innerHTML = srtHTML
    peso.innerHTML = srtHTMLp
    valor.innerHTML = srtHTMLv
    Qtd.innerHTML = srtHTMLq
    MinQtd.innerHTML = srtHTMLmq

}

function crud(){
    window.location.href = "http://127.0.0.1:5501/CRUD/nome/nome_produto.html";
}
function invent(){
    window.location.href = "http://127.0.0.1:5501/tela_principal/tela_inicial.html";
}

document.getElementById('btnIncluirContato').addEventListener('click', incluirDados);
document.getElementById('btncadastar').addEventListener('click', crud);
document.getElementById('btninventario').addEventListener('click', invent);
