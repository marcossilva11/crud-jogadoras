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

let indexJogadora = null;

const formTitulo = document.querySelector("#form-titulo");
const formBtn = document.querySelector("#form-btn");

// Exibindo formulario
const btnAdicionarJogadora = document.querySelector("#btn-adicionar");
const btnCancelar = document.querySelector("#form-cancelar");
const secaoFormulario = document.querySelector("#form-section");

btnAdicionarJogadora.addEventListener("click", () => {
  secaoFormulario.style.display = "flex";
  document.querySelector("#form-jogadora").reset();
  formTitulo.textContent = "Adicionar Jogadora";
  formBtn.textContent = "Adicionar";
  indexJogadora = null;
});

btnCancelar.addEventListener("click", () => {
  document.querySelector("#form-jogadora").reset();
  secaoFormulario.style.display = "none";
});

// Inicializacao
window.onload = function () {
  carregarJogadoras();
  exibirJogadoras();

  document
    .querySelector("#form-jogadora")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      if (indexJogadora !== null) {
        atualizarJogadora(indexJogadora);
      } else {
        adicionarJogadora();
      }
    });
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
function adicionarJogadora(e) {
  e.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const posicao = document.querySelector("#posicao").value.trim();
  const clube = document.querySelector("#clube").value.trim();
  const foto = document.querySelector("#foto").value.trim();
  const gols = document.querySelector("#gols").value.trim();
  const assistencias = document.querySelector("#assistencias").value.trim();
  const jogos = document.querySelector("#jogos").value.trim();

  if (
    !nome ||
    !posicao ||
    !clube ||
    !foto ||
    !gols ||
    !assistencias ||
    !jogos
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const novaJogadora = {
    nome,
    posicao,
    clube,
    foto,
    gols: parseInt(gols),
    assistencias: parseInt(assistencias),
    jogos: parseInt(jogos),
    favorita: false,
  };

  jogadoras.push(novaJogadora);
  salvarJogadoras();
  exibirJogadoras();

  alert("Jogadora adicionada com sucesso!");
  document.getElementById("form-jogadora").reset();
  secaoFormulario.style.display = "none";
}

// READ
function exibirJogadoras() {
  const container = document.querySelector("#cards-section");
  container.innerHTML = "";

  jogadoras.forEach((j, index) => {
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

    card
      .querySelector(".btn-editar")
      .addEventListener("click", () => preencherFormularioEdicao(index));
  });
}

// preenchendo o formulario para edicao
function preencherFormularioEdicao(index) {
  const jogadora = jogadoras[index];
  document.querySelector("#nome").value = jogadora.nome;
  document.querySelector("#posicao").value = jogadora.posicao;
  document.querySelector("#clube").value = jogadora.clube;
  document.querySelector("#foto").value = jogadora.foto;
  document.querySelector("#gols").value = jogadora.gols;
  document.querySelector("#assistencias").value = jogadora.assistencias;
  document.querySelector("#jogos").value = jogadora.jogos;
  document.querySelector("#form-btn").textContent = "Salvar";
  indexJogadora = index;

  secaoFormulario.style.display = "flex";
  formTitulo.textContent = "Editar Jogadora";
  formBtn.textContent = "Salvar";
}

// UPDATE
function atualizarJogadora(index) {
  const nome = document.querySelector("#nome").value.trim();
  const posicao = document.querySelector("#posicao").value.trim();
  const clube = document.querySelector("#clube").value.trim();
  const foto = document.querySelector("#foto").value.trim();
  const gols = document.querySelector("#gols").value.trim();
  const assistencias = document.querySelector("#assistencias").value.trim();
  const jogos = document.querySelector("#jogos").value.trim();

  if (
    !nome ||
    !posicao ||
    !clube ||
    !foto ||
    !gols ||
    !assistencias ||
    !jogos
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const jogadoraAtualizada = {
    nome,
    posicao,
    clube,
    foto,
    gols: parseInt(gols),
    assistencias: parseInt(assistencias),
    jogos: parseInt(jogos),
    favorita: jogadoras[index].favorita,
  };

  jogadoras[index] = jogadoraAtualizada;
  salvarJogadoras();
  exibirJogadoras();

  alert("Jogadora atualizada com sucesso!");
  document.getElementById("form-jogadora").reset();
  secaoFormulario.style.display = "none";
  indexJogadora = null;
}

// DELETE
function deletarJogadora() {}
