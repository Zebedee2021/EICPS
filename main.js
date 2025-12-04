(function () {
  const LANG_KEY = "bit_iusepn_lang";

  function applyLang(lang) {
    const zhElems = document.querySelectorAll(".lang-zh");
    const enElems = document.querySelectorAll(".lang-en");
    const btns = document.querySelectorAll(".lang-btn");

    if (lang === "en") {
      zhElems.forEach(el => {
        el.classList.remove("show", "block");
      });
      enElems.forEach(el => {
        // 块级和行内混合：h/p 用 block，span/a 用 show 一并处理即可
        if (["H1","H2","H3","P","LI","DIV"].includes(el.tagName)) {
          el.classList.add("block");
        } else {
          el.classList.add("show");
        }
      });
    } else {
      enElems.forEach(el => {
        el.classList.remove("show", "block");
      });
      zhElems.forEach(el => {
        if (["H1","H2","H3","P","LI","DIV"].includes(el.tagName)) {
          el.classList.add("block");
        } else {
          el.classList.add("show");
        }
      });
    }

    btns.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    let lang = "zh";
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored === "en" || stored === "zh") lang = stored;
    } catch (_) {}

    const btns = document.querySelectorAll(".lang-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        applyLang(btn.dataset.lang);
      });
    });

    applyLang(lang);
  });
})();
