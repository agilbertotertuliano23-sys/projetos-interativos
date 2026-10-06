# Toque Térmico

> **Área:** Física · **id:** `toque-termico` · **Tipo:** 2D · **Fundo:** papel · **Potencial visual:** ★★★★★
> **Público:** 7º ano (temperatura, calor, sensação térmica e propagação: EF07CI02–04) e 2º ano do Ensino Médio (calorimetria e termologia, o 2º bloco mais cobrado do ENEM); a curva de aquecimento com partículas atende ao 9º ano (EF09CI01)
> **BNCC:** EF07CI02, EF07CI03, EF07CI04, EF09CI01, EM13CNT101, EM13CNT102
> **Status:** planejado — especificação completa da síntese (sem revisão adversarial) · demo a construir em `demos/toque-termico.html`

Placas de alumínio, cerâmica, madeira, lã e isopor marcam os mesmos 25 °C, mas a mão sente o metal mais frio. Completam a demo um calorímetro que pede a previsão do equilíbrio, uma curva de aquecimento com patamares e uma garrafa térmica montada camada por camada.

**O aluno:** Toca placas na mesma temperatura, prevê misturas e monta uma garrafa térmica

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | calor, temperatura, sensação térmica |
| Papel da IA | explicar trocas de calor e desfazer concepções |
| Tags | 2D, dados reais |

**Objetivos de aprendizagem**

- Diferenciar temperatura, calor e sensação térmica (EF07CI02)
- Prever o equilíbrio térmico com Q = m·c·ΔT e calor latente
- Justificar materiais condutores e isolantes pelos três modos de propagação do calor (EF07CI03)

**Etapas da demonstração**

1. O aluno ordena as placas da 'mais fria' para a 'mais quente'; os termômetros mostram 25 °C em todas
2. A mão toca cada placa: a lupa mostra o calor saindo da pele e o metal 'roubando' calor mais rápido
3. A sala esquenta até 70 °C e a ordem se inverte: agora é o metal que queima
4. Calorímetro: o aluno marca no termômetro a temperatura final prevista (água × ferro, gelo × água) e vê as curvas convergirem
5. Garrafa térmica: escolher vácuo, espelhamento e tampa para o café passar de 60 °C depois de 6 h

## Desenho da demonstração

### Conceito
O termômetro e a mão discordam, e o conceito nasce desse conflito. No primeiro modo, cinco placas na mesma sala marcam os mesmos 25 °C, mas antes de tocar o aluno as ordena da 'mais fria' para a 'mais quente'. Ao tocar, a lupa mostra pacotes de energia saindo da pele, sempre do mais quente para o mais frio. O medidor de fluxo revela a sacada: o alumínio não está mais frio, ele tira calor da mão cerca de 4 vezes mais rápido que a madeira. Por isso a pele no ponto de contato cai para 25,4 °C no metal e fica em 31,8 °C na madeira. Se a sala vai a 70 °C, a ordem se inverte e o metal é o que queima; com a sala a 34 °C, a temperatura da pele, todas as placas parecem iguais. O calorímetro transforma Q = m·c·ΔT em aposta: 1 kg de água a 20 °C com 1 kg de ferro a 80 °C dá 26 °C, e não 50 °C. A curva de aquecimento mostra patamares em que a chama continua aquecendo e a temperatura não sobe. A garrafa térmica vira projeto de engenharia: o vácuo corta a condução e a convecção, mas só o espelhamento barra a irradiação.

