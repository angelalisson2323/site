// Pequenos detalhes do site. Edite os textos nos arquivos HTML.
const today = document.getElementById("today");
if (today) {
  const now = new Date();
  today.textContent = `EDIÇÃO DIGITAL • ${now.toLocaleDateString("pt-BR")}`;
}
const artigosOcorrencias = document.querySelectorAll(
  'article[data-cartegoria="ocorrencia"]'
);

const artigosPoliticos = document.querySelectorAll(
  'article[data-cartegoria="politico"]'
);

document.getElementById("contador-politico").textContent =
  artigosPoliticos.length;
document.getElementById("contador-ocorrencia").textContent =
 artigosOcorrencias.length;
