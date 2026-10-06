# Estatística Viva

> **Área:** Matemática · **id:** `estatistica-viva` · **Tipo:** 2D · **Fundo:** papel · **Potencial visual:** ★★★★★
> **Público:** 7º ao 9º ano (gangorra, média, moda, mediana, classes de frequência e gráficos enganosos) e Ensino Médio (variância, desvio padrão, quartis, box plot e leitura crítica). Estatística responde por cerca de 11% das questões do ENEM.
> **BNCC:** EF06MA31, EF07MA35, EF07MA37, EF08MA23, EF08MA24, EF08MA25, EF09MA21, EF09MA22, EM13MAT102, EM13MAT316, EM13MAT406, EM13MAT407
> **Status:** planejado (especificação revisada) · demo a construir em `demos/estatistica-viva.html`

A média é o ponto de equilíbrio de uma gangorra de bolinhas e os desvios viram quadrados de verdade. Duas turmas de média 6 ganham histograma e box plot, e o aluno faz papel de marqueteiro para manipular gráficos e medir o fator de mentira.

**O aluno:** Arrasta dados numa gangorra, ajusta classes e manipula gráficos para enganar e depois consertar

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | média, dispersão, gráficos enganosos |
| Papel da IA | explicar cada medida e desmascarar gráficos |
| Tags | 2D |

**Objetivos de aprendizagem**

- Interpretar média, mediana e moda e escolher a medida adequada
- Calcular e interpretar variância, desvio padrão, quartis e box plot
- Identificar e medir distorções em gráficos (eixo, área, recorte, perspectiva, omissão)

**Etapas da demonstração**

1. Arraste o apoio até a gangorra equilibrar: esse ponto é a média
2. Leve o salário do dono para longe: a média foge, a mediana fica
3. Os desvios viram quadrados: a variância é uma área, o desvio padrão é um lado
4. Duas turmas de média 6: o histograma revela o que o box plot esconde
5. Marqueteiro: faça o açaí 'disparar' e meça o Fator de Mentira

## Desenho da demonstração

### Conceito
No livro, média e desvio padrão são fórmulas a aplicar. Aqui eles se sentem com a mão. GANGORRA: os dados são bolinhas empilhadas numa régua apoiada num triângulo, e a régua só fica reta quando o apoio está exatamente na média, pois a soma das distâncias à esquerda iguala a da direita. O aluno primeiro caça o equilíbrio arrastando o apoio, e só então a média é revelada. A grande sacada vem numa empresa fictícia de 10 pessoas: arrastar só a bolinha do dono de 5 para 20 salários mínimos leva a média de 2,5 para 4, enquanto a mediana fica parada em 2. É aí que o aluno entende por que se fala em renda mediana. Com 'Mostrar quadrados', cada bolinha ganha um quadrado de lado igual ao seu desvio até a média: a variância é a área média desses quadrados e o desvio padrão é o lado do 'quadrado médio'. O quadrado gigante do dono (256 de área, contra 36 de todos os outros juntos) mostra por que o desvio padrão também é sensível a valores extremos. DUAS TURMAS: as duas têm média 6 e mediana 6, mas na turma B ninguém tirou 6. O histograma com classes de largura 1 revela o buraco; com largura 5, ele some; e o box plot também o esconde. MARQUETEIRO: o aluno recebe dados honestos e uma manchete encomendada ('o preço do açaí DISPAROU') e tem alavancas reais: início do eixo, recorte de meses, ícones e acumulado. Um medidor de Fator de Mentira (Tufte) mostra ao vivo que um aumento de 4% virou uma barra 5 vezes maior (fator 100). Depois ele conserta o próprio gráfico e, no Detetive, caça a trapaça em gráficos prontos. Os mesmos números contam histórias opostas, e a mentira pode ser medida.

