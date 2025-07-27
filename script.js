// SUPIR Website JavaScript - Exact Replica

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.borderBottom = '1px solid rgba(139, 92, 246, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-section, .tech-section, .hero-content');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3;
        
        if (hero) {
            hero.style.transform = `translateY(${parallax}px)`;
        }
    });
    
    // 注释掉或删除这整段代码
    /*
    // Image hover effects
    const demoImages = document.querySelectorAll('.demo-image, .comparison-image');
    
    demoImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
            this.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.3)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
            this.style.boxShadow = 'none';
        });
    });
    */
    
    // Typing animation for hero title
    const heroTitle = document.querySelector('.title-main');
    if (heroTitle) {
        const titleText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < titleText.length) {
                heroTitle.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Feature section hover effects
    const featureSections = document.querySelectorAll('.feature-section');
    
    featureSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 30px 60px rgba(139, 92, 246, 0.2)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Floating animation for demo containers
    const demoContainers = document.querySelectorAll('.demo-container');
    
    demoContainers.forEach(container => {
        let floatDirection = 1;
        
        setInterval(() => {
            const currentTransform = container.style.transform || 'translateY(0px)';
            const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)px\)/) ? 
                           currentTransform.match(/translateY\(([^)]+)px\)/)[1] : 0);
            
            if (currentY >= 10) floatDirection = -1;
            if (currentY <= -10) floatDirection = 1;
            
            container.style.transform = `translateY(${currentY + floatDirection}px)`;
        }, 100);
    });
    
    // Glitch effect for  title
    const Title = document.querySelector('.title-main');
    
    if (Title) {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance
                Title.style.textShadow = `
                    2px 0 #ff0000,
                    -2px 0 #00ffff,
                    0 2px #ffff00
                `;
                
                setTimeout(() => {
                    Title.style.textShadow = 'none';
                }, 100);
            }
        }, 2000);
    }
    
    // Particle effect background
    const createParticles = () => {
        const particleContainer = document.createElement('div');
        particleContainer.style.position = 'fixed';
        particleContainer.style.top = '0';
        particleContainer.style.left = '0';
        particleContainer.style.width = '100%';
        particleContainer.style.height = '100%';
        particleContainer.style.pointerEvents = 'none';
        particleContainer.style.zIndex = '0';
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = '#8b5cf6';
            particle.style.borderRadius = '50%';
            particle.style.opacity = Math.random() * 0.5;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            particleContainer.appendChild(particle);
            
            // Animate particle
            const animateParticle = () => {
                const x = parseFloat(particle.style.left);
                const y = parseFloat(particle.style.top);
                
                particle.style.left = (x + (Math.random() - 0.5) * 0.5) + '%';
                particle.style.top = (y + (Math.random() - 0.5) * 0.5) + '%';
                
                if (x > 100) particle.style.left = '0%';
                if (x < 0) particle.style.left = '100%';
                if (y > 100) particle.style.top = '0%';
                if (y < 0) particle.style.top = '100%';
                
                requestAnimationFrame(animateParticle);
            };
            
            animateParticle();
        }
    };
    
    createParticles();
    
    // Mouse trail effect
    const createMouseTrail = () => {
        const trail = [];
        const trailLength = 10;
        
        document.addEventListener('mousemove', function(e) {
            trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            if (trail.length > trailLength) {
                trail.shift();
            }
            
            // Remove old trail elements
            document.querySelectorAll('.mouse-trail').forEach(el => {
                if (Date.now() - parseInt(el.dataset.time) > 1000) {
                    el.remove();
                }
            });
            
            // Create new trail element
            const trailElement = document.createElement('div');
            trailElement.className = 'mouse-trail';
            trailElement.dataset.time = Date.now();
            trailElement.style.position = 'fixed';
            trailElement.style.left = e.clientX + 'px';
            trailElement.style.top = e.clientY + 'px';
            trailElement.style.width = '4px';
            trailElement.style.height = '4px';
            trailElement.style.background = 'rgba(139, 92, 246, 0.6)';
            trailElement.style.borderRadius = '50%';
            trailElement.style.pointerEvents = 'none';
            trailElement.style.zIndex = '9999';
            trailElement.style.transition = 'opacity 1s ease-out';
            
            document.body.appendChild(trailElement);
            
            setTimeout(() => {
                trailElement.style.opacity = '0';
            }, 10);
        });
    };
    
    createMouseTrail();
    
    // Loading screen effect
    const createLoadingEffect = () => {
        const loadingScreen = document.createElement('div');
        loadingScreen.style.position = 'fixed';
        loadingScreen.style.top = '0';
        loadingScreen.style.left = '0';
        loadingScreen.style.width = '100%';
        loadingScreen.style.height = '100%';
        loadingScreen.style.background = '#0a0a0a';
        loadingScreen.style.zIndex = '10000';
        loadingScreen.style.display = 'flex';
        loadingScreen.style.alignItems = 'center';
        loadingScreen.style.justifyContent = 'center';
        loadingScreen.style.transition = 'opacity 1s ease-out';
        
        const loadingText = document.createElement('div');
        loadingText.textContent = 'HYPIR';
        loadingText.style.fontSize = '4rem';
        loadingText.style.fontWeight = '900';
        loadingText.style.background = 'linear-gradient(135deg, #8b5cf6, #a855f7)';
        loadingText.style.webkitBackgroundClip = 'text';
        loadingText.style.webkitTextFillColor = 'transparent';
        loadingText.style.animation = 'pulse 2s infinite';
        
        loadingScreen.appendChild(loadingText);
        document.body.appendChild(loadingScreen);
        
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 1000);
        }, 2000);
    };
    
    createLoadingEffect();
    
    // Mobile menu toggle
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const navMenu = document.querySelector('.nav-menu');
            const navContainer = document.querySelector('.nav-container');
            
            const menuToggle = document.createElement('button');
            menuToggle.innerHTML = '☰';
            menuToggle.style.background = 'none';
            menuToggle.style.border = 'none';
            menuToggle.style.color = '#ffffff';
            menuToggle.style.fontSize = '1.5rem';
            menuToggle.style.cursor = 'pointer';
            menuToggle.style.display = 'block';
            
            navContainer.appendChild(menuToggle);
            
            menuToggle.addEventListener('click', () => {
                navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.background = 'rgba(10, 10, 10, 0.98)';
                navMenu.style.padding = '1rem';
            });
        }
    };
    
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
    
    // Initialize all image comparison functionality
    const comparisons = document.querySelectorAll('.image-comparison');
    comparisons.forEach(comparison => {
        initImageComparison(comparison);
    });
});

