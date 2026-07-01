// CONTROL DE NAVBAR STICKY AL HACER SCROLL
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if(header) {
        header.classList.toggle('sticky', window.scrollY > 50);
    }
});

// MENÚ LATERAL RESPONSIVO 
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('.nav-link');

if(menuBtn && closeBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
    });

    // Cerrar menú automáticamente cuando se hace click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// DETECCIÓN DE SECCIÓN ACTIVA EN EL MENÚ EN BASE AL SCROLL
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 160;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
});