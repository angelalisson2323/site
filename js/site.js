// Pequenos detalhes do site. Edite os textos nos arquivos HTML.
const today = document.getElementById("today");
if (today) {
  const now = new Date();
  today.textContent = `EDIÇÃO DIGITAL • ${now.toLocaleDateString("pt-BR")}`;
}
