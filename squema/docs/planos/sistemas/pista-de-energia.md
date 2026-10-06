# Pista de Energia

> **Área:** Física · **id:** `pista-de-energia` · **Tipo:** 2D · **Fundo:** ceu · **Potencial visual:** ★★★★★
> **Público:** 1º ano do Ensino Médio (trabalho, energia e conservação para o ENEM); 8º e 9º ano para formas e transformações de energia, no modo 'Desenhe a pista'
> **BNCC:** EM13CNT101, EM13CNT301, EF08CI01
> **Status:** planejado (especificação revisada) · demo a construir em `demos/pista-de-energia.html`

Quatro rampas de mesma altura disputam uma corrida: a ciclóide vence, mas todas chegam com a mesma velocidade. Há também uma pista desenhada pelo aluno com barras de energia ao vivo e um looping que só se completa largando de 2,5 R ou mais.

**O aluno:** Aposta na corrida das rampas, desenha a pista e acha a altura mínima do looping

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | energia cinética, potencial e térmica |
| Papel da IA | comparar apostas com a conservação da energia |
| Tags | 2D |

**Objetivos de aprendizagem**

- Reconhecer a conservação da energia mecânica: sem atrito, Ec + Ep fica constante
- Separar 'mesma velocidade final' de 'mesmo tempo' e ver que v = √(2gh) depende só da altura
- Explicar a dissipação por atrito e calcular alturas e compressões mínimas (looping e mola)

**Etapas da demonstração**

1. Aposta: entre reta, parábola, mergulho e ciclóide, qual bolinha chega primeiro e qual chega mais rápida?
2. Corrida em câmera lenta com cronômetros e velocímetros: a ciclóide vence em 0,71 s e todas chegam a 4,43 m/s
3. O aluno desenha a pista com o dedo e solta o carrinho; as barras de Ec, Ep e térmica e a linha de energia acompanham o percurso
4. Com atrito ligado, a barra térmica cresce, a linha de energia desce e algumas estrelas ficam inalcançáveis
5. Looping: prever se largar de 2R basta, testar, achar 2,5R e depois lançar com a mola (½kx²)

## Desenho da demonstração

### Conceito
A energia funciona como uma conta, e aqui o aluno vê a conta fechar. A sacada dupla vem da braquistócrona. Quatro trilhos ligam os mesmos dois pontos: uma reta, uma parábola, um 'mergulho' que desce abaixo da chegada e uma ciclóide. O aluno aposta em quem chega primeiro e em quem chega mais rápida. Ele descobre que a ciclóide, mais longa, vence (0,71 s contra 0,84 s da reta) e que as quatro chegam com a MESMA velocidade, 4,43 m/s, porque v = √(2gh) só depende da altura. O formato muda o tempo, não a velocidade final. Depois ele desenha a própria pista. Barras empilhadas de cinética, potencial e térmica mantêm o total fixo, e uma 'linha de energia' horizontal mostra até onde o carrinho consegue subir. Com isso, uma estrela posta acima da largada fica impossível de pegar, e com atrito a linha desce a cada vaivém. No looping, a previsão 'basta largar da altura do topo' falha: abaixo de 2,5 R a normal zera antes do topo e o carrinho descola em parábola. A mola fecha a conta com a energia elástica ½kx².

### Layout
Palco 2D com fundo céu, em vista lateral, com régua de altura em metros à esquerda. Modo 1: os quatro trilhos aparecem sobrepostos em cores diferentes, ligando A (no alto, à esquerda) a B (embaixo, à direita). Cada trilho tem cronômetro e velocímetro na ponta, e o placar das duas apostas fica no topo. Um botão sobrepõe a roda que gera a ciclóide, rolando. Modo 2: a pista ocupa os dois terços superiores. À direita fica a coluna de barras empilhadas Ec, Ep e térmica, com o total marcado por uma linha, mais um velocímetro. A linha de energia tracejada atravessa o palco, e as estrelas aparecem como ícones sobre a pista. Modo 3: rampa e loop circular, com a seta da normal no carrinho e a leitura de N. Se o carrinho descolar, a trajetória parabólica aparece pontilhada; a mola comprimida aparece no início quando escolhida. No celular, as barras de energia viram uma faixa horizontal fina abaixo da pista, o painel vem embaixo e o desenho com o dedo é suavizado.

