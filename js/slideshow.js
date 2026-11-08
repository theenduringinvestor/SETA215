document.addEventListener("DOMContentLoaded", function () {
  const show = document.querySelector(".poster-show");
  if (!show) return;

  const slides = Array.from(show.querySelectorAll(".poster-slide"));
  const prev = show.querySelector(".poster-btn--prev");
  const next = show.querySelector(".poster-btn--next");
  let current = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.hidden = i !== current;
    });
  }

  prev.addEventListener("click", function () {
    goTo(current - 1);
  });

  next.addEventListener("click", function () {
    goTo(current + 1);
  });

  show.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  goTo(0);
});
