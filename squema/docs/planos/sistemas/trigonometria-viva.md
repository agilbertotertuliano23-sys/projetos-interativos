# Trigonometria Viva

> **Área:** Matemática · **id:** `trigonometria-viva` · **Tipo:** misto · **Fundo:** ceu · **Potencial visual:** ★★★★★
> **Público:** 9º ano (semelhança de triângulos, razões trigonométricas, ângulos notáveis, medição indireta) e 1º e 2º anos do EM (lei dos senos, ciclo trigonométrico, radianos, fenômenos periódicos). Cerca de 3,7% do ENEM e muito cobrada em vestibulares.
> **BNCC:** EF09MA12, EF09MA14, EM13MAT306, EM13MAT308
> **Status:** planejado (especificação revisada) · demo a construir em `demos/trigonometria-viva.html`

Triângulos que crescem sem mudar o seno; uma praça 3D onde o aluno mede o prédio, a árvore e o rio pela sombra, pelo clinômetro e pela lei dos senos; e um ciclo trigonométrico que desenrola a senoide e mostra o que é um radiano.

**O aluno:** Amplia triângulos, mede o inalcançável numa praça 3D e gira o ciclo trigonométrico

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | triângulos, sombras, ciclo trigonométrico |
| Papel da IA | propor medições e explicar cada razão |
| Tags | 3D, modelos livres |

**Objetivos de aprendizagem**

- Entender seno, cosseno e tangente como razões de semelhança
- Medir alturas e distâncias inacessíveis com semelhança, tangente e lei dos senos
- Ligar o ciclo trigonométrico, o radiano e a senoide aos fenômenos periódicos

**Etapas da demonstração**

1. Aumente o triângulo com o ângulo fixo: as razões não mudam
2. 30°, 45° e 60° nascem do triângulo equilátero e do quadrado
3. Meça o prédio pela sombra de uma vara (Tales) às 9 h e às 15 h
4. O clinômetro e a lei dos senos medem a árvore e o rio; o drone confere
5. Ciclo: a sombra do ponto que gira vira a senoide; 1 radiano ≈ 57,3°

## Desenho da demonstração

### Conceito
Seno e cosseno costumam ser decorados como tabela. Aqui eles nascem de três imagens. RAZÕES: um triângulo retângulo tem dois sliders independentes, o do ângulo e o do tamanho. Aumentando o tamanho com o ângulo fixo, catetos e hipotenusa crescem e triângulos-fantasma semelhantes se empilham, mas as barras de sen, cos e tan não se mexem: a razão pertence ao ângulo, não ao triângulo. Os valores de 30°, 45° e 60° saem de um triângulo equilátero partido ao meio e de um quadrado cortado na diagonal. MEDIR O INALCANÇÁVEL (3D): numa praça com prédio, árvore e rio, a missão é medir a altura do prédio, a altura da árvore e a largura do rio sem subir e sem atravessar. Com a sombra de uma vara de 1 m (o método de Tales), o aluno descobre que às 9 h e às 15 h a razão altura/sombra é a mesma para todos os objetos naquele instante, e a altura calculada também. Com um clinômetro, ele mede o ângulo até o topo e calcula d·tan θ + altura dos olhos. No rio, um ângulo reto (tangente) ou dois ângulos (lei dos senos) dão a largura. No fim, um drone sobe e mostra o erro percentual de cada medida. CICLO: um ponto gira num círculo de raio 1, e suas sombras nos eixos são o cosseno e o seno; a sombra vertical desenrola a senoide ao lado. Um arco do tamanho do raio é 'enrolado' na borda para mostrar 1 radiano (≈ 57,3°) e por que pouco mais de 6 raios (2π) dão a volta. Uma roda-gigante liga a altura da cadeira ao tempo.