### Layout
Desktop: o gráfico do modo ocupa toda a largura do palco. Na Gangorra, a régua com as pilhas fica no terço superior, com as marcas de média (triângulo laranja), mediana (losango azul) e moda (pilha que brilha). Abaixo dela ficam, quando ligados, as setas dos desvios e a faixa de quadrados, com escala própria ajustada para caber. Em Duas turmas, dois histogramas empilhados (A em cima, B embaixo) compartilham o eixo 0–10, cada um com seu box plot horizontal logo abaixo. As bolinhas dos alunos ficam numa faixa de 'pontos soltos' e deslizam até seus lugares durante a montagem. No Marqueteiro, o gráfico ocupa o centro; acima dele ficam a manchete da missão e o medidor de Fator de Mentira (mostrador semicircular de 1 a 100 em escala log, com a faixa verde 0,95–1,05), e abaixo a tabela pequena dos dados honestos. O painel lateral traz o segmentado de modo, o conjunto de dados, os alternadores e as leituras (n, média, mediana, moda, amplitude, σ², σ, Q1, Q3, AIQ). Celular (390 px): palco com ~60 vh e régua de 0 a 20 com ~17 px por unidade. As bolinhas têm 16 px, mas a área de toque é de 44 px: pega-se a bolinha do topo da pilha mais próxima num raio de 24 px. Pilhas com mais de 6 bolinhas viram coluna com número. A faixa de quadrados rola na horizontal dentro do palco, sem rolar a página. Em Duas turmas aparece um histograma por vez, com alternador A / B / sobrepostas. No Marqueteiro, as alavancas vão no painel abaixo do palco, e o medidor fica fixo no topo.

### Modos
- **Gangorra** — Três conjuntos, todos fictícios: Empresa (10 salários, em salários mínimos), Notas de uma prova (12) e Livre (um toque na régua cria uma bolinha). O aluno arrasta bolinhas (encaixe de 0,5) e arrasta o apoio até achar o equilíbrio. 'Ordenar' alinha as bolinhas e destaca a do meio, a mediana; com n par, destaca as duas do meio e o ponto entre elas. A pilha mais alta brilha (moda). 'Mostrar desvios' desenha setas até a média e mostra que soma à esquerda = soma à direita; 'Mostrar quadrados' transforma variância e desvio padrão em área e lado.
- **Duas turmas** — Turmas A e B, fictícias, com 20 notas cada, ambas com média 6 e mediana 6. A largura de classe do histograma pode ser 0,5, 1, 2, 2,5 ou 5. O box plot se monta a partir dos quartis: os pontos deslizam, as metades se separam, Q1 e Q3 viram as bordas da caixa e os bigodes vão até o mínimo e o máximo, ou até as cercas de 1,5·AIQ. As notas podem ser arrastadas para criar outliers.
- **Marqueteiro** — Missões com dados honestos e fixos: 'Faça parecer que DISPAROU', 'Faça parecer que está CRESCENDO' e 'Agora conserte'. As alavancas são: início do eixo y, período (recorte de meses), barras, ícones ou linha, acumulado, rótulos do eixo e fonte e data. O medidor de Fator de Mentira reage ao vivo. No sub-modo Detetive, aparecem 5 gráficos manipulados com manchetes fictícias; o aluno toca no elemento enganoso e o gráfico se conserta numa animação, com o fator de mentira de antes e de depois.

### Controles
- Segmentado de modo: Gangorra | Duas turmas | Marqueteiro
- Gangorra: seletor de conjunto (Empresa, Notas, Livre); botões 'Ordenar', 'Achar o equilíbrio' (anima o apoio até a média), 'Embaralhar', 'Adicionar bolinha' e 'Remover'; alternadores 'média/mediana/moda', 'Mostrar desvios' e 'Mostrar quadrados'; segmentado de encaixe '0,5 · 1'
- Duas turmas: segmentado 'largura de classe' 0,5 · 1 · 2 · 2,5 · 5; alternador 'A · B · sobrepostas'; botão 'Montar box plot' (animado); alternador 'cercas de outlier (1,5·AIQ)'; botão 'Restaurar notas'
- Marqueteiro: seletor de missão; slider 'eixo y começa em' (de 0 até logo abaixo do menor valor); dois cursores 'de' e 'até' sobre os meses; segmentado 'barras · ícones · linha'; alternadores 'acumulado', 'rótulos do eixo' e 'fonte e data'; slider 'altura do gráfico' (achatar ou esticar); botões 'Detetive' e 'Próximo caso'
- Leituras: n, média, mediana, moda, amplitude, variância σ² (÷ n), desvio padrão σ, Q1, Q3, AIQ; no Marqueteiro: variação real (%), variação mostrada (%), Fator de Mentira

