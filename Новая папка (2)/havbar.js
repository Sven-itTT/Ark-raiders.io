class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(15, 15, 30, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(147, 51, 234, 0.3);
                    transition: all 0.3s ease;
                }
                
                .nav-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.8rem;
                    font-weight: 900;
                    background: linear-gradient(135deg, #06b6d4, #9333ea);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                
                .logo:hover {
                    transform: scale(1.05);
                    filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.5));
                }
                
                .nav-menu {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 2rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #d1d5db;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .nav-link::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #06b6d4, #9333ea);
                    transform: translateX(-50%);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::before {
                    width: 80%;
                }
                
                .nav-link:hover {
                    color: #06b6d4;
                    transform: translateY(-2px);
                }
                
                .nav-link.active {
                    color: #9333ea;
                    background: rgba(147, 51, 234, 0.1);
                }
                
                .mobile-menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    color: #d1d5db;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu-toggle:hover {
                    background: rgba(147, 51, 234, 0.2);
                    color: #9333ea;
                }
                
                .user-actions {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 2px solid #06b6d4;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .user-avatar:hover {
                    border-color: #9333ea;
                    transform: scale(1.1);
                    box-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
                }
                
                .notification-badge {
                    position: relative;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .notification-badge:hover {
                    transform: scale(1.1);
                }
@media (max-width: 768px) {
                    .nav-container {
                        padding: 1rem;
                    }
                    
                    .nav-menu {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background: rgba(15, 15, 30, 0.98);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1rem;
                        transform: translateX(-100%);
                        transition: transform 0.3s ease;
                        border-top: 1px solid rgba(147, 51, 234, 0.3);
                    }
                    
                    .nav-menu.active {
                        transform: translateX(0);
                    }
                    
                    .mobile-menu-toggle {
                        display: block;
                    }
                    
                    .user-actions {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .logo {
                        font-size: 1.5rem;
                    }
                }
            </style>
            
            <nav>
                <div class="nav-container">
                    <a href="#" class="logo" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                        ⚡ ARK RAIDERS
                    </a>
                    
                    <button class="mobile-menu-toggle" onclick="this.parentElement.querySelector('.nav-menu').classList.toggle('active')">
                        <i data-feather="menu" style="width: 24px; height: 24px;"></i>
                    </button>
                    
                    <ul class="nav-menu">
                        <li><a href="#buy" class="nav-link">Купить игру</a></li>
                        <li><a href="#news" class="nav-link">Новости</a></li>
                        <li><a href="robots.html" class="nav-link">О роботах</a></li>
<li><a href="#raid" class="nav-link">Рейд</a></li>
                        <li><a href="#friends" class="nav-link">Друзья</a></li>
                        <li><a href="#account" class="nav-link">Учетная запись</a></li>
                    <div class="user-actions">
                        <div class="notification-badge">
                            <i data-feather="bell" style="width: 24px; height: 24px;"></i>
                        </div>
                        <img src="http://static.photos/people/40x40/400" alt="User" class="user-avatar">
                    </div>
</ul>
                </div>
            </nav>
        `;
        
        // Add active link highlighting on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const links = this.shadowRoot.querySelectorAll('.nav-link');
                    links.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.5 });
        
        // Observe all sections
        setTimeout(() => {
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => observer.observe(section));
        }, 100);
        
        // Re-initialize Feather icons for shadow DOM
        setTimeout(() => {
            feather.replace();
        }, 0);
    }
}

customElements.define('custom-navbar', CustomNavbar);
