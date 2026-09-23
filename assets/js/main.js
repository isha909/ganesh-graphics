/* =========================================================
   GANESH GRAPHICS & DESIGNERS — MAIN JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initNavbarToggle();
  initPortfolioFilters();
  initQuoteForm();
  initServiceSidebarActive();
});

/* ---------- Mobile navbar toggle ---------- */
function initNavbarToggle() {
  var toggle = document.querySelector(".navbar__toggle");
  var links = document.querySelector(".navbar__links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    links.classList.toggle("is-open");
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });

  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Portfolio / service card filters ---------- */
function initPortfolioFilters() {
  var filterButtons = document.querySelectorAll("[data-filter]");
  var items = document.querySelectorAll("[data-category]");

  if (!filterButtons.length || !items.length) return;

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var value = btn.getAttribute("data-filter");

      items.forEach(function (item) {
        var category = item.getAttribute("data-category");
        var show = value === "all" || category === value;
        item.style.display = show ? "" : "none";
      });
    });
  });
}

/* ---------- Quote / enquiry form ---------- */
function initQuoteForm() {
  var form = document.querySelector("[data-quote-form]");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var requiredFields = form.querySelectorAll("[required]");
    var isValid = true;

    requiredFields.forEach(function (field) {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add("field-error");
      } else {
        field.classList.remove("field-error");
      }
    });

    var feedback = form.querySelector("[data-form-feedback]");

    if (!isValid) {
      if (feedback) {
        feedback.textContent = "Please fill in all required fields.";
        feedback.style.color = "#dc3545";
      }
      return;
    }

    if (feedback) {
      feedback.textContent = "Thank you! Your enquiry has been received. Our team will get back to you shortly.";
      feedback.style.color = "#28a745";
    }

    form.reset();
  });
}

/* ---------- Highlight active service in sidebar based on current page ---------- */
function initServiceSidebarActive() {
  var links = document.querySelectorAll(".service-sidebar a");
  if (!links.length) return;

  var current = window.location.hash;
  if (!current) return;

  links.forEach(function (link) {
    if (link.getAttribute("href") === current) {
      links.forEach(function (l) { l.classList.remove("active"); });
      link.classList.add("active");
    }
  });
}
