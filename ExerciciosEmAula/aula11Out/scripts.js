// JSON contendo os usuários
const json = {
  usuarios: [
    {
      nome: "João",
      idade: 25,
      hobbies: ["Leitura", "Ciclismo", "Fotografia"],
    },
    {
      nome: "Maria",
      idade: 30,
      hobbies: ["Pintura", "Viagens", "Culinária"],
    },
    {
      nome: "Carlos",
      idade: 22,
      hobbies: ["Música", "Esportes", "Programação"],
    },
  ],
};

// Função que cria os cards de usuários e retorna os mesmos
const createUserCard = (usuario) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = usuario.nome;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = `Idade: ${usuario.idade} - Hobbies: ${usuario.hobbies}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  return card;
};

// Função que adiciona os cards criados ao HTML
const appendUserCard = (card) => {
  const containerUsuarios =
    document.getElementsByClassName("container-usuarios")[0];

  const newColumn = document.createElement("div");
  newColumn.classList.add("col-3");
  newColumn.appendChild(card);

  containerUsuarios.appendChild(newColumn);
};

// Laço que varre o JSON de usuários e chama as outras funções para construir e adicionar os cards de usuários
json.usuarios.forEach((usuario) => {
  const userCard = createUserCard(usuario);
  appendUserCard(userCard);
});
