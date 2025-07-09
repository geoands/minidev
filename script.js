const dados = {
  pseudo: {
    "🖱️Interação com o usuário": {
      ":hover": "Quando o mouse está sobre o elemento.",
      ":active": "Quando o elemento está sendo clicado.",
      ":focus": "Quando o elemento recebe foco (ex: campo selecionado).",
      ":focus-within": "Quando o elemento ou um filho tem foco.",
      ":focus-visible": "Foco visível apenas via teclado (acessibilidade).",
      ":target": "Quando o elemento é o alvo de um link com #id."
    },
    "✅Formulários": {
      ":checked": "Quando checkbox/radio está marcado.",
      ":disabled": "Quando o elemento está desabilitado.",
      ":enabled": "Quando o elemento está ativado.",
      ":required": "Campo obrigatório.",
      ":optional": "Campo não obrigatório.",
     ":valid": "Quando os dados do input são válidos.",
      ":invalid": "Quando os dados do input são inválidos.",
      ":in-range": "Quando o valor está dentro do intervalo (min/max).",
      ":out-of-range": "Quando está fora do intervalo.",
      ":placeholder-shown": "Quando o placeholder está visível.",
      ":read-only": "Campo de leitura apenas.",
      ":read-write": "Campo editável."
    },
    "📍Posicionamento na árvore HTML": {
      ":first-child": "Primeiro filho de um pai.",
      ":last-child": "Último filho de um pai.",
      ":nth-child(n)": "O enésimo filho (ex: 2, odd, even).",
      ":nth-last-child(n)": "Igual ao enésimo, mas contado de trás pra frente.",
      ":first-of-type": "Primeiro elemento do mesmo tipo (ex: p, li).",
      ":last-of-type": "Último elemento do mesmo tipo.",
      ":nth-of-type(n)": "O enésimo do mesmo tipo.",
      ":only-child": "Quando é filho único.",
      ":only-of-type": "Quando é o único do tipo naquele pai.",
      ":empty": "Sem conteúdo (nem espaço em branco)."
    },
    "👻Estado invisível ou sem ação": {
      ":not(X)": "Seleciona tudo menos o que for X. Ex: :not(.ativo)",
      ":root": "Representa o elemento <html>.",
      ":lang(xx)": "Estiliza elementos com idioma específico (ex: :lang(pt-BR)).",
      ":is()": "Agrupa seletores de forma mais performática.",
      ":where()": "Igual ao :is, mas com peso zero (não influencia o CSS cascade).",
      ":has()": "Seleciona elementos que contêm outro elemento (CSS avançado e moderno)."
    }
  },

  property: {
    "🎨Texto": {
      "text-align": "Alinha o texto: left, center, right ou justify.",
      "text-decoration": "Adiciona linha: underline, line-through, etc.",
      "text-transform": "Transforma o texto: uppercase, lowercase, capitalize.",
      "letter-spacing": "Define o espaço entre as letras.",
      "line-height": "Altura entre as linhas do texto."
    },
    "🔤Fonte": {
      "font-family": "Define a fonte usada no texto.",
      "font-size": "Tamanho da fonte.",
      "font-weight": "Peso da fonte: normal, bold ou valores numéricos (100–900).",
      "font-style": "Estilo da fonte: normal, italic, oblique.",
      "font-variant": "Transforma o texto em small-caps."
    },
    "🧱Box Model": {
      "margin": "Espaço externo ao redor do elemento.",
      "padding": "Espaço interno entre conteúdo e borda.",
      "border": "Adiciona uma borda ao redor do elemento.",
      "width": "Define a largura do elemento.",
      "height": "Define a altura do elemento.",
      "box-sizing": "Controla se padding e border entram na largura total."
    },
    "🎨Cores e fundo": {
      "color": "Cor do texto.",
      "background-color": "Cor de fundo.",
      "background-image": "Adiciona uma imagem como fundo.",
      "background-size": "Controla o tamanho da imagem de fundo.",
      "background-position": "Posiciona a imagem no fundo."
    },
    "📦Display e posicionamento": {
      "display": "Define o tipo de caixa: block, inline, flex, grid, etc.",
      "position": "Tipo de posicionamento: static, relative, absolute, fixed, sticky.",
      "top / left / right / bottom": "Define a posição baseada no pai.",
      "z-index": "Controla a sobreposição dos elementos."
    }
  },

  function: {
    "🔢Cálculo": {
      "calc()": "Faz cálculos com unidades diferentes. Ex: width: calc(100% - 50px)",
      "clamp()": "Define um valor mínimo, ideal e máximo. Ex: font-size: clamp(1rem, 2vw, 2rem)",
      "min()": "Retorna o menor valor entre os fornecidos",
      "max()": "Retorna o maior valor entre os fornecidos",
    },
    "🎨Cor": {
      "rgb()": "Define cor usando vermelho, verde e azul.",
      "rgba()": "Define cor usando vermelho, verde, azul e alfa (transparência).",
      "hsl()": "Cor por matiz, saturação e luminosidade.",
      "hsla()": "Cor por matiz, saturação, luminosidade e alfa (transparência).",
      "color-mix": "Mistura duas cores com proporções.",
      "color()": "Usa espaços de cor modernos como display-p3.",
    },
      "🖼️Imagem e gradiente": {
      "url()": `Define o caminho de uma imagem. Ex: background-image: url("img.jpg")`,
      "linear-gradient()": "Cria gradientes lineares.",
      "radial-gradient()": "Cria gradientes circulares",
      "repeating-linear-gradient()": "Gradiente linear repetido.",
      "image-set()": "Define várias resoluções de imagem para telas diferentes."
    },
    "🎯Transformação": {
      "translate(x, y)": "Move o elemento dos eixos X e Y.",
      "rotate(deg)": "Gira o elemento em graus",
      "scale(x)": "Aumenta ou diminui a escala",
      "matrix(x)": "Aplica uma transformação completa"
    },
    "📐Forma/clipping": {
      "circle()": "Define uma forma circular.",
      "ellipse()": "Forma oval.",
      "inset()": "Forma retangular com controle de bordas.",
      "polygon()": "Cria uma forma poligonal com pontos personalizados."
    },

    "📏Outras úteis": {
      "var(--nome)": "Usa uma variável CSS.<br>(Usada para temas, cores, espaçamentos reutilizáveis).",
      "env()": "Usa variáveis do ambiente.<br>(Usada para espaçamento seguro em celulares/tablets)",
      "attr()": "Pega o valor de um atributo HTML e exibe no CSS (limitado ao content).<br>(Usada para mostrar info dinâmica via CSS)",
      "element()": "Usa outro elemento como imagem.<br>(Avançado, ainda experimental)",
    }
  },

  datatype: {
    "📏 Medidas:": {
      "<length>": "Comprimento fixo.<br>(px, em, rem, vh, vw).",
      "<percentage>": "Porcentagem relativa.",
      "<length-percentage>": "Aceita comprimento ou porcentagem.<br>(Usado em margin, padding).",
      "<resolution>": "Define resolução.",
      "<angle>": "Usado para rotação ou gradiente.",
      "<time>": "Tempo. Usado em animações.",
    },
    "🔢Números e dimensões": {
      "<integer>": "Número inteiro.",
      "<number>": "Número decimal ou inteiro.",
      "<ratio>": "Proporção, usado em aspect-ratio.",
      "<dimension>": "Unidade personalizada.",
    },
    "🎨Cores e imagens": {
      "<color>": "Qualquer cor.",
      "<image>": "Imagem ou gradiente.",
      "<url>": "Caminho para imagem, fonte, etc.",
    },
    "🧠Identificadores e strings": {
      "<string>": "Texto com aspas.",
      "<custom-ident>": "Identificador criado pelo dev.",
      "<position>": "Coordenadas relativas.",
    },
    "🔧 Avançado e específico": {
      "<flex>": "Valores usados no flex.",
      "<transform-function>": "Função de transformação.",
      "<shape>": "Forma geométrica usada em clip-path.",
      "<frequency>": "Frequência de som.",
      },
  },

  concept: {
    "🎯 Conceitos básicos e seleção": {
      "Attribute Selectors": "Permitem selecionar elementos com base em atributos HTML.<br>Ex: [type='checkbox'] seleciona inputs do tipo checkbox.",
      "Combinators": "Relacionam elementos entre si no CSS.<br>Ex: 'div p' (descendente), 'div > p' (filho direto), 'div + p' (irmão adjacente)",
      "Custom Properties": "São variáveis CSS criadas com --nome: valor. Usadas com var(--nome). Facilitam reutilização e manutenção."
    },

    "📦 Layout e estrutura": {
      "Flexbox": "Modelo de layout unidimensional para alinhar itens horizontal ou verticalmente.<br>Ex: display: flex;",
      "Grid": "Sistema bidimensional para criar layouts com linhas e colunas.<br>Ex: display: grid;",
      "Subgrid": "Permite que um grid filho herde as linhas ou colunas do grid pai. Ainda pouco suportado."
    },

    "🎚️ Comportamento e lógica": {
      "Counters": "Criam contadores automáticos em CSS, usados com counter-increment e counter-reset.<br>Ex: numeração automática de listas.",
      "Media Queries": "Permitem aplicar estilos diferentes com base no tamanho da tela ou dispositivo.<br>Ex: @media (max-width: 768px) {...}"
    }
  },

  rule: {
    "📐 Responsividade e condição": {
      "@media": "Aplica estilos apenas se a condição for verdadeira (como largura da tela).<br>Ex: @media (max-width: 768px) { ... }",
      "@supports": "Aplica estilos somente se o navegador suportar determinada propriedade ou valor.<br>Ex: @supports (display: grid) { ... }",
      "@layer": "Permite organizar o CSS em camadas com prioridade. Útil para controlar a ordem de carregamento e sobrescrita.",
      "@container": "Aplica estilos baseados no tamanho de um container, não da tela.<br>Ex: @container (min-width: 300px) { ... }"
    },

    "🎨 Estilo global e fontes": {
      "@import": "Importa outro arquivo CSS externo.<br>Ex: @import url('estilo.css');",
      "@font-face": "Permite carregar fontes personalizadas. Define nome, arquivo, estilo, etc.",
      "@charset": "Define a codificação de caracteres do CSS. Deve ser a primeira linha. Ex: @charset 'UTF-8';"
    },

    "🎞️ Animação e comportamento": {
      "@keyframes": "Define os passos de uma animação CSS.<br>Ex: @keyframes slide { from { left: 0 } to { left: 100px } }",
      "@page": "Define estilos específicos para impressão de páginas.<br>Ex: @page { margin: 2cm; }",
      "@counter-style": "Cria estilos personalizados para listas numeradas ou contadores."
    }
  }
}

