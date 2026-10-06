# Forças em Ação

> **Área:** Física · **id:** `forcas-em-acao` · **Tipo:** 2D · **Fundo:** papel · **Potencial visual:** ★★★★★
> **Público:** 1º ano do Ensino Médio (dinâmica para o ENEM e vestibulares); 9º ano como introdução a forças e movimento
> **BNCC:** EM13CNT101, EM13CNT204, EM13CNT301, EM13CNT306
> **Status:** planejado (especificação revisada) · demo a construir em `demos/forcas-em-acao.html`

Um disco de hóquei de ar que só se move por petelecos, um caixote com diagrama de corpo livre e atrito ao vivo, e um elevador com balança. Nos três, o aluno prevê antes de testar as leis de Newton.

**O aluno:** Dá petelecos num disco sem atrito, empurra um caixote e acelera um elevador

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | inércia, atrito, peso aparente |
| Papel da IA | explicar qual lei de Newton está em jogo |
| Tags | 2D |

**Objetivos de aprendizagem**

- Distinguir força, velocidade e aceleração: a força muda a velocidade, não a mantém
- Aplicar F_R = m·a com atrito estático e cinético, inclusive no plano inclinado
- Explicar o peso aparente e identificar os pares de ação e reação

**Etapas da demonstração**

1. Mesa de ar vista de cima: o aluno desenha a seta de previsão, dá um peteleco e vê o triângulo v_antes + Δv = v_depois
2. Fases verificadas automaticamente: Pare no alvo, Curva de 90°, Corte o fio e Slalom, com estrelas por economia de petelecos
3. Caixote: a seta de força, o diagrama de corpo livre e os gráficos v×t e atrito×força mostram o atrito estático acompanhando o empurrão até o pico
4. Rampa: o aluno inclina até o bloco deslizar e descobre μe = tg θ do material misterioso
5. Elevador: a balança marca m(g + a), zera na queda livre, e o guia compara com a previsão do aluno

## Desenho da demonstração

### Conceito
As três leis de Newton em três cenas, e em todas o aluno prevê antes de ver. Na mesa de ar, inspirada na Dynaturtle de Andrea diSessa (MIT), o disco nunca é arrastado: ele só recebe petelecos de impulso fixo, e cada peteleco soma um Δv à velocidade que o disco já tinha. A sacada é a fase 'Curva de 90°'. Quase todo mundo chuta para cima e o disco sai em diagonal, e o triângulo v_antes + Δv = v_depois desenhado no palco mostra por quê: para virar é preciso também cancelar a velocidade antiga. A mesma mesa sem atrito prova a inércia, já que o disco não para sozinho, e o bônus 'Corte o fio' desmonta a ideia, documentada por McCloskey (1980), de que o disco 'continua curvando'. No caixote, o diagrama de corpo livre ao vivo e o gráfico 'atrito × força aplicada' mostram o atrito estático crescendo igual ao empurrão até μe·N e caindo para μc·N quando o caixote escorrega. A rampa revela que μe = tg θ. No elevador, a balança marca 67 kg, 60 kg, 53 kg e 0 kg na queda livre, e isso explica o peso aparente e por que os astronautas flutuam.

### Layout
Palco 2D com fundo papel. Modo 1: a mesa de ar ocupa o palco inteiro, vista de cima, com grade de 1 m e bordas arredondadas. Um HUD no topo mostra a fase, os petelecos restantes e as estrelas. No instante do peteleco, o triângulo de vetores aparece ampliado ao lado do disco (v_antes em azul, Δv em laranja, v_depois em verde), e a seta de previsão fica tracejada. Modo 2: o caixote fica sobre a pista no terço superior, e a câmera o acompanha numa pista longa com marcas de metro. O diagrama de corpo livre aparece ampliado num quadro ao lado, e embaixo ficam dois gráficos pequenos lado a lado (v×t e Fat×F). No alternador 'Rampa', a pista vira plano inclinado com transferidor e as setas P∥ e P⊥. Modo 3: o poço do elevador fica à esquerda, com o personagem sobre a balança de mostrador grande e o andar indicado. À direita ficam os gráficos a×t, v×t e leitura×t empilhados. No celular (390 px), o palco ocupa cerca de 60% da altura e os gráficos descem para uma faixa dentro do palco, abaixo da cena. O painel de controles vem depois. A seta do peteleco exige um arraste mínimo de 40 px.