### Layout
Palco 2D com fundo papel. Modo 1: uma mesa com cinco placas lado a lado, cada uma com um termômetro digital, e acima delas a faixa de ordenação arrastável. Uma mão arrastável toca a placa escolhida e abre uma lupa circular sobre o ponto de contato, com as partículas da pele em cima, as da placa embaixo e pacotes laranja atravessando. À direita ficam o medidor de 'sensação' (temperatura da pele no contato, com escala de gelado a queima) e o medidor de fluxo em kW/m², com o termostato da sala acima. Modo 2: dois béqueres (ou um béquer e um bloco) com termômetros, o calorímetro no centro e a lupa de partículas. Embaixo ficam o gráfico T×t com as duas curvas e uma barra dupla 'calor cedido = calor recebido'. No alternador 'Aquecer', um béquer fica sobre o fogareiro, o gráfico passa a ser T×Q com os patamares rotulados, e um mapinha de lugares aparece. Modo 3: garrafa em corte com camadas clicáveis (parede interna, espaço, superfície, tampa). No espaço, partículas de ar circulam quando há ar (convecção), a corrente de partículas vibra na condução e flechas onduladas representam a irradiação. As três setas de perda têm espessura proporcional à potência. Há um relógio acelerado e a curva T×t com a linha de meta em 60 °C às 6 h. No celular, a cena fica em cima (cerca de 55% da altura) e o gráfico numa faixa abaixo dela dentro do palco. O painel vem embaixo e a lupa vira um círculo de 140 px no canto.

### Modos
- **Qual é mais fria?** — Cinco placas (alumínio, cerâmica, madeira, lã e isopor) ficam na mesma temperatura ambiente, ajustável de 0 a 70 °C. Antes, o aluno ordena as placas pela sensação. Depois toca cada uma com a mão a 34 °C e compara o termômetro, a temperatura de contato e o fluxo de calor.
- **Calorímetro** — Alternador Misturar / Aquecer. Em 'Misturar', o aluno escolhe duas amostras (água, gelo, óleo, ferro, alumínio ou cobre) com massa e temperatura, marca a previsão no termômetro e mistura. Em 'Aquecer', 200 g de gelo a −20 °C vão a um fogareiro de potência ajustável e geram a curva T×Q. O lugar (Rio, São Paulo, Brasília, La Paz, Everest ou panela de pressão) muda o ponto de ebulição.
- **Garrafa térmica** — O aluno monta a garrafa: parede simples ou dupla; espaço com ar ou vácuo; vidro comum ou espelhado; sem tampa, tampa plástica ou cortiça. Ela recebe 500 mL de café a 90 °C, e o tempo é acelerado (1 s = 30 min). Três setas mostram as perdas, e a meta é o café estar acima de 60 °C depois de 6 h.

### Controles
- Seletor de modo (Qual é mais fria? / Calorímetro / Garrafa térmica)
- Placas: faixa de ordenação arrastável, mão arrastável (tocar e soltar), slider da temperatura da sala (0–70 °C), botão Revelar ordem
- Calorímetro: seletor Misturar / Aquecer; para cada amostra, seletor de substância, slider de massa (50–2000 g) e slider de temperatura (−30 a 200 °C, limitado pela fase escolhida); marcador de previsão arrastável no termômetro; botões Misturar e Cenários prontos; alternador de unidade cal / J
- Aquecer: slider de potência do fogareiro (200–2000 W), seletor de lugar (muda a pressão), botão Acender/Apagar, alternador Lupa de partículas
- Garrafa: seletores de parede, espaço, superfície e tampa; botão Encher e esperar 6 h; alternador Setas de perda
- Leituras: temperatura de cada amostra, Q cedido e recebido, fase e fração derretida ou vaporizada, temperatura de contato, fluxo (kW/m²), potência perdida por mecanismo (W), temperatura do café

