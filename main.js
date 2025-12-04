(function () {
  const LANG_KEY = "eicps_lang";

  function setLang(lang) {
    const body = document.body;
    const btns = document.querySelectorAll(".lang-btn");

    if (lang === "en") {
      body.classList.remove("lang-zh");
      body.classList.add("lang-en");
    } else {
      body.classList.remove("lang-en");
      body.classList.add("lang-zh");
    }

    btns.forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
    });

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    let lang = "zh";
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored === "zh" || stored === "en") {
        lang = stored;
      }
    } catch (_) {}

    const btns = document.querySelectorAll(".lang-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
      });
    });

    setLang(lang);
  });
})();