### Modos
- **Mesa de ar** — O disco é visto de cima e só se move por petelecos de impulso fixo. Tocar no disco congela o tempo para mirar. Fases com estrelas: Pare no alvo, Curva de 90°, Corte o fio e Slalom. Há também um laboratório livre com disco leve ou pesado, três pisos (mesa de ar, gelo, madeira) e o 'Empurrão' entre discos de 1 kg e 3 kg, para ação e reação.
- **Caixote e rampa** — Um caixote é empurrado por uma seta arrastável sobre quatro pares de superfícies (gelo, madeira, aço, borracha no concreto). O diagrama de corpo livre aparece ao vivo, junto com os gráficos v×t e atrito×força aplicada e uma rampa automática de força. O alternador 'Rampa' inclina a pista, decompõe o peso e propõe descobrir o μ de um material misterioso.
- **Elevador** — Um personagem de 60 kg fica sobre uma balança dentro do elevador. Há viagens prontas de subir e descer, um slider livre de aceleração, o botão 'Cortar o cabo' (queda livre, balança em zero) e o freio de emergência. Os pares de ação e reação aparecem destacados, inclusive o par do peso com a Terra.

### Controles
- Seletor de modo (Mesa de ar / Caixote e rampa / Elevador)
- Mesa: seletor de fase (1–4 e Laboratório), seta do peteleco arrastável (direção livre, módulo fixo), seta de previsão arrastável, botão 'Peteleco!', botão Reiniciar e alternador Triângulo de vetores
- Mesa (laboratório): massa do disco 1 kg / 2 kg, piso mesa de ar / gelo / madeira, botão Empurrão (dois discos)
- Caixote: seta de força arrastável e slider F (−300 a +300 N), massa (5–50 kg), superfície (gelo, madeira, aço, borracha no concreto), botão Rampa automática de força (+10 N/s), botão Soltar
- Rampa: alternador Rampa, slider de ângulo (0–60°, passo 0,1°), seletor de material (conhecidos ou misterioso A–D), campo para digitar o μ descoberto
- Elevador: botões Subir 3 andares / Descer 3 andares / Parar, slider de aceleração (−9,8 a +9,8 m/s²), botão Cortar o cabo, alternador Pares de ação e reação, perguntas de previsão em botões
- Leituras: |v|, Δv, erro angular da previsão, F_R, a, Fat (rótulo estático/cinético), N, P∥, leitura da balança (kg)