// Image Comparison Slider Functionality
function initImageComparison(comparison) {
    const afterImage = comparison.querySelector('.after-image');
    const slider = comparison.querySelector('.comparison-slider');
    const sliderButton = comparison.querySelector('.slider-button');
    
    if (!comparison || !afterImage || !slider || !sliderButton) return;
    
    let isDragging = false;
    let startX = 0;
    let currentX = 50; // Start at 50% (middle)
    
    // 优化updateClipPath函数
    function updateClipPath(percentage) {
        percentage = Math.max(0, Math.min(100, percentage));
        
        requestAnimationFrame(() => {
            afterImage.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`;
            slider.style.left = `${percentage}%`;
            currentX = percentage;
        });
    }
    
    // Get position from mouse/touch event
    function getPositionFromEvent(e) {
        const rect = comparison.getBoundingClientRect();
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        return (x / rect.width) * 100;
    }
    
    // Mouse events
    function handleMouseDown(e) {
        e.preventDefault();
        isDragging = true;
        startX = getPositionFromEvent(e);
        comparison.style.cursor = 'grabbing';
        sliderButton.classList.add('dragging');
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    
    function handleMouseMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const newPosition = getPositionFromEvent(e);
        updateClipPath(newPosition);
    }
    
    function handleMouseUp() {
        isDragging = false;
        comparison.style.cursor = 'grab';
        sliderButton.classList.remove('dragging');
        
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }
    
    // Touch events for mobile
    function handleTouchStart(e) {
        e.preventDefault();
        isDragging = true;
        startX = getPositionFromEvent(e);
        sliderButton.classList.add('dragging');
        
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    }
    
    function handleTouchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const newPosition = getPositionFromEvent(e);
        updateClipPath(newPosition);
    }
    
    function handleTouchEnd() {
        isDragging = false;
        sliderButton.classList.remove('dragging');
        
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
    }
    
    // Click to move slider
    function handleComparisonClick(e) {
        if (isDragging) return;
        
        const newPosition = getPositionFromEvent(e);
        
        // Smooth animation to new position
        const startPosition = currentX;
        const distance = newPosition - startPosition;
        const duration = 300;
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const position = startPosition + (distance * easeOut);
            
            updateClipPath(position);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Add event listeners
    sliderButton.addEventListener('mousedown', handleMouseDown);
    sliderButton.addEventListener('touchstart', handleTouchStart);
    comparison.addEventListener('click', handleComparisonClick);
    
    // Keyboard support
    sliderButton.addEventListener('keydown', (e) => {
        let newPosition = currentX;
        
        switch(e.key) {
            case 'ArrowLeft':
                newPosition = Math.max(0, currentX - 5);
                break;
            case 'ArrowRight':
                newPosition = Math.min(100, currentX + 5);
                break;
            case 'Home':
                newPosition = 0;
                break;
            case 'End':
                newPosition = 100;
                break;
            default:
                return;
        }
        
        e.preventDefault();
        updateClipPath(newPosition);
    });
    
    // Make slider button focusable
    sliderButton.setAttribute('tabindex', '0');
    sliderButton.setAttribute('role', 'slider');
    sliderButton.setAttribute('aria-label', 'Image comparison slider');
    sliderButton.setAttribute('aria-valuemin', '0');
    sliderButton.setAttribute('aria-valuemax', '100');
    sliderButton.setAttribute('aria-valuenow', '50');
    
    // Update aria-valuenow when position changes
    const originalUpdateClipPath = updateClipPath;
    updateClipPath = function(percentage) {
        originalUpdateClipPath(percentage);
        sliderButton.setAttribute('aria-valuenow', Math.round(percentage));
    };
    
    // Initialize position
    updateClipPath(50);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out;
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);
