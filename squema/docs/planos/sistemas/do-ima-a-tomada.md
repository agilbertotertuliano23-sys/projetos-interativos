# Do Ímã à Tomada

> **Área:** Física · **id:** `do-ima-a-tomada` · **Tipo:** misto · **Fundo:** noite · **Potencial visual:** ★★★★★
> **Público:** 8º ano (fontes, usinas, consumo e eficiência: EF08CI01 e EF08CI04–06, nos modos 2 e 3) e 3º ano do Ensino Médio (eletromagnetismo e potência elétrica: EM13CNT107; revisão de eletrodinâmica, o bloco mais cobrado do ENEM)
> **BNCC:** EM13CNT107, EM13CNT106, EM13CNT308, EF08CI01, EF08CI04, EF08CI05, EF08CI06
> **Status:** planejado (especificação revisada) · demo a construir em `demos/do-ima-a-tomada.html`

Um ímã de barra em 3D, com linhas de campo, atravessa uma bobina ligada a um galvanômetro e a dois LEDs. Depois o aluno gira um gerador para acender uma casa, que fica mais 'pesada' a cada aparelho ligado, e vê a curva de potência de um dia virar kWh e conta de luz.

**O aluno:** Arrasta um ímã pela bobina, pedala para acender a casa e monta o consumo de um dia

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | campo magnético, indução, potência e consumo |
| Papel da IA | explicar cada leitura e apontar o vilão da conta |
| Tags | 3D, áudio, dados reais |

**Objetivos de aprendizagem**

- Explicar a indução: só a VARIAÇÃO do fluxo magnético gera corrente (Faraday–Lenz)
- Relacionar potência (W), tempo e energia (kWh) e calcular o consumo de aparelhos reais (EF08CI04)
- Comparar fontes que giram o mesmo gerador e a eficiência de lâmpadas e aparelhos (EF08CI05, EF08CI06)

**Etapas da demonstração**

1. Previsão: o ímã PARADO dentro da bobina acende o LED? Depois o aluno arrasta o ímã e vê o ponteiro responder à rapidez do movimento, não à posição
2. Entrar e sair acendem LEDs diferentes, e o polo induzido na bobina se opõe ao ímã (Lenz)
3. No gerador, o aluno gira o pedal com o dedo: cada aparelho ligado deixa o giro mais pesado, e a LED dá o mesmo brilho com cerca de 1/6 do esforço
4. Água, vento ou vapor substituem as pernas: toda usina gira um gerador
5. Um dia na casa: a curva de potência hora a hora tem a energia como área, o disco do medidor gira e sai a conta do mês

## Desenho da demonstração

### Conceito
Uma única cadeia de energia, do ímã até a conta de luz. No modo 3D, um ímã de barra com linhas de campo desenhadas no espaço entra e sai de uma bobina ligada a um galvanômetro de zero central e a dois LEDs em antiparalelo. A primeira sacada vem com uma previsão. Com o ímã PARADO dentro da bobina, o LED fica apagado, porque o que induz é a variação do fluxo; o ponteiro responde à rapidez do movimento, e não à posição. Entrar acende o LED verde e sair acende o vermelho, e um 'polo fantasma' na face da bobina mostra a oposição de Lenz. No segundo modo, o aluno gira um pedal-gerador com o dedo para acender uma casa. Cada aparelho ligado deixa o giro mais pesado, porque o torque de Lenz cobra a energia entregue. Quatro lâmpadas incandescentes e a TV pedem 350 W de esforço; quatro LEDs dão o mesmo brilho com 95 W. O chuveiro de 5500 W simplesmente trava o pedal: seriam precisas cerca de 70 pessoas pedalando. Trocar as pernas por água, vento ou vapor mostra que toda usina gira um gerador. No terceiro modo, a mesma casa passa um dia ligada à rede. A curva de potência hora a hora tem a energia como área, o disco do medidor acelera na hora do banho, a conta do mês revela o vilão, e a chave do chuveiro mostra que a posição inverno é a de MENOR resistência.

