document.getElementById('navbar-logo').addEventListener('click', function() {
    const homeURL = window.location.origin + '/home.html';
    if (window.location.href === homeURL) {
        window.location.reload();
    } else {
        window.location.href = homeURL;
    }
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  question.addEventListener('click', () => {
    answer.classList.toggle('show');
    question.classList.toggle('active');
  });
});