# Máquina do Acaso

> **Área:** Matemática · **id:** `maquina-do-acaso` · **Tipo:** 2D · **Fundo:** papel · **Potencial visual:** ★★★★★
> **Público:** 6º ao 9º ano (frequência relativa, espaço amostral, eventos dependentes e independentes) e Ensino Médio (eventos sucessivos, probabilidade condicional, valor esperado e risco). Probabilidade responde por cerca de 5% do ENEM.
> **BNCC:** EF06MA30, EF07MA34, EF08MA22, EF09MA20, EM13MAT106, EM13MAT311, EM13MAT312, EM13MAT511
> **Status:** planejado (especificação revisada) · demo a construir em `demos/maquina-do-acaso.html`

Antes de cada experimento o aluno aposta 36 fichas no resultado que espera. Depois, dados, urnas, um teste para uma doença rara e uma roleta rodam até 10.000 vezes e mostram onde a intuição falha e o espaço amostral acerta.

**O aluno:** Aposta fichas no resultado que espera, sorteia milhares de vezes e compara

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | frequências, espaço amostral, risco |
| Papel da IA | comentar a aposta e cada simulação |
| Tags | 2D, dados reais |

**Objetivos de aprendizagem**

- Comparar frequência relativa e probabilidade teórica (lei dos grandes números)
- Construir espaços amostrais e árvores de probabilidade com e sem reposição
- Interpretar probabilidade condicional e valor esperado em decisões de risco

**Etapas da demonstração**

1. Aposte 36 fichas na soma de dois dados e role 10.000 vezes
2. Toque em 'Por quê?': a grade 6×6 mostra os 6 caminhos do 7
3. Urna com e sem reposição: os galhos da árvore mudam de espessura
4. Mil pessoas: a maioria dos positivos é alarme falso
5. Roleta: 1.000 apostadores e a banca que sempre ganha

## Desenho da demonstração

### Conceito
Probabilidade é contraintuitiva, e o livro só consegue afirmar o que acontece 'no longo prazo'. Aqui o longo prazo acontece na tela. A sacada que atravessa os quatro modos é APOSTAR ANTES: o aluno distribui 36 fichas nas colunas do resultado que espera (ou marca uma estimativa num slider), e só então a máquina sorteia 1, 10, 100 ou 10.000 vezes. As barras reais crescem por cima do 'fantasma' tracejado da aposta, e um placar mede a sobreposição. O 36 não é aleatório: é o tamanho do espaço amostral de dois dados. Ao tocar em 'Por quê?', cada ficha vira uma casa da grade 6×6, e a aposta perfeita é 1-2-3-4-5-6-5-4-3-2-1. Quem aposta em barras iguais (o chute mais comum) fica em cerca de 79%. Na urna, a espessura de cada galho da árvore é proporcional à probabilidade. Sem reposição, os galhos de baixo mudam conforme o que saiu em cima, e a dependência fica visível. Há ainda uma surpresa: a chance de a 2ª bola ser vermelha não muda. Em 'Mil pessoas', 1.000 bonequinhos e um teste que acerta 90% mostram que, numa doença rara, cerca de 9 em cada 10 positivos são alarme falso. É probabilidade condicional por contagem, sem fórmula de Bayes. Na roleta, 1.000 apostadores começam com R$ 100 e o saldo médio desce em linha reta, R$ 1/37 por rodada: o valor esperado negativo acontecendo diante do aluno. A intuição falha sempre do mesmo jeito, e o espaço amostral explica por quê.

