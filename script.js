    // Mobile menu toggle with animation
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        
        menu.classList.toggle('hidden');
        
        if (menu.classList.contains('hidden')) {
            bar1.style.transform = 'translateY(0) rotate(0)';
            bar2.style.opacity = '1';
            bar3.style.transform = 'translateY(0) rotate(0)';
        } else {
            bar1.style.transform = 'translateY(6px) rotate(45deg)';
            bar2.style.opacity = '0';
            bar3.style.transform = 'translateY(-6px) rotate(-45deg)';
        }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 20) {
            navbar.querySelector('nav').classList.add('shadow-md', 'border-gray-200');
        } else {
            navbar.querySelector('nav').classList.remove('shadow-md', 'border-gray-200');
        }
    });