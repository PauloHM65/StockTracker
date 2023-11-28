
function limparCampo() {
    document.getElementById("quantidade").value = "";
    document.getElementById("resultado").innerHTML = "";
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

function proximoPagina() {
    window.location.href = "http://127.0.0.1:5501/CRUD/validade/validade_produto.html";
}
const dropdown = document.querySelector(".dropdown");
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
});