### Modelo
Média x̄ = Σxᵢ/n. Mediana: valor central dos dados ordenados; com n par, média dos dois centrais. Moda: valor (ou valores) de maior frequência; se todos se repetem igualmente, 'não há moda'; vários empatados = multimodal. Amplitude = máx − mín. Variância POPULACIONAL σ² = Σ(xᵢ − x̄)²/n e desvio padrão σ = √σ², na mesma unidade dos dados. Quartis pelo método das metades (o dos livros brasileiros): Q2 = mediana; Q1 = mediana da metade inferior; Q3 = mediana da metade superior; com n ímpar, a mediana fica fora das metades. AIQ = Q3 − Q1. Outliers pela regra de Tukey: x < Q1 − 1,5·AIQ ou x > Q3 + 1,5·AIQ; os bigodes vão até o menor e o maior dado dentro das cercas. GANGORRA: cada bolinha pesa 1, e o torque em relação ao apoio a é τ = Σ(xᵢ − a) = n·(x̄ − a). O ângulo da régua é θ = clamp(4°·τ/n, −14°, +14°), com mola amortecida (k = 40 s⁻², amortecimento 0,8). Quando |x̄ − a| < 0,05, a régua trava reta, o apoio pisca e a média é revelada. Desvios dᵢ = xᵢ − x̄, com Σdᵢ = 0: é por isso que a gangorra equilibra na média. Os quadrados têm lado |dᵢ| na mesma escala, e ao lado aparece o quadrado médio, de área σ² e lado σ. O guia comenta que a média minimiza Σdᵢ² e a mediana minimiza Σ|xᵢ − m|. HISTOGRAMA: classes [c, c + w) a partir de 0, última classe fechada em 10, altura = frequência absoluta (todas as classes têm a mesma largura). FATOR DE MENTIRA (Tufte, 1983): FM = efeito mostrado / efeito nos dados, com efeito = (final − inicial)/inicial, entre o primeiro e o último valor exibidos. Barras com eixo começando em b têm comprimento hᵢ = vᵢ − b, e o efeito mostrado é (h_f/h_i) − 1. Ícones que crescem em altura e largura têm área ∝ h², e o efeito mostrado é (h_f/h_i)² − 1. Na linha, usam-se as alturas acima da base do gráfico. Faixa honesta: 0,95 ≤ FM ≤ 1,05. No açaí (R$ 10,00 → R$ 10,40, +4%): eixo em 0 dá FM = 1; eixo em 9,80 dá barras de 0,20 e 0,60 (3×) e FM = 2/0,04 = 50; eixo em 9,90 dá barras de 0,10 e 0,50 (5×) e FM = 100; ícones com eixo em 0 dão FM = (1,04² − 1)/0,04 = 2,04. Acumulado e recorte não distorcem a escala, mudam a pergunta: o medidor mostra 'mudou a pergunta' ou 'escondeu meses', e a missão confere a tendência visual. PIZZA 3D (Detetive): a parcela visual é medida desenhando cada fatia com uma cor única num canvas fora da tela e contando pixels, incluindo a parede lateral visível. Com achatamento 0,4 e parede de 0,25·r, a fatia da frente, de 15%, ocupa ≈ 24% da área visível, e a de trás, de 30%, ≈ 21%.