### Layout
Modo Razões (2D): triângulo grande com o vértice do ângulo θ à esquerda e os lados coloridos (cateto oposto vermelho, adjacente azul, hipotenusa roxa), com os fantasmas semelhantes em tracejado. À direita (abaixo, no celular) ficam três barras-razão com o valor e a fração viva, por exemplo 'oposto/hipotenusa = 3,0/5,0 = 0,600'. Modo Medir (3D): cena com a praça (modelos livres prédio, árvores, personagem, poste), um caminho, o rio com as duas margens, a árvore-alvo do outro lado e o personagem com o instrumento. No topo do palco, um HUD mostra a ferramenta ativa e a medida lida. No canto inferior, um 'caderno quadriculado' sobreposto desenha o triângulo em escala com os números do aluno. O campo de resposta e o botão do drone ficam no painel. Modo Ciclo (2D): círculo unitário à esquerda e gráfico senoidal à direita, na mesma altura, para que o y do ponto se alinhe com o gráfico; no celular, círculo em cima e gráfico embaixo, com a sombra do cosseno no eixo x do círculo. Celular (390 px): palco de ~60 vh. No 3D, botões grandes 'andar ±1 m', 'andar ±0,1 m', 'mirar' e 'medir' substituem o arraste de precisão. Pixel ratio limitado a 1,5 e sombras do three.js desligadas, porque as sombras são malhas calculadas.

### Modos
- **Razões** — Sliders de θ (1° a 89°) e da hipotenusa (1 a 10), fantasmas semelhantes, barras de sen, cos e tan e a previsão 'se dobrar o tamanho, o seno...'. O botão 'De onde vêm 30°, 45° e 60°?' mostra o equilátero de lado 2 e o quadrado de lado 1. Desafios de montar ângulos a partir de razões (tan θ = 0,75, sen θ = cos θ, rampa de 8,33%).
- **Medir o inalcançável (3D)** — Três medições. O prédio pela sombra (Tales), com controle da hora. A árvore pelo clinômetro e, no EM, pelo método de dois pontos quando a base do prédio está cercada. A largura do rio pelo ângulo reto (tangente) ou por dois ângulos (lei dos senos). A trena encaixa em pontos marcados, o instrumento tem precisão de 1° (transferidor) ou 0,1° (teodolito), e a resposta digitada é conferida pelo drone. 'Nova praça' sorteia novas medidas.
- **Ciclo** — Ponto arrastável no círculo de raio 1, com leituras em graus e em radianos (frações de π nos ângulos notáveis), sombras do cosseno e do seno e o gráfico que se desenrola. Inclui 'Medir 1 radiano', sinais por quadrante, ângulos simétricos (180° − θ, 180° + θ, 360° − θ) e uma roda-gigante.

### Controles
- Segmentado de modo: Razões | Medir (3D) | Ciclo
- Razões: slider do ângulo θ (1°–89°, passo 0,1°); slider de tamanho (hipotenusa 1–10); alternador 'fantasmas semelhantes'; botões '30°', '45°', '60°' e 'De onde vêm?'; botão 'Prever: e se dobrar?' (três opções antes da animação)
- Medir: segmentado de ferramenta 'Sombra · Clinômetro · Rio'; slider da hora, de 7 h a 17 h (passo de 15 min); botões 'fincar vara' e 'trena: início/fim' (toque em pontos marcados); botões 'andar −1 m', '+1 m', '−0,1 m' e '+0,1 m'; botão 'mirar o topo'; segmentado 'instrumento: transferidor (1°) · teodolito (0,1°)'; campo 'minha resposta (m)'; botões 'Chamar o drone' e 'Nova praça'; alternador 'caderno quadriculado'
- Ciclo: ponto arrastável; segmentado de unidade 'graus · radianos · ambos'; botões 'Rodar' e 'Pausar'; alternadores 'desenrolar seno', 'desenrolar cosseno', 'sinais por quadrante' e 'ângulos simétricos'; botão 'Medir 1 radiano'; alternador 'Roda-gigante' com slider de tempo de 0 a 12 min
- Leituras: θ (em ° e em rad), cateto oposto, adjacente, hipotenusa, sen, cos, tan; na cena: hora, elevação do Sol, sombras medidas, distância andada, ângulo lido, resposta e erro %

