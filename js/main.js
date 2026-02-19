/**
 * MAIN.JS - Lógica Principal do Site
 * 
 * Este arquivo centraliza as funcionalidades principais do site:
 * - Controle de menu responsivo
 * - Renderização dinâmica de cards
 * - Gerenciamento de eventos
 * - Utilitários gerais
 */

// ========================================
// MÓDULO: GERENCIAMENTO DE MENU
// ========================================

/**
 * Inicializa o menu responsivo (hamburger)
 */
function initMenuResponsivo() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Fecha menu ao clicar em um link
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Fecha menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
    }
  });
}

/**
 * Marca o link de navegação ativo
 */
function marcarNavegacaoAtiva() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === paginaAtual || (paginaAtual === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ========================================
// MÓDULO: RENDERIZAÇÃO DE CARDS
// ========================================

/**
 * Renderiza cards de ambientes dinamicamente
 * @param {Array} ambientesList - Lista de ambientes para renderizar
 * @param {string} containerId - ID do container onde renderizar
 */
function renderizarCards(ambientesList, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (ambientesList.length === 0) {
    container.innerHTML = '<p class="text-center text-secondary">Nenhum ambiente disponível no momento.</p>';
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'cards-grid';

  ambientesList.forEach(ambiente => {
    const card = criarCardAmbiente(ambiente);
    grid.appendChild(card);
  });

  container.appendChild(grid);
}

/**
 * Cria elemento de card para um ambiente
 * @param {Object} ambiente - Dados do ambiente
 * @returns {HTMLElement} Elemento card
 */
function criarCardAmbiente(ambiente) {
  const card = document.createElement('div');
  card.className = 'card fade-in';

  const imagemSrc = ambiente.disponivel ? ambiente.imagemPreview : `${ambiente.imagemPreview}?disabled`;
  const statusClass = ambiente.disponivel ? '' : 'opacity-reduced';

  const btnTexto = ambiente.disponivel ? 'Abrir em 360°' : 'Em Breve';
  const btnClasse = ambiente.disponivel ? 'btn btn-primary' : 'btn btn-secondary';
  const btnDisabled = ambiente.disponivel ? '' : 'disabled';

  card.innerHTML = `
    <img 
      src="${imagemSrc}" 
      alt="${ambiente.titulo}" 
      class="card-image ${statusClass}" 
      loading="lazy"
    />
    <div class="card-content">
      <span class="card-category">${ambiente.categoria}</span>
      <h3 class="card-title">${ambiente.titulo}</h3>
      <p class="card-description">${ambiente.descricao}</p>
      <div class="card-footer">
        ${criarBotaoAmbiente(ambiente, btnTexto, btnClasse, btnDisabled)}
      </div>
    </div>
  `;

  return card;
}

/**
 * Cria botão para abrir ambiente em 360°
 * @param {Object} ambiente - Dados do ambiente
 * @param {string} texto - Texto do botão
 * @param {string} classe - Classes CSS do botão
 * @param {string} disabled - Atributo disabled se necessário
 * @returns {string} HTML do botão
 */
function criarBotaoAmbiente(ambiente, texto, classe, disabled) {
  if (!ambiente.disponivel) {
    return `<button class="${classe}" ${disabled}>
      ${texto}
    </button>`;
  }

  return `<a 
    href="viewer.html?id=${ambiente.id}" 
    class="${classe}"
    aria-label="Abrir visualizador 360° do ${ambiente.titulo}"
  >
    ${texto}
  </a>`;
}

/**
 * Renderiza ambientes agrupados por categoria
 * @param {Object} ambientesAgrupados - Ambientes agrupados por categoria
 * @param {string} containerId - ID do container
 */
function renderizarAmbientesPorCategoria(ambientesAgrupados, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  Object.entries(ambientesAgrupados).forEach(([categoria, ambientes]) => {
    const section = document.createElement('section');
    section.className = 'categoria-section';

    const title = document.createElement('h3');
    title.textContent = categoria;
    title.className = 'categoria-titulo';
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    ambientes.forEach(ambiente => {
      grid.appendChild(criarCardAmbiente(ambiente));
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

// ========================================
// MÓDULO: UTILITÁRIOS
// ========================================

/**
 * Copia texto para a área de transferência
 * @param {string} texto - Texto a copiar
 * @returns {Promise} Promise que resolve quando texto é copiado
 */
function copiarParaAreaTransferencia(texto) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(texto).then(() => {
      mostrarNotificacao('Copiado com sucesso!', 'success');
    }).catch(() => {
      mostrarNotificacao('Erro ao copiar', 'error');
    });
  } else {
    // Fallback para navegadores antigos
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      mostrarNotificacao('Copiado com sucesso!', 'success');
    } catch (err) {
      mostrarNotificacao('Erro ao copiar', 'error');
    }
    document.body.removeChild(textArea);
  }
}

/**
 * Exibe notificação temporária
 * @param {string} mensagem - Mensagem a exibir
 * @param {string} tipo - Tipo: 'success', 'error', 'info'
 * @param {number} duracao - Duração em ms (padrão: 3000)
 */
function mostrarNotificacao(mensagem, tipo = 'info', duracao = 3000) {
  const notificacao = document.createElement('div');
  notificacao.className = `notificacao notificacao-${tipo}`;
  notificacao.setAttribute('role', 'alert');
  notificacao.textContent = mensagem;

  // Posicionar no topo da página
  notificacao.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    background-color: ${tipo === 'success' ? '#10B981' : tipo === 'error' ? '#DC2626' : '#3B82F6'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideInRight 0.3s ease-in-out;
    max-width: 90%;
  `;

  document.body.appendChild(notificacao);

  setTimeout(() => {
    notificacao.style.animation = 'slideInLeft 0.3s ease-in-out reverse';
    setTimeout(() => {
      document.body.removeChild(notificacao);
    }, 300);
  }, duracao);
}

/**
 * Obtém parâmetro da URL
 * @param {string} param - Nome do parâmetro
 * @returns {string|null} Valor do parâmetro ou null
 */
function obterParametroURL(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

/**
 * Scroll suave para elemento
 * @param {string} seletor - Seletor CSS do elemento
 */
function scrollSuave(seletor) {
  const elemento = document.querySelector(seletor);
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ========================================
// MÓDULO: FORMULÁRIOS
// ========================================

/**
 * Valida email
 * @param {string} email - Email a validar
 * @returns {boolean} true se válido
 */
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida formulário básico
 * @param {HTMLFormElement} form - Elemento do formulário
 * @returns {boolean} true se válido
 */
function validarFormulario(form) {
  if (!form) return false;

  const campos = form.querySelectorAll('input, textarea');
  let valido = true;

  campos.forEach(campo => {
    if (campo.hasAttribute('required') && campo.value.trim() === '') {
      campo.setAttribute('aria-invalid', 'true');
      valido = false;
    } else {
      campo.setAttribute('aria-invalid', 'false');
    }

    // Validação específica de email
    if (campo.type === 'email' && campo.value.trim() !== '') {
      if (!validarEmail(campo.value)) {
        campo.setAttribute('aria-invalid', 'true');
        valido = false;
      }
    }
  });

  return valido;
}

/**
 * Inicializa listeners de formulários
 */
function initFormularios() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      if (!validarFormulario(form)) {
        e.preventDefault();
        mostrarNotificacao('Por favor, preencha todos os campos corretamente', 'error');
      }
    });
  });
}

// ========================================
// MÓDULO: INICIALIZAÇÃO
// ========================================

/**
 * Inicializa todas as funcionalidades
 */
function inicializarSite() {
  // Inicializar menu responsivo
  initMenuResponsivo();

  // Marcar navegação ativa
  marcarNavegacaoAtiva();

  // Inicializar formulários
  initFormularios();

  // Log de inicialização (para debug)
  console.log('Site ImmersIF Ceres iniciado com sucesso');
}

// Aguardar carregamento do DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarSite);
} else {
  inicializarSite();
}

// ========================================
// ESTILOS DINÂMICOS (injetados globalmente)
// ========================================
const style = document.createElement('style');
style.textContent = `
  .opacity-reduced {
    opacity: 0.6;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .categoria-section {
    margin-bottom: 48px;
  }

  .categoria-titulo {
    margin-bottom: 24px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .categoria-titulo::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background-color: var(--color-orange-primary);
    border-radius: 2px;
  }
`;
document.head.appendChild(style);
