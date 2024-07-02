"use strict";
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // Outside the loop
    // Add active class to clicked button
    e.target.classList.add("active");
    // Hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // Show active article
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