### Modelo
RAZÕES no triângulo retângulo: sen θ = oposto/hipotenusa, cos θ = adjacente/hipotenusa, tan θ = oposto/adjacente = sen θ/cos θ, e sen²θ + cos²θ = 1 (Pitágoras). Com hipotenusa h: oposto = h·sen θ e adjacente = h·cos θ. Ângulos notáveis: o equilátero de lado 2 cortado ao meio dá catetos 1 e √3 e hipotenusa 2, logo sen 30° = 1/2, cos 30° = √3/2 ≈ 0,866, tan 30° = 1/√3 ≈ 0,577, sen 60° = √3/2, cos 60° = 1/2, tan 60° = √3 ≈ 1,732. O quadrado de lado 1 tem diagonal √2, logo sen 45° = cos 45° = √2/2 ≈ 0,707 e tan 45° = 1. SOL (modelo simplificado: equinócio, latitude φ = −23,5°, hora solar): ângulo horário H = 15°·(hora − 12). Vetor do Sol em (leste, norte, cima) = (−sen H, −sen φ·cos H, cos φ·cos H), e elevação α = asen(cos φ·cos H). Um objeto vertical de altura h faz sombra de comprimento h/tan α, no sentido oposto ao Sol. Valores: 7 h → α = 13,7° e sombra da vara de 1 m = 4,09 m; 8 h → 27,3°, 1,94 m; 9 h → 40,4°, 1,17 m; 10 h → 52,6°, 0,77 m; 11 h → 62,4°, 0,52 m; 12 h → 66,5°, 0,43 m, com o Sol ao norte e as sombras apontando para o sul. À tarde os valores se repetem, espelhados. A sombra do prédio é um polígono calculado (envoltória convexa da base com o topo projetado) e desenhado como malha no chão. A trena mede da quina marcada até a sombra dessa mesma quina, que tem comprimento exato H/tan α. Tales: H/S_prédio = 1 m/S_vara, logo H = S_prédio/S_vara (em metros). CLINÔMETRO: olhos a 1,60 m. O ângulo até o topo é θ = atan((H − 1,60)/d), arredondado para 1° ou 0,1°, e a altura é 1,60 + d·tan θ. Com a base inacessível (dois pontos): o aluno mede α no ponto A (mais longe) e β no ponto B (mais perto), separados por d, e H − 1,60 = d·tan α·tan β/(tan β − tan α). RIO: (a) ângulo reto: em A, mira-se a árvore T na outra margem, perpendicular à margem; anda-se d pela margem até B e mede-se β = ângulo ABT; largura = d·tan β. (b) Dois ângulos: base AB = c medida na margem, ângulos Â = TÂB e B̂ = TB̂A, e Ĉ = 180° − Â − B̂. Pela lei dos senos, AT = c·sen B̂/sen Ĉ, e a largura é AT·sen Â. DRONE: sobe até o topo, mostra a medida real e o erro % = |resposta − real|/real × 100, com selo 'ótimo' até 5% e 'bom' até 10%. CICLO: P(θ) = (cos θ, sen θ). θ em radianos = comprimento do arco/raio; 1 rad = 180°/π ≈ 57,2958°; 2π ≈ 6,283, ou seja, 6 raios inteiros e mais 0,283 de raio. Conversão: rad = graus·π/180. Sinais (cos, sen): 1º quadrante (+, +); 2º (−, +); 3º (−, −); 4º (+, −). Simetrias: sen(180° − θ) = sen θ e cos(180° − θ) = −cos θ; sen(180° + θ) = −sen θ; cos(360° − θ) = cos θ e sen(360° − θ) = −sen θ. No gráfico, o eixo x vai de 0 a 2π, com marcas em π/2, π, 3π/2 e 2π, e o y do ponto é levado horizontalmente até o gráfico. RODA-GIGANTE (fictícia): diâmetro de 60 m, eixo a 32 m do chão, volta completa em 12 min, partindo do ponto mais baixo: h(t) = 32 − 30·cos(2π·t/12) metros, com h(0) = 2 m e h(6) = 62 m.

### Dados
PRAÇA PADRÃO (usada na miniatura e na 1ª rodada): prédio de 18,0 m (6 andares de 3 m), árvore de 7,5 m, rio de 24,0 m. 'Nova praça' sorteia prédio de 12 a 30 m (passo 0,5), árvore de 5 a 10 m e rio de 15 a 40 m. EXEMPLOS VERIFICADOS. Às 9 h, a vara de 1 m faz sombra de 1,17 m e o prédio de 18 m faz 21,13 m; 21,13/1,174 = 18,0. Às 15 h, os comprimentos são os mesmos, espelhados. Com o clinômetro a d = 20 m do prédio, a leitura é 39,4°, e 1,60 + 20·tan 39,4° ≈ 18,0 m. Com o transferidor (39°), dá ≈ 17,8 m, erro de cerca de 1%. Pelo método de dois pontos, a 30 m e a 20 m do prédio (d = 10 m), os ângulos são 28,7° e 39,4°. Arredondados para 29° e 39°, a altura sai ≈ 19,2 m (erro ≈ 6,5%), o que rende uma boa discussão sobre sensibilidade. Rio de 24 m: pelo ângulo reto com d = 20 m, β ≈ 50,2°. Por dois ângulos, com base c = 30 m e a árvore em frente a um ponto a 12 m de A, Â ≈ 63,4°, B̂ ≈ 53,1° e a largura dá 24,0 m (com 63° e 53°, ≈ 23,8 m). TABELA DE NOTÁVEIS (sen / cos / tan): 30° → 0,500 / 0,866 / 0,577; 45° → 0,707 / 0,707 / 1,000; 60° → 0,866 / 0,500 / 1,732. Triângulo 3-4-5: tan θ = 0,75 → θ ≈ 36,87°. RAMPAS: a ABNT NBR 9050 (acessibilidade) limita a inclinação das rampas a 8,33% (1:12), o que dá θ = atan(1/12) ≈ 4,76°. HISTÓRIA: Tales de Mileto (séc. VI a.C.) mediu a altura de uma pirâmide pela sombra, segundo relatos de Plutarco e de Diógenes Laércio. Hiparco e Ptolomeu (Almagesto) tabelaram cordas, as antecessoras do seno. O termo 'radiano' (radian) foi usado por James Thomson em 1873.

