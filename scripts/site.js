const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("[data-contact-form]");
const formError = document.querySelector("[data-form-error]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const required = ["nome", "empresa", "whatsapp", "cidade", "estado", "segmento", "solucao", "mensagem"];
    const missing = required.filter((field) => !String(data.get(field) || "").trim());

    if (missing.length) {
      if (formError) formError.textContent = "Preencha todos os campos para enviar pelo WhatsApp.";
      return;
    }

    const message = `Olá! Conheci a Conecta Tecnologia pelo site.\n\nNome: ${data.get("nome")}\nEmpresa: ${data.get("empresa")}\nWhatsApp: ${data.get("whatsapp")}\nCidade/UF: ${data.get("cidade")}/${data.get("estado")}\nSegmento: ${data.get("segmento")}\nSolução de interesse: ${data.get("solucao")}\nMensagem: ${data.get("mensagem")}`;
    window.open(`https://wa.me/5599984415598?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}
