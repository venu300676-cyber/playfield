document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      item.parentElement
        .querySelectorAll(".faq-item")
        .forEach((el) => el.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  // Lead / contact forms: no backend wired up yet, so we confirm locally.
  // Swap this for a real integration (e.g. a form endpoint, CRM, or email
  // service) before launch.
  document.querySelectorAll("form[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = form.parentElement.querySelector(".form-success");
      form.reset();
      form.style.display = "none";
      if (success) success.style.display = "block";
    });
  });
});
