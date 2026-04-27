# ImersaLab

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://tiago070.github.io/immersif-ceres/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![A-Frame](https://img.shields.io/badge/A--Frame-FF6B35?logo=aframe&logoColor=white)](https://aframe.io/)

> Tecnologias Imersivas para Popularização da Ciência e Tecnologia - IF Goiano Campus Ceres

## 📋 Sumário Executivo

**ImersaLab** é uma plataforma web inovadora desenvolvida no âmbito do Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação (PIBITI) do IF Goiano – Campus Ceres. O projeto utiliza tecnologias imersivas, especialmente tours virtuais em 360° e realidade virtual (VR), como estratégia de divulgação científica e educacional, democratizando o acesso aos ambientes institucionais de forma inovadora e acessível.

**🎯 Objetivo Geral:** Criar e disponibilizar uma plataforma responsiva e modular de tours virtuais 360° que permita a exploração digital dos espaços científicos, educacionais e institucionais do IF Goiano – Campus Ceres, ampliando o acesso à informação e experiências educacionais além de barreiras geográficas e temporais.

## ✨ Funcionalidades Principais

- 🏠 **Página Inicial** - Hero section com apresentação institucional
- 📘 **Projeto & Desenvolvimento** - Integração unificada com abas:
  - Sobre o Projeto: Objetivos, justificativa e beneficiários
  - Desenvolvimento Técnico: Arquitetura, roadmap e stack tecnológico
- 🏫 **Campus Ceres** - Catálogo interativo de ambientes com filtros dinâmicos + Tour Virtual Integrado:
  - Experiência Imersiva: Preview aéreo do campus
  - Como Usar o Tour: Instruções para desktop, mobile e VR
  - Acesso direto ao visualizador 360°
- 📧 **Contato** - Formulário interativo e informações de contato
- 👓 **Visualizador 360°** - Visualizador imersivo com suporte A-Frame/WebXR
- 📱 **Design Responsivo** - Otimizado para mobile, tablet e desktop
- ♿ **Acessibilidade** - WCAG 2.1 AA compliant
- 🔍 **SEO Otimizado** - Meta tags completas e performance otimizada

## 🏗️ Arquitetura do Sistema

### Camadas de Arquitetura

```
┌─────────────────────────────────────────────┐
│     CAMADA DE APRESENTAÇÃO (Frontend)      │
│  HTML5 Semântico | CSS3 Responsivo | JS    │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────┴──────────────────────────┐
│    CAMADA DE LÓGICA (JavaScript)           │
│  Renderização Dinâmica | Gerenciamento UI  │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────┴──────────────────────────┐
│      CAMADA DE DADOS (Data Layer)          │
│  ambientes.js | Estrutura de Dados         │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────┴──────────────────────────┐
│   CAMADA 360° (A-Frame/WebXR - Futuro)    │
│  Visualizador Imersivo | Suporte VR        │
└─────────────────────────────────────────────┘
```

### Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **HTML5** | - | Estrutura semântica e acessível |
| **CSS3** | - | Design responsivo e animações |
| **JavaScript** | ES6+ | Lógica interativa (vanilla) |
| **A-Frame** | 1.4.2 | Framework WebXR para VR |
| **Thinglink** | - | Integração inicial de tours 360° |

### Design System

- **Paleta de Cores:**
  - Azul Institucional: `#1E3A8A`
  - Laranja Destaque: `#F97316`
  - Branco: `#FFFFFF`
  - Cinza Escuro: `#1F2937`

- **Tipografia:** Inter + Poppins (Google Fonts)

- **Breakpoints Responsivos:**
  - Mobile: ≤ 767px
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px

## 📁 Estrutura do Projeto

```
ImersaLab/
├── 📄 Páginas HTML (5 arquivos)
│   ├── index.html              # Página inicial com hero
│   ├── projeto-desenvolvimento.html  # Integração: Projeto & Desenvolvimento (com abas)
│   ├── tour-campus.html        # Tour Virtual + Campus Ceres Integrado
│   ├── contato.html            # Formulário de contato
│   └── viewer.html             # Visualizador A-Frame/WebXR
│
├── 🎨 Estilos
│   └── css/
│       └── style.css           # Design system completo (750+ linhas)
│
├── 🧠 Lógica
│   └── js/
│       └── main.js             # JavaScript vanilla (400+ linhas)
│
├── 📊 Dados
│   └── data/
│       └── ambientes.js        # Dados dos ambientes (100+ linhas)
│
├── 📚 Documentação
│   └── README.md               # Esta documentação
│
└── ⚙️ Configuração
    ├── manifest.json           # PWA (Progressive Web App)
    ├── package.json            # Metadados do projeto
    └── .gitignore              # Controle de versão
```

## 🚀 Como Usar