### Desafios
RAZÕES: (1) Previsão: antes de dobrar o tamanho, o aluno escolhe o que acontece com sen θ (dobra / fica igual / cai pela metade), e a animação confirma 'fica igual'. (2) 'Monte tan θ = 0,75': conferido por |tan θ − 0,75| < 0,005 (θ ≈ 36,9°); ao acertar, aparece o triângulo 3-4-5. (3) 'Ache θ com sen θ = cos θ': 45° ± 0,3°. (4) 'Rampa acessível': ajustar θ à inclinação máxima da NBR 9050 (tan θ = 0,0833), 4,76° ± 0,1°. MEDIR: (5) Altura do prédio pela sombra, com erro de até 5% no drone. Bônus: repetir em outra hora e obter o mesmo valor (diferença de até 3%). (6) Altura da árvore pelo clinômetro, até 5%. (7) EM: altura do prédio com a base cercada (dois pontos), até 8% com transferidor ou 2% com teodolito. (8) Largura do rio pelo ângulo reto ou pela lei dos senos, até 5%. CICLO: (9) 'Encontre os dois ângulos entre 0 e 2π com sen θ = 0,5': arrastar o ponto e marcar π/6 (30°) e 5π/6 (150°), com tolerância de ±1°. (10) 'Onde cos θ = −1?': em π. (11) Roda-gigante: 'Em que instantes a cadeira está a 47 m?': t = 4 min e t = 8 min (±0,1 min).

## Guia (mascote)

**Abertura:** Mexa no slider de tamanho e deixe o ângulo parado. Os lados crescem... e as barras de seno, cosseno e tangente? Faça sua aposta antes de soltar o dedo.

- **Por que o seno não muda quando o triângulo cresce?**  
  Todos os triângulos retângulos com o mesmo ângulo são semelhantes: os lados crescem na mesma proporção. Se o cateto oposto dobra, a hipotenusa também dobra, e a razão oposto/hipotenusa continua igual. O seno é uma propriedade do ângulo.
- **De onde vem sen 30° = 1/2?**  
  Corte um triângulo equilátero de lado 2 ao meio. Surge um triângulo retângulo com ângulos de 30° e 60°, hipotenusa 2 e cateto oposto ao 30° igual a 1. Logo, sen 30° = 1/2.
- **Como Tales mediu a pirâmide com uma vara?**  
  No mesmo instante, os raios do Sol chegam paralelos e formam triângulos semelhantes com a vara e com a pirâmide. Então a razão altura/sombra é a mesma para os dois: H = sombra da pirâmide × (altura da vara / sombra da vara).
- **Por que somar a altura dos olhos?**  
  Porque o clinômetro mede o ângulo a partir dos seus olhos, não do chão. A conta d·tan θ dá só a parte acima dos olhos; falta somar o 1,60 m de baixo.
- **O que é um radiano?**  
  É o ângulo que corresponde a um arco do mesmo comprimento do raio, cerca de 57,3°. Como a circunferência mede 2π raios, uma volta completa tem 2π ≈ 6,28 radianos.
- **Por que sen 150° é igual a sen 30°?**  
  No ciclo, os pontos de 150° e de 30° são simétricos em relação ao eixo vertical, então estão na mesma altura e têm o mesmo seno. Só o cosseno troca de sinal.
