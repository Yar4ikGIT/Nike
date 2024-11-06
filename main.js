let lastScrollTop = 0;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
    header.classList.add('hide');
  } else if (currentScrollTop < lastScrollTop) {

    header.classList.remove('hide');
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});


const textBlocks = document.querySelectorAll('.text-block');
const linkBlocks = document.querySelectorAll('.link-block');
let index = 0;

function changeText() {

  textBlocks.forEach(block => {
    block.style.opacity = '0';
  });

  linkBlocks.forEach(block => {
    block.style.opacity = '0';
  });


  setTimeout(() => {
    textBlocks[index].style.opacity = '1';
  }, 100);


  setTimeout(() => {
    linkBlocks[index].style.opacity = '1';
  }, 100);


  index = (index + 1) % textBlocks.length;
}


changeText();
setInterval(changeText, 5000);