### Acesso Online
O projeto está hospedado no GitHub Pages: **[https://tiago070.github.io/immersif-ceres/](https://tiago070.github.io/immersif-ceres/)**

### Execução Local (Desenvolvimento)

#### Opção 1: VS Code Live Server
1. Instale a extensão "Live Server" no VS Code
2. Clique direito em `index.html` → "Open with Live Server"
3. Acesse: `http://localhost:5500`

#### Opção 2: Python HTTP Server
```bash
# Navegue até a pasta do projeto
cd immersif-ceres

# Inicie o servidor
python -m http.server 8000
# ou python3 -m http.server 8000

# Acesse: http://localhost:8000
```

#### Opção 3: Node.js HTTP Server
```bash
# Instale globalmente (primeira vez)
npm install -g http-server

# Inicie o servidor
http-server

# Acesse: http://localhost:8080
```

## 📦 Instalação e Configuração

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Conexão com internet (para Google Fonts e A-Frame)

### Configuração Inicial
1. Clone o repositório:
   ```bash
   git clone https://github.com/Tiago070/immersif-ceres.git
   cd immersif-ceres
   ```

2. Abra `index.html` no navegador ou inicie um servidor local

3. Para desenvolvimento, edite os arquivos diretamente:
   - **HTML:** Estrutura em `*.html`
   - **CSS:** Estilos em `css/style.css`
   - **JavaScript:** Lógica em `js/main.js`
   - **Dados:** Ambientes em `data/ambientes.js`

## 🔧 Desenvolvimento

### Estrutura de Código
- **HTML5 Semântico:** Uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **CSS Modular:** Variáveis CSS para fácil manutenção
- **JavaScript Vanilla:** Sem dependências externas
- **Acessibilidade:** ARIA labels, foco visível, navegação por teclado

### Funcionalidades JavaScript
- Menu responsivo (hamburger)
- Scroll spy automático
- Scroll suave
- Renderização dinâmica de cards
- Validação de formulários
- Lazy loading preparado
- Suporte a PWA (estrutura pronta)

### Dados dos Ambientes
Estrutura em `data/ambientes.js`:
```javascript
const ambientes = [
  {
    id: "lab-informatica",
    titulo: "Laboratório de Informática",
    categoria: "Laboratórios",
    descricao: "...",
    imagemPreview: "assets/img/lab-info.jpg",
    imagem360: "assets/360/lab-info-360.jpg",
    disponivel: true
  }
  // ... mais ambientes
];
```

## 🚀 Deploy e Hospedagem

### GitHub Pages (Atual)
- **URL:** https://tiago070.github.io/immersif-ceres/
- **Status:** ✅ Ativo
- **Configuração:** Branch `main` → pasta raiz

### Outras Opções de Deploy
- **Netlify:** Deploy automático via Git
- **Vercel:** Performance otimizada
- **Servidor IF Goiano:** Hospedagem institucional

Consulte `DEPLOYMENT.md` para instruções detalhadas.

## 🔍 Testes e Qualidade

### Checklist de Testes
- [ ] Menu hamburger funciona em mobile
- [ ] Cards carregam dinamicamente
- [ ] Filtros de categoria funcionam
- [ ] Formulário valida campos obrigatórios
- [ ] Links internos navegam corretamente
- [ ] Responsividade em 360px, 768px, 1024px
- [ ] Imagens carregam corretamente
- [ ] Acessibilidade com tab/enter
- [ ] Console sem erros JavaScript
- [ ] Performance (Lighthouse > 90)

### Performance
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Total Bundle Size:** ~60KB (HTML + CSS + JS)

### Acessibilidade
- **WCAG 2.1 Level AA** compliant
- Contraste mínimo 4.5:1
- Navegação por teclado completa
- Leitores de tela suportados
- Skip links implementados

## 📈 Roadmap e Próximos Passos

### ✅ Fase 1: Fundação Web (Concluída)
- Site responsivo completo
- Integração Thinglink
- Estrutura preparada para expansão

### 🔄 Fase 2: Visualizador A-Frame (Em Desenvolvimento)
- Visualizador 360° customizado
- Suporte nativo a VR
- Hotspots interativos

### 📋 Fase 3: Backend Administrativo (Planejado)
- Sistema de gerenciamento de ambientes
- Upload de imagens 360°
- Autenticação de usuários

### 📊 Fase 4: Analytics e Pesquisa (Futuro)
- Coleta de dados educacionais
- Métricas de uso
- Publicações científicas

## 🎯 Sistema de Abas Integrado

A partir da versão integrada, as páginas de **Projeto** e **Desenvolvimento** foram unificadas em uma única página (`projeto-desenvolvimento.html`) com um sistema de abas interativas:

### Estrutura de Abas
```
┌─────────────────────────────────────────┐
│  📋 Sobre o Projeto │ ⚙️ Desenvolvimento │
├─────────────────────────────────────────┤
│                                         │
│  Conteúdo específico de cada aba        │
│                                         │
└─────────────────────────────────────────┘
```

### Conteúdo por Aba

**📋 Sobre o Projeto:**
- Apresentação geral do projeto PIBITI
- Objetivos (Geral e Específicos)
- Justificativas (5 pilares de importância)
- Beneficiários (Discentes, Instituição, Pesquisadores)

**⚙️ Desenvolvimento Técnico:**
- Status atual (Fase 1: Fundação Web)
- Desenvolvimento autoral futuro (Fases 2-5)
- Arquitetura do sistema em camadas
- Roadmap completo de evolução
- Stack tecnológico (Frontend, Integração, Backend)
- Justificativa técnica para desenvolvimento próprio

### Navegação
- **Via Menu:** Clique em "Projeto & Desenvolvimento" na navegação principal
- **Dentro da página:** Use os botões de abas para alternar entre visões
- **Responsivo:** Abas adaptam-se para mobile (layout em coluna)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Diretrizes de Contribuição
- Mantenha o código vanilla (sem frameworks desnecessários)
- Siga as convenções de nomenclatura existentes
- Teste em múltiplos navegadores
- Atualize a documentação conforme necessário

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**Desenvolvedor:** Tiago Cardoso Ferreira  
**Instituição:** IF Goiano - Campus Ceres  
**Programa:** PIBITI (Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação)  
**Email:** [LinkedIn](https://linkedin.com/in/tiago-cardoso-ferreira-6236b8208)  
**GitHub:** [@Tiago070](https://github.com/Tiago070)

---

**⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!**

Última atualização: Março 2026