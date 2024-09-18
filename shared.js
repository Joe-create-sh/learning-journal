document.addEventListener('DOMContentLoaded', () => {
    
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const header = document.querySelector('header');
    const mainContent = document.querySelector('main');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const viewLessBtn = document.querySelector('.view-less-btn');
    const extraContent = document.querySelectorAll('.extra-content');

    
    function updateMarginTop() {
        
        mainContent.style.marginTop = `${header.offsetHeight}px`;
    }

    updateMarginTop();

    window.addEventListener('resize', updateMarginTop);

    navToggle.addEventListener('click', () => { 

        nav.classList.toggle('nav-visible');
        localStorage.setItem('navVisible', nav.classList.contains('nav-visible'));
        updateMarginTop();
        
    });

    if (localStorage.getItem('navVisible') === 'true') {

        nav.classList.add('nav-visible');
        updateMarginTop();

    }

    navLinks.forEach(link => {

        if (link.getAttribute('href') === currentPath) {
            link.setAttribute('aria-current', 'page');

        } else {

            link.removeAttribute('aria-current');

        }

    });


    viewMoreBtn.addEventListener('click', () => { 

        extraContent.forEach(item => { 

            item.classList.remove('hidden');

        });

        viewMoreBtn.classList.add('hidden');
        viewLessBtn.classList.remove('hidden');

    });


    viewLessBtn.addEventListener('click', () => { 

        extraContent.forEach(item => { 

            item.classList.add('hidden');

        });

        viewLessBtn.classList.add('hidden');
        viewMoreBtn.classList.remove('hidden');

    });
  
});