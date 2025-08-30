const btnAdicionarJogadora = document.querySelector("#btn-adicionar")
const btnCancelar = document.querySelector("#form-cancelar")
const secaoFormulario = document.querySelector("#form-section")

btnAdicionarJogadora.addEventListener("click", () => {
  secaoFormulario.style.display = "flex"
})

btnCancelar.addEventListener("click", () => {
  secaoFormulario.style.display = "none"
})
