# Fotossíntese Lab

> **Área:** Biologia · **id:** `fotossintese-lab` · **Tipo sugerido:** misto
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/fotossintese-lab.html`

## Propostas de pesquisa que formam este sistema

### Fotossíntese Lab — olhar currículo (BNCC/ENEM)

- **Tópico:** Bioenergética: fotossíntese, respiração celular e fermentação
- **BNCC:** EM13CNT101, EM13CNT202, EM13CNT203, EM13CNT301
- **Público:** 7º a 9º ano EF (versão qualitativa: luz, bolhas, dia e noite) e 1ª série EM (curvas, O-18, ATP)
- **Tipo:** 2D

**Ideia.** MODO 'Elódea': um béquer com um raminho de elódea fica sob uma lâmpada. Os sliders controlam a distância da lâmpada (intensidade), a cor da luz (vermelha, azul, verde, branca), o CO₂ (bicarbonato) e a temperatura. As bolhas de O₂ sobem numa taxa proporcional à fotossíntese líquida, e um cronômetro conta bolhas por minuto. O aluno 'mede' e marca pontos num gráfico de taxa × luz, como num experimento real. Assim surgem o ponto de compensação, a saturação e o fator limitante: com pouco CO₂, a curva achata mais cedo. SACADA 1: a luz verde quase não gera bolhas. A planta é verde porque REFLETE o verde, e o espectro de absorção da clorofila fica embutido. SACADA 2: abaixo do ponto de compensação, o indicador azul de bromotimol fica amarelo, porque a planta respira o tempo todo, inclusive de dia. Um modo 'Dia e noite' mostra o saldo de 24 h e desmonta o mito de que 'planta no quarto rouba oxigênio'. MODO 'Rastreie o oxigênio': a equação 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O aparece com átomos animados. O alternador 'O-18 na água' (Ruben e Kamen, 1941) mostra que o O₂ liberado vem da ÁGUA, não do CO₂, uma pegadinha clássica de vestibular. MODO 'Respiração × fermentação': uma garrafa com levedura, açúcar e uma bexiga na boca, com ou sem O₂ e com temperatura ajustável. A bexiga enche de CO₂, o etanol só aparece sem O₂, e um contador mostra o ATP por glicose: 2 na fermentação contra cerca de 30 na respiração aeróbica. Fecha com ligações ao cotidiano: massa de pão crescendo, músculo produzindo lactato.

**Por que é visual.** Gases e ATP são invisíveis, e fotossíntese e respiração acontecem ao mesmo tempo em sentidos opostos. O livro mostra duas equações separadas e o aluno não percebe o saldo. As bolhas, a cor do indicador e a curva montada pelo próprio aluno tornam concretos o fator limitante e o ponto de compensação, que estão entre os gráficos mais cobrados.

**Riscos.** O modelo de taxa precisa ser plausível: saturação do tipo Michaelis-Menten para luz e CO₂ e um ótimo de temperatura entre 25 e 30 °C, com queda acima disso. O rendimento de ATP está em torno de 30 a 32, mas livros antigos dizem 36 a 38, e o guia deve explicar a divergência. A Química já usa indicador de pH (titulação), mas o foco aqui é outro. Evitar refazer as organelas do Laboratório Celular: cloroplasto e mitocôndria são só citados.

### Fotossíntese Lab — olhar mecânica engenhosa

- **Tópico:** Fotossíntese: fatores limitantes, cor da luz e a origem da matéria das plantas
- **BNCC:** EM13CNT101, EM13CNT105, EM13CNT202, EM13CNT301
- **Público:** 6º–7º ano EF (introdução) e 1ª série EM (metabolismo energético e ciclo do carbono)
- **Tipo:** misto

**Ideia.** MODO 1 — BOLHAS DA ELÓDEA. Um tubo de ensaio com um ramo de elódea na água e uma lâmpada que o aluno arrasta para perto ou para longe. Há filtros de cor (vermelho, azul, verde, branco), uma pitada de bicarbonato (fonte de CO₂) e banho-maria para a temperatura. Bolhas de O₂ sobem e são contadas por minuto, e cada medição vira um ponto que o aluno registra no gráfico. SACADA 1: com luz verde as bolhas quase somem, porque a planta é verde justamente por refletir o verde. SACADA 2, a lei do fator limitante: ao aproximar a lâmpada, as bolhas aumentam e depois ESTACIONAM. A curva só volta a subir quando o aluno percebe que o gargalo agora é o CO₂ ou a temperatura. Desafio: 'chegue a 40 bolhas/min gastando a menor potência de lâmpada'.
MODO 2 — DE ONDE VEM A ÁRVORE? (van Helmont, século XVII). Antes de tudo, o aluno distribui 100% entre solo, água, ar e luz. Depois vê 5 anos de um salgueiro num vaso, com um modelo 3D de árvore crescendo: ela passa de 2,3 kg para 76,7 kg e o solo perde só 57 g. Uma contabilidade de átomos anima o CO₂ entrando pelos estômatos e virando glicose e celulose. SACADA: a madeira é feita principalmente de ar, e queimá-la devolve esse carbono ao ar.
MODO 3 — A JARRA DE PRIESTLEY E INGENHOUSZ (1771–1779). Uma jarra fechada com uma vela, com ou sem planta, na luz ou no escuro, com medidores de O₂ e CO₂. O aluno prevê quando a vela se apaga e descobre que a planta só renova o ar na luz. No escuro, ela também respira.

**Por que é visual.** A lei do fator limitante só aparece quando o aluno mexe em vários controles e vê a curva travar. E a ideia de que a árvore é feita de ar contradiz a intuição de quase todo mundo, inclusive adultos; ela precisa de uma animação da matéria entrando na planta.

**Riscos.** 1) Não simplificar demais o espectro: a luz verde rende bem menos, mas não zero. Usar uma curva de ação embutida (do tipo McCree) e dizer 'pouco eficiente'.
2) A contagem de bolhas deve seguir um modelo plausível: saturação limitada pelo menor dos fatores.
3) Na jarra, usar a vela em vez do camundongo histórico de Priestley.
4) Diferenciar do Ecossistema Vivo (plantas como população) e do Construtor Molecular (glicose só como molécula estática).
5) O 3D (árvore crescendo) é opcional; todo o resto é canvas 2D.