### Dados
TODOS os conjuntos são FICTÍCIOS e rotulados 'dados fictícios' na tela. EMPRESA (salário em salários mínimos, n = 10): 1, 1, 2, 2, 2, 2, 3, 3, 4 e o dono. Com o dono em 5: média 2,5, mediana 2, moda 2, σ² = 1,45, σ ≈ 1,20. Com o dono em 20: média 4,0, mediana 2, moda 2, σ² = 29,2, σ ≈ 5,40 (Σd² = 292, dos quais 256 vêm do dono). NOTAS DE UMA PROVA (n = 12): 3, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 9; média 6,33, mediana 6,5, moda 7. TURMA A (n = 20): 4; 4,5; 5; 5; 5,5; 5,5; 5,5; 6; 6; 6; 6; 6; 6; 6,5; 6,5; 6,5; 7; 7; 7,5; 8. Média 6, mediana 6, moda 6, Q1 5,5, Q3 6,5, AIQ 1, mínimo 4, máximo 8, σ² = 0,9, σ ≈ 0,95. TURMA B (n = 20): 2; 2,5; 3; 3; 3,5; 3,5; 4; 4; 4,5; 5; 7; 7,5; 8; 8; 8,5; 8,5; 9; 9; 9,5; 10. Média 6 e mediana 6 (entre 5 e 7), mas NINGUÉM tirou 6. É multimodal (3; 3,5; 4; 8; 8,5; 9), com Q1 3,5, Q3 8,5, AIQ 5, mínimo 2, máximo 10, σ² = 7, σ ≈ 2,65. Histogramas (frequências por classe a partir de 0): largura 1 → A [0,0,0,0,2,5,9,3,1,0] e B [0,0,2,4,3,1,0,2,4,4] (a classe 6–7 vazia mostra o buraco); largura 2,5 → A [0,2,16,2] e B [1,8,2,9]; largura 5 → A [2,18] e B [9,11] (o buraco some). MARQUETEIRO: Açaí da cantina (R$, jan–jun): 10,00; 10,00; 10,10; 10,15; 10,30; 10,40 (+4% no semestre). Biblioteca da escola (empréstimos por mês, fev–nov): 420, 400, 380, 360, 330, 120 (julho, férias), 340, 310, 290, 270. De fevereiro a novembro a queda é de 35,7%; o recorte julho → agosto mostra +183%; o acumulado sempre sobe. DETETIVE (manchetes fictícias, sem veículos reais): (1) 'Suco da cantina dispara!': R$ 5,00 → R$ 5,20 (+4%) com eixo em R$ 4,80, barras de 0,20 e 0,40, FM = 25 (trapaça: eixo). (2) 'Reciclagem explode na escola!': 200 kg → 400 kg (+100%) desenhados como garrafas com altura E largura dobradas, área 4×, FM = 3 (trapaça: ícone). (3) 'Faltas despencam!': série mensal de faltas (%) 8, 9, 11, 12, 7, 13, 14, mostrando só o trecho 12 → 7 (trapaça: recorte). (4) 'Quase um quarto vem de bicicleta!': a pé 35%, ônibus 30%, carro 20%, bicicleta 15%, em pizza 3D com a bicicleta na frente e parcela visual ≈ 24% (trapaça: perspectiva). (5) Gráfico sem fonte e sem data (trapaça: omissão). FONTES: Tufte, E. R., The Visual Display of Quantitative Information (Graphics Press, 1983), para o Fator de Mentira e a faixa 0,95–1,05; Tukey, J. W., Exploratory Data Analysis (1977), para o box plot e a regra de 1,5·AIQ; Huff, D., How to Lie with Statistics (1954), para pictogramas e eixos truncados; BNCC EF09MA21, sobre escalas inapropriadas e omissão de fontes e datas.