### Modelo
SENSAÇÃO (modo 1): a pele e a placa são tratadas como dois corpos semi-infinitos em contato. A efusividade é e = √(k·ρ·c), em W·s^½·m⁻²·K⁻¹. A temperatura de contato, que é o que os nervos da pele sentem, é Tc = (e_pele·T_pele + e_placa·T_placa)/(e_pele + e_placa), com T_pele = 34 °C (superfície da mão) e e_pele ≈ 1180. O fluxo no contato t segundos depois do toque é q(t) = [e_pele·e_placa/(e_pele + e_placa)]·(T_pele − T_placa)/√(π·t); o medidor mostra q em t = 1 s. Sala a 25 °C: alumínio Tc = 25,4 °C e q ≈ 5,7 kW/m²; cerâmica 28,8 °C e 3,4 kW/m²; madeira 31,8 °C e 1,5 kW/m²; lã 33,5 °C e 0,35 kW/m²; isopor 33,8 °C e 0,15 kW/m². Sala a 70 °C: alumínio 68,3 °C, cerâmica 54,6 °C, madeira 43,0 °C, isopor 34,9 °C. Sala a 5 °C: alumínio 6,4 °C e madeira 26,8 °C. Sala a 34 °C: todas dão 34 °C e o fluxo é zero. A seta de fluxo sempre aponta do mais quente para o mais frio. Escala de sensação pela temperatura de contato: abaixo de 15 °C 'gelado'; 15–28 'frio'; 28–36 'neutro'; 36–43 'quente'; 43–50 'dói'; acima de 50 'queima'. CALORÍMETRO (modo 2): cada amostra guarda sua entalpia por kg, u (J/kg), com referência no gelo a 0 °C. Sólido: u = c_gelo·T (T ≤ 0). Fusão: 0 ≤ u ≤ L_f, a 0 °C. Líquido: u = L_f + c_água·T. Ebulição: na temperatura T_eb, u vai de L_f + c_água·T_eb até esse valor + L_v. Acima disso, vapor. Substâncias sem mudança de fase na faixa usam u = c·T. No calorímetro ideal, o fluxo entre as amostras é Φ = G·(T₁ − T₂), com u₁ −= Φ·dt/m₁ e u₂ += Φ·dt/m₂. G é escolhido para o equilíbrio levar cerca de 3 s de animação: G = [C₁·C₂/(C₁ + C₂)]/1,5 s. O resultado final é conferido por um balanço analítico (bisseção na temperatura final usando a entalpia total). Exemplos: 1 kg de água a 20 °C + 1 kg de ferro a 80 °C dão 25,8 °C (Q trocado ≈ 24,4 kJ); 200 g de água a 80 °C + 600 g a 20 °C dão 35,0 °C; 100 g de gelo a −10 °C + 400 g de água a 50 °C dão 23,0 °C; 200 g de gelo a 0 °C + 200 g de água a 20 °C dão 0 °C com 150 g de gelo restante (só 50 g derretem). AQUECER: potência P constante entregue à amostra, com dQ = P·dt (rendimento de 100%, uma simplificação). Para 200 g de gelo de −20 °C até vapor: aquecer o gelo leva 8,4 kJ; fundir, 66,8 kJ; aquecer a água de 0 a 100 °C, 83,7 kJ; vaporizar, 451,2 kJ. O total é cerca de 610 kJ, uns 10 min com 1000 W, mostrados com o tempo acelerado 20×. T_eb vem do lugar escolhido. GARRAFA (modo 3): o café é 0,5 kg de água a 90 °C, num ambiente a 25 °C. O resfriamento usa condutâncias (W/K). A lateral é uma associação em série entre o espaço (G_esp = G_cond + G_conv + G_rad) e a superfície externa (G_ext = 0,45). Assim, G_total = 1/(1/G_esp + 1/G_ext) + G_tampa. Na parede simples, a lateral vale G_ext. dT/dt = −G_total·(T − 25)/(m·c), o que dá T(t) = 25 + 65·e^(−G_total·t/(m·c)). A potência de cada mecanismo é a fração G_i/G_esp da perda lateral, mostrada nas setas; a tampa entra como convecção e evaporação. Resultados em 6 h: dupla com ar, vidro comum, tampa plástica 28,2 °C; vácuo, vidro comum, cortiça 33,1 °C; ar, espelhada, cortiça 33,8 °C; vácuo, espelhada, sem tampa 29,1 °C; vácuo, espelhada, tampa plástica 60,6 °C; vácuo, espelhada, cortiça 68,8 °C. A caneca simples sem tampa chega a 60,6 °C em 30 min e a 44,5 °C em 1 h.

### Dados
Calor específico (J/kg·°C | cal/g·°C): água 4186 | 1,00; gelo 2100 | 0,50; vapor 2010 | 0,48; óleo de soja ≈ 1970 | 0,47; alumínio 900 | 0,215; ferro 450 | 0,11; cobre 385 | 0,092. Calores latentes da água: fusão 334 kJ/kg (80 cal/g); vaporização 2256 kJ/kg (540 cal/g) a 100 °C (Halliday, Resnick & Walker, Fundamentos de Física 2, tabelas 18-3 e 18-4). Propriedades para a efusividade (k em W/m·K; ρ em kg/m³; c em J/kg·K; e): alumínio 237; 2700; 900; ≈ 24 000. Aço inox 16; 8000; 500; ≈ 8000. Cerâmica (azulejo) 1,3; 2300; 840; ≈ 1600. Madeira (pinho) 0,15; 600; 1700; ≈ 390. Lã/feltro 0,04; 100; 1300; ≈ 72. Isopor (EPS) 0,033; 20; 1300; ≈ 29. Pele 0,37; 1100; 3400; ≈ 1180. Fonte: Incropera et al., Fundamentos de Transferência de Calor e de Massa, apêndice A, com valores típicos arredondados. Ponto de ebulição da água, pela atmosfera padrão e Clausius-Clapeyron com L = 40,66 kJ/mol: Rio de Janeiro (nível do mar, 101 kPa) 100,0 °C; São Paulo (760 m) 97,4 °C; Brasília (1172 m) 96,0 °C; La Paz (3640 m, 65 kPa) 87,6 °C; topo do Everest (8849 m) cerca de 69–70 °C; panela de pressão (cerca de 2 atm absolutas) cerca de 120 °C. Condutâncias da garrafa (W/K): espaço com ar, condução 0,23 e convecção 0,05; vácuo, condução 0,015 (pelo gargalo e apoios) e convecção 0. Irradiação entre paredes de vidro comum (ε 0,9): 0,29; com as duas faces espelhadas (ε 0,02): 0,004. Tampa: nenhuma 0,25 (inclui evaporação), plástica 0,04, cortiça 0,02. Superfície externa: 0,45 (área lateral de 0,044 m², h ≈ 10 W/m²·K). Esses valores são ilustrativos, calibrados para resultados realistas. A garrafa de vácuo foi inventada por James Dewar em 1892. O limiar de dor por calor na pele fica em cerca de 43–45 °C. Energia acima de 25 °C: banheira de 150 L a 40 °C ≈ 9,4 MJ; xícara de 200 mL a 90 °C ≈ 54 kJ.

### Desafios
Ordenação: o aluno arrasta as cinco placas para a faixa 'mais fria → mais quente' e confirma. O sistema compara com a ordem das temperaturas de contato e mostra os acertos. Antes de tocar, a pergunta-gatilho é 'qual temperatura o termômetro de cada placa marca?'. No desafio 'Inverta a ordem', o aluno ajusta a sala até o metal ser o MAIS quente ao toque (qualquer temperatura acima de 34 °C). No desafio 'Empate', ele acha a temperatura da sala em que todas as placas parecem iguais (34 °C ± 1). Calorímetro: a previsão é marcada no termômetro antes de misturar. O acerto vale se a diferença for de até 2 °C, com estrelas pela distância. Cenários prontos em sequência: água × ferro (26 °C), massas diferentes de água (35 °C), gelo × água morna (23 °C) e gelo que não derrete todo (0 °C, com 150 g de gelo sobrando). Pergunta-armadilha: 'Quem tem mais energia térmica: uma banheira de 150 L a 40 °C ou uma xícara de 200 mL a 90 °C?' A resposta é a banheira, com cerca de 170 vezes mais energia acima da temperatura ambiente. Aquecer: o aluno prevê qual patamar é mais longo (o da vaporização, 6,75 vezes o da fusão) e responde 'Em La Paz o macarrão cozinha mais rápido ou mais devagar?' (mais devagar, porque a água ferve a 87,6 °C). Garrafa: a meta é o café ficar em 60 °C ou mais às 6 h, verificado pela simulação. Uma estrela extra vai para quem passa usando tampa plástica em vez de cortiça (60,6 °C).

## Guia (mascote)

**Abertura:** Temperatura, calor e sensação não são a mesma coisa! As cinco placas estão na mesma sala. Antes de tocar, <b>ordene</b> da que parece mais fria para a que parece mais quente.

- **Qual a diferença entre calor e temperatura?**  
  <b>Temperatura</b> mede a agitação média das partículas, em °C ou K. <b>Calor</b> é a energia que PASSA de um corpo para outro por causa da diferença de temperatura, sempre do mais quente para o mais frio. Um corpo não 'tem' calor: ele tem energia interna e troca calor.
- **Por que o metal parece mais frio se está a 25 °C?**  
  Ele tira energia da sua mão muito mais rápido, porque conduz bem o calor. A pele no ponto de contato cai para perto de 25 °C, e é isso que você sente. A madeira tira calor devagar, e a pele fica em uns 32 °C. O termômetro mostra a temperatura; a mão sente a rapidez da troca.
- **O frio entra pela janela?**  
  Não existe 'fluxo de frio'. O que acontece é o calor saindo do corpo mais quente (você, a casa) para o mais frio. Um casaco não esquenta: ele <b>isola</b> e diminui a rapidez com que o seu calor vai embora.
- **Por que a mistura não deu a média das temperaturas?**  
  A média só vale para massas iguais da mesma substância. O que se conserva é a energia: o calor cedido pelo quente (m·c·ΔT) é igual ao recebido pelo frio. A água tem calor específico cerca de 9 vezes maior que o do ferro, por isso muda pouco de temperatura enquanto o ferro esfria muito, e o equilíbrio fica perto dos 20 °C da água.
- **Por que a temperatura para de subir quando o gelo derrete?**  
  Na mudança de fase, a energia da chama é usada para desfazer as ligações entre as moléculas, não para agitá-las mais. Daí o <b>patamar</b>: o gelo derrete a 0 °C absorvendo 80 cal/g (334 kJ/kg), e a água ferve absorvendo 540 cal/g (2256 kJ/kg).
- **Por que a água ferve a menos de 100 °C em La Paz?**  
  A água ferve quando a pressão do vapor dela iguala a pressão do ar. No alto a pressão é menor (cerca de 0,64 atm em La Paz), e 87,6 °C já bastam. A panela de pressão faz o contrário: com cerca de 2 atm, a água só ferve perto de 120 °C e a comida cozinha mais rápido.
- **Como a garrafa térmica funciona?**  
  Ela ataca os três caminhos do calor. O <b>vácuo</b> entre as paredes corta a condução e a convecção, porque não há ar para levar o calor. O <b>espelhamento</b> reflete a irradiação de volta. A <b>tampa</b> impede a convecção e a evaporação por cima. Sem o espelho, o vácuo sozinho não segura: a irradiação atravessa o vácuo, como a luz do Sol.
- **Isopor esquenta ou esfria as coisas?**  
  Nenhum dos dois: ele é isolante e só atrasa a troca de calor. Por isso serve tanto para manter o sorvete gelado quanto para manter a marmita quente.

