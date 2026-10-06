# Pirâmide Viva

> **Área:** Geografia · **id:** `piramide-viva` · **Tipo sugerido:** 2D
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/piramide-viva.html`

## Propostas de pesquisa que formam este sistema

### Pirâmide Viva — olhar currículo (BNCC/ENEM)

- **Tópico:** População: pirâmide etária, transição demográfica, crescimento vegetativo e bônus demográfico
- **BNCC:** EF08GE03, EF07GE04, EF07GE10, EF08GE01, EM13CHS201, EM13CHS606
- **Público:** 7º ano (distribuição por sexo e idade), 8º ano (dinâmica demográfica) e Ensino Médio (transição demográfica e bônus demográfico são frequentes no ENEM).
- **Tipo:** 2D

**Ideia.** Pirâmide etária do Brasil (faixas de 5 anos, homens × mulheres) animada de 1950 a 2100, com dados embutidos da ONU (World Population Prospects 2024) e do IBGE. Ao apertar ▶, as barras sobem uma faixa a cada 5 anos. O 'calombo' das gerações numerosas dos anos 1970–90 escala a pirâmide como uma onda, até ela virar um barril e depois uma urna. SACADA 1 'Siga uma geração': o aluno clica na barra de quem nasceu, por exemplo, em 2010–14. Ela fica destacada enquanto sobe (adulta em 2040, idosa em 2080), e um contador mostra quantos ainda estão vivos. Abaixo fica o gráfico clássico da transição demográfica: taxas de natalidade e mortalidade, a área do crescimento vegetativo entre elas e as 4 fases rotuladas. Uma fileira de bonequinhos mostra a razão de dependência (quantos dependentes para cada 10 pessoas em idade ativa), e a janela do bônus demográfico acende no período em que ela é mínima. MODO 2 'Simulador de país': sliders de fecundidade (0,8 a 7 filhos por mulher), expectativa de vida, mortalidade infantil e saldo migratório projetam 100 anos de um país hipotético (modelo de coortes simplificado). SACADA 2: derrubar a fecundidade para 1,5 não para a população na hora. Ela ainda cresce por décadas (inércia demográfica), algo que só a pirâmide revela. MODO 3 'Que país é este?': pirâmides sem rótulo de Níger, Índia, Brasil, Japão, Coreia do Sul e Alemanha. O aluno associa cada formato à fase da transição, e o guia explica fecundidade, envelhecimento e previdência. Perguntas do guia: 'Por que a base encolhe e o topo engorda?', 'O que é bônus demográfico e quando ele acaba no Brasil?', 'A população do Brasil vai diminuir?' (pico por volta de 2041–42 nas projeções do IBGE e da ONU), 'Qual a ligação entre a pirâmide e o gráfico da transição?'.

**Por que é visual.** A pirâmide do livro é uma foto, mas a transição demográfica é um filme. Ver as coortes subindo e a inércia demográfica acontecer explica por que a forma muda devagar e por que a população cresce mesmo com poucos filhos por mulher. Uma sequência de gráficos estáticos raramente deixa isso claro.

**Riscos.** Os dados precisam ser embutidos com fonte e ano: o WPP 2024 por faixa quinquenal dá ~13 anos × 21 faixas × 2 sexos ≈ 550 números, poucos KB. Projeções são cenários, e a tela deve dizer isso. O simulador usa uma tábua de mortalidade modelo parametrizada pela expectativa de vida, o que é uma simplificação a declarar. As barras horizontais com rótulos de idade no centro precisam caber em 390 px. Evitar tom alarmista sobre envelhecimento e migração.

### Pirâmide Viva — olhar mecânica engenhosa

- **Tópico:** Dinâmica demográfica: pirâmide etária, fecundidade, mortalidade, expectativa de vida, transição demográfica, bônus demográfico, envelhecimento, inércia demográfica e migração
- **BNCC:** EF08GE03, EF07GE04, EF08GE01, EF09GE09, EM13CHS201
- **Público:** 7º e 8º anos do EF e EM.
- **Tipo:** 2D

**Ideia.** Um modelo de coortes (homens e mulheres em faixas de 5 anos) que avança ano a ano, animado. (1) MÁQUINA DO TEMPO: começa no Brasil de 1970, com a base larga. Sliders controlam a fecundidade (filhos por mulher), a expectativa de vida e o saldo migratório. Ao apertar ▶ a pirâmide 'sobe': cada geração é uma faixa colorida que o aluno pode acompanhar, por exemplo 'a geração dos seus avós' acesa até chegar ao topo. Ao lado, população total e razão de dependência, com a janela do bônus demográfico sombreada. (2) APOSTE: 'O Brasil está abaixo da fecundidade de reposição (2,1) desde meados dos anos 2000; hoje são cerca de 1,6 filho por mulher. Quando a população para de crescer?' O aluno escolhe entre já, 10, 20 ou 40 anos. O modelo roda e mostra a inércia demográfica: as muitas mulheres nascidas na época de fecundidade alta continuam tendo filhos, e a população só para por volta de 2041 (projeção IBGE 2024). (3) FAÇA A FORMA: aparece a silhueta de uma pirâmide real (Nigéria, Japão, Brasil 2060, Emirados Árabes) e o aluno ajusta os sliders até encaixar. Nos Emirados, nenhuma combinação de nascimentos e mortes encaixa; só a migração de homens adultos para trabalhar explica o 'barrigão' masculino. Aha: a forma da pirâmide conta a história do país.

**Por que é visual.** A pirâmide etária é dinâmica por natureza, mas o livro a mostra parada. Ver as coortes subindo torna visíveis a inércia, o envelhecimento e o bônus demográfico, efeitos que contrariam a intuição e não aparecem numa tabela.

**Riscos.** Os dados reais embutidos (pirâmides por faixa de 5 anos, IBGE e ONU WPP) precisam ser arredondados e citados. A mortalidade derivada da expectativa de vida (curva modelo simples) deve ser plausível sem ficar pesada. Para não parecer um gráfico genérico, a animação das coortes, as apostas e o encaixe de silhuetas precisam ser o centro da experiência.
