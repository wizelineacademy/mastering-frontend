const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


$$('.faq__question-header').forEach(question => {
  question.addEventListener('click', onQuestionHeaderClick);
});

function onQuestionHeaderClick(event) {
  $('.faq__question.open').classList.remove('open');
  event.target.parentElement.classList.add('open');
}
