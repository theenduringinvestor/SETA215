document.addEventListener("DOMContentLoaded", function () {
  // Handle film gallery carousel
  const gallery = document.querySelector(".film-gallery");
  if (gallery) {
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
  }

  // Handle photo gallery modal
  const modal = document.getElementById("photoModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".modal-close");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (modal && galleryItems.length) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        const src = this.getAttribute("data-src");
        modalImage.src = src;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
      }
    });
  }
});

