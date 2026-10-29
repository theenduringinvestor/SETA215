document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("appsToggle");
  const panel = document.getElementById("appsPanel");

  if (!toggle || !panel) {
    console.warn("Apps toggle or panel not found.");
    return;
  }

  function setPanelOpen(isOpen) {
    panel.classList.toggle("apps-panel--open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  function showPanel(e) {
    e.stopPropagation();
    setPanelOpen(!panel.classList.contains("apps-panel--open"));
  }

  toggle.addEventListener("click", showPanel);

  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
      setPanelOpen(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("apps-panel--open")) {
      setPanelOpen(false);
      toggle.focus();
    }
  });
});
