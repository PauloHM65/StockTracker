const UrlCat = "https://stocktracker--pauloharaujo345.repl.co/categorias"


const UrlProdutos = "https://stocktracker--pauloharaujo345.repl.co/produtos"



function carregaDadosJSONServerCat (func) {
    fetch(UrlCat)
        .then (function (response) { return response.json() })
        .then (function (dados) {
             Categorias = dados
            func ()
        })
}



var mess = document.getElementById("mes");
var anos = document.getElementById("ano");
var produto = document.getElementById("produto");
var quantidade = document.getElementById("quantidade");
var quantidademIN = quantidade * 0.2;
var valor = document.getElementById("valor");
var peso = document.getElementById("peso");
var catego = document.getElementById("catego")


var mensagem = document.getElementById("mensagem")





//-----------------------  Cadastar Produto   -------------------------------------
function confirmarCadastro() {
    //confirma que todos os espaços estao escritos
    if (mess.value !== "" && anos.value !== "" && produto.value !== "" && quantidade.value !== "" && valor.value !== "" && peso.value !== "" && catego.value !== "") {
        mensagem.innerText = `Produto cadastrada com sucesso: ${produto}/${quantidade}/${valor}/${peso}/${mess}/${anos}/${catego}`;

        carregaDadosJSONServerPrudutos(inserirDadosJsonServer)
        
    } else {
        mensagem.innerText = "Por favor, preencher antes de confirmar o cadastro.";
    }
}




//----------------------------  Frunçoes adminstrativas ----------------------------------------

/*const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".dropdown-select");
const options = dropdown.querySelector(".dropdown-options");

select.addEventListener("click", function () {
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

function limparCampos() {
    mess.value = "";
    anos.value = "";
    produto.value = "";
    quantidade.value = "";
    valor.value = "";
    peso.value = "";
    catego.value = ""
}

function preencherInput(valor) {
    catego.value = valor;
  }



//--------------------------- AJUSTES DATA VALIDADE ------------------------------------

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

// ------------------------------ Mosta as categorias e seta no input --------------------------









/* ---------------------- pASSA A TELA  -----------------------------*/

function proximoTela() {
    window.location.href = "http://127.0.0.1:5501/tela_categorais/tela_categorias.html";
}


// toggle de opçoes





//--------------------------- INCLUI NOVOS DADOS ------------------------- 
function inserirDadosJsonServer(){
    fetch('https://stocktracker--pauloharaujo345.repl.co/produtos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify({
        "nome": produto.value,
        "peso": peso.value,
        "valor": valor.value,
        "Qtd": quantidade.value,
        "MinQtd": quantidademIN,
        "categoria": catego.value
    }),
})
    .then(response => {
        console.log(response); // Certifique-se de que 'response' está definido aqui
        return response.json();
    })
    .then(data => {
        // Adicionar a resposta do servidor ao array
        Produtos.push(data);

        // Limpar o campo de input
        limparCampos();

        // Atualizar a tabela
        // updateTable();
    })
    .catch(error => console.error('Erro:', error));

}



function deleteItem(index) {
    // Enviar o pedido de exclusão para o servidor
    fetch('http://exemplo.com/api/items/' + index, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            // Remover o item pelo índice
            items.splice(index, 1);

            // Atualizar a tabela
            updateTable();
        })
        .catch(error => console.error('Erro:', error));
}

function updateTable() {
    // Obter a referência da tabela
    var table = document.getElementById("itemTable");

    // Limpar o corpo da tabela
    var tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    // Preencher a tabela com os itens
    for (var i = 0; i < items.length; i++) {
        var row = tbody.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = i + 1; // ID
        cell2.innerHTML = items[i]; // Item
        cell3.innerHTML = '<button onclick="deleteItem(' + i + ')">Excluir</button>'; // Botão de exclusão
    }
}



function carregaDadosJSONServerPrudutos(func) {
    fetch(UrlProdutos)
        .then(function (response) { return response.json() })
        .then(function (dados) {
            Produtos = dados
            func()
        })
}







//--------------------------------------------------


