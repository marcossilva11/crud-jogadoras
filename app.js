// Exibindo formulario
const btnAdicionarJogadora = document.querySelector("#btn-adicionar");
const btnCancelar = document.querySelector("#form-cancelar");
const secaoFormulario = document.querySelector("#form-section");

btnAdicionarJogadora.addEventListener("click", () => {
  secaoFormulario.style.display = "flex";
});

btnCancelar.addEventListener("click", () => {
  secaoFormulario.style.display = "none";
});

// Inicializacao
window.onload = function () {
  exibirJogadoras();
};

// CREATE
function adicionarJogadora() {}

// READ
function exibirJogadoras() {}

// UPDATE
function atualizarJogadora() {}

// DELETE
function deletarJogadora() {}
