class Faq {
    constructor () {
        this.questionsContainer    = document.querySelector('#faq__questions');
        this.questionsList         = document.querySelectorAll('.faq__questions__question');
        this.arrowIcons            = document.querySelectorAll('.faq__questions__question__toggle i');
        this.expandedQuestionIndex = null;
    }

    canToggle(e) {
        const target = e.target

        if (target.tagName === "A" && target.classList.contains('faq__questions__question__toggle')) {
            return target;
        }

        const parent = target.parentNode

        if (parent.tagName === "A" && parent.classList.contains('faq__questions__question__toggle')) {
            return parent;
        }

        return null;
    }

    closeQuestions () {
        this.questionsList.forEach(el => el.classList.remove('faq__questions__question--expanded'));
        this.arrowIcons.forEach(el => el.classList.remove('fa-angle-up'));
    }

    toggleQuestion (event) {
        event.preventDefault();
        const target = this.canToggle(event);
        if (target === null) {
            return;
        }
        this.closeQuestions();
        const previousExpandedQuestionIndex = this.expandedQuestionIndex;
        const nextQuestionIndexToExpand     = target.getAttribute('data-question') - 1;
        if (previousExpandedQuestionIndex === nextQuestionIndexToExpand) {
            this.expandedQuestionIndex = null;
            return;
        }
        this.expandedQuestionIndex = nextQuestionIndexToExpand;
        this.questionsList[this.expandedQuestionIndex].classList.add('faq__questions__question--expanded');
        this.arrowIcons[this.expandedQuestionIndex].classList.add('fa-angle-up');
    }

    init () {
        this.questionsContainer.addEventListener('click', (event) => this.toggleQuestion(event));
    }
}

export default new Faq();