### Layout
Modo 1 (3D, fundo noite, OrbitControls com limites): uma bancada com a bobina de cobre no centro, de eixo horizontal, desenhada como uma hélice de até 20 voltas visuais com o rótulo '× N'. O ímã fica num trilho ao longo do eixo, com a metade N vermelha e a S azul e rótulos CSS2D. As linhas de campo são tubos finos com setas. Um painel 2D sobreposto no canto superior mostra o galvanômetro de ponteiro e os dois LEDs, e uma faixa inferior traz os gráficos Φ×t e ε×t dos últimos 4 s. Modos 2 e 3 (2D): uma casa em corte com quatro cômodos (sala, cozinha, quarto e banheiro) ocupa a metade direita, com os aparelhos clicáveis. À esquerda, no modo 2, fica o gerador com a fonte escolhida (pedal com personagem, roda d'água, cata-vento ou caldeira) e um osciloscópio com voltímetro e frequencímetro. No modo 3, a fonte vira o poste com o medidor de disco na fachada, e o gráfico P × hora do dia (0–24 h) fica embaixo, com a área preenchida e um relógio. O cartão do chuveiro abre ao clicar no banheiro. No celular, o 3D ocupa o palco e o painel do galvanômetro fica reduzido no topo. Nos modos 2D, a casa fica em cima e o gerador ou o gráfico embaixo, seguidos do painel de controles. O gesto circular funciona em qualquer ponto do palco.

### Modos
- **Ímã e bobina (3D)** — Um ímã de barra de NdFeB é arrastado ao longo do eixo de uma bobina de 100 a 1000 espiras. A cena mostra as linhas de campo em 3D, um contador de linhas que atravessam a bobina, o galvanômetro, os LEDs verde e vermelho em antiparalelo e o polo induzido destacado, com os gráficos Φ×t e ε×t. Há também os botões de inverter o ímã e de vaivém automático.
- **Gerador e casa** — O aluno gira o pedal com um gesto circular. A tensão e a frequência acompanham a rotação (meta de 127 V e 60 Hz), e cada aparelho ligado aumenta o torque resistente. A casa tem lâmpadas de mesmo brilho (incandescente 60 W, fluorescente 15 W, LED 9 W), TV, ventilador, geladeira e chuveiro. O seletor 'Quem gira o gerador?' oferece você, a água, o vento ou o vapor.
- **Um dia na casa** — A casa fica ligada à rede por 24 h simuladas. Cada aparelho tem potência de placa e horário de uso. O gráfico P×hora tem a área em kWh, o disco do medidor gira proporcional à potência, e o mês sai em kWh e em R$, com uma tarifa de exemplo editável. O cartão do chuveiro tem a chave verão/inverno, a escolha entre 127 e 220 V, a vazão e a temperatura de saída da água.

### Controles
- Seletor de modo (Ímã e bobina / Gerador e casa / Um dia na casa)
- Ímã: arraste do ímã ao longo do eixo (OrbitControls desligado durante o arraste), slider de espiras (100–1000), botão Inverter ímã, botão Vaivém com slider de velocidade (0,1–1,5 m/s), alternadores Linhas de campo e Polo induzido, pergunta de previsão (sim/não)
- Gerador: gesto circular no palco ou, por acessibilidade, slider de cadência (0–120 rpm); interruptores por aparelho; seletor de lâmpada (incandescente / fluorescente / LED); seletor Quem gira? (você, água, vento, vapor) com slider de vazão (0–15 L/s), de vento (0–15 m/s) ou de chama; alternador Som
- Dia: interruptor e slider de horas por dia para cada aparelho, botão Rodar o dia (24 s), slider de tarifa (R$/kWh, exemplo), botão Trocar por eficientes (LED e geladeira selo A), botão Prever o vilão
- Chuveiro: chave Verão/Inverno, seletor 127 V / 220 V, slider de vazão (2–8 L/min), slider de temperatura da água fria (10–25 °C)
- Leituras: fem (V), corrente (mA), fluxo (mWb), linhas pela bobina, potência pedida (W), esforço humano (W), tensão (V), frequência (Hz), kWh/dia, kWh/mês, R$/mês e, no chuveiro, R (Ω), I (A), P (W) e temperatura de saída

### Modelo
ÍMÃ E BOBINA: ímã cilíndrico de NdFeB com comprimento ℓ = 4 cm, raio b = 0,6 cm e remanência Br = 1,2 T (a opção ferrite usa 0,4 T). A bobina tem raio a = 1,5 cm, N espiras e o mesmo eixo z. O fluxo por espira segue o modelo de Gilbert, com 'cargas' nas faces, e é contínuo em qualquer posição: Φ(z) = (p/2)·[(z − z_S)/√((z − z_S)² + a²) − (z − z_N)/√((z − z_N)² + a²)], com p = Br·π·b² = 1,36×10⁻⁴ Wb; z_N e z_S são as posições das faces do ímã medidas a partir do plano da bobina. O fluxo máximo, com o ímã centrado, é ≈ 0,109 mWb. A fem é ε = −N·dΦ/dt = −N·(dΦ/dz)·v. O valor máximo de |dΦ/dz| é ≈ 4,3×10⁻³ Wb/m, quando uma face do ímã está no plano da bobina. Exemplos: N = 400 e v = 0,5 m/s dão 0,87 V; N = 800 e v = 1 m/s dão 3,5 V; com o ímã parado, 0. A velocidade do arraste é suavizada por uma média exponencial de 60 ms, e o ponteiro tem amortecimento crítico. Circuito: R_bobina = 0,05 Ω por espira, galvanômetro de 50 Ω, i = ε/(R_b + 50 Ω), fundo de escala de ±50 mA. Os LEDs em antiparalelo têm limiar de 1,8 V (vermelho) e 2,1 V (verde), e cada um acende só num sentido da corrente. Lenz: a face da bobina voltada para o ímã ganha o mesmo polo que se aproxima (e o repele) e o polo oposto ao que se afasta (e o atrai). As linhas de campo são pré-calculadas uma vez por RK4 no plano meridiano, a partir de 12 sementes na face N, com o campo de duas cargas ±p nas faces. Elas se fecham por dentro do ímã, de S para N, e são replicadas em 6 azimutes. O contador 'linhas pela bobina' conta as linhas que cruzam o plano da bobina a uma distância do eixo menor que a. GERADOR E CASA: gerador ideal de corrente alternada, com tensão eficaz proporcional à rotação, U = 127 V·(ω/ω_n), e frequência f = 60 Hz·(ω/ω_n); ω_n corresponde a 70 rpm no pedal, com engrenagem multiplicadora. Os aparelhos são resistências R = U_n²/P_n, e P = P_n·(ω/ω_n)². O rendimento do gerador com a transmissão é η = 0,8, e o esforço vale P_h = P/η. Dinâmica do rotor: I·dω/dt = τ_h − P/ω − b·ω, com τ_h = mín(τ_máx; K·(ω_gesto − ω)) e τ_máx = 34 N·m, o que dá ≈ 250 W a 70 rpm, o máximo de um adulto treinado por poucos minutos. Com muita carga, o giro fica atrás do dedo, e esse é o 'pedal pesado'. O personagem sua acima de 100 W e não passa de 250 W. O brilho das lâmpadas é proporcional a P/P_n. Osciloscópio: u(t) = U·√2·sen(2πft), numa janela de 50 ms. Som opcional: um oscilador em 2f (zumbido) com volume proporcional a U. Fontes: hidrelétrica P = η·ρ·g·Q·h (microturbina com h = 10 m e Q de 0 a 15 L/s, até 1,2 kW); eólica P = ½·ρ_ar·A·v³·Cp (rotor de 2 m de diâmetro, Cp = 0,35, ρ_ar = 1,2 kg/m³: 338 W a 8 m/s e 1,14 kW a 12 m/s); vapor com P proporcional à chama, até 3 kW (ilustrativo). UM DIA NA CASA: rede ideal de 127 V, ou 220 V no chuveiro. Cada aparelho tem uma agenda padrão: banhos às 7 h e às 19 h; TV das 19 h às 23 h; lâmpadas das 18 h às 23 h; geladeira ligada 24 h com o compressor funcionando 40% do tempo, em ciclos de 15 min. P(t) é a soma das potências ligadas, e a energia do dia é a área sob P(t): E (kWh) = Σ P(kW)·Δt(h). O mês tem 30 dias, e a conta é kWh × tarifa (exemplo de R$ 0,85/kWh, editável, sem impostos e bandeiras detalhados). O medidor tem um disco com constante Kd = 3,6 Wh por volta, então dá P/3,6 voltas por hora (1 kW ≈ 4,6 voltas/min), com a animação acelerada junto com o relógio. Chuveiro: P = U²/R, e com a vazão ṁ (kg/s), ΔT = P/(ṁ·c), c = 4186 J/kg·°C.

### Dados
Potências de placa típicas, em faixas comuns no mercado brasileiro (tabelas Procel/Inmetro): chuveiro 220 V com 5500 W no inverno e 3200 W no verão (faixa de 2100 a 7500 W); geladeira frost-free com compressor de ≈ 130 W, ≈ 35–45 kWh/mês; ar-condicionado split inverter de 9000 BTU/h ≈ 820 W; micro-ondas ≈ 1200 W; ferro de passar ≈ 1000 W; TV LED de 32″ ≈ 40 W; ventilador de mesa ≈ 60 W; notebook ≈ 45 W; carregador de celular ≈ 10 W. Lâmpadas de ≈ 800 lm: incandescente 60 W (≈ 13 lm/W), fluorescente compacta 15 W (≈ 55 lm/W), LED 9 W (≈ 90 lm/W). Casa padrão do modo 3 (mês de 30 dias): chuveiro com 4 banhos de 10 min, 110 kWh; 6 lâmpadas incandescentes por 5 h, 54 kWh (8,1 kWh com LED); geladeira, 37,4 kWh; ventilador por 8 h, 14,4 kWh; ferro por 20 min, 10 kWh; TV por 5 h, 6 kWh; micro-ondas por 10 min, 6 kWh; notebook por 4 h, 5,4 kWh; carregador por 3 h, 0,9 kWh. O total é ≈ 244 kWh/mês, e o ar-condicionado por 8 h somaria mais 197 kWh. Chuveiro: 220 V e 5500 W dão R = 8,8 Ω e I = 25 A; 220 V e 3200 W dão R = 15,1 Ω e I = 14,5 A; 127 V e 5500 W dão R = 2,93 Ω e I = 43,3 A, o que exige fio mais grosso. A água aquecida pelo chuveiro de 5500 W sobe 26 °C com 3 L/min e 13 °C com 6 L/min. Um banho de 10 min a 5500 W gasta 0,92 kWh, o equivalente a ≈ 9 h pedalando a 100 W. O consumo médio residencial no Brasil é da ordem de 160 kWh/mês (EPE, Anuário Estatístico de Energia Elétrica). Na matriz elétrica brasileira, cerca de 60% vem de hidrelétricas e cerca de 13% de eólicas (EPE, Balanço Energético Nacional 2024). A rede brasileira opera em 60 Hz; Itaipu tem 20 geradores de 700 MW, 10 em 60 Hz (lado brasileiro) e 10 em 50 Hz (lado paraguaio). Ímãs: NdFeB com Br ≈ 1,2 T; ferrite ≈ 0,4 T. História: Ørsted (1820) viu a corrente desviar a bússola; Faraday (1831) descobriu a indução; Lenz (1834) explicou o sentido da corrente induzida. Potência humana sustentada pedalando: ≈ 75–150 W (ciclistas profissionais, ≈ 300–400 W por horas).

### Desafios
Ímã: a previsão 'o ímã parado dentro da bobina acende o LED?' tem resposta não e é conferida pelo próprio teste. 'Acenda o LED vermelho' exige ε acima de 1,8 V, com muitas espiras e movimento rápido (por exemplo, N = 800 a cerca de 0,6 m/s). 'Acenda só o verde' pede escolher entre entrar e sair, ou inverter o ímã. 'Faça o ponteiro ir para a direita aproximando o polo S' testa Lenz e o sentido da corrente. Gerador: 'Acenda as quatro lâmpadas e a TV com até 100 W de esforço' só é possível com LED (4·9 + 40 = 76 W, ou 95 W de esforço); com fluorescentes seriam 125 W e com incandescentes 350 W, acima do limite humano. 'Mantenha 127 V ± 10% por 10 s com a geladeira e a TV ligadas.' 'Quantas pessoas pedalando a 100 W seriam precisas para o chuveiro de 5500 W?' A resposta é ≈ 69 com η = 0,8; aceitar de 55 a 70, explicando a perda. 'Gere 500 W com o vento' pede v ≈ 9,1 m/s. Dia: antes de rodar, o aluno ordena os três aparelhos que mais pesam na conta, e a verificação usa a energia mensal calculada (na casa padrão, chuveiro 110, lâmpadas incandescentes 54 e geladeira 37 kWh). 'Reduza a conta em 30% sem desligar a geladeira': trocar as lâmpadas por LED e passar o chuveiro para a posição verão dá −38%. Chuveiro: 'Qual posição tem MAIOR resistência?' (verão) e 'Deixe a água sair a 38 °C no inverno com a água fria a 20 °C' (vazão ≈ 4,4 L/min).

## Guia (mascote)

**Abertura:** Toda a energia elétrica da sua casa começa com um ímã se movendo perto de um fio. Antes de mexer, responda: se o ímã ficar <b>parado</b> dentro da bobina, o LED acende?

- **Por que o ímã parado não acende o LED?**  
  A corrente induzida depende da VARIAÇÃO do fluxo magnético, não do fluxo em si (Lei de Faraday: ε = −N·ΔΦ/Δt). Parado dentro da bobina, o fluxo é grande mas constante, então ΔΦ = 0 e a fem é zero. Mexa rápido e a fem cresce.
- **Por que a corrente inverte quando tiro o ímã?**  
  Entrando, o fluxo aumenta; saindo, diminui. A variação muda de sinal e a corrente também, por isso um LED acende na entrada e o outro na saída. Um gerador girando produz corrente <b>alternada</b> exatamente assim.
- **O que diz a Lei de Lenz?**  
  A corrente induzida cria um campo que se OPÕE à variação que a criou. Se o polo N se aproxima, a bobina vira um N e o repele; se ele se afasta, a bobina vira um S e o puxa. Por isso sempre é preciso gastar trabalho para gerar corrente, e a energia se conserva.
- **Por que o pedal fica pesado quando ligo mais coisas?**  
  Mais aparelhos pedem mais potência elétrica, e, pela Lei de Lenz, o gerador cria um torque contrário maior. A energia elétrica que chega à casa sai das suas pernas: sem esforço extra, a rotação cai e as lâmpadas enfraquecem.
- **Qual a diferença entre potência e energia?**  
  Potência (W) é a rapidez com que a energia é usada; energia é potência vezes tempo. Um chuveiro de 5500 W ligado por 10 min gasta 5,5 kW × 1/6 h ≈ 0,92 kWh. A geladeira, de 130 W, gasta 1,25 kWh por dia porque fica ligada o tempo todo. A conta cobra kWh, ou seja, energia.
- **Por que no inverno o chuveiro tem MENOS resistência?**  
  Com a tensão fixa, P = U²/R: quanto menor a resistência, maior a corrente e maior a potência. Na posição inverno, a corrente passa por um trecho menor do fio da resistência (≈ 8,8 Ω em 220 V, 5500 W); no verão, por um trecho maior (≈ 15 Ω, 3200 W).
- **Hidrelétrica, eólica e termelétrica são tão diferentes assim?**  
  Na hora de gerar, não: todas giram um gerador com ímãs e bobinas. O que muda é quem empurra a turbina (a água caindo, o vento ou o vapor de uma caldeira) e os impactos de cada fonte. No Brasil, cerca de 60% da eletricidade vem de hidrelétricas.
- **Por que a LED gasta menos?**  
  Ela transforma mais da energia elétrica em luz e menos em calor. Para uns 800 lúmens, a incandescente pede 60 W, a fluorescente 15 W e a LED só 9 W. Trocar 6 lâmpadas usadas 5 h por dia economiza cerca de 46 kWh por mês.

## Para usar em sala
- Antes de abrir o modo 1, faça a votação: 'o ímã parado dentro da bobina acende o LED?'. Registre o resultado e teste na frente da turma.
- No gerador, um aluno 'pedala' no projetor enquanto outro liga os aparelhos um a um; a turma descreve o que muda na rotação, na tensão e no brilho.
- Peça que cada aluno traga a potência de placa e o tempo de uso de três aparelhos de casa e monte o próprio dia no modo 3. Depois comparem com a conta real (EF08CI04) e proponham ações de economia para a escola (EF08CI05).

## Como a IA entra
No modo 1, o guia recebe a posição e a velocidade do ímã, o polo voltado para a bobina, N, Φ, ε, a corrente, qual LED acendeu e a previsão do aluno. No modo 2, recebe a rotação, a tensão, a frequência, os aparelhos ligados, a potência pedida, o esforço e a fonte. No modo 3, recebe a agenda de uso, a energia de cada aparelho no mês, o total em kWh e em R$ e os dados do chuveiro (U, R, I, P, vazão e temperatura). Ele explica cada leitura com Faraday, Lenz, P = U·I, P = U²/R e E = P·Δt, aponta o vilão da conta e sugere a próxima mudança. Uma IA conectada poderia receber a lista real de aparelhos do aluno e montar o dia dele.

## Cuidados de conteúdo
Usar uma convenção de sinal única em todas as telas: definir o sentido positivo da fem e manter galvanômetro, LEDs, polo induzido e gráficos coerentes, inclusive com o ímã invertido. A fem depende da velocidade suavizada e deve zerar exatamente com o ímã parado, sem ruído de arraste. Pré-calcular as linhas de campo uma única vez, nunca a cada quadro. Os valores de placa são típicos e devem aparecer com a faixa. A tarifa é um exemplo editável, e o R$ é só a conversão final: o foco é kWh, não orçamento, que fica na Vida Financeira. Tratar os aparelhos como resistores é uma simplificação (LEDs reais têm driver e motores têm fator de potência), e isso deve ser declarado. Não repetir o Eletricidade Lab: nada de montar série ou paralelo, e a casa é só citada como circuito em paralelo. O 'peso' do pedal é simulado com inércia virtual e torque limitado, sem prometer força de retorno real. Fiação e disjuntores ficam só no plano qualitativo (corrente maior em 127 V exige fio mais grosso), sem prometer norma técnica (NBR 5410). É o sistema mais denso, com modos 3D e 2D: o modo 1 é o essencial, e as fontes água/vento/vapor e o cartão do chuveiro devem ser enxutos (troca de desenho e um slider).

## Verificação (comportamentos a testar)
- Ímã parado em qualquer posição: ε = 0 V, ponteiro no zero e LEDs apagados.
- N = 400 e vaivém a 0,5 m/s: pico de |ε| ≈ 0,87 V; dobrar N ou a velocidade dobra o pico.
- Entrar com o N primeiro acende um LED e sair acende o outro; inverter o ímã troca os dois.
- Com o ímã centrado, Φ ≈ 0,109 mWb e o contador de linhas é máximo, mas ε passa por zero.
- Gerador a 70 rpm dá 127 V e 60 Hz; a 35 rpm, 63,5 V e 30 Hz, com lâmpadas a 1/4 da potência.
- 4 LEDs + TV pedem ≈ 95 W de esforço. 4 incandescentes + TV pedem 350 W: a rotação cai para ≈ 70% e as lâmpadas ficam fracas. O chuveiro ligado trava o pedal.
- Vento de 8 m/s gera 338 W; de 12 m/s, 1,14 kW.
- Casa padrão: chuveiro 110 kWh/mês, geladeira 37,4, lâmpadas incandescentes 54 (8,1 com LED), total ≈ 244 kWh/mês.
- Chuveiro em 220 V na posição inverno: R = 8,8 Ω, I = 25 A e P = 5500 W; com 3 L/min de água a 20 °C, a saída fica em ≈ 46 °C.

## Miniatura
Modo 'Ímã e bobina' com o ímã saindo da bobina em movimento: linhas de campo azuis atravessando as espiras, LED vermelho aceso, ponteiro desviado e o rótulo do polo induzido 'S' na face da bobina.
