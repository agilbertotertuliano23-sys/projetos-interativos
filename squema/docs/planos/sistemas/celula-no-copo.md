# Célula no Copo

> **Área:** Biologia · **id:** `celula-no-copo` · **Tipo sugerido:** 2D
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/celula-no-copo.html`

## Propostas de pesquisa que formam este sistema

### Osmose Lab — olhar currículo (BNCC/ENEM)

- **Tópico:** Membrana plasmática e transporte: difusão, osmose e transporte ativo
- **BNCC:** EF06CI05, EM13CNT202, EM13CNT301
- **Público:** 6º ano EF (célula, membrana, versão qualitativa) e 1ª série EM (soluções, tonicidade, transporte ativo)
- **Tipo:** 2D

**Ideia.** MODO 'Membrana': uma caixa dividida por uma membrana semipermeável, com moléculas de água (pequenas) e de soluto (grandes, como a sacarose) em agitação térmica. Os poros só deixam passar as pequenas. Contadores ao vivo mostram as travessias da esquerda para a direita, da direita para a esquerda e o SALDO. O nível do líquido sobe do lado mais concentrado (tubo em U) até a pressão hidrostática equilibrar, e um slider de temperatura acelera tudo. A SACADA: a água atravessa nos dois sentidos o tempo todo, e o 'fluxo' é só o saldo. Do lado com mais soluto há menos água livre batendo nos poros, e ninguém 'puxa' a água. MODO 'Células': uma hemácia e uma célula vegetal (com parede) mergulham numa solução de NaCl ajustável de 0% a 3%. A hemácia incha e estoura em água pura (hemólise), fica normal em 0,9% (soro fisiológico) e murcha em solução salina concentrada (crenação). A célula vegetal fica túrgida sem estourar, graças à parede, e sofre plasmólise na solução concentrada. Desafios do cotidiano: por que a alface temperada murcha, por que carne-seca e doce em calda não estragam (as bactérias desidratam), por que beber água do mar desidrata. MODO 'Transporte': compara difusão simples (O₂, CO₂), difusão facilitada (glicose por proteína carreadora, com saturação) e transporte ativo (bomba de Na⁺/K⁺ gastando ATP: 3 Na⁺ saem e 2 K⁺ entram). O botão 'cortar o ATP' simula falta de O₂ ou cianeto, e o gradiente se desfaz devagar.

**Por que é visual.** A osmose é cheia de concepções erradas ('o sal puxa a água', 'a água só vai num sentido') porque o livro mostra só a seta final. Ver moléculas individuais cruzando nos dois sentidos, com o contador de saldo, torna o fenômeno estatístico intuitivo. As células reagindo às soluções resolvem de uma vez as questões do cotidiano que o ENEM adora.

**Riscos.** O modelo de partículas é uma simplificação (escala, número de moléculas) e deve dizer isso. Não confundir osmose (movimento do solvente) com difusão do soluto. Manter cerca de 400 partículas para ter bom desempenho no celular. A sobreposição com o Laboratório Celular é pequena: lá a membrana é só uma organela clicável.

### Célula no Copo — olhar mecânica engenhosa

- **Tópico:** Membrana plasmática, difusão e osmose (meios hipotônico, isotônico e hipertônico)
- **BNCC:** EF06CI05, EM13CNT202, EM13CNT301
- **Público:** 6º ano EF (célula) e 1ª série EM (membrana e transporte)
- **Tipo:** 2D

**Ideia.** MODO 1 — A MEMBRANA. Uma caixa dividida por uma membrana semipermeável com poros. Moléculas de água (pequenas) e de soluto (grandes, coloridas) se movem ao acaso. O aluno joga sal de um lado com o dedo e vê o nível da água SUBIR no lado salgado (tubo em U). O botão 'seguir uma molécula' destaca uma única água: ela anda a esmo e atravessa a membrana nos dois sentidos. SACADA: nenhuma molécula sabe para onde ir. O fluxo líquido surge do acaso somado ao bloqueio do soluto, e a água vai para onde há MAIS soluto, o contrário da intuição de que 'a água dilui'.
MODO 2 — HEMÁCIA E FOLHA NO COPO. O aluno escolhe a concentração de NaCl (de 0% a 3,5%) e, antes de mergulhar, aposta: incha, murcha ou nada? A hemácia incha e estoura em água pura (hemólise) e enruga na água do mar (crenação). A célula de elódea perde água do vacúolo e a membrana descola da parede (plasmólise), mas não estoura: a parede celular protege a planta. Desafio: achar a concentração em que a hemácia não muda (0,9%, o soro fisiológico) com o menor número de testes.
MODO 3 — CASOS DO COTIDIANO. A salada temperada que murcha. Por que beber água do mar desidrata. Por que a carne-de-sol e o bacalhau salgado não estragam (as bactérias plasmolisam). A uva-passa que incha na água. O paramécio que bombeia água para fora com o vacúolo contrátil. Cada caso é uma previsão seguida de uma simulação curta, com o mesmo motor de partículas.

**Por que é visual.** Osmose é invisível e contraintuitiva. Só vendo centenas de partículas em movimento aleatório o aluno entende que nenhuma força puxa a água. E só vendo a célula inchar ou estourar ao vivo ele liga a membrana a consequências concretas.

**Riscos.** 1) A simulação de partículas precisa ser leve (centenas de partículas em canvas no celular) e ainda mostrar um efeito claro em poucos segundos. É preciso calibrar a escala de tempo e avisar que ela é acelerada.
2) O guia deve evitar a frase 'o sal puxa a água'.
3) Diferenciar do Laboratório Celular (organelas e mitose), que não trata transporte pela membrana, e da titulação de Química.
