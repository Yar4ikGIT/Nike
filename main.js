let lastScrollTop = 0;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight; // Получаем высоту хедера

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
    // Скроллим вниз и прячем хедер
    header.classList.add('hide');
  } else if (currentScrollTop < lastScrollTop) {
    // Скроллим вверх, показываем хедер
    header.classList.remove('hide');
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