### Layout
O palco tem duas faixas. A de cima (35% da altura) mostra o experimento animado: moeda girando, dois dados rolando, urna com bolinhas, a grade de 1.000 bonequinhos ou a roleta. A de baixo (65%) mostra o gráfico principal, o histograma 'aposta × resultado': as fichas da aposta aparecem como blocos tracejados e as barras reais, sólidas, por cima, com o % em cada coluna e o placar de sobreposição no canto. Um alternador no próprio palco troca esse histograma pelo gráfico de convergência (frequência relativa × número de lançamentos, eixo x em escala log, com o funil). No painel lateral ficam o seletor de modo, os controles do experimento, os botões 1×/10×/100×/10.000×, as leituras (n, frequência, probabilidade teórica, diferença) e a caixa de desafio. No celular (390 px), o palco ocupa ~62 vh e cada coluna do histograma tem no mínimo 26 px (as 11 colunas da soma de dois dados cabem em 358 px). As fichas são postas com um toque na coluna (toque = +1 ficha; botão '−' remove), sem arrastar. O painel vem abaixo do palco, com os botões de lançamento fixos no topo. A grade 6×6 do 'Por quê?' aparece sobre a faixa do experimento, que se expande para 55%. Em 'Mil pessoas', a grade tem 40×25 ícones de 7 px no celular e 12 px no desktop, e os números vão numa tabela 2×2 (doente/sadio × positivo/negativo) sob a grade.

### Modos
- **Aposte e role** — Experimentos: moeda, dado honesto, dado viciado (slider da chance do 6) e soma de dois dados. São 36 fichas para distribuir; depois o aluno lança 1×, 10×, 100× ou 10.000×. As barras reais sobem sobre a aposta, o placar mostra a sobreposição e o gráfico de convergência traz o funil. Na moeda, o gráfico tem marcadores com os experimentos históricos de Buffon, Pearson e Kerrich. 'Por quê?' acende a grade 6×6, e cada lançamento pisca na casa (d1, d2) que saiu.
- **Urna e árvore** — Urna com 1 a 6 bolas vermelhas e 1 a 6 azuis e duas retiradas, com ou sem reposição. A árvore cresce com galhos de espessura proporcional à probabilidade e frações escritas em cada galho. O aluno escolhe um evento ('duas da mesma cor', 'pelo menos uma azul', 'a 2ª é vermelha'), marca sua estimativa e solta 1.000 retiradas: as 30 primeiras descem pelos galhos como partículas e as folhas contam as chegadas.
- **Mil pessoas** — Grade de 1.000 bonequinhos e um teste para uma doença rara. Os sliders controlam quantas pessoas têm a doença, o quanto o teste acerta em quem tem e o quanto acerta em quem não tem. Antes de 'Testar todos', o aluno aposta: 'Ana deu positivo. Qual a chance de ela ter a doença?'. Os positivos acendem em amarelo e os doentes têm contorno vermelho. O botão 'Repetir o exame nos positivos' mostra uma segunda rodada só com eles.
- **A casa sempre ganha** — Roleta com 36 números (18 vermelhos, 18 pretos) e 0, 1 ou 2 zeros verdes. Mil apostadores começam com R$ 100 e apostam R$ 1 no vermelho a cada rodada. O gráfico mostra 40 trajetórias de amostra, a média real e a reta teórica, mais o histograma dos saldos atuais. As leituras trazem % no lucro, % falidos e lucro da banca, e um contador testa a falácia do jogador: 'depois de 5 vermelhos seguidos, saiu preto em …%'.

### Controles
- Segmentado de modo: Aposte e role | Urna e árvore | Mil pessoas | A casa sempre ganha
- Seletor de experimento: Moeda, Dado, Dado viciado, Soma de 2 dados
- Slider 'chance do 6' (dado viciado) de 1/6 a 1/2; as outras cinco faces dividem o resto igualmente
- Toque na coluna = +1 ficha; botões '−1 ficha' e 'Limpar aposta'; contador 'fichas: x de 36'
- Botões 1×, 10×, 100×, 10.000× e 'Zerar'
- Alternador do gráfico: 'aposta × resultado' / 'convergência'; toque numa coluna escolhe o evento acompanhado (padrão: soma 7)
- Botão 'Por quê?' (grade 6×6 do espaço amostral)
- Campo opcional 'semente' (inteiro) para o professor repetir os mesmos sorteios em sala
- Urna: sliders 'vermelhas' 1–6 e 'azuis' 1–6; alternador 'com reposição / sem reposição'; seletor de evento; slider 'sua estimativa' 0–100%; botões 'Soltar 1' e 'Soltar 1.000'
- Mil pessoas: sliders 'têm a doença' 0,1%–30% (padrão 1%), 'acerta em quem tem' 50%–99,9% (padrão 90%), 'acerta em quem não tem' 50%–99,9% (padrão 91%); slider 'sua aposta' 0–100%; botões 'Testar todos' e 'Repetir o exame nos positivos'; alternador 'contagem exata / sorteio'
- Roleta: segmentado 'zeros: 0 (jogo justo) · 1 (37 casas) · 2 (38 casas)'; botões +10, +100, +1.000 rodadas e 'Recomeçar'
- Leituras: n, contagem e frequência de cada coluna, probabilidade teórica (fração e decimal), placar de sobreposição, meia-largura do funil; na roleta: rodadas, saldo médio, previsão teórica, % no lucro, % falidos, lucro da banca

