document.querySelectorAll('.question img').forEach(img => {
    img.addEventListener('click', function() {
        const questionDiv = this.parentElement;
        const questionId = questionDiv.id;
        const selection = this.getAttribute('data-value');

        localStorage.setItem(questionId, selection);

        const nextQuestionId = 'question' + (parseInt(questionId.replace('question', '')) + 1);
        const nextQuestionDiv = document.getElementById(nextQuestionId);

        if (nextQuestionDiv) {
            questionDiv.classList.remove('active');
            nextQuestionDiv.classList.add('active');
        } else {
            window.location.href = 'result.html';
        }
    });
});