### Desafios
GANGORRA: (1) 'Ache o equilíbrio': arrastar o apoio até a régua ficar reta, antes de ver a média; conferido por |a − x̄| < 0,05. (2) 'Mova uma bolinha para que a média suba 1 sem mudar a mediana' (Empresa, dono em 5): exatamente uma posição muda, a nova média = antiga + 1 (±0,01) e a mediana é a mesma. Solução: dono de 5 para 15. (3) 'Adicione uma bolinha sem mudar a média': n aumenta 1 e |x̄ novo − x̄ antigo| < 0,01; só funciona pondo a bolinha NA média. (4) 'Faça média = mediana': |x̄ − mediana| < 0,01. (5) 'Dobre o desvio padrão mexendo só 2 bolinhas': σ novo/σ antigo entre 1,95 e 2,05. DUAS TURMAS: (6) 'Revele o buraco da turma B': escolher uma largura de classe que deixe uma classe vazia entre classes ocupadas (largura ≤ 1). (7) 'Crie um outlier': arrastar uma nota da turma A para fora das cercas, recalculadas a cada movimento. (8) 'Qual turma tem a caixa mais larga?': tocar na turma; conferido pelo AIQ (B: 5 contra 1). MARQUETEIRO: (9) Missão 'DISPAROU' (açaí): a barra ou o ícone final fica com pelo menos 3× o tamanho do inicial na tela. (10) Missão 'CRESCENDO' (biblioteca): com os mesmos dados, o último valor exibido fica ≥ 1,2× o primeiro exibido. (11) 'Conserte': eixo em 0, período completo, barras, rótulos, fonte e data ligados; conferido por 0,95 ≤ FM ≤ 1,05, com o selo 'gráfico honesto'. DETETIVE: tocar na região certa (eixo, ícone, seletor de período, fatia ou perspectiva, rodapé), com 3 tentativas por caso.

## Guia (mascote)

**Abertura:** Arraste o triângulo de apoio até a gangorra ficar reta. Esse ponto de equilíbrio tem nome... Depois mova só a bolinha do dono da empresa para bem longe e observe a média e a mediana.

- **Quando usar a média e quando usar a mediana?**  
  A média usa todos os valores, por isso é puxada pelos extremos. A mediana só olha a posição do meio. Com um valor muito fora, como o salário do dono, a mediana descreve melhor o 'típico'. Em dados simétricos e sem extremos, as duas ficam próximas.
- **Por que a gangorra equilibra exatamente na média?**  
  Porque a soma das distâncias até a média dá zero: as distâncias à esquerda somam o mesmo que as da direita. Como todas as bolinhas pesam igual, essa é exatamente a condição de equilíbrio.
- **Por que elevar os desvios ao quadrado?**  
  Somar os desvios sempre dá zero, porque os negativos cancelam os positivos. Ao quadrado, todos ficam positivos e os desvios grandes pesam mais. A variância é a área média dos quadrados, e o desvio padrão é o lado do quadrado médio, que volta à unidade dos dados.
- **Divide por n ou por n − 1?**  
  Aqui dividimos por n: é o desvio padrão populacional, usado quando os dados são o grupo inteiro, como a turma toda. Quando os dados são uma amostra usada para estimar um grupo maior, usa-se n − 1 (desvio amostral). Com n grande, a diferença é pequena.
- **O que o box plot mostra?**  
  Cinco números: mínimo, Q1, mediana, Q3 e máximo. A caixa guarda os 50% do meio, e quanto mais larga, mais espalhados estão os dados. Mas o box plot da turma B não mostra que ninguém tirou 6. Para ver buracos, use o histograma.
- **O eixo de um gráfico sempre precisa começar no zero?**  
  Em gráficos de barras, sim, porque o olho compara o comprimento das barras. Em gráficos de linha, que mostram variação, o eixo pode começar em outro valor, desde que esteja bem rotulado e o leitor perceba isso.
- **O que é o Fator de Mentira?**  
  É o efeito mostrado no gráfico dividido pelo efeito real nos dados, uma ideia de Edward Tufte. Se o preço subiu 4% e a barra cresceu 400%, o fator é 100. Um gráfico honesto fica entre 0,95 e 1,05.
- **Por que o ícone ampliado engana mais?**  
  Se a figura dobra de altura E de largura, sua área fica 4 vezes maior. Como o olho compara áreas, um aumento de 100% parece um aumento de 300%.

## Para usar em sala
- Comece pela gangorra sem mostrar a média: cada dupla arrasta o apoio e anota o ponto de equilíbrio. Só depois a turma calcula a média no caderno e compara.
- Discuta a manchete 'o salário médio da empresa é de 4 salários mínimos' com o conjunto Empresa: é verdade? Engana? Que número seria mais justo?
- Divida a turma em marqueteiros e checadores: um grupo monta o gráfico da missão 'DISPAROU' e o outro identifica a trapaça e lê o Fator de Mentira.
- Peça que tragam um gráfico de jornal ou de rede social e o conferam: o eixo começa no zero? Há fonte e data?