### Modelo
GERADOR: mulberry32 com semente opcional (sem semente, usa Date.now()); u ∈ [0, 1). Moeda: cara se u < 0,5. Dado: face = 1 + ⌊6u⌋. Dado viciado: P(6) = p6 ∈ [1/6; 1/2] e P(k) = (1 − p6)/5 para k = 1..5, sorteio por soma acumulada. Dois dados: S = d1 + d2, com P(S = s) = (6 − |s − 7|)/36 para s = 2..12. APOSTA: aᵢ = fichasᵢ/36; frequência fᵢ = contagemᵢ/n; placar = Σ min(aᵢ, fᵢ) × 100%. Contra a teoria, a aposta perfeita em dois dados (1,2,3,4,5,6,5,4,3,2,1) dá 100% e a uniforme (1/11 por coluna) dá 78,8%. CONVERGÊNCIA: a frequência f(n) do evento escolhido é plotada para n = 1..N com eixo x em log₁₀. O funil é p ± 1,96·√(p(1 − p)/n), a faixa aproximada onde caem cerca de 95% das sequências, desenhada só para n ≥ 10. Para p = 1/6, a meia-largura vale 0,231 em n = 10, 0,073 em n = 100, 0,023 em n = 1.000 e 0,0073 em n = 10.000; para a moeda (p = 1/2), vale 0,31; 0,098; 0,031; 0,0098. LOTE: 10.000 sorteios num laço síncrono (< 5 ms). Só os 12 primeiros dados são animados; o resto atualiza as barras com crescimento suave em 20 quadros. URNA (V vermelhas, A azuis, N = V + A, duas retiradas): com reposição, P(2ª V) = V/N em qualquer galho; sem reposição, P(2ª V | 1ª V) = (V − 1)/(N − 1) e P(2ª V | 1ª A) = V/(N − 1). A probabilidade de um caminho é o produto dos galhos; a de um evento, a soma dos caminhos. Espessura do galho = 2 + 22·P(galho) px. Exemplo com V = 3 e A = 2: P(VV) = 9/25 = 0,36 com reposição e 3/5·2/4 = 3/10 sem; P(mesma cor) = 0,52 com e 0,40 sem; P(pelo menos uma azul) = 0,64 com e 0,70 sem; P(2ª vermelha) = 3/5 nos DOIS casos (3/5·2/4 + 2/5·3/4 = 3/5). MIL PESSOAS (contagem exata em frequências naturais): D = round(1000·prev); VP = round(D·s); FN = D − VP; S = 1000 − D; FP = round(S·(1 − e)); VN = S − FP; P(doente | positivo) = VP/(VP + FP). Com o padrão (1%, s = 90%, e = 91%): D = 10, VP = 9, FN = 1, FP = 89, VN = 901, logo P = 9/98 ≈ 9,2%. Segundo exame, supondo testes independentes dado o estado: entre os 98 positivos, VP₂ ≈ 9·0,9 = 8,1 e FP₂ ≈ 89·0,09 = 8,0, o que dá ≈ 50%. No modo sorteio, cada pessoa é doente com probabilidade prev e depois positiva com probabilidade s (se doente) ou 1 − e (se sadia). ROLETA: 36 números + z zeros, N = 36 + z. A aposta de R$ 1 no vermelho ganha +1 com probabilidade 18/N e perde 1 com probabilidade (18 + z)/N. Valor esperado por rodada: E = (18 − (18 + z))/N = −z/N, ou seja, 0 com z = 0; −1/37 ≈ −R$ 0,027 (−2,70%) com z = 1; −2/38 ≈ −R$ 0,053 (−5,26%) com z = 2. Cada apostador começa com 100 e para quando chega a 0 (falido). A média teórica após n rodadas é ≈ 100 − n·z/N (um pouco acima quando há falidos). Com z = 1: R$ 97,30 após 100 rodadas; R$ 72,97 após 1.000 (desvio padrão ≈ R$ 31,6, só ≈ 20% no lucro); o capital inteiro some, em média, em 100·37 = 3.700 rodadas. Lucro da banca = Σ(100 − saldoᵢ). A simulação (1.000 apostadores × 1.000 rodadas = 10⁶ sorteios) roda em lotes de 100 rodadas por quadro. FALÁCIA DO JOGADOR: em cada trajetória, toda vez que saem 5 vermelhos seguidos, registra-se a cor da rodada seguinte. A tela mostra a contagem e o % de preto (teórico 18/37 ≈ 48,6% com z = 1; ≈ 270 casos a cada 10.000 rodadas).

