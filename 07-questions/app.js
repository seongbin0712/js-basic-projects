//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
// console.log(questions)

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn)
  
  btn.addEventListener("click", function () {
    
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});