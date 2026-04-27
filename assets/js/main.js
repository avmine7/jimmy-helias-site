const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (burger && nav) {
  burger.addEventListener("click", () => {
    const opened = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", opened ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/* =============================
   Scroll Reveal (no library)
   ============================= */
(() => {
  const els = Array.from(document.querySelectorAll(".reveal"));

  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach(el => el.classList.add("is-in"));
    return;
  }

  // Auto stagger : si un parent a data-stagger, on delay les enfants
  const applyStagger = () => {
    document.querySelectorAll("[data-stagger]").forEach(group => {
      const children = Array.from(group.querySelectorAll(".reveal"));
      children.forEach((el, i) => {
        el.style.setProperty("--d", `${i * 90}ms`); // 90ms = rythme premium
        el.setAttribute("data-delay", "1");
      });
    });
  };

  applyStagger();

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target); // play once (propre)
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -10% 0px" });

  els.forEach(el => io.observe(el));
})();




  // PARTENAIRES

// SHOP // 

// Countdown (shop) — cible une date (modifie la date si tu veux)
(function(){
  const target = new Date();
  target.setDate(target.getDate() + 14); // ouverture dans 14 jours

  const dEl = document.getElementById("cd-d");
  const hEl = document.getElementById("cd-h");
  const mEl = document.getElementById("cd-m");
  if(!dEl || !hEl || !mEl) return;

  function tick(){
    const now = new Date();
    let diff = Math.max(0, target - now);

    const d = Math.floor(diff / (1000*60*60*24));
    diff -= d * (1000*60*60*24);
    const h = Math.floor(diff / (1000*60*60));
    diff -= h * (1000*60*60);
    const m = Math.floor(diff / (1000*60));

    dEl.textContent = String(d).padStart(2,"0");
    hEl.textContent = String(h).padStart(2,"0");
    mEl.textContent = String(m).padStart(2,"0");
  }

  tick();
  setInterval(tick, 1000 * 15);
})();