### Dados
Soma de dois dados, em casos de 36: 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:5, 9:4, 10:3, 11:2, 12:1 (total 36). Experimentos históricos com moeda: Buffon, 4.040 lances e 2.048 caras (0,5069); Karl Pearson, 24.000 lances e 12.012 caras (0,5005); John Kerrich, 10.000 lances e 5.067 caras (0,5067), feitos quando estava internado na Dinamarca durante a Segunda Guerra. O caso Kerrich está em Freedman, Pisani e Purves, Statistics (cap. 16, 'The Law of Averages'); os de Buffon e Pearson são valores clássicos citados nos livros de probabilidade. Probabilidades de referência: 7 ou mais caras em 10 lances = 176/1024 ≈ 17,2%; 3 ou mais 'somas 7' em 10 lances de dois dados ≈ 22,5%; nenhum 6 em 6 lances de um dado = (5/6)⁶ ≈ 33,5%. Lei dos grandes números: Jakob Bernoulli, Ars Conjectandi (1713). Frequências naturais: Gigerenzer, G. e Hoffrage, U. (1995), 'How to improve Bayesian reasoning without instruction: frequency formats', Psychological Review 102(4), 684–704. O exemplo clássico usa prevalência de 1%, acerto de 90% nos doentes e 9% de falsos positivos (≈ 1 em cada 10 positivos é doente); na demo, os números são ilustrativos e não de um exame real. Roleta europeia: 37 casas (0 a 36: 18 vermelhas, 18 pretas e 1 zero verde). Roleta americana: 38 casas (0 e 00). Aposta em cor paga 1 para 1, e a vantagem da casa é 1/37 ≈ 2,70% ou 2/38 ≈ 5,26%. Lei nº 14.790/2023 (apostas de quota fixa): proíbe menores de 18 anos de apostar. O guia cita isso sem nomear casas de aposta.

### Desafios
(1) Aposta perfeita (dois dados): placar ≥ 95% após 10.000 lances. A verificação Σ min(aᵢ, fᵢ) ≥ 0,95 só é atingida pela aposta 1-2-3-4-5-6-5-4-3-2-1 ou algo muito próximo. (2) Detetive do dado viciado: o guia sorteia um p6 secreto entre 0,20 e 0,45; o aluno lança quantas vezes quiser e digita sua estimativa. Acerta se |estimativa − p6| ≤ 0,02, e o guia mostra quantos lances ele usou e a largura do funil para esse n. (3) Urna meio a meio: escolher V e A para que P(duas da mesma cor, sem reposição) = 1/2. A verificação é exata, em inteiros: 2·[V(V − 1) + A(A − 1)] = N(N − 1). No intervalo 1–6 as soluções são (3, 1), (1, 3), (6, 3) e (3, 6). (4) A 2ª bola: prever se P(2ª vermelha) muda ao ligar 'sem reposição' (não muda). A escolha é conferida e depois confirmada por 1.000 retiradas. (5) Teste confiável: com prevalência fixa em 1% e acerto de 90% em quem tem, ajustar o acerto em quem não tem até P(doente | positivo) ≥ 50%. A verificação usa VP/(VP + FP) ≥ 0,5 e exige 99,1% ou mais. (6) Metade do capital: prever quantas rodadas levam o saldo médio (z = 1) a R$ 50. A resposta vale se estiver entre 1.700 e 2.000 (teórico: 50·37 = 1.850); em seguida a simulação roda até esse ponto. (7) Falácia: antes de abrir o contador, apostar se depois de 5 vermelhos o preto sai mais que 48,6%; o contador confere.

