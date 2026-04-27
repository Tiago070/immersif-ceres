# ImersaLab

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://tiago070.github.io/immersif-ceres/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![A-Frame](https://img.shields.io/badge/A--Frame-FF6B35?logo=aframe&logoColor=white)](https://aframe.io/)

> Plataforma de tours virtuais 360° e conteúdo imersivo para o IF Goiano — Campus Ceres.

## 📌 Visão Geral

**ImersaLab** é um site responsivo que oferece uma experiência digital imersiva para apresentar o IF Goiano — Campus Ceres. O projeto combina navegação interna em uma única página com um visualizador dedicado em 360° usando A-Frame.

## ✨ Ajustes recentes

- ✅ Correção do menu hambúrguer para garantir funcionamento consistente em todas as seções móveis.
- ✅ Navegação responsiva com expansão/collapse sem duplicação de event listeners.
- ✅ Documentação atualizada para refletir o estado real do repositório.

## 🔧 Funcionalidades principais

- Navegação mobile com menu hambúrguer funcional
- Página principal em uma única página responsiva com seções:
  - Início
  - Projeto
  - Desenvolvimento
  - Tour Virtual
  - Contato
- Visualizador 360° dedicado em `viewer.html`
- Formulário de contato com validação no frontend
- Renderização dinâmica de ambientes a partir de `data/ambientes.js`
- Layout responsivo e design acessível
- Suporte inicial a PWA via `manifest.json`

## 📁 Estrutura do projeto

```
immersif-ceres/
├── index.html             # Página principal com seções internas e menu responsivo
├── viewer.html            # Visualizador 360° A-Frame
├── manifest.json          # Configuração PWA
├── package.json           # Metadados do projeto
├── README.md              # Documentação do projeto
├── css/
│   └── style.css          # Estilos principais do site
├── js/
│   └── main.js            # Lógica interativa do site
├── data/
│   └── ambientes.js       # Dados dos ambientes do campus
└── .gitignore             # Arquivos ignorados pelo Git
```

> Nota: existem arquivos adicionais na raiz (`script.js`, `style.css`) mas o site atual usa os arquivos em `js/main.js` e `css/style.css`.

## 🚀 Execução local

### Usando Python

```powershell
cd immersif-ceres
python -m http.server 8000
```

Acesse então: `http://localhost:8000`

### Usando VS Code Live Server

- Abra o projeto no VS Code
- Clique com o botão direito em `index.html`
- Selecione `Open with Live Server`

## 🧠 Tecnologias

- **HTML5** para estrutura semântica
- **CSS3** para design responsivo
- **JavaScript (vanilla)** para lógica de interação
- **A-Frame 1.4.2** para visualização 360°

## 📌 Páginas e componentes principais

- `index.html`
  - Layout one-page
  - Menu hamburguer responsivo
  - Seções de conteúdo e tour
  - Formulário de contato
- `viewer.html`
  - Visualizador imersivo em 360°
  - Consumo de dados de `data/ambientes.js`
- `js/main.js`
  - Controle do menu
  - Renders dinâmicas
  - Validação de formulário
  - Navegação suave
- `data/ambientes.js`
  - Dados de ambientes com metadados de tours

### Escopo atual do site

O projeto está organizado como:
- Uma página principal (`index.html`) que centraliza a apresentação e navegação
- Uma página de visualização dedicada (`viewer.html`) para experiências 360°

## ✅ Como contribuir

1. Faça fork deste repositório
2. Crie uma branch de feature (`git checkout -b feature/nome-da-feature`)
3. Faça commits pequenos e descritivos
4. Abra um pull request com descrição clara

### Boas práticas

- Mantenha o código em JavaScript puro
- Preserve a consistência das classes CSS existentes
- Priorize acessibilidade e responsividade
- Atualize a documentação sempre que fizer mudanças de estrutura

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo `LICENSE` para detalhes.

## 📞 Contato

- **Autor:** Tiago Cardoso Ferreira
- **Instituição:** IF Goiano — Campus Ceres
- **GitHub:** [@Tiago070](https://github.com/Tiago070)

Última atualização: Abril 2026
