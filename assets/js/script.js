let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaMensagem() {
  let txtMensagem = document.querySelector("#txtMensagem");
  if (mensagem.value.length >= 100) {
    txtMensagem.innerHTML = "Mensagem muito longa. Insira no máximo 100 caracteres.";
    txtMensagem.style.color = "red";
    txtMensagem.style.display = "block";
  } else {
    txtMensagem.style.display = "none";
    mensagemOk = true;
  }
}

function enviaFormulario() {
  if (nomeOk == true && emailOk == true && mensagemOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente!");
  }
}

/*
function mapaZoom() {
  mapa.style.width = "800px";
  mapa.style.height = "600px";
}

function mapaNormal() {
  mapa.style.width = "400px";
  mapa.style.height = "250px";
}
*/
