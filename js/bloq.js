const correctPassword = "OLHODAVERDADE";

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("access-password");
  const article = document.getElementById("article-page");
  const message = document.getElementById("access-message");
  const button = document.getElementById("unlock-button");

  function unlockArticle() {
    const password = passwordInput.value;

    if (password.trim().toUpperCase() === correctPassword) {
      article.classList.add("unlocked");
      message.textContent = "";
    } else {
      message.textContent = "Chave de autenticação inválida.";
    }
  }

  button.addEventListener("click", unlockArticle);

  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      unlockArticle();
    }
  });
});
