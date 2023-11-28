
function cadastrarProduto() {
    var nomeProduto = document.getElementById("produto").value;
    var resultado = document.getElementById("resultado");

    if (nomeProduto) {
        resultado.innerHTML = "Produto cadastrado: " + nomeProduto;
    } else {
        resultado.innerHTML = "Por favor, insira um nome de produto válido.";
    }
}

function limparCampos() {
    document.getElementById("produto").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function irParaProximaPagina() {
    window.location.href = "http://127.0.0.1:5501/CRUD/qtd/qtd_produto.html";
}