const categoria = document.getElementById('categoria');
const funcao = document.getElementById('funcao');
const codigo = document.getElementById('Código');
const resposta = document.getElementById('resposta');

// Quando muda a CATEGORIA

categoria.addEventListener('change', () => {
  const valorCategoria = categoria.value;

  funcao.innerHTML = '';
  codigo.innerHTML = '';
  resposta.innerHTML = '';
  funcao.disabled = true;
  codigo.disabled = true;

  if (valorCategoria && dados[valorCategoria]) {
    funcao.disabled = false;
    funcao.innerHTML = '<option value="">-- Selecione --</option>';

    Object.keys(dados[valorCategoria]).forEach(subgrupo => {
      const option = document.createElement('option');
      option.value = subgrupo;
      option.textContent = subgrupo;
      funcao.appendChild(option);
    });
  }
});

// Quando muda a FUNÇÃO

funcao.addEventListener('change', () => {
  const valorCategoria = categoria.value;
  const valorFuncao = funcao.value;

  codigo.innerHTML = '';
  resposta.innerHTML = '';
  codigo.disabled = true;

  if (
    valorCategoria &&
    valorFuncao &&
    dados[valorCategoria][valorFuncao]
  ) {
    codigo.disabled = false;
    codigo.innerHTML = '<option value="">-- Selecione --</option>';

    const opcoes = dados[valorCategoria][valorFuncao];
    Object.keys(opcoes).forEach(cod => {
      const option = document.createElement('option');
      option.value = cod;
      option.textContent = cod;
      codigo.appendChild(option);
    });
  }
});

// Quando muda o CÓDIGO

codigo.addEventListener('change', () => {
  const valorCategoria = categoria.value;
  const valorFuncao = funcao.value;
  const valorCodigo = codigo.value;

  resposta.innerHTML = '';

  if (
    valorCategoria &&
    valorFuncao &&
    valorCodigo &&
    dados[valorCategoria][valorFuncao][valorCodigo]
  ) {
    const explicacao = dados[valorCategoria][valorFuncao][valorCodigo];
    resposta.innerHTML = `<p>${explicacao}</p>`;
  }
});
