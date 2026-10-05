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
| `area.html?a=<área>` | Esquema radial da área e, para cada sistema, o fluxo *aluno → visualização → papel da IA → aprendizagem*, objetivos e demo ou roteiro |
| `biblioteca.html` | Repositório: demonstrações com filtros, todos os esquemas, visualizador dos modelos 3D (com download do .glb recolorido), marca, ícones, paleta, dados e créditos |
| `demos/*.html` | As demonstrações interativas |

## Demonstrações prontas (10)

| Área | Demo | Destaques |
| --- | --- | --- |
| Astronomia | Universo 3D | Sistema Solar com dados da NASA, escala didática × proporcional, tempo acelerado, teste da 3ª lei de Kepler |
| Geografia | Terra Interativa | Globo 3D com os 177 países do Natural Earth (nome em português, população, PIB, renda), camadas, grade e busca |
| Robótica | Robô Virtual | Robô 3D livre (CC0) num tabuleiro; programação em blocos com repetição e sensor; o guia gera o programa por busca em largura |
| Química | Átomo 3D | 36 elementos, núcleo, camadas, orbitais s/p, íons (com a regra 4s antes de 3d) e as exceções Cr e Cu |
| Química | Construtor Molecular | 17 estruturas reais (PDB), três representações, medida de distâncias e ângulos, bancada de montagem por fórmula |
| Biologia | Laboratório Celular | Célula animal com organelas clicáveis e corte, mitose animada em 6 fases e DNA com transcrição |
| Biologia | Ecossistema Vivo | Ilha 3D de modelos Kenney com plantas, coelhos e raposas; chuva, temperatura e desmatamento; gráfico das populações |
| Matemática | Geometria Espacial | 6 sólidos, área/volume/Euler ao vivo, planificação animada e problemas gerados com correção |
| Idiomas | Mundo Interativo | Cidade 3D de modelos livres: clique para ouvir a palavra em inglês; jogos *Find the…* e *Listen & find* |
| História | Civilizações 3D | Pirâmide de Quéops, Partenon e Coliseu com pontos de interesse, linha do tempo e guia histórico |

Os outros **25 sistemas** já têm esquema completo e um **roteiro** da demonstração (veja a
página de cada área). Para construir um deles, copie uma demo parecida, troque o `id` em
`SQ.demo('<id>', …)` e aponte `demo: 'demos/<id>.html'` no catálogo.

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
├─ demos/                 demonstrações (uma página por caso)
├─ js/catalogo.js         áreas e sistemas: resumo, objetivos, interação, roteiro
├─ js/squema.js           moldura, controles, guia, utilidades 2D
├─ js/squema3d.js         cena 3D, materiais, contorno, modelos embutidos
├─ css/squema.css         sistema visual (tokens, blocos, botões, fluxos)
├─ assets/marca/          logotipos, mascote e avatar (recortes das artes)
├─ assets/icones/         24 ícones recortados + 2 desenhados no mesmo estilo
├─ assets/modelos/        25 modelos 3D livres, GLB em base64 (um .js cada) + catalogo.js
├─ assets/dados/          mundo.js (Natural Earth) e moleculas.js
├─ assets/capturas/       miniaturas das demos
├─ vendor/                three.js r180 + addons empacotados (MIT)
├─ docs/                  mapa original dos sistemas
└─ ferramentas/           scripts que geram vendor/ e assets/ (não são necessários para usar)
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
- three.js: MIT. Fontes Baloo 2 e Nunito: SIL OFL 1.1.

A lista completa, com links, está em `biblioteca.html#creditos`.
