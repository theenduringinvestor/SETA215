document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".film-gallery");
  if (!gallery) return;

  const slides = Array.from(gallery.querySelectorAll(".gallery-slide"));
  const prev = gallery.querySelector(".gallery-btn--prev");
  const next = gallery.querySelector(".gallery-btn--next");
  let current = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.hidden = i !== current;
    });
  }

  if (prev) {
    prev.addEventListener("click", function () {
      goTo(current - 1);
    });
  }

  if (next) {
    next.addEventListener("click", function () {
      goTo(current + 1);
    });
  }

  gallery.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  goTo(0);
});
