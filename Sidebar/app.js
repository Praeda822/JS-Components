"use strict";

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  console.log(sidebar.classList);
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }

  // Use the toggle() method instead of clunky if/else
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
