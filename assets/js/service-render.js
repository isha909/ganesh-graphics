document.addEventListener("DOMContentLoaded", function () {
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("s") || "business-card-printing";
  var data = SERVICES[slug];

  if (!data) {
    document.body.innerHTML = "<p style='padding:60px;text-align:center;'>Service not found.</p>";
    return;
  }

  var heroImage = "./assets/images/services/" + slug + "-hero.png";
  var sampleImage = function (n) {
    return "./assets/images/services/" + slug + "-sample-" + n + ".png";
  };
  var optionImage = function (n) {
    return "./assets/images/services/" + slug + "-option-" + n + ".png";
  };

  /* ---------- Page meta ---------- */
  document.title = data.eyebrow + " | Ganesh Graphics & Designers";
  document.getElementById("page-description").setAttribute("content", data.heroText);

  /* ---------- Nav active state ---------- */
  var navId = data.category === "paper" ? "nav-paper" : "nav-signage";
  var navEl = document.getElementById(navId);
  if (navEl) navEl.classList.add("active");

  /* ---------- Hero background ---------- */
  document.querySelector(".hero--card").style.backgroundImage = "url('" + heroImage + "')";

  /* ---------- Hero content ---------- */
  document.getElementById("hero-eyebrow").textContent = data.eyebrow;
  document.getElementById("hero-title").innerHTML =
    data.titleLine1 + "<br><span class=\"accent\">" + data.titleLine2 + "</span>";
  document.getElementById("hero-text").textContent = data.heroText;

  /* ---------- Feature bar ---------- */
  var features = data.category === "paper" ? PAPER_FEATURES : SIGNAGE_FEATURES;
  var featureBarEl = document.getElementById("feature-bar-list");
  features.forEach(function (f) {
    var item = document.createElement("div");
    item.className = "feature-bar__item";
    item.innerHTML =
      '<span class="icon-circle"><i class="' + f.icon + '"></i></span>' +
      "<div><strong>" + f.title + "</strong><span>" + f.text + "</span></div>";
    featureBarEl.appendChild(item);
  });

  /* ---------- About section ---------- */
  document.getElementById("about-eyebrow").textContent = data.aboutEyebrow;
  document.getElementById("about-title").textContent = data.aboutTitle;
  document.getElementById("about-text").textContent = data.aboutText;

  var checklistEl = document.getElementById("checklist");
  data.checklist.forEach(function (item) {
    var li = document.createElement("li");
    li.innerHTML = '<span class="check"><i class="fa-solid fa-circle-check"></i></span> ' + item;
    checklistEl.appendChild(li);
  });

  /* ---------- Samples ---------- */
  document.getElementById("samples-title").textContent = data.samplesTitle;
  var samplesGrid = document.getElementById("samples-grid");
  for (var i = 1; i <= 3; i++) {
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<div class="card__media"><img src="' + sampleImage(i) + '" alt="' + data.eyebrow + " sample " + i + '"></div>';
    samplesGrid.appendChild(card);
  }

  /* ---------- Options / styles ---------- */
  document.getElementById("options-title").textContent = "Choose Your Option";
  var optionsGrid = document.getElementById("options-grid");
  data.options.forEach(function (opt, index) {
    var item = document.createElement("div");
    item.className = "style-item";
    item.innerHTML =
      '<div class="style-item__media"><img src="' + optionImage(index + 1) + '" alt="' + opt.name + '"></div>' +
      "<strong>" + opt.name + "</strong>" +
      "<span>" + opt.desc + "</span>";
    optionsGrid.appendChild(item);
  });
});
