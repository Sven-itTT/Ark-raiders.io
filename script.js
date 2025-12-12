// Countdown Timer
function initCountdown() {
    // Set the target date (24 hours from now)
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            // Reset to 24 hours when countdown reaches zero
            targetDate.setTime(targetDate.getTime() + (24 * 60 * 60 * 1000));
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Parallax effect for hero section
function initParallax() {
    const heroSection = document.querySelector('section:first-of-type');
    const heroImage = heroSection.querySelector('img');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = heroImage;
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
}

// Dynamic friend status updates
function simulateFriendStatus() {
    const statuses = [
        { name: 'В рейде: Кибер-Лабиринт', color: 'text-green-400' },
        { name: 'В меню', color: 'text-blue-400' },
        { name: 'В битве PVP', color: 'text-red-400' },
        { name: 'В лобби', color: 'text-yellow-400' }
    ];
    
    setInterval(() => {
        const onlineFriends = document.querySelectorAll('#friends .grid:first-child .space-y-3 > div:first-child .text-sm');
        if (onlineFriends.length > 0) {
            const randomFriend = onlineFriends[Math.floor(Math.random() * onlineFriends.length)];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            randomFriend.textContent = randomStatus.name;
            randomFriend.className = `text-sm ${randomStatus.color}`;
        }
    }, 5000);
}

// Add interactive hover effects
function addInteractiveEffects() {
    // Add ripple effect to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('absolute', 'bg-white', 'opacity-30', 'rounded-full', 'animate-ping');
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.left = e.offsetX - 10 + 'px';
            ripple.style.top = e.offsetY - 10 + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add glow effect on card hover
    document.querySelectorAll('.cyber-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// Initialize typing effect for hero text
function initTypingEffect() {
    const heroText = document.querySelector('.text-6xl');
    const text = heroText.textContent;
    heroText.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            heroText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    setTimeout(type, 500);
}

// Particle effect for background
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('fixed', 'inset-0', 'pointer-events-none', 'z-0');
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('absolute', 'w-1', 'h-1', 'bg-cyan-400', 'rounded-full', 'opacity-50');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${10 + Math.random() * 20}s linear infinite`;
        particlesContainer.appendChild(particle);
    }
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            from {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.5;
            }
            90% {
                opacity: 0.5;
            }
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add sound effects simulation (visual feedback)
function addSoundVisualFeedback() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            // Create visual sound wave effect
            const wave = document.createElement('div');
            wave.classList.add('absolute', 'border-2', 'border-cyan-400', 'rounded-full', 'animate-ping');
            wave.style.width = wave.style.height = '100px';
            wave.style.left = '50%';
            wave.style.top = '50%';
            wave.style.transform = 'translate(-50%, -50%)';
            wave.style.pointerEvents = 'none';
            this.style.position = 'relative';
            this.appendChild(wave);
            setTimeout(() => wave.remove(), 1000);
        });
    });
}
// Robot selection function
function selectRobot(robotName) {
    // Show selection confirmation
    showNotification(`Робот "${robotName}" выбран для следующего рейда!`);
    
    // Add visual feedback
    event.target.classList.add('animate-pulse');
    setTimeout(() => {
        event.target.classList.remove('animate-pulse');
    }, 1000);
    
    // Store selection
    localStorage.setItem('selectedRobot', robotName);
}

// Show comparison modal
function showComparison() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Сравнение роботов
                </h2>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white">
                    <i data-feather="x" class="w-6 h-6"></i>
                </button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="border-b border-gray-700">
                            <th class="pb-3 text-cyan-400">Робот</th>
                            <th class="pb-3 text-yellow-400">Атака</th>
                            <th class="pb-3 text-blue-400">Защита</th>
                            <th class="pb-3 text-green-400">Скорость</th>
                            <th class="pb-3 text-purple-400">Тип</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-cyan-400 font-bold">Титан-7</td>
                            <td class="py-3">95</td>
                            <td class="py-3">85</td>
                            <td class="py-3">45</td>
                            <td class="py-3"><span class="px-2 py-1 bg-red-600 rounded text-xs">ТЯЖЕЛЫЙ</span></td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-purple-400 font-bold">Фантом-X</td>
                            <td class="py-3">78</td>
                            <td class="py-3">60</td>
                            <td class="py-3">92</td>
                            <td class="py-3"><span class="px-2 py-1 bg-purple-600 rounded text-xs">ЛЕГКИЙ</span></td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-green-400 font-bold">Кибер-Медик</td>
                            <td class="py-3">45</td>
                            <td class="py-3">70</td>
                            <td class="py-3">68</td>
                            <td class="py-3"><span class="px-2 py-1 bg-green-600 rounded text-xs">ПОДДЕРЖКА</span></td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-orange-400 font-bold">Шторм-Z</td>
                            <td class="py-3">88</td>
                            <td class="py-3">65</td>
                            <td class="py-3">72</td>
                            <td class="py-3"><span class="px-2 py-1 bg-orange-600 rounded text-xs">ГИБРИД</span></td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-red-400 font-bold">Вулькан</td>
                            <td class="py-3">92</td>
                            <td class="py-3">78</td>
                            <td class="py-3">48</td>
                            <td class="py-3"><span class="px-2 py-1 bg-red-600 rounded text-xs">ТЯЖЕЛЫЙ</span></td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-pink-400 font-bold">Ниндзя-Бот</td>
                            <td class="py-3">82</td>
                            <td class="py-3">55</td>
                            <td class="py-3">95</td>
                            <td class="py-3"><span class="px-2 py-1 bg-pink-600 rounded text-xs">ЛЕГКИЙ</span></td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-indigo-400 font-bold">Квантовый Страж</td>
                            <td class="py-3">90</td>
                            <td class="py-3">88</td>
                            <td class="py-3">75</td>
                            <td class="py-3"><span class="px-2 py-1 bg-indigo-600 rounded text-xs">ЭЛИТНЫЙ</span></td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 text-cyan-400 font-bold">Торнадо</td>
                            <td class="py-3">75</td>
                            <td class="py-3">62</td>
                            <td class="py-3">85</td>
                            <td class="py-3"><span class="px-2 py-1 bg-cyan-600 rounded text-xs">СРЕДНИЙ</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    feather.replace();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-pulse';
    notification.innerHTML = `
        <div class="flex items-center">
            <i data-feather="check-circle" class="w-5 h-5 mr-3"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    feather.replace();
    
    setTimeout(() => {
        notification.style.transition = 'opacity 0.5s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add robot card hover effects
function addRobotCardEffects() {
    document.querySelectorAll('.robot-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initScrollAnimations();
    initParallax();
    simulateFriendStatus();
    addInteractiveEffects();
    initTypingEffect();
    createParticles();
    addSoundVisualFeedback();
    addRobotCardEffects();
    
    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize all Feather icons
    feather.replace();
    
    console.log('🤖 Robots page initialized successfully!');
});
// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll events
window.addEventListener('scroll', throttle(() => {
    // Add any scroll-based animations here
}, 100));