## Guia (mascote)

**Abertura:** Antes de rodar, aposte! Toque nas colunas e coloque suas 36 fichas onde você acha que os resultados vão cair. Depois role 10, 100 ou 10.000 vezes e compare com a sua aposta.

- **Depois de 5 caras seguidas, a coroa está para sair?**  
  Não. A moeda não tem memória: cada lance continua com 1/2 para cada lado. Na roleta, o contador mostra isso: depois de 5 vermelhos, o preto sai em cerca de 48,6% das vezes, a mesma chance de sempre. Achar o contrário é a 'falácia do jogador'.
- **Por que a soma 7 sai mais que a soma 2?**  
  Há 6 jeitos de formar 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) e só 1 de formar 2 (1+1). Cada uma das 36 casas da grade tem a mesma chance, 1/36. Por isso P(7) = 6/36 = 1/6 e P(2) = 1/36.
- **Probabilidade 1/6 quer dizer que em 6 lances sai uma vez?**  
  Não. Quer dizer que, em muitos lances, a frequência fica perto de 1/6. Em 6 lances, a face pode não sair nenhuma vez (cerca de 33% de chance) ou sair duas. O funil do gráfico mostra quanto a frequência ainda oscila quando n é pequeno.
- **O que diz a lei dos grandes números?**  
  Repetindo um experimento muitas vezes, a frequência relativa se aproxima da probabilidade teórica. A diferença típica encolhe como 1/√n: com 100 vezes mais lances, o funil fica 10 vezes mais estreito. A lei não diz que os resultados 'se compensam'.
- **Qual é a diferença entre com e sem reposição?**  
  Com reposição, a urna volta igual e a 2ª retirada não depende da 1ª: os eventos são independentes. Sem reposição, a urna muda. Se saiu vermelha, há uma vermelha a menos, e a probabilidade seguinte muda: os eventos são dependentes.
- **Se o teste acerta 90%, por que a maioria dos positivos é sadia?**  
  Porque os sadios são muito mais numerosos. Em 1.000 pessoas com 1% de doentes, os 10 doentes geram 9 positivos verdadeiros, e os 990 sadios geram 89 falsos positivos (9% de 990). Dos 98 positivos, só 9 estão doentes: cerca de 9%.
- **Dá para ganhar na roleta a longo prazo?**  
  Não. Com um zero, cada R$ 1 apostado no vermelho vale, em média, −R$ 0,027. Alguns ganham no começo por sorte, mas o saldo médio cai em linha reta e a banca fica com cerca de 2,7% de tudo o que é apostado. E lembre: no Brasil, menores de 18 anos não podem apostar.
- **O que é valor esperado?**  
  É a média do ganho, com cada resultado pesado pela sua probabilidade. No vermelho: E = 18/37·(+1) + 19/37·(−1) = −1/37 ≈ −0,027. É quanto se ganha ou se perde por rodada, em média, no longo prazo.

## Para usar em sala
- Antes de rodar, cada aluno anota a aposta das 36 fichas no caderno. Depois a turma compara o placar de quem apostou em barras iguais com o de quem apostou em triângulo.
- Use a semente: o professor fixa um número, todos rodam 10 lances e veem resultados bem diferentes vindos da mesma regra. Com 10.000 lances, os resultados se aproximam.
- Em 'Mil pessoas', cada aluno escreve sua aposta para 'Ana deu positivo' antes do teste. Quase todos chutam perto de 90%. Discuta para que serve o exame de confirmação.
- Debate sobre apostas online: com a roleta, calculem quanto a banca ganha quando 1.000 pessoas apostam R$ 1 durante 100 rodadas (cerca de R$ 2.700).