### Modos
- **Corrida das rampas** — Quatro trilhos com o mesmo desnível de 1 m (reta, parábola, mergulho e ciclóide). O aluno faz duas apostas antes da largada ('chega primeiro' e 'chega mais rápida', com a opção 'empate'). A corrida roda em câmera lenta 5×, com tempos e velocidades de chegada e o placar de acertos.
- **Desenhe a pista** — O aluno traça a pista com o dedo; ela é suavizada e não pode ter laços nem trechos verticais. Depois ele posiciona a largada e solta um carrinho preso ao trilho, como numa montanha-russa. Há barras Ec/Ep/térmica, linha de energia, três níveis de estrelas, atrito ajustável, gravidade da Terra ou da Lua e pistas prontas.
- **Looping** — Rampa e loop circular de raio R ajustável, com largada por altura h ou por mola (k, x). A seta da normal encolhe até sumir. Abaixo de 2,5 R o carrinho descola e cai em parábola; o desafio é achar a menor altura ou a menor compressão que completa a volta.

### Controles
- Seletor de modo (Corrida / Desenhe a pista / Looping)
- Corrida: dois grupos de botões de aposta ('chega primeiro': 4 trilhos; 'chega mais rápida': 4 trilhos ou empate), botão Largar, alternador Câmera lenta, botão Mostrar a roda da ciclóide
- Pista: área de desenho com o dedo, botões Limpar e Pistas prontas (meia-cúpula, vale duplo, montanha-russa de três morros), alça arrastável da largada, seletor de nível de estrelas (1–3), slider de atrito μ (0–0,10), seletor de gravidade (Terra 9,8 / Lua 1,62 m/s²), slider de massa (20–80 kg), botão Soltar/Pausar
- Looping: slider de raio R (1–3 m), seletor de largada (altura / mola), slider de altura h (2–8 m) ou sliders de k (200–2000 N/m) e de compressão x (0–0,8 m), botões Lançar e Previsão (sim/não)
- Leituras: altura, velocidade, Ec, Ep, E elástica, térmica, total (J), normal no topo (N), tempo (s)

### Modelo
g = 9,8 m/s² (Lua: 1,62 m/s²). Modelo de partícula sem rotação (um carrinho ou uma conta deslizando), sem resistência do ar. CORRIDA: A = (0; 0) e B = (L; −H), com H = 1,00 m e L = π/2 m ≈ 1,571 m, para que a ciclóide termine no seu ponto mais baixo. Trilhos: reta y = −H·x/L; parábola y = −H·[1 − (1 − x/L)²]; mergulho y = −H·x/L − 0,8·sen(πx/L), que desce até y ≈ −1,36 m (0,36 m abaixo de B) e sobe até B; ciclóide x = r·(φ − sen φ), y = −r·(1 − cos φ), com r = 0,5 m e φ de 0 a π. Em cada trilho, v(s) = √(−2g·y(s)) pela conservação, e t = ∫ds/v, pré-calculado numa tabela de 2000 pontos. A animação interpola s(t). Tempos: ciclóide 0,710 s (analítico π·√(r/g) = 0,7096 s); parábola 0,739 s; mergulho 0,775 s; reta 0,841 s (analítico √(2D²/(gH)), com D = 1,862 m). A velocidade de chegada é a mesma em todos: √(2gH) = 4,43 m/s. PISTA DESENHADA: o traço é reamostrado em cerca de 400 pontos por comprimento de arco e suavizado (média móvel + Catmull-Rom). x é sempre crescente e a inclinação fica limitada a |dy/dx| ≤ 3 (71,6°). O carrinho fica preso ao trilho e não descola neste modo. Estado (s, v): dv/dt = −g·(dy/ds) − sinal(v)·μ·máx(0; g·cos α + v²·κ), em que κ é a curvatura com sinal e cos α = dx/ds. Integra-se com passo fixo de 1/240 s (RK4 ou semi-implícito). Contabilidade: Ep = m·g·y, Ec = ½·m·v² e térmica += μ·N·|ds|. Para eliminar a deriva numérica, |v| é recalculado a cada passo por √(2·(E0 − térmica − m·g·y)/m), mantendo o sinal. A linha de energia fica na altura h_E = (E0 − térmica)/(m·g). As pontas da pista têm amortecedor elástico. LOOPING: uma rampa reta leva ao fundo do loop de raio R (padrão 2 m). No loop, o ângulo θ é medido a partir do fundo; v² = v0² − 2·g·R·(1 − cos θ) e a normal é N = m·v²/R + m·g·cos θ. No topo (θ = 180°), N = m·v²/R − m·g. Se N < 0, o carrinho descola e vira projétil até cruzar de novo o círculo ou o chão. O descolamento ocorre em cos θ = −2(h − R)/(3R). Para completar a volta é preciso v_topo² ≥ g·R, o que dá h_min = 2,5·R (5,0 m para R = 2 m). Mola: ½·k·x² = m·g·h_equivalente. Com m = 1 kg, R = 2 m e k = 500 N/m, x_min = √(2·m·g·2,5R/k) = 0,443 m. O loop não tem atrito.

### Dados
Os tempos da corrida foram calculados numericamente (2·10⁵ passos) e conferidos com as fórmulas analíticas da reta e da ciclóide: ciclóide 0,710 s; parábola 0,739 s; mergulho 0,775 s; reta 0,841 s; velocidade final de 4,43 m/s em todos. Em H = 2 m, os tempos se multiplicam por √2. História: Johann Bernoulli propôs o problema da braquistócrona em 1696, na Acta Eruditorum. Responderam Newton (anonimamente, em 1697), Leibniz, Jakob Bernoulli e L'Hôpital, e a resposta é a ciclóide, que Huygens já mostrara ser tautócrona (Horologium Oscillatorium, 1673). Gravidade: Terra 9,8 m/s², Lua 1,62 m/s². Looping: h_min = 2,5 R para uma partícula que desliza; uma esfera maciça que rola sem deslizar precisa de 2,7 R. Loops de montanhas-russas modernas têm forma de gota (clotoide) para reduzir a aceleração sentida no fundo; o primeiro moderno foi o Revolution (Six Flags Magic Mountain, 1976). Pistas prontas: meia-cúpula de 4 m; vale duplo com picos de 5 m e 3 m; montanha-russa de três morros de 6, 4 e 5 m. Estrelas: o nível 1 tem três estrelas abaixo da largada. O nível 2 tem uma estrela no alto de um segundo morro, 0,2 m abaixo da largada, que só se pega com pouco ou nenhum atrito. O nível 3 tem uma estrela 0,5 m ACIMA da largada, impossível de pegar, e serve de gatilho para a pergunta do guia.

### Desafios
Corrida: o aluno faz as duas apostas antes de largar, e elas são conferidas automaticamente (primeiro: ciclóide; mais rápida na chegada: empate). O placar de acertos fica guardado no aparelho para o professor comparar rodadas. Pista: três níveis de estrelas; uma estrela é coletada quando o carrinho passa a menos de 0,15 m dela. No nível 2, se a linha de energia cair abaixo da estrela por causa do atrito, o guia pede uma explicação. No nível 3, o aluno escolhe entre três explicações ('falta velocidade na largada', 'a energia total não alcança aquela altura', 'a pista está errada'), e só a segunda vale. Looping: antes do primeiro lançamento, o aluno responde à previsão 'largar da altura do topo (2R) basta?' (sim/não). O desafio 'menor altura que completa o loop' aceita h entre 2,5R e 2,6R com volta completa. No desafio da mola, para um k sorteado, o aluno calcula o x mínimo e confere com tolerância de ± 0,02 m.

## Guia (mascote)

**Abertura:** Energia não some, só muda de forma. Antes de largar a corrida, <b>aposte</b>: qual bolinha chega primeiro e qual chega mais rápida lá embaixo?

- **Por que a ciclóide ganha se ela é mais comprida?**  
  Ela começa quase em queda livre: desce muito logo no início, ganha velocidade cedo e aproveita essa velocidade no resto do caminho. A reta é o caminho mais curto, mas a bolinha passa muito tempo devagar. Esse é o problema da <b>braquistócrona</b>, proposto por Johann Bernoulli em 1696.
- **Se uma ganhou, por que todas chegaram com a mesma velocidade?**  
  Sem atrito, a energia potencial perdida vira cinética: m·g·h = ½·m·v², então v = √(2·g·h). Só a altura da queda importa (1 m dá 4,43 m/s), não o formato do caminho. O formato muda o TEMPO, não a velocidade final.
- **O carrinho pode subir mais alto do que largou?**  
  Sem um empurrão extra, não. A energia total é fixada na largada (m·g·h₀). No ponto mais alto possível toda ela seria potencial, então a altura máxima é h₀: é a <b>linha de energia</b>. Com atrito, essa linha desce.
- **Para onde vai a energia quando tem atrito?**  
  Ela vira energia <b>térmica</b>: as rodas e a pista esquentam um pouquinho. A soma Ec + Ep diminui, mas Ec + Ep + térmica continua igual à da largada. A energia se conserva; o que diminui é a energia mecânica.
