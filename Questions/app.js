"use strict";

// Using Selectors Inside Elements
const questions = document.querySelectorAll(".question");
// console.log(questions);

questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// Traversing the DOM:

// Select all the question buttons
// Loop over all buttons with an event listener
// console.log(e.currentTarget.parentElement.parentElement);
// console.log to traverse the DOM to access explicit DOM elements
// Toggle the 'show-text' class on the question element to show or hide the text when the button is clicked
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });
