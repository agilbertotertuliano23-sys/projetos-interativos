# SQUEMA — esquemas e demonstrações de sistemas educacionais com IA

Envoltório (página inicial) com o arcabouço de início, esquemas por área, biblioteca de
materiais e demonstrações interativas para os **35 sistemas em 17 áreas** do
[mapa original](docs/mapa_sistemas_educacionais_IA.md). Tudo segue a identidade SQUEMA:
logotipo, mascote e ícones recortados das artes enviadas, e modelos 3D gratuitos
recoloridos para a paleta da marca.

## Como abrir

Abra **`index.html`** no Chrome, Edge ou Firefox. Funciona direto do disco (sem servidor,
sem instalação) e também em qualquer hospedagem estática, como o GitHub Pages. Com
internet, as fontes Baloo 2 e Nunito são carregadas do Google Fonts; sem internet, as
páginas usam fontes do sistema.

| Página | O que tem |
| --- | --- |
| `index.html` | Início: apresentação, **Comece por aqui** (o arcabouço de cada caso), áreas, destaques 3D, onde ficam os materiais e o mapa completo com busca |
| `area.html?a=<área>` | Esquema radial da área e, para cada sistema, o fluxo *aluno → visualização → papel da IA → aprendizagem*, objetivos, etapas e link da demo |
| `biblioteca.html` | Repositório: demonstrações com filtros, todos os esquemas, visualizador dos modelos 3D (com download do .glb recolorido), marca, ícones, paleta, dados e créditos |
| `demos/*.html` | As demonstrações interativas |

## Demonstrações (35 de 35)

Todos os sistemas do mapa têm demonstração interativa. Cada página traz, no fim, o esquema
do caso (aluno → visualização → papel da IA → aprendizagem), objetivos e sugestões para a sala.

| Área | Demo | Destaques |
| --- | --- | --- |
| Biologia | Corpo Humano IA | Atlas 3D em 7 camadas, órgãos clicáveis com ficha, simulação de exercício, calor e desidratação, perguntas de checagem |
| Biologia | Laboratório Celular | Célula animal com organelas clicáveis e corte, mitose animada em 6 fases e DNA com transcrição |
| Biologia | Genética Lab | Punnett mono e di-híbrido, dominância incompleta e ABO, sorteio com χ² e heredograma |
| Biologia | Ecossistema Vivo | Ilha 3D com plantas, coelhos e raposas; chuva, temperatura e desmatamento; gráfico das populações |
| Física | Laboratório de Mecânica | Lançamento oblíquo com previsão do aluno e vetores; colisões com momento e restituição |
| Física | Eletricidade Lab | Série, paralelo e misto; chaves, fusível, curto-circuito, lâmpadas que queimam e diagnóstico |
| Física | Óptica Lab | Lentes e espelhos com os três raios principais, equação de Gauss e experimentos gerados |
| Física | Ondas | Cuba com duas fontes, linhas nodais, detector arrastável e som que some na interferência destrutiva |
| Química | Laboratório Virtual | Titulação com bureta, 4 indicadores, curva de pH por balanço de cargas e amostra desconhecida |
| Química | Átomo 3D | 36 elementos, núcleo, camadas, orbitais s/p, íons e as exceções Cr e Cu |
| Química | Construtor Molecular | 17 estruturas reais (PDB), três representações, medidas e bancada de montagem |
| Matemática | Geometria Espacial | 6 sólidos, área/volume/Euler ao vivo, planificação animada e problemas gerados |
| Matemática | Funções Visuais | 4 famílias com parâmetros, “fantasma” da curva anterior, raízes/vértice e desafio dos pontos |
| Matemática | Cálculo Visual | Tangente e secante (limite), gráfico de f′ desenhado pelo aluno e somas de Riemann |
| Geografia | Terra Interativa | Globo 3D com os 177 países do Natural Earth, camadas, grade e busca |
| Geografia | Clima Simulator | Perfil oceano–serra–interior, chuva orográfica, frente fria e climograma comparado a cidades reais |
| Geografia | Relevo 3D | Quatro limites de placas, tempo geológico, erosão, vulcões, fossa, rifte e falha |
| História | Máquina do Tempo | Quatro épocas em 3D, fontes históricas, narração por nível e caça aos anacronismos |
| História | Linha do Tempo IA | História do Brasil com zoom, causas e consequências e quiz “qual veio primeiro?” |
| História | Civilizações 3D | Pirâmide de Quéops, Partenon e Coliseu com pontos de interesse e linha do tempo |
| Português | Anatomia do Texto | Raio-x de parágrafos, tópicos frasais, conectivos, repetições e proposta de intervenção |
| Português | Literatura Imersiva | Dom Casmurro e Iracema: grafo de personagens por ponto do enredo, trechos e contexto |
| Português | Gramática Visual | Classes de palavras, termos da oração, ligações sintáticas, desafio e análise de frases digitadas |
| Idiomas | Conversação IA | Robô 3D em 3 situações, voz (síntese e reconhecimento), correções e nível adaptativo |
| Idiomas | Mundo Interativo | Cidade 3D de modelos livres com palavras em inglês e jogos de escuta |
| Artes | Museu Virtual | Galeria 3D com releituras digitais de 8 obras em domínio público, leitura guiada e comparador |
| Artes | Estúdio Criativo | Roda de cores com 6 harmonias aplicadas a uma cena, regra dos terços e ponto de fuga |
| Música | Música Visual | Teclado sintetizado, timbres, osciloscópio, partitura e reconhecimento de acordes |
| Filosofia | Debate IA | Mapas de argumentos de 4 questões clássicas, debate com o guia e detector de falácias |
| Sociologia | Sociedade Simulator | Modelo de Schelling com cenários, índice de segregação e perguntas para debate |
| Astronomia | Universo 3D | Sistema Solar com dados da NASA, escalas, tempo acelerado e 3ª lei de Kepler |
| Programação | Código Visual | Mini-interpretador de Python passo a passo: variáveis, listas, pilha de chamadas e saída |
| Robótica | Robô Virtual | Robô 3D num tabuleiro, programação em blocos com repetição e sensor |
| Economia | Economia Simulator | Oferta e demanda com choques, tabelamento, excedentes e inflação acumulada (IPCA real) |
| Educação Financeira | Vida Financeira | Orçamento 50-30-20, metas com prazo e juros compostos a favor e contra |

Para criar uma nova demo, copie uma parecida, troque o `id` em `SQ.demo('<id>', …)` e aponte
`demo: 'demos/<id>.html'` no catálogo. Demos 2D usam `SQ.canvas2d` e, para gráficos,
`SQ.vista` + `SQ.d.eixos` (escala, grade, zoom e curvas); demos 3D usam `S3D.cena`.
O passo a passo completo está em [`docs/planos/GUIA_CONSTRUCAO.md`](docs/planos/GUIA_CONSTRUCAO.md),
e `ferramentas/verificar-demo.cjs` testa uma demo no desktop e no celular.

## Próximos sistemas (planejados)

Mais **35 sistemas** — 5 novos para cada área fundamental (Matemática, Português, Física,
Química, Biologia, História e Geografia) — estão planejados em
[`docs/planos/`](docs/planos/README.md): pesquisa de currículo (BNCC/ENEM) e de mecânicas
interativas por área, e um plano por sistema — especificação completa (ficha, modelo, dados,
desafios, roteiro do guia, checklist) em Matemática e Física, e a proposta selecionada da
pesquisa nas demais áreas. As demonstrações ainda não foram construídas.

## O guia (mascote) e a IA

Cada demo tem o **Guia Squema**: ele narra o que muda na cena e responde perguntas. Nesta
versão as respostas são **roteirizadas** — cada demo traz suas perguntas e respostas, e
algumas respostas são calculadas a partir do estado da cena (por exemplo, o teste de
Kepler do planeta selecionado ou o caminho sugerido para o robô).

### Guia com IA

Para ligar um serviço de IA, defina antes de `js/squema.js`:

```html
<script>
  window.SQUEMA_CONFIG = { ia: { endpoint: 'https://seu-servidor/squema-guia' } };
</script>
```

O guia passa a enviar `POST {caso, pergunta, contexto}` — `contexto` é o estado da cena que
cada demo expõe em `guia.contexto()` — e espera `{ "resposta": "…" }`. A chave da API deve
ficar **no servidor**, nunca na página. Se o serviço falhar, o guia volta ao roteiro local.

## Estrutura

```
squema/
├─ index.html · area.html · biblioteca.html
├─ demos/                 35 demonstrações (uma página por caso)
├─ js/catalogo.js         áreas e sistemas: resumo, objetivos, interação, etapas
├─ js/squema.js           moldura, controles, guia, canvas 2D e gráficos (vista/eixos)
├─ js/squema3d.js         cena 3D, materiais, contorno, modelos embutidos
├─ css/squema.css         sistema visual (tokens, blocos, botões, fluxos)
├─ assets/marca/          logotipos, mascote e avatar (recortes das artes)
├─ assets/icones/         24 ícones recortados + 2 desenhados no mesmo estilo
├─ assets/modelos/        25 modelos 3D livres, GLB em base64 (um .js cada) + catalogo.js
├─ assets/dados/          mundo.js (Natural Earth) e moleculas.js
├─ assets/capturas/       miniaturas das demos
├─ vendor/                three.js r180 + addons empacotados (MIT)
├─ docs/                  mapa original dos sistemas e planos dos próximos (docs/planos/)
└─ ferramentas/           scripts que geram vendor/ e assets/ e o verificador de demos (não são necessários para usar)
```

## Modelos 3D livres e recoloração

Os modelos vieram de repositórios abertos no GitHub:

- **Kenney** — *Starter Kit City Builder*, *3D Platformer* e *Racing* (CC0): casas, prédio,
  garagem, ruas, árvores, fonte, nuvem, bandeira, moeda, personagem, caminhão, moto, barracas.
- **RobotExpressive** — Tomás Laulhé/Quaternius, via exemplos do three.js (CC0).
- **Fox** — Khronos glTF Sample Assets: modelo de PixelMannen (CC0); rig e animação de
  tomkranis e conversão de @AsoboStudio e @scurest (CC BY 4.0, atribuição obrigatória).
- **Flower** — Kenney Nature Pack, via exemplos do three.js (CC0).

`ferramentas/preparar-modelos.mjs` baixa cada modelo, leva as cores para a paleta SQUEMA
(os Kenney usam uma textura-paleta; recolorir essa paleta muda o kit inteiro), otimiza
(dedup, weld, quantização) e grava o GLB em base64. Em tempo de execução,
`js/squema3d.js` aplica o acabamento da marca: material brilhante e **contorno azul-tinta**,
como nos ícones.

Para regenerar tudo (requer Node 18+ e acesso ao GitHub):

```bash
cd ferramentas
npm install
npm run tudo        # three + modelos + dados
```

## Dados e créditos

- Países: Natural Earth 1:110m (domínio público).
- Moléculas: arquivos PDB dos exemplos do three.js (gerados pelo NCI/CADD).
- Planetas: NASA Planetary Fact Sheet; luas conhecidas segundo a NASA (2024).
- Inflação: IPCA anual 2015–2024 (IBGE). Clima: normais climatológicas 1991–2020 (INMET), arredondadas.
- Literatura: *Dom Casmurro* (Machado de Assis) e *Iracema* (José de Alencar), domínio público.
- Artes: as pinturas do Museu Virtual são releituras desenhadas por código, inspiradas em obras em
  domínio público (Hokusai, Monet, Seurat, Van Gogh, Klimt, Malevich, Kandinsky, Mondrian).
- three.js: MIT. Fontes Baloo 2 e Nunito: SIL OFL 1.1. Som e voz: Web Audio e Web Speech do navegador.

A lista completa, com links, está em `biblioteca.html#creditos`.