- **Onde a velocidade é máxima?**  
  No ponto mais baixo da pista: ali a energia potencial é mínima e sobra mais energia para a cinética. Com atrito, o máximo continua no ponto mais baixo, mas fica menor a cada passagem.
- **Por que não basta largar da altura do topo do loop?**  
  No topo o carrinho precisa estar andando. Para não descolar, a gravidade sozinha tem de fazer a curva, e isso exige v² ≥ g·R. Somando essa energia cinética à potencial do topo (altura 2R), a largada mínima fica em h = <b>2,5·R</b>. Abaixo disso a normal zera antes do topo e o carrinho cai.
- **A massa muda alguma coisa?**  
  Muda o tamanho das energias em joules, mas não o movimento: m aparece dos dois lados de m·g·h = ½·m·v² e se cancela. Um carrinho vazio e um lotado fazem a mesma corrida (sem atrito e sem ar).
- **Como a mola entra na conta?**  
  Comprimida, ela guarda energia potencial elástica ½·k·x², que vira cinética quando a mola é solta. Para o loop de R = 2 m com 1 kg são precisos m·g·2,5R = 49 J; com k = 500 N/m, isso dá x ≈ 0,44 m.

## Para usar em sala
- Faça a turma votar em voz alta nas duas apostas antes da corrida. Registre os votos no quadro e só então largue; a maioria costuma apostar na reta.
- Na pista desenhada, peça que cada dupla crie uma pista em que o carrinho passe três vezes pela mesma estrela e explique o porquê usando a linha de energia.
- No looping, peça o cálculo de h_min para R = 1,5 m (3,75 m) antes de testar. Depois discuta por que os loops das montanhas-russas reais têm forma de gota.

## Como a IA entra
O guia recebe as apostas, os tempos e as velocidades de chegada de cada trilho, a forma da pista (altura de largada, picos e vales), a posição das estrelas e quais foram coletadas, μ, g e a massa. Recebe também, a cada instante, Ec, Ep, a energia térmica e o total. No looping, recebe R, h ou (k, x), a normal mínima e se houve descolamento. Ele compara a aposta com o resultado, pede previsões ('em que ponto a velocidade é máxima?', 'esta estrela é alcançável?') e explica tudo com a conta da energia. Uma IA conectada poderia criar níveis de estrelas e conferir os cálculos do aluno.

## Cuidados de conteúdo
A física ao longo da pista é 1D no comprimento de arco, com passo fixo e correção de deriva pela energia; não usar motor de corpo rígido. Os tempos da corrida precisam bater com os analíticos (ciclóide 0,710 s e reta 0,841 s) com erro menor que 1%. O modelo é de partícula que desliza. Bolas reais que rolam chegam mais devagar (v = √(10gh/7) para esfera maciça), mas a ordem da corrida não muda; dizer isso se o aluno perguntar. Na pista desenhada o carrinho fica preso ao trilho e não descola; o descolamento só existe no Looping, com o círculo analítico. Limitar o desenho a x crescente e inclinação de no máximo 71,6°. A abordagem precisa ser original em relação ao Energy Skate Park do PhET, com foco em apostas, estrelas e looping com mola. Não há projéteis fora do looping (o lançamento oblíquo fica no Laboratório de Mecânica).

## Verificação (comportamentos a testar)
- Corrida: chegada na ordem ciclóide (0,71 s), parábola (0,74 s), mergulho (0,78 s) e reta (0,84 s), todas a 4,43 m/s (± 0,02).
- Pista sem atrito: Ec + Ep varia menos de 0,5% em 60 s de vaivém, e o carrinho volta exatamente à altura de largada.
- Com μ = 0,05: a barra térmica cresce, a soma das três barras fica constante e a linha de energia desce a cada passagem.
- Uma estrela 0,5 m acima da largada nunca é coletada.
- Na Lua, a mesma pista dá velocidades √(9,8/1,62) ≈ 2,46 vezes menores e tempos 2,46 vezes maiores, com as mesmas alturas alcançadas.
- Loop com R = 2 m: com h = 4,9 m a normal zera a cerca de 165° (antes do topo) e o carrinho descola; com h = 5,1 m completa a volta, com N no topo ≈ 0,98 N para 1 kg.
- Mola com k = 500 N/m: x = 0,45 m completa o loop e x = 0,43 m descola.

## Miniatura
Modo 'Corrida das rampas' em câmera lenta, no meio da descida: quatro trilhos coloridos, a bolinha da ciclóide visivelmente à frente, cronômetros rodando e as duas apostas marcadas no placar do topo.
