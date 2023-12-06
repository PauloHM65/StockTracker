
function cadastrarProduto() {
    var nomeProduto = document.getElementById("produto").value;
    var resultado = document.getElementById("resultado");

    if (nomeProduto) {
        resultado.innerHTML = "Produto cadastrado: " + nomeProduto;
    } else {
        resultado.innerHTML = "Por favor, insira um nome de produto válido.";
    }
}

function irParaProximaPagina() {
    window.location.href = "http://127.0.0.1:5502/tela_categorais/tela_categorias.html";
}


//----------------------------  Frunçoes adminstrativas ----------------------------------------


function limparCampo() {
    document.getElementById("produto").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("unidade").value = "";

    document.getElementById("mes").value = "";
    
    document.getElementById("ano").value = "";
    
    
}

function proximoPasso() {
    var quantidade = document.getElementById("quantidade").value;

    var unidade = document.getElementById("unidade").value;
    var resultado = document.getElementById("resultado");

    if (quantidade && unidade) {
        resultado.innerHTML = "Quantidade cadastrada com sucesso: " + quantidade + " " + unidade;
    } else {
        resultado.innerHTML = "Por favor, preencha ambos os campos corretamente.";
    }
}


const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".dropdown-select");
const options = dropdown.querySelector(".dropdown-options");

/*select.addEventListener("click", function () {
    options.style.display = options.style.display === "block" ? "none" : "block";
});

options.querySelectorAll("a").forEach(function (option) {
    option.addEventListener("click", function (e) {
        e.preventDefault();
        select.value = option.textContent;
        options.style.display = "none";
    });
});*/

//---------------------------------------------------------------


let mes = 1;
let ano = new Date().getFullYear();

function decrementarMes() {
    if (mes > 1) {
        mes--;
        document.getElementById("mes").value = mes;
    }
}

function incrementarMes() {
    if (mes < 12) {
        mes++;
        document.getElementById("mes").value = mes;
    }
}

function decrementarAno() {
    ano--;
    document.getElementById("ano").value = ano;
}

function incrementarAno() {
    ano++;
    document.getElementById("ano").value = ano;
}
/*------------- PROXIMA PAGINA -------------------*/
function proximoTela() {
    window.location.href = "http://127.0.0.1:5501/tela_categorais/tela_categorias.html";
}



function confirmarCadastro() {
    const mensagem = document.getElementById("mensagem");
    const mesInput = document.getElementById("mes").value;
    const anoInput = document.getElementById("ano").value;

    if (mesInput !== "" && anoInput !== "") {
        mensagem.innerText = `Validade do produto cadastrada com sucesso: ${mesInput}/${anoInput}`;
    } else {
        mensagem.innerText = "Por favor, preencha mês e ano antes de confirmar o cadastro.";
    }
}



/*------------- NAVEGAÇÃO TOGGLE -------------------*/

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