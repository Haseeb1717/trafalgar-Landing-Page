
    // Toggle navigation menu
    document.getElementById('nav-toggle').addEventListener('click', function() {
        document.getElementById('nav-menu').classList.toggle('show');
    });

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollDown = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav-links a[href*=' + sectionId + ']');

            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    /*===== SCROLL REVEAL =====*/
    ScrollReveal().reveal('.list-item', {
        origin: 'right',
        distance: '100px',
        duration: 500,
        easing: 'ease-in-out',
        delay: 200
    });
    ScrollReveal().reveal('.text-flex', {
        origin: 'left',
        distance: '30px',
        duration: 500,
        easing: 'ease-in-out',
        delay: 200
    });
    ScrollReveal().reveal('.img-flex', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    });
    ScrollReveal().reveal('.consult-btn', {
        origin: 'left',
        distance: '50px',
        duration: 1030,
        easing: 'ease-in',
        delay: 600
    });
    ScrollReveal().reveal('#card1', {
        origin: 'top',
        distance: '50px',
        duration: 800,
        easing: 'ease-in',
        delay: 100
    });
    ScrollReveal().reveal('#card2', {
        origin: 'top',
        distance: '50px',
        duration: 900,
        easing: 'ease-in',
        delay: 300
    });
    ScrollReveal().reveal('#card3', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in',
        delay: 400
    });
    ScrollReveal().reveal('#card4', {
        origin: 'top',
        distance: '50px',
        duration: 1010,
        easing: 'ease-in',
        delay: 600
    });
    ScrollReveal().reveal('#card5', {
        origin: 'top',
        distance: '50px',
        duration: 1030,
        easing: 'ease-in',
        delay: 800
    });
    ScrollReveal().reveal('#card6', {
        origin: 'top',
        distance: '50px',
        duration: 1050,
        easing: 'ease-in',
        delay: 1000
    });
    ScrollReveal().reveal('#learnbtn', {
        origin: 'bottom',
        distance: '50px',
        duration: 1010,
        easing: 'ease-in',
        delay: 800
    });
    ScrollReveal().reveal('#sec-parallel-heading1',{
        origin:'right',
        distance:'50px',
        duration:1010,
        easing:'ease-in',
        delay:800
    });


    ScrollReveal().reveal('#sec-parallel-paragraph1',{
        origin:'right',
        distance:'50px',
        duration:1050,
        easing:'ease-in',
        delay:800
    });
1
    ScrollReveal().reveal('#sec-parallel-heading2',{
        origin:'left',
        distance:'50px',
        duration:1010,
        easing:'ease-in',
        delay:800
    });


    ScrollReveal().reveal('#sec-parallel-paragraph2',{
        origin:'left',
        distance:'50px',
        duration:1010,
        easing:'ease-in',
        delay:800
    });
    /*==================== SLIDER ====================*/
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        let currentIndex = 0;

        function updateSlider(index) {
            // Remove active class from all slides and dots
            slides.forEach((slide) => slide.classList.remove('active'));
            dots.forEach((dot) => dot.classList.remove('active'));

            // Add active class to current slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');

            // Adjust the slider container's transform to show the current slide
            const slider = document.querySelector('.slider');
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider(currentIndex);
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider(currentIndex);
        }

        function onDotClick(event) {
            const index = Array.from(dots).indexOf(event.target);
            if (index !== -1) {
                currentIndex = index;
                updateSlider(currentIndex);
            }
        }

        // Initialize slider
        updateSlider(currentIndex);

        // Event listeners for next and previous buttons
        nextButton.addEventListener('click', showNextSlide);
        prevButton.addEventListener('click', showPrevSlide);

        // Event listeners for dots
        dots.forEach((dot) => dot.addEventListener('click', onDotClick));
    });
