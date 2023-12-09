
/* -------------------- CARREGA DADOS -------------------------------*/

const UrlProdutos = "https://stocktracker--pauloharaujo345.repl.co/produtos"


function carregaDadosJSONServerPrudutos (func) {
    fetch(UrlProdutos)
        .then (function (response) { return response.json() })
        .then (function (dados) {
             Produtos = dados
            func ()
        })
}


/* -------------------- INCLUI E MOSTRA DADOS -------------------------------*/

/*function salvaDados(dados) {

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
}*/

function imprimeDado() {

    let categori = document.querySelector('.categoriaProdutos');
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
    let msf = '';
    
    srtHTML += `<p class="cc" id="c">NOME</p>`
            srtHTMLp += `<p class="cc" id="c">PESO(g)</p>`
            srtHTMLv += `<p class="cc" id="c">VALOR</p>`
            srtHTMLq += `<p class="cc" id="c">Qtd</p>`
            srtHTMLmq += `<p class="cc" id="c">Validadde</p>`
    msf = `<span>${categoria}</span>`
    for (i = 0; i < categorias.length; i++) {
        var anox= categorias[i].ano
        var mesx= categorias[i].mes
        var dataFormatada = `${mesx}/${anox}`
        if (i % 2 != 0) {
            srtHTML += `<p class="cc" id="c">${categorias[i].nome}</p>`
            srtHTMLp += `<p class="cc" id="c">${categorias[i].peso}</p>`
            srtHTMLv += `<p class="cc" id="c">${categorias[i].valor}</p>`
            srtHTMLq += `<p class="cc" id="c">${categorias[i].Qtd}</p>`
            srtHTMLmq += `<p class="cc" id="c">${dataFormatada}</p>`
        } else {
            srtHTML += `<p class="cc" >${categorias[i].nome}</p>`
            srtHTMLp += `<p class="cc" >${categorias[i].peso}</p>`
            srtHTMLv += `<p class="cc" >${categorias[i].valor}</p>`
            srtHTMLq += `<p class="cc" >${categorias[i].Qtd}</p>`
            srtHTMLmq += `<p class="cc" >${dataFormatada}</p>`
        }

    }

    nome.innerHTML = srtHTML
    peso.innerHTML = srtHTMLp
    valor.innerHTML = srtHTMLv
    Qtd.innerHTML = srtHTMLq
    MinQtd.innerHTML = srtHTMLmq
    categori.innerHTML = msf

}


/* -------------------- DIRECIONA PAGINA -------------------------------*/
function HOME() {
    window.location.href = "http://127.0.0.1:5501/HOME/home.html";
}
function INVENTARIO() {
    window.location.href = "http://127.0.0.1:5501/tela_categorais/tela_categorias.html";
}

document.getElementById('btncadastar').addEventListener('click', HOME);
document.getElementById('btninventario').addEventListener('click', INVENTARIO);


/* ---------------------- VOLTA A PAGINA ANTIGA  -----------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    // Função para lidar com a mudança de página
    function handlePageChange() {
      // Obtem a URL atual
      var currentPage = window.location.href;
      
      // Faça algo com a URL atual (por exemplo, imprima no console)
      console.log('Página atual:', currentPage);
    }
  
    // Adicione um ouvinte de eventos para o evento "popstate" (mudança de histórico)
    window.addEventListener('popstate', handlePageChange);
  
    // Função para voltar à página anterior
    function goBack() {
      window.history.back();
    }
  
    // Adicione um ouvinte de eventos para o botão de voltar
    var backButton = document.getElementById('img_retorno');
    if (backButton) {
      backButton.addEventListener('click', goBack);
    }
  });


