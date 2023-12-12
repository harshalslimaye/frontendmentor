(() => {
  const toggle = (target) => {
    const openAttr = target.getAttribute('data-open');
    const isOpen = openAttr && openAttr === 'true';
    const img = target.querySelector('img');
    const style = isOpen ? 'display:none' : 'display:block';
    const iconUrl = isOpen
      ? img.src.replace('minus', 'plus')
      : img.src.replace('plus', 'minus');

    target.setAttribute('data-open', isOpen ? 'false' : 'true');
    img.setAttribute('src', iconUrl);

    target.parentNode
      .querySelector('.faqs__item-answer')
      .setAttribute('style', style);
  };
  const questions = document.querySelectorAll('.faqs__item-question');

  questions.forEach((q) => {
    q.addEventListener('click', (event) => toggle(event.target));
    q.querySelector('img').addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();

      toggle(q);
    })
  });
})();