### Modelo
Unidades SI e g = 9,8 m/s². A integração usa passo fixo dt = 1/240 s, em subpassos dentro do laço de animação e independente da taxa de quadros. MESA (modo 1): a mesa mede 8 m × 5 m, com origem no canto inferior esquerdo. Disco: m = 1 kg (leve) ou 2 kg (pesado), raio 0,15 m. O peteleco é um impulso de módulo FIXO J = 1 N·s na direção escolhida û, aplicado instantaneamente: v ← v + (J/m)·û, o que dá Δv = 1 m/s no disco leve e 0,5 m/s no pesado. Entre petelecos, x ← x + v·dt. Se o piso tiver atrito, a = −μc·g·v̂, e quando |v| < μc·g·dt faz-se v = 0, sem tremor. Pisos: mesa de ar μc = 0; gelo μc = 0,03; madeira μc = 0,30 (para 1 m/s, o disco para em 0,17 m). Bordas: nas fases, tocar a borda encerra a tentativa; no laboratório, a reflexão é elástica (componente normal invertida). Fio (fase 3): o disco fica preso a um pino em (4; 2,5) por um fio de r = 1,2 m, em MCU com v = 1 m/s (ω = 0,83 rad/s, tração m·v²/r = 0,83 N no disco de 1 kg). Ao cortar, a força some e o disco segue pela tangente com a mesma velocidade. Empurrão: discos de 1 kg e 3 kg encostados soltam uma mola com impulsos iguais e opostos de 1,5 N·s, o que dá Δv = 1,5 m/s e 0,5 m/s. O momento total continua 0 (3ª lei). CAIXOTE (modo 2): m = 5–50 kg (padrão 20 kg) e N = m·g na horizontal. A força aplicada F é horizontal. Grudar e escorregar: se |v| < 0,005 m/s e |F| ≤ μe·N, então v = 0 e Fat = −F (estático, igual e oposto). Caso contrário, Fat = −μc·N·sinal(v), usando sinal(F) no instante da partida, e a = (F + Fat)/m. Se v trocar de sinal num passo sob atrito cinético, zera-se v e reavalia-se o caso estático, o que evita oscilação em v = 0. Exemplo com 20 kg em madeira: Fe,máx = 0,40·196 = 78,4 N e Fc = 0,20·196 = 39,2 N. Com F = 79 N, a = 1,99 m/s². Com F = 0 e o caixote andando, a desaceleração é μc·g: 1,96 m/s² na madeira e 0,29 m/s² no gelo (quase MRU). RAMPA: θ = 0–60° e bloco de 2 kg. P∥ = m·g·sen θ e N = m·g·cos θ. O bloco fica parado se tg θ ≤ μe. Ao deslizar, a = g·(sen θ − μc·cos θ). Ângulo crítico θc = arctg μe. ELEVADOR (modo 3): pessoa de m = 60 kg, e a balança mostra N/g em 'kg', como uma balança de banheiro. Viagem pronta: acelera com |a| = 1,2 m/s² por 1,5 s (até 1,8 m/s), segue em velocidade constante e freia com a aceleração oposta. N = m·(g + a), com a positiva para cima. Leituras: subindo e acelerando 67,3 kg; velocidade constante (subindo ou descendo) 60,0 kg; subindo e freando 52,7 kg; cabo cortado (a = −g) 0 kg; freio de emergência (a = +g por cerca de 0,9 s) 120 kg. O slider livre vai de −9,8 a +9,8 m/s². Gráficos a×t, v×t e leitura×t das últimas 10 s.

### Dados
Coeficientes de atrito aproximados (Serway & Jewett, Física para Cientistas e Engenheiros, Tabela 5.1): gelo sobre gelo μe 0,10 / μc 0,03; madeira sobre madeira μe 0,25–0,50 / μc 0,20 (usar 0,40 / 0,20); aço sobre aço 0,74 / 0,57; borracha sobre concreto seco 1,0 / 0,8. A areia fica de fora porque não segue o atrito de Coulomb. Materiais misteriosos da rampa (μe, com μc = 0,6·μe) e ângulos críticos: A 0,27 (15,1°), B 0,36 (19,8°), C 0,47 (25,2°), D 0,58 (30,1°). Na altitude da ISS (cerca de 410 km), g ≈ 8,7 m/s², quase 90% do valor na superfície: 9,8·(6371/6781)². Elevadores de passageiros aceleram tipicamente 1 a 1,5 m/s² (limite de conforto; CIBSE Guide D). História: Aristóteles (séc. IV a.C.) achava que o movimento exige um motor contínuo; Galileu (Diálogo, 1632; Duas Novas Ciências, 1638) usou planos inclinados e o experimento mental do plano sem atrito; Newton publicou as três leis nos Principia (1687). Concepção alternativa: McCloskey, Caramazza & Green, 'Curvilinear motion in the absence of external forces', Science 210 (1980), em que muitos universitários desenharam trajetória curva depois de cortar o fio. Inspiração da mesa: Dynaturtle, de Andrea diSessa (Logo, MIT, anos 1970–80).

