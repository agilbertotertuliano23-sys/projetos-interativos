# Mapas que Mentem

> **Área:** Geografia · **id:** `mapas-que-mentem` · **Tipo sugerido:** misto
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/mapas-que-mentem.html`

## Propostas de pesquisa que formam este sistema

### Mapa Elástico — olhar currículo (BNCC/ENEM)

- **Tópico:** Cartografia: projeções cartográficas, distorções e anamorfoses
- **BNCC:** EF09GE15, EF09GE14, EF08GE19, EF07GE09, EM13CHS106, EM13CHS206
- **Público:** 9º ano do EF e Ensino Médio (projeções e anamorfoses aparecem com frequência no ENEM); o modo 1 também serve como introdução no 6º ano.
- **Tipo:** 2D

**Ideia.** O mesmo mundo (os polígonos Natural Earth já embutidos) é redesenhado ao vivo em seis projeções: Mercator, Gall-Peters, Equirretangular, Mollweide, Robinson e Azimutal equidistante. A troca entre elas é animada, interpolando ponto a ponto. MODO 1 'Tamanho real': o aluno agarra um país (Groenlândia, Brasil, Rússia, R. D. Congo) e o arrasta pelo mapa. O polígono é girado sobre a esfera e reprojetado a cada quadro, então a Groenlândia levada ao Equador encolhe até caber cerca de 14 vezes dentro da África. A leitura mostra a área real (km²) ao lado da área aparente. Uma rede de círculos de Tissot (círculos iguais de 500 km na superfície) mostra onde cada projeção estica: na Mercator eles incham para os polos (conforme: preserva forma e distorce área), na Peters viram elipses de mesma área (equivalente) e na Robinson ficam no meio-termo (afilática). MODO 2 'Rotas': o aluno clica em duas cidades (São Paulo–Tóquio, Lisboa–Rio). Aparece a linha reta da Mercator (loxodromia, o rumo constante dos navegadores) e, contra ela, o caminho mais curto real (ortodromia, círculo máximo), que sai curvo. Na azimutal centrada na cidade de origem esse caminho vira reta, e por isso a aviação e a bandeira da ONU usam essa projeção. MODO 3 'Anamorfose': o mapa 'derrete' da área real para uma área proporcional à população ou ao PIB (cartograma não contíguo de Olson, com cada país reescalado em torno do centróide; opção de círculos de Dorling). Índia e China incham, Canadá, Rússia e Austrália murcham e a África encolhe no PIB. Dois botões extras, 'Centralizar no Pacífico' e 'Sul para cima' (mapa invertido), abrem a discussão sobre eurocentrismo e sobre 'em cima' ser só uma convenção. SACADA: com o arrasto o aluno descobre sozinho que a distorção pertence à posição no mapa, não ao país. Perguntas do guia: 'Por que a Groenlândia parece maior que o Brasil?', 'Qual projeção serve para navegar? E para comparar áreas?', 'O que é anamorfose?', 'Existe mapa plano sem distorção?'.

**Por que é visual.** No livro as projeções são três figuras estáticas e a distorção fica abstrata. Arrastar o mesmo país entre latitudes e ver os círculos de Tissot se deformarem torna 'conforme × equivalente' algo que o aluno enxerga e mede. A transição animada mostra que todos os mapas vêm do mesmo globo.

**Riscos.** Pode se sobrepor à Terra Interativa (globo e coroplético de população e renda). Para evitar isso, o foco fica na distorção e no cartograma, sem colorir países por dado. Riscos técnicos: (1) polígonos que cruzam ±180° na reprojeção e na rotação do país arrastado precisam de corte de anéis; (2) a Mercator deve ser limitada a ±85°; (3) a Robinson exige uma tabela de 19 linhas, que é embutível; (4) a azimutal precisa tratar a borda da antípoda. O cartograma contíguo real (Gastner-Newman) é pesado. A saída é usar Olson/Dorling e avisar que livros e ENEM costumam mostrar o contíguo (Worldmapper). Os dados de população e PIB do Natural Earth são de 2019.

### Mapas que Mentem — olhar mecânica engenhosa

- **Tópico:** Projeções cartográficas e distorções: área, forma, distância e rumo; mapas conformes e equivalentes; rota mais curta (ortodromia) e rumo constante (loxodromia)
- **BNCC:** EF09GE15, EF09GE14, EM13CHS106, EM13CHS206
- **Público:** 9º ano do EF e 1ª série do EM. O modo Tamanho Real funciona desde o 6º ano.
- **Tipo:** misto

**Ideia.** Três modos com os polígonos do Natural Earth. (1) TAMANHO REAL: antes de tocar no mapa, o aluno aposta num slider: 'quantas Groenlândias cabem na África?' (quase todos chutam 1 ou 2). Em seguida arrasta a Groenlândia, ou qualquer país, sobre um mapa-múndi em Mercator. A forma é reprojetada ao vivo: o país é girado sobre a esfera e projetado de novo, então encolhe ao descer para o Equador e incha ao subir. Levado à Europa, o Brasil cobre a União Europeia com sobra; a Rússia no Equador vira um país comum. Resposta da aposta: cerca de 14. (2) DESCASQUE O GLOBO: globo 3D carimbado com círculos iguais (indicatriz de Tissot). O aluno escolhe a superfície (cilindro, cone ou plano) e assiste a um tween de vértices que desenrola e achata o globo até virar o mapa. Os círculos viram elipses gigantes perto dos polos (Mercator), achatam mas mantêm a área (Equal Earth/Gall-Peters), ou só a distância ao centro fica certa (azimutal equidistante, a do emblema da ONU). Um medidor mostra o que cada mapa preserva (ângulo, área, distância) e que nenhum mapa plano preserva tudo. (3) ROTA DO AVIÃO: no Mercator, o aluno traça com o dedo a rota que acha mais curta entre dois aeroportos (São Paulo–Dubai, Nova York–Tóquio). O modelo desenha a ortodromia, que aparece curva, com os km de cada traçado; no globo ao lado, a curva vira o caminho reto e a reta do aluno vira uma volta. Desafio: chegar a menos de 2% da rota mais curta. Aha: a reta do mapa não é o caminho mais curto, e a Groenlândia nunca foi enorme.

**Por que é visual.** Uma projeção é uma transformação geométrica e só faz sentido quando se vê a forma mudar com a latitude. A indicatriz de Tissot transforma 'distorção', uma ideia abstrata, em elipses que dá para comparar a olho, e arrastar o país dá ao aluno uma prova física do erro.

**Riscos.** Reprojetar polígonos em tempo real exige girar o país na esfera (não basta escalar no plano), mas a escala 1:110m aguenta. O Mercator precisa de corte em ±85°. O morph globo→plano no three.js pede uma malha com UV e cuidado na costura e nos polos. Usa os mesmos polígonos da Terra Interativa; o foco aqui é a distorção, não os dados dos países, e isso deve ficar claro na ficha.
