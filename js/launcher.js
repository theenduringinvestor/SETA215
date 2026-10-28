document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("appsToggle");
  const panel = document.getElementById("appsPanel");

  if (!toggle || !panel) {
    console.warn("Apps toggle or panel not found.");
    return;
  }

  function showPanel(e) {
    e.stopPropagation();
    panel.classList.toggle("apps-panel--open");
  }

  toggle.addEventListener("click", showPanel);

  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
      panel.classList.remove("apps-panel--open");
    }
  });
});