### Desafios
Fase 1 'Pare no alvo': o disco começa em (1; 2,5) m com v = (1; 0) m/s, e o alvo é um círculo de raio 0,35 m em (5; 2,5). Há sucesso quando o disco fica com |v| < 0,05 m/s dentro do alvo; 1 peteleco (para trás, dentro do alvo) vale 3 estrelas. Fase 2 'Curva de 90°': o disco começa em (1; 1) com v = (1; 0), e o portão fica no topo (y = 5 m), com x entre 3,6 e 4,4. Há sucesso quando o disco cruza o topo dentro do portão. O peteleco 'para cima' sempre erra, porque o disco sai a 45° e chega em x ≥ 5. A solução com 2 petelecos é chutar para trás em x ≈ 4 e depois para cima (2 estrelas). A de 1 peteleco (3 estrelas) é um chute a 135°, para trás e para cima, quando x está entre 1,94 e 2,74 m: v vira (0,29; 0,71) e o disco chega ao topo em x ≈ 4,0. Fase 3 'Corte o fio': antes, o aluno desenha à mão a trajetória prevista depois do corte; depois corta no instante certo para o disco entrar num gol na borda direita (y entre 3,3 e 4,1 m). O sistema mede o desvio do traço em relação à tangente e classifica a previsão como reta ou curva. Fase 4 'Slalom': o disco deve passar por 3 portões em ordem e parar no círculo final; estrelas para até 4, 6 ou 8 petelecos. Em todas as fases, a seta prevista é comparada à direção real, com o erro em graus. Caixote: 'O caixote está parado e você empurra com 50 N. Quanto vale o atrito?' (resposta 50 N, conferida pelo leitor de Fat) e 'Encontre a menor força que tira o caixote de 20 kg do lugar na madeira' (78,4 N ± 2 N, pela rampa automática). Rampa: 'Descubra o μe do material misterioso' (aceita ± 0,03). Elevador: a previsão 'Subindo com velocidade constante, a balança marca mais, igual ou menos que 60 kg?' tem resposta igual; o desafio 'Faça a balança marcar 72 kg por 1 s' pede a = +1,96 m/s² (± 0,5 kg).

## Guia (mascote)

**Abertura:** Aqui as forças decidem tudo. Comece pela <b>mesa de ar</b>: toque no disco, desenhe a seta de previsão, dê um peteleco e veja se ele vai para onde você imaginou.

- **Se eu paro de empurrar, o objeto não deveria parar?**  
  Não. Sem atrito, ele continua com a mesma velocidade para sempre: é a <b>inércia</b> (1ª lei). No dia a dia as coisas param porque o atrito e o ar fazem força contra o movimento. Por isso Aristóteles achou que o movimento precisava de força, e Galileu e Newton mostraram que não.
- **Por que o disco não foi para onde eu chutei?**  
  O peteleco SOMA uma velocidade Δv à que o disco já tinha: v_depois = v_antes + Δv, uma soma de vetores. Se ele ia para a direita e você chutou para cima, o resultado é a diagonal. Para fazer uma curva de 90° também é preciso cancelar a velocidade antiga, chutando um pouco para trás.
- **Força é a mesma coisa que velocidade?**  
  Não. A força resultante define a <b>aceleração</b>: F_R = m·a. Ela muda a velocidade, e no gráfico v×t isso aparece como inclinação. Com força resultante nula, a velocidade fica constante, seja ela zero ou não.
- **Por que o atrito caiu quando o caixote começou a andar?**  
  Parado, o atrito <b>estático</b> se ajusta ao empurrão, igual e oposto, até o máximo μe·N. Quando o caixote escorrega, passa a valer o atrito <b>cinético</b>, μc·N, que é menor. Por isso é mais difícil tirar um armário do lugar do que mantê-lo andando.
- **Como o ângulo da rampa revela o μ?**  
  No limite de escorregar, a parte do peso ao longo da rampa (m·g·sen θ) iguala o atrito máximo (μe·m·g·cos θ). Dividindo uma pela outra, μe = tg θ. A massa se cancela, então a regra vale para qualquer bloco do mesmo material.
- **Por que a balança muda no elevador?**  
  A balança mede a força <b>normal</b>, não o seu peso. Acelerando para cima, ela precisa empurrar mais: N = m·(g + a). Freando na subida ou acelerando na descida, ela empurra menos. Com velocidade constante, subindo ou descendo, a leitura volta a ser 60 kg.
- **Peso e normal formam um par de ação e reação?**  
  Não! Os pares da 3ª lei agem em corpos DIFERENTES. O par do peso (a Terra puxa você) é você puxando a Terra. O par da normal (a balança empurra você) é você empurrando a balança. Peso e normal agem no mesmo corpo e podem ter valores diferentes, como no elevador.
- **Por que os astronautas flutuam na estação espacial?**  
  Não é falta de gravidade: lá ela ainda vale quase 90% da gravidade na superfície. A estação e os astronautas estão em <b>queda livre</b> juntos, contornando a Terra, então nada empurra os pés deles. É o mesmo zero que a balança marca quando o cabo do elevador se rompe.

