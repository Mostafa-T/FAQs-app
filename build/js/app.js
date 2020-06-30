
// declaring Variables 
const questions = document.querySelectorAll('.asked-question');
const btns = document.querySelectorAll('.open-close'); // selector all beacuse there is more than one Button in the document the same calss

questions.forEach(function (q) {
  const btn = q.querySelector('.open-close');
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== q) {
        item.classList.remove("open-close-open");
        item.classList.remove("show");
        item.classList.remove('asked-head-active');
      }      
    });
    q.classList.toggle("open-close-open");
    q.classList.toggle("show");
    q.classList.toggle('asked-head-active');
  });
});

/* //traversing method
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //targeting the parent div
    const mainQuestion = e.currentTarget.parentElement.parentElement;
    // de-activate the classes except the selected one
    // adding class when active
    mainQuestion.classList.toggle("open-close-open");
    mainQuestion.classList.toggle("show");
    mainQuestion.classList.toggle('asked-head-active');
  });
});
*/