## Como a IA entra
O guia recebe o conjunto de dados atual, as medidas calculadas, a última ação (bolinha arrastada, apoio movido, largura de classe, alavanca acionada) e o Fator de Mentira. Ele explica o efeito dessa ação, por exemplo: 'a média andou 1,5; a mediana não se mexeu porque a bolinha continuou à direita do meio'. Também gera manchetes fictícias para as missões e desafios do tipo 'mova uma bolinha para…', que confere automaticamente. Uma IA conectada pode analisar um gráfico descrito pelo aluno (eixos, valores, período) e apontar distorções, ou criar conjuntos de dados sob medida para a turma.

## Cuidados de conteúdo
Todos os conjuntos são fictícios e rotulados 'dados fictícios' no gráfico. Nada de estatística inventada apresentada como real. Nas manchetes, nada de política partidária, nada de inflação (já é tema do Economia Simulator) e nada de veículos de imprensa reais. A leitura deixa explícito que o desvio padrão é populacional ('σ, dividindo por n'). O método dos quartis (mediana das metades) é declarado na tela, porque outros métodos e calculadoras dão valores um pouco diferentes. A moda pode não existir ou ser múltipla. O Fator de Mentira segue a definição de Tufte (efeito relativo mostrado / efeito relativo real), não a simples razão entre barras; quando o dado não muda (efeito 0), mostra '—'. Barras devem partir do zero; linhas podem não partir, desde que rotuladas, então o medidor só pune a linha quando os rótulos estão ocultos. Achatar a pizza (inclinação sem parede) NÃO muda as proporções de área, porque a transformação é afim: a distorção vem da parede lateral e da perspectiva. Por isso a parcela visual é medida por contagem de pixels, e não estimada. Histograma sempre com classes de mesma largura. Alvos de toque de 44 px em 390 px, sem pilhas sobrepostas. Dispersão de duas variáveis (EM13MAT510) e pesquisa amostral ficam de fora e podem virar um sistema futuro.

## Verificação (comportamentos a testar)
- Empresa com o dono em 5: média 2,5, mediana 2, moda 2, σ ≈ 1,20. Com o dono arrastado para 20: média 4,0, mediana 2, σ ≈ 5,40, e a gangorra pende para a direita até o apoio ir para 4.
- Com o apoio na média, a régua fica reta (|θ| < 0,5°); com o apoio 0,5 unidade fora, inclina visivelmente (≥ 2°).
- 'Mostrar desvios' exibe a soma dos desvios como 0,00. Na Empresa com o dono em 20, o quadrado médio tem área 29,2 e lado 5,40.
- Duas turmas: A mostra média 6, mediana 6, Q1 5,5, Q3 6,5 e σ 0,95; B mostra média 6, mediana 6, Q1 3,5, Q3 8,5 e σ 2,65. Com largura 1, a classe 6–7 da turma B aparece vazia; com largura 5, B aparece como [9, 11].
- Arrastar a nota 4 da turma A para 3 a transforma em outlier (ponto isolado além do bigode).
- Açaí com eixo em 9,90: FM = 100 e barras 5×. Com eixo em 0: FM = 1,00. Ícones com eixo em 0: FM ≈ 2,04.
- Detetive, caso 4 (pizza 3D): a parcela visual da bicicleta aparece entre 22% e 26%. Tocar na fatia ou na perspectiva é aceito; tocar no título, não.
- Celular 390 px: arrastar bolinhas com o dedo não seleciona texto nem rola a página, e os rótulos de média e mediana próximos ficam em alturas diferentes, sem se sobrepor.

## Miniatura
Modo Gangorra, conjunto Empresa, com o dono arrastado para 20: régua equilibrada com o apoio em 4 (média), losango da mediana em 2, pilha da moda brilhando e a faixa de quadrados dos desvios, com o quadrado gigante do dono ao lado do quadrado médio de lado 5,40.
