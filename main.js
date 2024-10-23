let lastScrollTop = 0;  
const header = document.getElementById('header');  

window.addEventListener('scroll', function() {  
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;  

    if (scrollTop > lastScrollTop) {  
        // Прокрутка вниз  
        header.style.top = "-80px"; // Высота заголовка, чтобы скрыть его  
    } else {  
        // Прокрутка вверх  
        header.style.top = "0";  
    }  
    lastScrollTop = scrollTop;  
});