## Para usar em sala
- Peça que a turma toque, de verdade, a perna metálica e o tampo de madeira da carteira e diga qual está mais frio. Depois abra o modo 1 e compare com os termômetros.
- No calorímetro, cada grupo escreve no caderno a previsão da mistura água × ferro antes de clicar. Discuta por que 50 °C, a média, é a resposta mais comum.
- Na garrafa térmica, cada grupo propõe a garrafa mais simples que ainda passe da meta e justifica a escolha pelos três mecanismos de propagação (EF07CI03, EM13CNT102).

## Como a IA entra
O guia recebe a ordem dada pelo aluno, as placas tocadas, a temperatura da sala, as temperaturas de contato e os fluxos. No calorímetro, recebe as substâncias, as massas, as temperaturas e as fases, a previsão e o equilíbrio real, com Q cedido e recebido. Na curva de aquecimento, recebe a potência, o lugar e a fase atual. Na garrafa, recebe as camadas escolhidas, a potência perdida por mecanismo e a temperatura às 6 h. Ele explica as diferenças usando c, L e a rapidez da troca de calor, aponta concepções como 'o metal está mais frio' e 'o frio entra', e propõe o próximo teste. O modelo da sensação, com corpos semi-infinitos e efusividade, é simplificado mas qualitativamente correto. Uma IA conectada poderia criar cenários novos e corrigir os cálculos do aluno.

## Cuidados de conteúdo
Setas e pacotes de energia vão sempre do mais quente para o mais frio; nunca desenhar 'frio entrando'. Separar 'temperatura' (o termômetro) de 'sensação' (temperatura de contato e fluxo). A mistura com gelo exige o modelo de entalpia, para tratar o gelo que não derrete todo e a água que congela; limitar os sliders de temperatura à fase escolhida (gelo só abaixo de 0 °C, por exemplo). O calor latente de vaporização fica constante (simplificação; ele varia pouco com a pressão). Manter o foco em energia e trocas de calor, não em substâncias, porque estados físicos ficam na Química. A convecção é uma animação simples de partículas, sem resolver o fluido. A garrafa usa condutâncias ilustrativas, com a irradiação linearizada, e isso deve ser declarado como simplificação. Na lupa, a amplitude da vibração deve ser proporcional a √T em kelvin, para as partículas não pararem a 0 °C. Ao simular 70 °C, avisar que tocar metal quente queima de verdade.

## Verificação (comportamentos a testar)
- Sala a 25 °C: os cinco termômetros marcam 25,0 °C, e as temperaturas de contato são 25,4 / 28,8 / 31,8 / 33,5 / 33,8 °C (alumínio, cerâmica, madeira, lã, isopor).
- Sala a 34 °C: todas as temperaturas de contato dão 34 °C e o fluxo é zero. Acima de 34 °C as setas se invertem (da placa para a mão) e a ordem de sensação também.
- Mistura de 1 kg de água a 20 °C com 1 kg de ferro a 80 °C: equilíbrio em 25,8 °C, com Q cedido = Q recebido ≈ 24,4 kJ.
- 200 g de gelo a 0 °C + 200 g de água a 20 °C: final em 0 °C com 150 g de gelo.
- 100 g de gelo a −10 °C + 400 g de água a 50 °C: final em 23,0 °C.
- Curva de 200 g de gelo: patamar a 0 °C com 66,8 kJ e patamar de ebulição com 451 kJ. Em La Paz o patamar fica em 87,6 °C; na panela de pressão, em cerca de 120 °C.
- Garrafa: vácuo + espelhada + cortiça dá 68,8 °C às 6 h; vácuo com vidro comum dá 33,1 °C; a caneca sem tampa dá 44,5 °C em 1 h.

## Miniatura
Modo 'Qual é mais fria?': a mão toca a placa de alumínio com a lupa aberta e pacotes laranja saindo da pele. Os cinco termômetros marcam 25 °C, e o medidor de sensação mostra 'frio' no alumínio ao lado de 'neutro' na madeira.