## Como a IA entra
O guia recebe o modo, a aposta do aluno (fichas por coluna ou estimativa), os resultados acumulados, o n, o placar e os parâmetros (urna, prevalência, acertos, zeros). Ele comenta a distância entre aposta e resultado ('você apostou em barras iguais; conte quantas casas da grade dão 7'), lembra a largura do funil para o n atual, explica a falácia do jogador quando o aluno roda logo depois de uma sequência e gera problemas novos com urnas e testes. Uma IA conectada pode acompanhar o padrão de erro do aluno ao longo das apostas e criar enunciados no estilo do ENEM com números novos.

## Cuidados de conteúdo
Nenhum tom de incentivo a apostas. A roleta existe para mostrar o valor esperado negativo e o lucro da banca. Nada de nomes ou marcas de casas de aposta, cassinos ou programas de TV, e o guia lembra que menores de 18 não podem apostar. Nada de genética, que já está no Genética Lab: só moedas, dados, urnas, testes e roletas. Em 'Mil pessoas', usar a linguagem simples 'acerta em quem tem' e 'acerta em quem não tem' e dizer que os números são ilustrativos. O segundo exame supõe testes independentes, e isso deve ser dito como simplificação. O funil é uma aproximação normal: não desenhá-lo para n < 10 e chamá-lo de 'faixa onde cai a maioria', não de garantia. A lei dos grandes números trata da frequência RELATIVA. A diferença absoluta entre caras e coroas tende a CRESCER (≈ √n), mesmo com a relativa encolhendo; se o aluno estranhar, o guia explica. Os 10.000 lances rodam em lote, sem animar cada um. As leituras sempre mostram que as probabilidades somam 1 (36/36). Na árvore, mostrar frações exatas (3/10, 6/20), não só decimais. As partículas da árvore são limitadas a 30 por rodada para manter o celular fluido.

## Verificação (comportamentos a testar)
- Soma de dois dados, 10.000 lances: barras na proporção ≈ 1:2:3:4:5:6:5:4:3:2:1 e frequência da soma 7 em 0,167 ± 0,008.
- A aposta 1-2-3-4-5-6-5-4-3-2-1 com 10.000 lances dá placar ≥ 96%; a aposta mais uniforme possível dá cerca de 79%.
- Com a mesma semente, 'Zerar' seguido de '10×' produz exatamente os mesmos dez resultados.
- Convergência: em n = 10.000 a meia-largura do funil para p = 1/6 aparece como ≈ 0,0073, e a curva fica dentro do funil na maior parte do tempo.
- Urna V = 3, A = 2: P(VV) mostra 9/25 com reposição e 3/10 sem; P(2ª vermelha) mostra 3/5 nos dois casos; as folhas somam 1.
- Mil pessoas com 1%, 90% e 91%: 10 doentes, 9 VP, 89 FP, 98 positivos, P(doente | positivo) = 9,2%; o segundo exame dá cerca de 50%.
- Roleta com z = 1: após 1.000 rodadas o saldo médio fica perto de R$ 73 e cerca de 20% estão no lucro. Com z = 0, a média fica perto de R$ 100.
- Contador da falácia após 10.000 rodadas: % de preto depois de 5 vermelhos entre 44% e 53%.
- Em 390 px: as 11 colunas aparecem sem rolagem horizontal, o toque na coluna adiciona ficha e 10.000 lances não derrubam a animação abaixo de 30 fps.

## Miniatura
Modo 'Aposte e role', soma de dois dados, com a aposta uniforme do aluno (fichas tracejadas iguais) e 10.000 lances já rodados: o triângulo sólido com pico no 7 por cima das fichas retas, placar '79%' e a grade 6×6 do 'Por quê?' acesa na diagonal do 7.
