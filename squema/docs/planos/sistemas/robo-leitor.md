# O Robô que Lê pela Regra

> **Área:** Português · **id:** `robo-leitor` · **Tipo sugerido:** misto
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/robo-leitor.html`

## Propostas de pesquisa que formam este sistema

### O Robô que Lê pela Regra — olhar mecânica engenhosa

- **Tópico:** Sílaba tônica, classificação em oxítona, paroxítona e proparoxítona e acentuação gráfica, incluindo hiatos e acentos diferenciais do Acordo Ortográfico de 1990.
- **BNCC:** EF67LP32
- **Público:** 6º–7º ano do EF, com revisão no 8º–9º ano e preparação para o ENEM
- **Tipo:** misto

**Ideia.** Um robô (modelo 3D livre) lê palavras seguindo APENAS uma regra-padrão embutida. Se a palavra termina em a, e, o (com ou sem s), am, em ou ens, ele força a penúltima sílaba. Se termina em qualquer outra coisa (i, u, l, r, z, x, n, ditongo…), força a última. Se há acento gráfico, ele obedece ao acento. A sílaba que ele força pula na tela e um ritmo sintetizado toca o padrão (ta-TA-ta). Modo "Conserte o robô": o aluno recebe palavras sem acento (cafe, arvore, lapis, saude, pais, onibus, armazem, util, juiz, caju) e vê e ouve o robô ler. Quando o robô erra (lê "LA-pis" certo, mas "ca-FE"? lê "CA-fe"), o aluno toca a sílaba certa e põe o acento. E percebe que onde o robô já acerta (ju-IZ, ca-JU, CA-sa) o acento é desnecessário. Modo "Descubra a lei": as palavras corrigidas caem numa grade de terminação × posição da tônica. As células que precisam de acento vão se acendendo e forma-se um padrão complementar: as oxítonas acentuadas têm exatamente as terminações em que o padrão seria paroxítona, e vice-versa. A coluna das proparoxítonas fica toda acesa porque a regra-padrão nunca chega à antepenúltima. Modo "Trios e pares": sabia/sabiá/sábia, secretaria/secretária, baba/babá, maio/maiô, pais/país, saia/saía, cada uma com uma mini-ilustração do sentido (o pássaro sabiá, a mulher sábia, "eu sabia"). Os casos do Acordo (ideia e heroico sem acento, pôde × pode, têm × tem) entram como "regras extras" que o aluno instala no robô. O aha: o acento gráfico não é enfeite nem lista para decorar. É uma instrução ao leitor que só aparece onde a regra-padrão falharia, e quase todas as regras de acentuação saem de uma única ideia.

**Por que é visual.** A acentuação é ensinada como um punhado de regras desconexas. Um leitor mecânico que erra de forma previsível torna visível a lógica por trás delas, e a grade que se acende revela a simetria entre oxítonas e paroxítonas. O aluno passa de quem decora a regra a quem a programa.

**Riscos.** A separação silábica automática é difícil (ditongo × hiato): usar um léxico embutido de cerca de 200 palavras com sílabas e tônica conferidas e avisar quando uma palavra digitada não estiver nele. Hiato de i/u tônico, ditongos abertos, monossílabos tônicos e ter/vir pedem camadas extras ligadas aos poucos para não confundir no início. A Web Speech pronuncia a palavra real, então a "leitura errada" do robô tem de ser feita por sílabas sintetizadas (tônica mais forte e aguda) e destaque visual, não pela voz.
