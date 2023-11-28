
let mes = 1;
let ano = new Date().getFullYear();

function limparValidade() {
    document.getElementById("mes").value = "";
    document.getElementById("ano").value = "";
}

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

function proximoTela() {
    window.location.href = "http://127.0.0.1:5501/src/index.html";
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
