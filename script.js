/* ===============================================
   SCRIPT PRINCIPAL - ImmersIF Ceres
   Projeto PIBITI - Tecnologias Imersivas
   =============================================== */

/**
 * Classe MenuMobile
 * Gerencia o comportamento do menu hambúrguer em dispositivos móveis
 */
class MenuMobile {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.init();
    }

    /**
     * Inicializa os event listeners
     */
    init() {
        // Toggle do menu ao clicar no botão hambúrguer
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }

        // Fechar menu ao clicar em um link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => this.handleOutsideClick(e));

        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', () => this.handleResize());
    }

    /**
     * Alterna a visibilidade do menu
     */
    toggleMenu() {
        this.navbar.classList.toggle('active');
        this.menuToggle.classList.toggle('active');
        this.menuToggle.setAttribute('aria-expanded', 
            this.menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    }

    /**
     * Fecha o menu
     */
    closeMenu() {
        this.navbar.classList.remove('active');
        this.menuToggle.classList.remove('active');
        this.menuToggle.setAttribute('aria-expanded', 'false');
    }

    /**
     * Trata cliques fora do menu
     */
    handleOutsideClick(e) {
        if (window.innerWidth <= 767) {
            if (!this.navbar.contains(e.target) && !this.menuToggle.contains(e.target)) {
                this.closeMenu();
            }
        }
    }

    /**
     * Fecha o menu quando a janela é redimensionada para desktop
     */
    handleResize() {
        if (window.innerWidth > 767) {
            this.closeMenu();
        }
    }
}

/**
 * Classe ScrollingSpy
 * Atualiza os links de navegação com base na seção visível
 */
class ScrollingSpy {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('main section');
        
        this.init();
    }

    /**
     * Inicializa o Scroll Spy
     */
    init() {
        window.addEventListener('scroll', () => this.updateActiveLink());
        this.updateActiveLink(); // Atualiza no carregamento
    }

    /**
     * Atualiza o link ativo baseado na seção visível
     */
    updateActiveLink() {
        let currentSection = '';

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

/**
 * Classe SmoothScroll
 * Implementa rolagem suave para links de âncora
 */
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    /**
     * Inicializa os event listeners
     */
    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    /**
     * Trata o clique no link de âncora
     */
    handleClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        // Ignora links vazios ou com href="#"
        if (href === '#' || href === '') {
            return;
        }

        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            e.preventDefault();
            
            // Calcula o offset para compensar o header fixo
            const headerHeight = document.querySelector('.header').offsetHeight;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const scrollPosition = targetElement.offsetTop - (headerHeight + navbarHeight);
            
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    }
}

/**
 * Classe BackToTop
 * Adiciona um botão para voltar ao topo da página
 */
class BackToTop {
    constructor() {
        this.button = null;
        this.init();
    }

    /**
     * Inicializa o botão de volta ao topo
     */
    init() {
        this.createButton();
        this.attachListeners();
    }

    /**
     * Cria o botão dinamicamente
     */
    createButton() {
        this.button = document.createElement('button');
        this.button.id = 'backToTop';
        this.button.setAttribute('aria-label', 'Voltar ao topo da página');
        this.button.innerHTML = '↑';
        this.button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #1e3a8a;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 24px;
            cursor: pointer;
            display: none;
            z-index: 900;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
        `;
        
        document.body.appendChild(this.button);
    }

    /**
     * Anexa os event listeners
     */
    attachListeners() {
        window.addEventListener('scroll', () => this.toggleButton());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    /**
     * Alterna a visibilidade do botão
     */
    toggleButton() {
        if (window.pageYOffset > 300) {
            this.button.style.display = 'block';
        } else {
            this.button.style.display = 'none';
        }
    }

    /**
     * Rola suavemente para o topo
     */
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

/**
 * Classe LazyLoadImages
 * Implementa carregamento lazy de imagens (Futura Expansão)
 */
class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    /**
     * Inicializa o Intersection Observer
     */
    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback para navegadores que não suportam IntersectionObserver
            this.images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }
}

/**
 * Classe FormValidation
 * Valida formulários (Futura Expansão)
 */
class FormValidation {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    /**
     * Inicializa a validação de formulários
     */
    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        });
    }

    /**
     * Trata o envio do formulário
     */
    handleSubmit(e) {
        // Implementação futura de validação
        console.log('Formulário pronto para validação');
    }
}

/**
 * Classe Analytics
 * Rastreia interações do usuário (Futura Expansão)
 */
class Analytics {
    constructor() {
        this.init();
    }

    /**
     * Inicializa o rastreamento de eventos
     */
    init() {
        // Rastreia cliques em links externos
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.addEventListener('click', (e) => {
                this.trackEvent('external_link_click', {
                    url: e.target.href
                });
            });
        });

        // Rastreia cliques em botões de ação
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.trackEvent('button_click', {
                    button_text: e.target.textContent
                });
            });
        });
    }

    /**
     * Rastreia um evento
     */
    trackEvent(eventName, eventData = {}) {
        console.log(`Evento: ${eventName}`, eventData);
        // Integração com Google Analytics ou serviço similar
    }
}

/**
 * Classe ThemeToggle
 * Implementa alternância de tema (Futura Expansão)
 */
class ThemeToggle {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    /**
     * Inicializa o tema
     */
    init() {
        this.applyTheme(this.theme);
    }

    /**
     * Aplica o tema
     */
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    /**
     * Alterna entre temas
     */
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.theme);
    }
}

/**
 * Inicialização do DOM
 * Executa as classes quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('ImmersIF Ceres - Site Inicializado');

    // Inicializa o menu mobile
    const menuMobile = new MenuMobile();

    // Inicializa o scroll spy
    const scrollingSpy = new ScrollingSpy();

    // Inicializa o scroll suave
    const smoothScroll = new SmoothScroll();

    // Inicializa o botão de volta ao topo
    const backToTop = new BackToTop();

    // Inicializa lazy load de imagens
    const lazyLoad = new LazyLoadImages();

    // Inicializa validação de formulários
    const formValidation = new FormValidation();

    // Inicializa analytics
    const analytics = new Analytics();

    // Log de inicialização bem-sucedida
    console.log('✓ Menu Mobile carregado');
    console.log('✓ Scroll Spy carregado');
    console.log('✓ Scroll Suave carregado');
    console.log('✓ Botão Voltar ao Topo carregado');
    console.log('✓ Lazy Load carregado');
});

/**
 * Tratamento de Erros Global
 * Captura erros não tratados
 */
window.addEventListener('error', (event) => {
    console.error('Erro não tratado:', event.error);
});

/**
 * Verificação de Suporte a Features
 * Log das features suportadas pelo navegador
 */
window.addEventListener('load', () => {
    const features = {
        localStorage: typeof(Storage) !== 'undefined',
        intersectionObserver: 'IntersectionObserver' in window,
        scrollBehavior: 'scrollBehavior' in document.documentElement.style,
        serviceWorker: 'serviceWorker' in navigator,
        webGL: !!document.createElement('canvas').getContext('webgl')
    };

    console.log('Recursos do Navegador:', features);
});

// Fim do arquivo script.js