## Para usar em sala
- Antes da fase 'Curva de 90°', peça que cada aluno desenhe no caderno a seta do peteleco que faria o disco subir. Depois testem na mesa projetada e discutam a soma de vetores.
- No caixote, ligue a rampa automática de força e pause no pico. Pergunte por que o atrito cai depois e relacione com empurrar um armário e com o freio ABS, que evita a roda travar e derrapar.
- No elevador, a turma prevê a leitura da balança nas cinco etapas da viagem e registra num quadro antes de rodar. Fechem com o cinto de segurança numa freada brusca (EM13CNT306).

## Como a IA entra
O guia recebe o modo, a fase, a massa e o piso. Na mesa, recebe também a velocidade antes e depois de cada peteleco, a seta prevista e o erro angular. No caixote e na rampa, recebe as forças do diagrama (peso, normal, aplicada e atrito, marcado como estático ou cinético), μe, μc, θ e a aceleração. No elevador, recebe a aceleração, a velocidade e a leitura da balança. Ele nomeia a lei em jogo e, quando a previsão erra, aponta a concepção intuitiva ('as coisas vão para onde eu empurro', 'é preciso força para manter o movimento', 'a balança mede o peso'). Depois propõe o próximo teste. Uma IA conectada poderia gerar fases novas e conferir os cálculos do aluno.

## Cuidados de conteúdo
Nunca apresentar a visão de Aristóteles como modelo válido. O piso de madeira, onde o disco para logo, serve só para mostrar por que no cotidiano parece que o movimento precisa de força, e um cartão histórico explica isso. O peteleco tem módulo fixo e o tempo congela ao mirar, para que o foco seja a direção e não o reflexo. A lógica do atrito estático precisa ser robusta: zerar v quando ele troca de sinal e nunca tremer perto de v = 0. O atrito estático é igual e oposto à força só até μe·N. Usar passo fixo de 1/240 s. Peso e normal NÃO formam par de ação e reação: desenhar cada par em corpos diferentes e com a mesma cor. A balança marca N/g em 'kg', e é preciso dizer que ela mede força. Não há projéteis nem colisões, que ficam no Laboratório de Mecânica; nas fases, as bordas encerram a tentativa, sem física de choque. A BNCC do EM não nomeia 'Leis de Newton': justificar por EM13CNT101, 204 e 306. Slalom e Empurrão podem ser enxutos para caber no tamanho previsto.

## Verificação (comportamentos a testar)
- Mesa de ar (μ = 0): depois de um peteleco, |v| fica constante até a borda (variação < 0,1% em 10 s).
- Disco de 1 kg com v = (1; 0) e peteleco para cima: v_depois = (1; 1) m/s, a 45°. Com o disco de 2 kg: (1; 0,5).
- Fase 2: um peteleco a 135° com o disco em x ≈ 2,34 m faz o disco cruzar o topo em x ≈ 4,0 m, dentro do portão; o peteleco para cima sempre erra.
- Corte do fio: a trajetória depois do corte é reta, tangente ao círculo no ponto do corte e com |v| = 1 m/s.
- Empurrão: os Δv dos discos de 1 kg e 3 kg ficam na razão 3 : 1, em sentidos opostos, e o momento total continua 0.
- Caixote de 20 kg na madeira: com F = 50 N fica parado e Fat = 50 N; com F = 79 N parte, Fat cai para 39,2 N e a ≈ 1,99 m/s².
- Gráfico Fat×F (rampa automática) sobe a 45° até 78,4 N e cai para 39,2 N; com F = 0, v não oscila em torno de zero.
- Rampa com μe = 0,47: o bloco fica parado a 25,0° e desliza a 25,3°.
- Elevador com 60 kg: leituras de 67,3 / 60,0 / 52,7 / 0 kg para a = +1,2 / 0 / −1,2 / −9,8 m/s².

## Miniatura
Modo 'Mesa de ar', fase 2, congelado no instante do peteleco. O disco está no meio da mesa, a seta de previsão tracejada aponta para cima e o triângulo de vetores aparece colorido (v_antes azul, Δv laranja, v_depois verde), com o rastro diagonal seguindo em direção ao portão.
