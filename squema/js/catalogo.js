/* Catálogo SQUEMA — fonte única das áreas e dos sistemas.
   Base: docs/mapa_sistemas_educacionais_IA.md (35 sistemas em 17 áreas).
   "demo" aponta para a demonstração interativa; quando é null o caso aparece
   como roteiro (esquema pronto, demo a construir). */
(function () {
  const AREAS = [
    { id: 'biologia', nome: 'Biologia', icone: 'dna.webp', cor: '#36C04A', resumo: 'Vida em todas as escalas: do DNA às células, do corpo humano aos ecossistemas.' },
    { id: 'fisica', nome: 'Física', icone: 'atomo.webp', cor: '#2BB4F5', resumo: 'Forças, energia, eletricidade, luz e ondas — com parâmetros que o aluno controla.' },
    { id: 'quimica', nome: 'Química', icone: 'frasco-roxo.webp', cor: '#8B3DFF', resumo: 'Átomos, moléculas e reações em 3D, com laboratório seguro e sem desperdício.' },
    { id: 'matematica', nome: 'Matemática', icone: 'esquadro.webp', cor: '#FF9416', resumo: 'Gráficos vivos, sólidos que giram e cálculo que se vê acontecer.' },
    { id: 'geografia', nome: 'Geografia', icone: 'mapa.webp', cor: '#19B8A6', resumo: 'O planeta em camadas: territórios, clima e formas de relevo.' },
    { id: 'historia', nome: 'História', icone: 'coliseu.webp', cor: '#C98B4E', resumo: 'Tempo, causa e consequência — e civilizações reconstruídas para explorar.' },
    { id: 'portugues', nome: 'Português', icone: 'livro-aberto.webp', cor: '#EE3B45', resumo: 'A estrutura da língua à vista: frases, textos e obras literárias.' },
    { id: 'idiomas', nome: 'Inglês e Idiomas', icone: 'globo.webp', cor: '#1F5BE0', resumo: 'Vocabulário em contexto e conversação com um personagem que se adapta.' },
    { id: 'artes', nome: 'Artes', icone: 'galeria.webp', cor: '#FF6B8A', resumo: 'Cor, composição e história da arte com um guia crítico ao lado.' },
    { id: 'musica', nome: 'Música', icone: 'musica.svg', cor: '#9B5CFF', resumo: 'Som que se vê: notas, acordes e formas de onda.' },
    { id: 'filosofia', nome: 'Filosofia', icone: 'cerebro.webp', cor: '#6C5CE7', resumo: 'Argumentos mapeados e posições filosóficas em debate.' },
    { id: 'sociologia', nome: 'Sociologia', icone: 'sociedade.svg', cor: '#E8A400', resumo: 'Grupos, relações e efeitos coletivos que surgem de escolhas individuais.' },
    { id: 'astronomia', nome: 'Astronomia', icone: 'planeta.webp', cor: '#4B3BC4', resumo: 'O Sistema Solar em movimento, com escalas e órbitas reais.' },
    { id: 'programacao', nome: 'Programação', icone: 'codigo.webp', cor: '#1B2559', resumo: 'Código executado passo a passo, com memória e variáveis visíveis.' },
    { id: 'robotica', nome: 'Robótica', icone: 'engrenagem.webp', cor: '#3F6FD8', resumo: 'Comandos, sensores e motores num robô virtual que responde.' },
    { id: 'economia', nome: 'Economia', icone: 'grafico.webp', cor: '#2FA84F', resumo: 'Mercado, preços e inflação como sistemas que reagem a choques.' },
    { id: 'financeira', nome: 'Educação Financeira', icone: 'calculadora.webp', cor: '#D98E00', resumo: 'Orçamento, metas e juros compostos aplicados à vida real.' },
  ];

  const S = (area, id, nome, visualizar, ia, potencial, demo, extra) => ({ area, id, nome, visualizar, ia, potencial, demo, ...extra });

  const SISTEMAS = [
    // ---------------- Biologia ----------------
    S('biologia', 'corpo-humano', 'Corpo Humano IA', 'órgãos, sistemas, células', 'explicar estruturas e simular condições', 5, null, {
      interacao: 'Liga camadas do corpo e clica nos órgãos',
      resumo: 'Atlas 3D em camadas (esquelético, circulatório, digestório, nervoso) com simulação de condições como exercício e desidratação.',
      objetivos: ['Localizar órgãos e relacioná-los aos sistemas', 'Entender como os sistemas se integram', 'Observar respostas do corpo a condições simuladas'],
      roteiro: ['Modelo anatômico em camadas que o aluno liga e desliga', 'Clique num órgão abre a ficha (função, sistema, curiosidades)', 'Controles de condição: frequência cardíaca, temperatura, hidratação', 'IA explica a resposta do corpo e propõe perguntas de checagem'],
      tags: ['3D'],
    }),
    S('biologia', 'laboratorio-celular', 'Laboratório Celular', 'célula 3D, DNA, mitose', 'narrar processos conforme interação', 5, 'demos/laboratorio-celular.html', {
      interacao: 'Gira a célula, clica nas organelas e avança a mitose',
      resumo: 'Célula animal em 3D com organelas clicáveis, corte para ver o interior, dupla-hélice do DNA e as fases da mitose.',
      objetivos: ['Identificar organelas e suas funções', 'Relacionar núcleo, DNA e cromossomos', 'Ordenar as fases da mitose'],
      tags: ['3D'],
    }),
    S('biologia', 'genetica-lab', 'Genética Lab', 'DNA, cromossomos, heredogramas', 'gerar cruzamentos e explicar resultados', 5, null, {
      interacao: 'Escolhe os genótipos dos pais e sorteia filhotes',
      roteiro: ['Quadro de Punnett com genótipos dos pais escolhidos pelo aluno', 'Proporções de genótipo e fenótipo calculadas ao vivo', 'Sorteio de descendentes para comparar esperado × observado', 'IA explica o resultado e gera novos cruzamentos'],
      resumo: 'Quadro de Punnett interativo para mono e di-hibridismo, com proporções, sorteio de descendentes e leitura dos resultados.',
      objetivos: ['Montar cruzamentos a partir dos genótipos', 'Distinguir genótipo e fenótipo', 'Comparar proporção esperada e resultado de uma amostra'],
      tags: ['2D'],
    }),
    S('biologia', 'ecossistema-vivo', 'Ecossistema Vivo', 'floresta/oceano interativo', 'simular mudanças ambientais', 5, 'demos/ecossistema-vivo.html', {
      interacao: 'Ajusta chuva, temperatura e desmatamento',
      resumo: 'Ilha 3D com plantas, presas e raposas. Chuva, temperatura e desmatamento alteram a cadeia alimentar em tempo real.',
      objetivos: ['Reconhecer níveis tróficos', 'Ver ciclos populacionais presa–predador', 'Prever efeitos de mudanças ambientais'],
      tags: ['3D', 'modelos livres'],
    }),
    // ---------------- Física ----------------
    S('fisica', 'mecanica', 'Laboratório de Mecânica', 'forças, velocidade, colisões', 'modificar parâmetros e explicar resultados', 5, null, {
      interacao: 'Define ângulo, velocidade e massas; lança e colide',
      roteiro: ['Lançamento oblíquo com ângulo e velocidade ajustáveis', 'Vetores de velocidade decompostos ao longo da trajetória', 'Trilho de colisões com massas e restituição', 'IA compara previsão do aluno com o resultado'],
      resumo: 'Lançamento oblíquo com vetores de velocidade e colisões em trilho com massas e coeficiente de restituição ajustáveis.',
      objetivos: ['Decompor a velocidade em componentes', 'Relacionar ângulo e alcance', 'Conservar momento linear em colisões'],
      tags: ['2D'],
    }),
    S('fisica', 'eletricidade', 'Eletricidade Lab', 'circuitos e fluxo elétrico', 'diagnosticar circuito e orientar aluno', 5, null, {
      interacao: 'Monta série ou paralelo, abre chaves e muda a tensão',
      roteiro: ['Bancada com bateria, lâmpadas e chaves', 'Associação em série e em paralelo com fluxo animado', 'Medidas de tensão, corrente e resistência (Lei de Ohm)', 'IA diagnostica circuito aberto ou curto e orienta'],
      resumo: 'Circuito com bateria e lâmpadas em série ou paralelo, chaves que abrem e fecham, fluxo de cargas animado e diagnóstico.',
      objetivos: ['Aplicar a Lei de Ohm', 'Comparar associação em série e em paralelo', 'Diagnosticar circuito aberto'],
      tags: ['2D'],
    }),
    S('fisica', 'optica', 'Óptica Lab', 'luz, lentes, espelhos', 'gerar experimentos', 5, null, {
      interacao: 'Arrasta o objeto e troca o tipo de lente',
      roteiro: ['Banco óptico com lente convergente e divergente', 'Raios principais traçados ao arrastar o objeto', 'Classificação da imagem e equação de Gauss', 'IA propõe experimentos com novas distâncias'],
      resumo: 'Banco óptico com lente convergente ou divergente: arraste o objeto e veja os raios principais formarem a imagem.',
      objetivos: ['Traçar os raios principais', 'Classificar a imagem (real/virtual, direita/invertida)', 'Usar a equação de Gauss'],
      tags: ['2D'],
    }),
    S('fisica', 'ondas', 'Ondas', 'som, frequência, interferência', 'transformar parâmetros em visualizações', 5, null, {
      interacao: 'Muda frequência, amplitude e distância das fontes',
      roteiro: ['Cuba de ondas com duas fontes', 'Frequência, amplitude e distância ajustáveis', 'Padrão de interferência e som correspondente', 'IA traduz parâmetros em explicações visuais'],
      resumo: 'Duas fontes em uma cuba de ondas mostram interferência; frequência e amplitude também podem ser ouvidas.',
      objetivos: ['Relacionar frequência, comprimento de onda e velocidade', 'Reconhecer interferência construtiva e destrutiva', 'Associar frequência à altura do som'],
      tags: ['2D', 'áudio'],
    }),
    // ---------------- Química ----------------
    S('quimica', 'laboratorio-virtual', 'Laboratório Virtual', 'vidrarias e reações', 'conduzir experimento virtual', 5, null, {
      interacao: 'Goteja a base e escolhe o indicador',
      roteiro: ['Bancada de titulação com bureta e erlenmeyer', 'Gotejamento controlado e indicador que muda de cor', 'Curva de pH desenhada ao vivo', 'IA conduz o procedimento e aponta o ponto de equivalência'],
      resumo: 'Titulação ácido-base em bancada: goteje a base, acompanhe o pH, a cor do indicador e a curva de titulação.',
      objetivos: ['Conhecer vidrarias de titulação', 'Interpretar a curva de pH', 'Identificar o ponto de equivalência'],
      tags: ['2D'],
    }),
    S('quimica', 'atomo-3d', 'Átomo 3D', 'prótons, elétrons, orbitais', 'explicar configuração eletrônica', 5, 'demos/atomo-3d.html', {
      interacao: 'Escolhe um elemento, liga camadas e orbitais',
      resumo: 'Os 36 primeiros elementos: núcleo com prótons e nêutrons, elétrons nas camadas e a distribuição eletrônica por subnível.',
      objetivos: ['Relacionar número atômico e partículas', 'Distribuir elétrons por camadas e subníveis', 'Ligar elétrons de valência à família'],
      tags: ['3D'],
    }),
    S('quimica', 'construtor-molecular', 'Construtor Molecular', 'moléculas 3D', 'montar e analisar moléculas', 5, 'demos/construtor-molecular.html', {
      interacao: 'Escolhe moléculas, gira e mede ligações',
      resumo: 'Moléculas reais (água, etanol, cafeína, glicose…) em bolas e varetas, com fórmula, massa molar e contagem de ligações.',
      objetivos: ['Ler fórmulas moleculares', 'Reconhecer geometria molecular', 'Calcular massa molar'],
      tags: ['3D', 'dados reais'],
    }),
    // ---------------- Matemática ----------------
    S('matematica', 'geometria-espacial', 'Geometria Espacial', 'sólidos 3D', 'gerar problemas dinamicamente', 5, 'demos/geometria-espacial.html', {
      interacao: 'Escolhe o sólido, muda medidas e resolve problemas',
      resumo: 'Prismas, pirâmides, cilindro, cone e esfera com medidas ajustáveis, área e volume ao vivo e problemas gerados na hora.',
      objetivos: ['Reconhecer elementos dos sólidos', 'Calcular área e volume', 'Resolver problemas com valores novos a cada rodada'],
      tags: ['3D'],
    }),
    S('matematica', 'funcoes-visuais', 'Funções Visuais', 'gráficos vivos', 'explicar alteração de parâmetros', 5, null, {
      interacao: 'Troca a família de funções e arrasta os parâmetros',
      roteiro: ['Famílias afim, quadrática, exponencial e senoidal', 'Parâmetros deslizantes com gráfico ao vivo', 'Raízes, vértice e interceptos destacados', 'IA explica o efeito de cada parâmetro'],
      resumo: 'Afim, quadrática, exponencial e senoidal com parâmetros deslizantes — o gráfico e a explicação mudam juntos.',
      objetivos: ['Interpretar o papel de cada parâmetro', 'Encontrar raízes, vértice e interceptos', 'Comparar famílias de funções'],
      tags: ['2D'],
    }),
    S('matematica', 'calculo-visual', 'Cálculo Visual', 'derivadas, integrais, áreas', 'explicar cada transformação', 4, null, {
      interacao: 'Desliza o ponto da tangente e o número de retângulos',
      roteiro: ['Reta tangente que desliza pela curva', 'Somas de Riemann com número de retângulos ajustável', 'Comparação com a integral exata', 'IA comenta cada transformação'],
      resumo: 'Reta tangente que desliza pela curva e somas de Riemann que se aproximam da integral à medida que os retângulos afinam.',
      objetivos: ['Interpretar a derivada como inclinação', 'Ver a integral como limite de somas', 'Relacionar sinal da derivada e crescimento'],
      tags: ['2D'],
    }),
    // ---------------- Geografia ----------------
    S('geografia', 'terra-interativa', 'Terra Interativa', 'globo 3D e camadas', 'responder sobre regiões selecionadas', 5, 'demos/terra-interativa.html', {
      interacao: 'Gira o globo e clica nos países',
      resumo: 'Globo 3D com os países do Natural Earth: clique para ver continente, população e PIB, compare regiões e ligue camadas.',
      objetivos: ['Localizar países e continentes', 'Ler coordenadas geográficas', 'Comparar indicadores entre regiões'],
      tags: ['3D', 'dados reais'],
    }),
    S('geografia', 'clima-simulator', 'Clima Simulator', 'chuva, temperatura, massas de ar', 'simular cenários climáticos', 5, null, {
      interacao: 'Muda estação, umidade e relevo',
      resumo: 'Mapa com massas de ar, frentes e relevo; o aluno muda estação e umidade e vê chuva e temperatura responderem.',
      objetivos: ['Diferenciar tempo e clima', 'Entender massas de ar e frentes', 'Ler climogramas'],
      roteiro: ['Mapa regional com relevo e oceano', 'Massas de ar animadas com temperatura e umidade', 'Climograma gerado ao vivo', 'IA compara o cenário com climas reais'],
      tags: ['2D'],
    }),
    S('geografia', 'relevo-3d', 'Relevo 3D', 'montanhas, placas, vulcões', 'explicar formação geológica', 5, null, {
      interacao: 'Move as placas e acelera o tempo geológico',
      roteiro: ['Bloco de terreno 3D com placas tectônicas', 'Movimento convergente e divergente controlado pelo aluno', 'Erosão ao longo do tempo geológico', 'IA explica a formação de cada relevo'],
      resumo: 'Bloco de terreno 3D: aproxime ou afaste placas tectônicas e veja surgirem cordilheiras, fossas e vulcões, com erosão ao longo do tempo.',
      objetivos: ['Relacionar movimento de placas e relevo', 'Diferenciar limites convergentes e divergentes', 'Entender o papel da erosão'],
      tags: ['3D'],
    }),
    // ---------------- História ----------------
    S('historia', 'maquina-do-tempo', 'Máquina do Tempo', 'ambientes históricos', 'reconstruir acontecimentos', 5, null, {
      interacao: 'Escolhe uma época e explora a cena',
      resumo: 'Cenas históricas navegáveis em que o aluno escolhe um ponto no tempo e explora o ambiente com narração.',
      objetivos: ['Contextualizar acontecimentos', 'Comparar modos de vida em épocas diferentes', 'Trabalhar com fontes históricas'],
      roteiro: ['Seletor de época com cenários 3D', 'Personagens e objetos clicáveis com fontes', 'Narração adaptada à série do aluno', 'Desafio: encontrar anacronismos na cena'],
      tags: ['3D'],
    }),
    S('historia', 'linha-do-tempo', 'Linha do Tempo IA', 'eventos conectados', 'explicar causa e consequência', 4, null, {
      interacao: 'Navega pelos eventos e segue as conexões',
      roteiro: ['Linha do tempo navegável da história do Brasil', 'Eventos ligados por setas de causa e consequência', 'Zoom de séculos a anos', 'IA explica as conexões entre eventos'],
      resumo: 'Linha do tempo navegável da história do Brasil com conexões de causa e consequência entre eventos.',
      objetivos: ['Ordenar eventos cronologicamente', 'Identificar relações de causa e consequência', 'Reconhecer processos de longa duração'],
      tags: ['2D'],
    }),
    S('historia', 'civilizacoes-3d', 'Civilizações 3D', 'Roma, Egito, Grécia etc.', 'guia histórico conversacional', 5, 'demos/civilizacoes-3d.html', {
      interacao: 'Escolhe o monumento e clica nos pontos de interesse',
      resumo: 'Maquetes 3D do Coliseu, da Pirâmide de Quéops e do Partenon com pontos de interesse e guia conversacional.',
      objetivos: ['Comparar arquitetura e função dos monumentos', 'Situar as civilizações no tempo', 'Relacionar construção, poder e sociedade'],
      tags: ['3D'],
    }),
    // ---------------- Português ----------------
    S('portugues', 'anatomia-do-texto', 'Anatomia do Texto', 'estrutura visual de frases/textos', 'analisar escrita', 4, null, {
      interacao: 'Cola um texto e lê o raio-x da estrutura',
      resumo: 'O aluno cola um texto e vê parágrafos, tópicos frasais, conectivos e repetições destacados como um raio-x.',
      objetivos: ['Reconhecer a estrutura do texto dissertativo', 'Usar conectivos com intenção', 'Revisar repetições e coesão'],
      roteiro: ['Área de texto com análise ao vivo', 'Mapa de parágrafos e ideia central', 'Painel de conectivos por função', 'IA sugere reescritas e explica o porquê'],
      tags: ['2D'],
    }),
    S('portugues', 'literatura-imersiva', 'Literatura Imersiva', 'cenário, personagens, relações', 'explicar obra e contexto', 5, null, {
      interacao: 'Navega pelos capítulos e personagens',
      resumo: 'Obra literária como mapa de personagens e cenários, com linha narrativa e contexto histórico.',
      objetivos: ['Mapear personagens e suas relações', 'Relacionar obra e contexto de produção', 'Interpretar o foco narrativo'],
      roteiro: ['Grafo de personagens por capítulo', 'Cenários ilustrados com trechos da obra', 'Linha do enredo com pontos de virada', 'IA responde como guia de leitura'],
      tags: ['2D'],
    }),
    S('portugues', 'gramatica-visual', 'Gramática Visual', 'palavras conectadas', 'analisar sintaxe dinamicamente', 4, null, {
      interacao: 'Escolhe ou digita frases e destaca funções',
      roteiro: ['Frases decompostas em sujeito e predicado', 'Classes de palavras coloridas e ligações sintáticas', 'Modo desafio: o aluno marca as funções', 'IA analisa frases digitadas e explica'],
      resumo: 'Frases decompostas em sujeito, predicado e complementos, com classes de palavras coloridas e ligações sintáticas.',
      objetivos: ['Identificar sujeito e predicado', 'Reconhecer complementos e adjuntos', 'Classificar palavras pela função'],
      tags: ['2D'],
    }),
    // ---------------- Idiomas ----------------
    S('idiomas', 'conversacao-ia', 'Conversação IA', 'avatar/personagem', 'diálogo adaptativo', 5, null, {
      interacao: 'Conversa por voz ou texto com o personagem',
      resumo: 'Personagem que conversa em inglês ajustando vocabulário e velocidade ao nível do aluno.',
      objetivos: ['Praticar compreensão e produção oral', 'Ampliar vocabulário em contexto', 'Receber correção gentil'],
      roteiro: ['Avatar com situações (restaurante, aeroporto, escola)', 'Reconhecimento de voz e síntese de fala', 'Nível ajustado automaticamente', 'Relatório de palavras novas'],
      tags: ['áudio'],
    }),
    S('idiomas', 'mundo-interativo', 'Mundo Interativo', 'objetos e ambientes clicáveis', 'ensinar vocabulário contextual', 5, 'demos/mundo-interativo.html', {
      interacao: 'Clica nos objetos, ouve as palavras e joga',
      resumo: 'Uma pequena cidade 3D com modelos livres: clique nos objetos para ouvir a palavra em inglês e jogue o modo "Find the…".',
      objetivos: ['Associar palavra, som e objeto', 'Usar frases simples em contexto', 'Memorizar com jogo de busca'],
      tags: ['3D', 'modelos livres', 'áudio'],
    }),
    // ---------------- Artes ----------------
    S('artes', 'museu-virtual', 'Museu Virtual', 'obras e movimentos', 'crítico/guia de arte IA', 5, null, {
      interacao: 'Caminha pelas salas e abre as obras',
      resumo: 'Galeria navegável organizada por movimentos artísticos, com obras de domínio público e guia crítico.',
      objetivos: ['Reconhecer características de movimentos', 'Ler uma obra (cor, forma, tema)', 'Relacionar arte e contexto'],
      roteiro: ['Salas por movimento com obras em domínio público', 'Ficha da obra com leitura guiada', 'Comparador lado a lado', 'IA faz perguntas de apreciação'],
      tags: ['3D'],
    }),
    S('artes', 'estudio-criativo', 'Estúdio Criativo', 'composição, cor, perspectiva', 'orientar processo artístico', 5, null, {
      interacao: 'Gira a roda de cores e ajusta a composição',
      roteiro: ['Roda de cores com harmonias', 'Composição com regra dos terços e ponto de fuga', 'Paletas aplicadas a uma cena', 'IA orienta escolhas de cor e composição'],
      resumo: 'Roda de cores com harmonias (complementar, análoga, tríade) aplicadas a uma composição com regra dos terços e perspectiva.',
      objetivos: ['Construir harmonias cromáticas', 'Equilibrar uma composição', 'Experimentar ponto de fuga'],
      tags: ['2D'],
    }),
    // ---------------- Música ----------------
    S('musica', 'musica-visual', 'Música Visual', 'ondas, notas, acordes', 'reconhecer e explicar música', 5, null, {
      interacao: 'Toca o teclado e monta acordes',
      roteiro: ['Teclado sintetizado no navegador', 'Acordes montados por intervalos', 'Partitura e osciloscópio ao vivo', 'IA reconhece acordes e explica'],
      resumo: 'Teclado que soa no navegador, acordes montados por intervalos, partitura e osciloscópio com a forma de onda.',
      objetivos: ['Relacionar nota, frequência e oitava', 'Montar acordes maiores e menores', 'Ver o timbre na forma de onda'],
      tags: ['2D', 'áudio'],
    }),
    // ---------------- Filosofia ----------------
    S('filosofia', 'debate-ia', 'Debate IA', 'mapa de argumentos', 'assumir posições filosóficas', 4, null, {
      interacao: 'Escolhe a questão e expande razões e objeções',
      roteiro: ['Mapa de argumentos para questões clássicas', 'Tese, razões, objeções e réplicas expansíveis', 'Posições de diferentes escolas filosóficas', 'IA assume uma posição e debate com o aluno'],
      resumo: 'Mapa de argumentos para questões clássicas: tese, razões, objeções e réplicas de diferentes escolas filosóficas.',
      objetivos: ['Distinguir tese, premissa e conclusão', 'Formular objeções', 'Reconhecer posições filosóficas'],
      tags: ['2D'],
    }),
    // ---------------- Sociologia ----------------
    S('sociologia', 'sociedade-simulator', 'Sociedade Simulator', 'grupos e relações sociais', 'gerar cenários e debates', 4, null, {
      interacao: 'Ajusta tolerância e densidade e roda o modelo',
      roteiro: ['Modelo de Schelling em grade', 'Tolerância e densidade ajustáveis', 'Índice de segregação ao longo do tempo', 'IA gera cenários e perguntas para debate'],
      resumo: 'Modelo de Schelling: preferências individuais modestas geram segregação coletiva — ajuste a tolerância e veja.',
      objetivos: ['Entender fenômenos emergentes', 'Relacionar escolhas individuais e estrutura social', 'Debater políticas a partir de modelos'],
      tags: ['2D'],
    }),
    // ---------------- Astronomia ----------------
    S('astronomia', 'universo-3d', 'Universo 3D', 'planetas, estrelas, órbitas', 'guia astronômico', 5, 'demos/universo-3d.html', {
      interacao: 'Acelera o tempo e clica nos planetas',
      resumo: 'Sistema Solar 3D com períodos orbitais proporcionais, fichas dos planetas e controle de tempo.',
      objetivos: ['Ordenar os planetas', 'Comparar períodos e distâncias', 'Diferenciar planetas rochosos e gasosos'],
      tags: ['3D'],
    }),
    // ---------------- Programação ----------------
    S('programacao', 'codigo-visual', 'Código Visual', 'execução, memória, objetos', 'tutor de programação', 5, null, {
      interacao: 'Executa o programa passo a passo',
      roteiro: ['Programas curtos executados linha a linha', 'Variáveis, pilha de chamadas e saída visíveis', 'Laços e condicionais destacados', 'IA atua como tutor de programação'],
      resumo: 'Programas curtos executados linha a linha com variáveis, pilha de chamadas e saída visíveis.',
      objetivos: ['Rastrear o valor das variáveis', 'Entender laços e condicionais', 'Ler a pilha de chamadas'],
      tags: ['2D'],
    }),
    // ---------------- Robótica ----------------
    S('robotica', 'robo-virtual', 'Robô Virtual', 'sensores e motores', 'gerar/explicar comandos', 5, 'demos/robo-virtual.html', {
      interacao: 'Monta a sequência de blocos e executa',
      resumo: 'Robô 3D (modelo livre) num tabuleiro: monte um programa com blocos, use o sensor de obstáculo e chegue à bandeira.',
      objetivos: ['Sequenciar comandos', 'Usar sensores em condicionais', 'Depurar um programa'],
      tags: ['3D', 'modelos livres'],
    }),
    // ---------------- Economia ----------------
    S('economia', 'economia-simulator', 'Economia Simulator', 'inflação, mercado, oferta/demanda', 'simular cenários', 4, null, {
      interacao: 'Aplica choques de oferta e demanda',
      roteiro: ['Curvas de oferta e demanda deslocáveis', 'Choques de renda, custo e safra', 'Simulador de inflação acumulada', 'IA explica cada cenário'],
      resumo: 'Curvas de oferta e demanda que se deslocam com choques (renda, custos, safra) e simulador de inflação.',
      objetivos: ['Encontrar o equilíbrio de mercado', 'Diferenciar deslocamento da curva e movimento ao longo dela', 'Entender a inflação acumulada'],
      tags: ['2D'],
    }),
    // ---------------- Educação Financeira ----------------
    S('financeira', 'vida-financeira', 'Vida Financeira', 'orçamento e decisões', 'aconselhamento educacional', 4, null, {
      interacao: 'Distribui a renda e simula investimentos',
      roteiro: ['Orçamento mensal com a regra 50-30-20', 'Metas de poupança com prazo', 'Juros compostos a favor e contra', 'IA dá conselhos educativos sobre as escolhas'],
      resumo: 'Orçamento mensal com a regra 50-30-20, metas e simulador de juros compostos para guardar ou dever.',
      objetivos: ['Planejar um orçamento', 'Comparar juros compostos a favor e contra', 'Tomar decisões com metas'],
      tags: ['2D'],
    }),
  ];

  const areaPorId = Object.fromEntries(AREAS.map((a) => [a.id, a]));
  const sistemaPorId = Object.fromEntries(SISTEMAS.map((s) => [s.id, s]));
  window.SQUEMA_DADOS = {
    AREAS, SISTEMAS, areaPorId, sistemaPorId,
    sistemasDaArea: (id) => SISTEMAS.filter((s) => s.area === id),
  };
})();
