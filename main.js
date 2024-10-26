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


const textBlocks = document.querySelectorAll('.text-block');
const linkBlocks = document.querySelectorAll('.link-block');
let index = 0;

function changeText() {
    // Скрываем все текстовые блоки и ссылки
    textBlocks.forEach(block => {
        block.style.opacity = '0';
    });
    
    linkBlocks.forEach(block => {
        block.style.opacity = '0';
    });

    // Показываем текущий текстовый блок с плавным эффектом
    setTimeout(() => {
        textBlocks[index].style.opacity = '1';
    }, 100); // Небольшая задержка для плавного появления

    // Показываем текущий блок с ссылкой с плавным эффектом
    setTimeout(() => {
        linkBlocks[index].style.opacity = '1';
    }, 100); // Небольшая задержка для плавного появления

    // Увеличиваем индекс, чтобы показать следующий блок, или сбрасываем до 0
    index = (index + 1) % textBlocks.length;
}

// Вызываем функцию сразу и потом каждые 5 секунд
changeText();
setInterval(changeText, 5000);
