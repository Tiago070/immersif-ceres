/**
 * DATA LAYER - Ambientes do Campus Ceres
 * 
 * Este arquivo centraliza os dados dos ambientes disponíveis para visualização 360°.
 * Estrutura modular permite fácil expansão para futuros ambientes.
 */

const ambientes = [
  // ===== LABORATÓRIOS =====
  {
    id: "lab-informatica",
    categoria: "Laboratórios",
    titulo: "Laboratório de Informática",
    descricao: "Espaço equipado com computadores de alta performance para ensino de programação, desenvolvimento de software e pesquisa em tecnologia.",
    imagemPreview: "assets/img/lab-informatica-preview.jpg",
    imagem360: "assets/360/lab-informatica-360.jpg",
    disponivel: true,
    dataAdicao: "2025-01-15"
  },
  {
    id: "lab-robotica",
    categoria: "Laboratórios",
    titulo: "Laboratório de Robótica",
    descricao: "Atua no âmbito do Núcleo de Estudos e Pesquisa em Tecnologia da Informação (NEPeTI), com capacitação, pesquisa e inovação em Tecnologias Emergentes como Impressão 3D, Realidade Virtual e Robótica",
    imagemPreview: "assets/img/lab-robotica-preview.jpg",
    imagem360: "assets/360/lab-robotica-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-01"
  },
  {
    id: "lab-quimica",
    categoria: "Laboratórios",
    titulo: "Laboratório de Química",
    descricao: "Espaço de análise e experimentos químicos com equipamentos especializados e área de segurança adequada.",
    imagemPreview: "assets/img/lab-quimica-preview.jpg",
    imagem360: "assets/360/lab-quimica-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-01"
  },
  {
    id: "lab-pedagogia",
    categoria: "Laboratórios",
    titulo: "Laboratório de Práticas Pedagógicas",
    descricao: "Ambiente para desenvolvimento de metodologias educacionais, pesquisa em ensino e preparação de materiais didáticos.",
    imagemPreview: "assets/img/lab-pedagogia-preview.jpg",
    imagem360: "assets/360/lab-pedagogia-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-01"
  },
  {
    id: "fabrica-software",
    categoria: "Laboratórios",
    titulo: "Fábrica de Software",
    descricao: "Centro de desenvolvimento de soluções de software com metodologias ágeis, simulando ambientes corporativos de produção.",
    imagemPreview: "assets/img/fabrica-software-preview.jpg",
    imagem360: "assets/360/fabrica-software-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-05"
  },
  {
    id: "gpsaca",
    categoria: "Laboratórios",
    titulo: "GPSaCA",
    descricao: "Grupo de Pesquisa sobre Sáude da Criança e do Adolescente atuando em pesquisa e extensão no campo da saúde.",
    imagemPreview: "assets/img/gpsaca-preview.jpg",
    imagem360: "assets/360/gpsaca-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-05"
  },
  {
    id: "cebio",
    categoria: "Laboratórios",
    titulo: "CEBIO",
    descricao: "Centro de Excelência em Bioinsumos dedicado à pesquisa e inovação sustentável.",
    imagemPreview: "assets/img/cebio-preview.jpg",
    imagem360: "assets/360/cebio-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-05"
  },
  {
    id: "labam",
    categoria: "Laboratórios",
    titulo: "LABAM",
    descricao: "Laboratório de Análises Biogeoquímicas e Ambientais para estudos ambientais e pesquisa aplicada.",
    imagemPreview: "assets/img/labam-preview.jpg",
    imagem360: "assets/360/labam-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-05"
  },
  {
    id: "limbio",
    categoria: "Laboratórios",
    titulo: "LIMBIO",
    descricao: "Laboratório de Interações Microbianas e Biotecnologia para análises microbiológicas e pesquisa em ciências biológicas.",
    imagemPreview: "assets/img/limbio-preview.jpg",
    imagem360: "assets/360/limbio-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-05"
  },
  {
    id: "labti",
    categoria: "Laboratórios",
    titulo: "LabTI",
    descricao: "Laboratório de Tecnologias de Irrigação com infraestrutura para pesquisa e desenvolvimento.",
    imagemPreview: "assets/img/labti-preview.jpg",
    imagem360: "assets/360/labti-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-05"
  },

  // ===== SALAS DE AULA =====
  {
    id: "sala-bloco-d",
    categoria: "Salas de Aula",
    titulo: "Sala de Aula - Bloco D",
    descricao: "Sala de aula equipada com tecnologia audiovisual moderna para aulas teóricas e apresentações.",
    imagemPreview: "assets/img/sala-bloco-d-preview.jpg",
    imagem360: "assets/360/sala-bloco-d-360.jpg",
    disponivel: true,
    dataAdicao: "2025-01-15"
  },
  {
    id: "sala-bloco-e",
    categoria: "Salas de Aula",
    titulo: "Sala de Aula - Bloco E",
    descricao: "Espaço de aula com capacidade para atividades em grupo e mobiliário flexível para diferentes configurações pedagógicas.",
    imagemPreview: "assets/img/sala-bloco-e-preview.jpg",
    imagem360: "assets/360/sala-bloco-e-360.jpg",
    disponivel: true,
    dataAdicao: "2025-01-15"
  },

  // ===== BLOCOS =====
  {
    id: "bloco-a",
    categoria: "Blocos",
    titulo: "Bloco A",
    descricao: "Estrutura predial dos setores administrativos do campus.",
    imagemPreview: "assets/img/bloco-a-preview.jpg",
    imagem360: "assets/360/bloco-a-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-10"
  },
  {
    id: "bloco-b",
    categoria: "Blocos",
    titulo: "Bloco B",
    descricao: "Estrutura predial de apoio acadêmico e administrativo do campus.",
    imagemPreview: "assets/img/bloco-b-preview.jpg",
    imagem360: "assets/360/bloco-b-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-10"
  },
  {
    id: "bloco-c",
    categoria: "Blocos",
    titulo: "Bloco C",
    descricao: "Estrutura predial que abriga laboratórios e espaços de pesquisa.",
    imagemPreview: "assets/img/bloco-c-preview.jpg",
    imagem360: "assets/360/bloco-c-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-10"
  },
  {
    id: "bloco-d",
    categoria: "Blocos",
    titulo: "Bloco D",
    descricao: "Bloco com salas de aula e espaços de apoio para atividades educacionais.",
    imagemPreview: "assets/img/bloco-d-preview.jpg",
    imagem360: "assets/360/bloco-d-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-10"
  },
  {
    id: "bloco-e",
    categoria: "Blocos",
    titulo: "Bloco E",
    descricao: "Bloco com salas de aula, laboratórios e um miniauditório.",
    imagemPreview: "assets/img/bloco-e-preview.jpg",
    imagem360: "assets/360/bloco-e-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-10"
  },
  {
    id: "bloco-f",
    categoria: "Blocos",
    titulo: "Bloco F",
    descricao: "Estrutura predial com salas de aula e espaços para atividades práticas e laboratoriais.",
    imagemPreview: "assets/img/bloco-f-preview.jpg",
    imagem360: "assets/360/bloco-f-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-10"
  },
  {
    id: "bloco-g",
    categoria: "Blocos",
    titulo: "Bloco G",
    descricao: "Bloco de laboratórios e espaços de pesquisa.",
    imagemPreview: "assets/img/bloco-g-preview.jpg",
    imagem360: "assets/360/bloco-g-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-10"
  },

  // ===== ASSISTÊNCIA ESTUDANTIL =====
  {
    id: "cae",
    categoria: "Assistência Estudantil",
    titulo: "CAE",
    descricao: "Coordenação de Assistência Estudantil, responsável por políticas e ações de apoio aos alunos.",
    imagemPreview: "assets/img/cae-preview.jpg",
    imagem360: "assets/360/cae-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-15"
  },
  {
    id: "refeitorio",
    categoria: "Assistência Estudantil",
    titulo: "Refeitório",
    descricao: "Espaço para refeições e convivência da comunidade acadêmica com cardápio diversificado.",
    imagemPreview: "assets/img/refeitorio-preview.jpg",
    imagem360: "assets/360/refeitorio-360.jpg",
    disponivel: true,
    dataAdicao: "2025-01-15"
  },
  {
    id: "alojamentos-masc",
    categoria: "Assistência Estudantil",
    titulo: "Alojamentos Masculinos",
    descricao: "Espaço residencial para estudantes do sexo masculino que necessitam de hospedagem no campus.",
    imagemPreview: "assets/img/alojamentos-masc-preview.jpg",
    imagem360: "assets/360/alojamentos-masc-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-15"
  },
  {
    id: "alojamentos-fem",
    categoria: "Assistência Estudantil",
    titulo: "Alojamentos Femininos",
    descricao: "Espaço residencial para estudantes do sexo feminino que necessitam de hospedagem no campus.",
    imagemPreview: "assets/img/alojamentos-fem-preview.jpg",
    imagem360: "assets/360/alojamentos-fem-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-15"
  },

  // ===== NÚCLEO ESPORTIVO =====
  {
    id: "ginasio",
    categoria: "Núcleo Esportivo",
    titulo: "Ginásio",
    descricao: "Espaço coberto para prática de esportes coletivos, eventos e atividades recreativas.",
    imagemPreview: "assets/img/ginasio-preview.jpg",
    imagem360: "assets/360/ginasio-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-20"
  },
  {
    id: "quadra",
    categoria: "Núcleo Esportivo",
    titulo: "Quadra",
    descricao: "Quadra esportiva coberta para prática de voleibol, basquete e outros esportes.",
    imagemPreview: "assets/img/quadra-preview.jpg",
    imagem360: "assets/360/quadra-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-20"
  },
  {
    id: "piscina",
    categoria: "Núcleo Esportivo",
    titulo: "Piscina",
    descricao: "Instalação aquática para aulas de natação, treinamento e atividades recreativas.",
    imagemPreview: "assets/img/piscina-preview.jpg",
    imagem360: "assets/360/piscina-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-20"
  },
  {
    id: "campo-futebol-atletismo",
    categoria: "Núcleo Esportivo",
    titulo: "Campo de Futebol e Atletismo",
    descricao: "Espaço para prática de futebol, corrida e provas de atletismo.",
    imagemPreview: "assets/img/campo-futebol-atletismo-preview.jpg",
    imagem360: "assets/360/campo-futebol-atletismo-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-20"
  },
  {
    id: "academia-musculacao",
    categoria: "Núcleo Esportivo",
    titulo: "Academia de Musculação",
    descricao: "Espaço equipado com máquinas e pesos para prática de musculação e treinamento resistido.",
    imagemPreview: "assets/img/academia-musculacao-preview.jpg",
    imagem360: "assets/360/academia-musculacao-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-20"
  },

  // ===== ESPAÇOS COMUNS =====
  {
    id: "quiosques",
    categoria: "Espaços Comuns",
    titulo: "Quiosques",
    descricao: "Espaços de convivência espalhados pelo campus.",
    imagemPreview: "assets/img/quiosques-preview.jpg",
    imagem360: "assets/360/quiosques-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-25"
  },
  {
    id: "patio-central",
    categoria: "Espaços Comuns",
    titulo: "Pátio Central",
    descricao: "Espaço verde e aberto para integração e convivência entre os estudantes.",
    imagemPreview: "assets/img/patio-central-preview.jpg",
    imagem360: "assets/360/patio-central-360.jpg",
    disponivel: true,
    dataAdicao: "2025-01-15"
  },
  {
    id: "mirante",
    categoria: "Espaços Comuns",
    titulo: "Mirante",
    descricao: "Área de lazer com vista para a mata do campus e o rio verde.",
    imagemPreview: "assets/img/mirante-preview.jpg",
    imagem360: "assets/360/mirante-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-25"
  },
  {
    id: "biblioteca",
    categoria: "Espaços Comuns",
    titulo: "Biblioteca",
    descricao: "Centro de recursos informacionais com salão de estudos e acervo de livros, revistas e acesso a bases de dados para pesquisa.",
    imagemPreview: "assets/img/biblioteca-preview.jpg",
    imagem360: "assets/360/biblioteca-360.jpg",
    disponivel: true,
    dataAdicao: "2025-01-15"
  },
  {
    id: "centro-vivencias",
    categoria: "Espaços Comuns",
    titulo: "Centro de Vivências",
    descricao: "Espaço para realização de eventos, atividades culturais e de integração da comunidade acadêmica.",
    imagemPreview: "assets/img/centro-vivencias-preview.jpg",
    imagem360: "assets/360/centro-vivencias-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-25"
  },
  {
    id: "auditorio-multifuncional",
    categoria: "Espaços Comuns",
    titulo: "Auditório Multifuncional",
    descricao: "Espaço versátil para palestras, seminários, apresentações e eventos acadêmicos.",
    imagemPreview: "assets/img/auditorio-multifuncional-preview.jpg",
    imagem360: "assets/360/auditorio-multifuncional-360.jpg",
    disponivel: true,
    dataAdicao: "2025-02-25"
  },

  // ===== PROJETOS INSTITUCIONAIS =====
  {
    id: "equoterapia",
    categoria: "Projetos Institucionais",
    titulo: "Equoterapia",
    descricao: "Projeto institucional que utiliza equinos como ferramenta terapêutica e educacional.",
    imagemPreview: "assets/img/equoterapia-preview.jpg",
    imagem360: "assets/360/equoterapia-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-01"
  },
  {
    id: "trilha-ecologica",
    categoria: "Projetos Institucionais",
    titulo: "Trilha Ecológica",
    descricao: "Caminho planejado para educação ambiental e contato com o ecossistema local.",
    imagemPreview: "assets/img/trilha-ecologica-preview.jpg",
    imagem360: "assets/360/trilha-ecologica-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-01"
  },
  {
    id: "bau-ciencia",
    categoria: "Projetos Institucionais",
    titulo: "Baú da Ciência",
    descricao: "Espaço interativo para divulgação científica e experimentação em ciências.",
    imagemPreview: "assets/img/bau-ciencia-preview.jpg",
    imagem360: "assets/360/bau-ciencia-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-01"
  },

  // ===== SETORES DE PRODUÇÃO =====
  {
    id: "avicultura-ovinocultura",
    categoria: "Setores de Produção",
    titulo: "Avicultura/Ovinocultura",
    descricao: "Setor dedicado à criação de aves e ovinos, com objetivo educacional e de pesquisa.",
    imagemPreview: "assets/img/avicultura-ovinocultura-preview.jpg",
    imagem360: "assets/360/avicultura-ovinocultura-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-05"
  },
  {
    id: "bovinocultura",
    categoria: "Setores de Produção",
    titulo: "Bovinocultura",
    descricao: "Setor para criação e manejo de bovinos com foco em pesquisa e ensino.",
    imagemPreview: "assets/img/bovinocultura-preview.jpg",
    imagem360: "assets/360/bovinocultura-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-05"
  },
  {
    id: "suinocultura",
    categoria: "Setores de Produção",
    titulo: "Suinocultura",
    descricao: "Setor especializado em criação de suínos com metodologias modernas de produção.",
    imagemPreview: "assets/img/suinocultura-preview.jpg",
    imagem360: "assets/360/suinocultura-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-05"
  },
  {
    id: "pivo-central",
    categoria: "Setores de Produção",
    titulo: "Pivô Central",
    descricao: "Sistema de irrigação automatizado para pesquisa e prática em irrigação agrícola.",
    imagemPreview: "assets/img/pivo-central-preview.jpg",
    imagem360: "assets/360/pivo-central-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-05"
  },
  {
    id: "fabrica-racao",
    categoria: "Setores de Produção",
    titulo: "Fábrica de Ração",
    descricao: "Instalação para produção de ração animal com equipamentos adequados.",
    imagemPreview: "./assets/img/fabrica-racao-preview.jpg",
    imagem360: "./assets/360/fabrica-racao-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-05"
  },
  {
    id: "fruticultura",
    categoria: "Setores de Produção",
    titulo: "Fruticultura",
    descricao: "Área de cultivo de frutas para ensino, pesquisa e produção experimental.",
    imagemPreview: "assets/img/fruticultura-preview.jpeg",
    imagem360: "assets/360/fruticultura-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-05"
  },
  {
    id: "mecanizacao-agricola",
    categoria: "Setores de Produção",
    titulo: "Mecanização Agrícola",
    descricao: "Setor com máquinas e implementos agrícolas para ensino e pesquisa em mecanização.",
    imagemPreview: "assets/img/mecanizacao-agricola-preview.jpg",
    imagem360: "assets/360/mecanizacao-agricola-360.jpg",
    disponivel: true,
    dataAdicao: "2025-03-05"
  }
  ,
  {
    id: "campus-ceres-aereo",
    categoria: "Espaços Comuns",
    titulo: "IF Goiano - Campus Ceres (Aéreo)",
    descricao: "Visão aérea do Campus Ceres capturada por drone. Explore a vista panorâmica e inicie o tour 360° a partir daqui acessando o menu de ambientes no canto superior esquerdo.",
    imagemPreview: "assets/img/campus-ceres-aereo-preview.jpg",
    imagem360: "assets/360/campus-ceres-aereo-360.jpg",
    disponivel: true,
    dataAdicao: "2026-02-16"
  }
];

/**
 * Agrupa ambientes por categoria
 * @returns {Object} Objeto com categorias como chaves e array de ambientes como valores
 */
function agruparAmbientesPorCategoria() {
  return ambientes.reduce((acc, ambiente) => {
    if (!acc[ambiente.categoria]) {
      acc[ambiente.categoria] = [];
    }
    acc[ambiente.categoria].push(ambiente);
    return acc;
  }, {});
}

/**
 * Obtém um ambiente específico por ID
 * @param {string} id - ID do ambiente
 * @returns {Object|null} Ambiente encontrado ou null
 */
function obterAmbientePorId(id) {
  return ambientes.find(ambiente => ambiente.id === id) || null;
}

/**
 * Filtra ambientes disponíveis
 * @returns {Array} Lista de ambientes disponíveis
 */
function obterAmbientesDisponiveis() {
  return ambientes.filter(ambiente => ambiente.disponivel);
}

/**
 * Obtém categorias únicas
 * @returns {Array} Array de categorias
 */
function obterCategorias() {
  return [...new Set(ambientes.map(a => a.categoria))];
}
