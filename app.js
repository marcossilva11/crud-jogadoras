let jogadoras = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/andressa.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://example.com/dayana.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/mariza.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/thais.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://example.com/leticia.jpg",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
];

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

// LocalStorage
function salvarJogadoras() {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

function carregarJogadoras() {
  const jogadorasSalvas = localStorage.getItem("jogadoras");
  if (jogadorasSalvas) {
    jogadoras = JSON.parse(jogadorasSalvas);
  }
}

// CREATE
function adicionarJogadora() {}

// READ
function exibirJogadoras() {
  const container = document.querySelector("#cards-section");
  container.innerHTML = "";

  jogadoras.forEach((j) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
          <img
            src="${j.foto}"
            alt="${j.nome}"
          />
          <h3>${j.nome}</h3>
          <p>${j.posicao} - ${j.clube}</p>
          <div class="card-estatisticas">
            <span><i class="fa-solid fa-futbol"></i>${j.gols} Gols</span>
            <span><i class="fa-solid fa-handshake-angle"></i>${
              j.assistencias
            } Assistências</span>
            <span><i class="fa-solid fa-tshirt"></i>${j.jogos} Jogos</span>
          </div>
          <div class="card-acoes">
            <button class="btn-favoritar">
              <i class="fa-${j.favorita ? "solid" : "regular"} fa-star"></i>
            </button>
            <button class="btn-editar">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-excluir">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
    `;
    container.appendChild(card);
  });
}

// UPDATE
function atualizarJogadora() {}

// DELETE
function deletarJogadora() {}