- **Qual é a ligação entre o círculo e a senoide?**  
  A senoide é a altura de um ponto que gira no círculo, desenhada ao longo do tempo. Por isso ela se repete a cada volta (2π) e vai de −1 a 1, como a altura da cadeira de uma roda-gigante.
- **Quando usar a lei dos senos?**  
  Quando o triângulo não é retângulo e você conhece um lado e dois ângulos, como no rio. Em qualquer triângulo, a/sen A = b/sen B = c/sen C.

## Para usar em sala
- Previsão coletiva no modo Razões: todos apostam o que acontece com o seno quando o triângulo dobra; depois a turma discute semelhança.
- No pátio, repitam a medição pela sombra com um cabo de vassoura, anotem a hora e comparem com o modo Medir.
- Em grupos, cada um mede a mesma 'Nova praça' com uma ferramenta diferente e compara o erro mostrado pelo drone; depois discutam as fontes de erro (arredondar o ângulo, altura dos olhos).
- No Ciclo, peça que encontrem dois ângulos com o mesmo seno e expliquem pela simetria antes de usar a calculadora.

## Como a IA entra
O guia recebe o modo, θ e o tamanho, os valores das razões, a hora e a elevação do Sol, as medidas da trena e do clinômetro, a resposta do aluno e o erro do drone. Ele explica cada razão com os números da tela, propõe a próxima medição, monta a proporção de Tales ou a equação da tangente com os valores do aluno e comenta as fontes de erro. No Ciclo, explica a redução do ângulo atual ao 1º quadrante. Uma IA conectada pode gerar problemas de altura e distância com contextos locais e avaliar o raciocínio que o aluno escrever.

## Cuidados de conteúdo
Nunca misturar graus e radianos: toda leitura tem unidade explícita (° ou rad), o modo de unidade fica visível e Math.sin recebe radianos. O 3D fica restrito ao modo Medir (os outros modos são canvas 2D) para não pesar no celular. Não usar o shadow map do three.js para medir: as sombras são polígonos calculados geometricamente, para que a medida bata com o modelo. O modelo do Sol é simplificado (equinócio, hora solar, latitude 23,5° S), e a demo diz isso; em outras datas as sombras mudam. Tales só vale para objetos verticais, em chão plano, no MESMO instante. A leitura dos ângulos é arredondada (1° ou 0,1°) de propósito; com ângulos pequenos, o método de dois pontos amplifica os erros, e o guia comenta isso. Não sobrepor o Funções Visuais: aqui não se ajustam os parâmetros a, b, c e d, e o gráfico é só a sombra do ponto que gira. A lei dos cossenos fica como desafio extra opcional. A roda-gigante é fictícia, sem nome de atração real. Os toques em pontos 3D têm tolerância de 30 px, e os números são arredondados a 0,1 m.

## Verificação (comportamentos a testar)
- Razões: com θ = 30°, sen = 0,500, cos = 0,866 e tan = 0,577 para qualquer tamanho de 1 a 10 (variação < 0,001).
- Com θ = 36,87° e hipotenusa 5, os catetos medem 3,00 e 4,00.
- Medir às 9 h: sombra da vara de 1,17 m e do prédio de 18 m de 21,1 m. Às 15 h, os mesmos comprimentos com direção espelhada. Às 12 h, as sombras apontam para o sul.
- O clinômetro a 20 m do prédio de 18 m lê 39,4° no teodolito e 39° no transferidor.
- Rio com base de 30 m: ângulos de 63,4° e 53,1°, e a fórmula dá 24,0 m.
- Drone: a resposta 17,8 m para um prédio de 18 m mostra erro de 1,1% e o selo 'ótimo'.
- Ciclo: arrastar até 150° mostra sen = 0,5, cos = −0,866 e 5π/6 rad. 'Medir 1 radiano' termina em 57,3°, e a contagem de raios na volta mostra 6 + 0,283.
- Roda-gigante: h(0) = 2 m, h(4) = 47 m e h(6) = 62 m.
- Em 390 px, a cena 3D roda a 30 fps ou mais, e os botões de andar e mirar ficam acessíveis sem cobrir o prédio.

## Miniatura
Modo Medir às 9 h: praça 3D com o prédio, a vara de 1 m e as duas sombras longas desenhadas no chão, a trena amarela sobre a sombra do prédio com o rótulo '21,1 m' e, no canto, o caderno quadriculado com os dois triângulos semelhantes lado a lado.
