# Caminho da Chuva

> **Área:** Geografia · **id:** `caminho-da-chuva` · **Tipo sugerido:** 3D
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/caminho-da-chuva.html`

## Propostas de pesquisa que formam este sistema

### Caminho da Chuva — olhar currículo (BNCC/ENEM)

- **Tópico:** Hidrografia: bacia hidrográfica, escoamento superficial, enchentes urbanas e áreas de risco
- **BNCC:** EF06GE04, EF06GE10, EF06GE12, EF08GE15, EF08GE17, EM13CHS301, EM13CHS304
- **Público:** 6º ano (ciclo da água, bacias, uso do solo) e 8º ano (áreas de risco nas cidades latino-americanas); revisão no Ensino Médio (questões ambientais urbanas do ENEM).
- **Tipo:** 3D

**Ideia.** Bloco 3D de uma pequena bacia hidrográfica: terreno procedural com nascentes, afluentes, rio principal, várzea e foz. A rede de rios não é desenhada à mão. Ela 'nasce' do relevo (direção de fluxo D8 e acumulação), e a espessura de cada trecho cresce com a ordem dos afluentes. MODO 1 'Para onde vai a gota?': o aluno clica em qualquer ponto e uma gota desce pela linha de maior declive até a foz. Ao mesmo tempo acende a área que drena para aquele ponto (sub-bacia), e o divisor de águas aparece como uma crista luminosa. Clicando dois pontos a poucos metros, um de cada lado do divisor, as gotas vão para rios diferentes. Gancho real: o Tietê nasce a cerca de 20 km do mar e corre para o interior, até a bacia do Paraná/Prata. MODO 2 'Mesma chuva, outra bacia': com um pincel o aluno pinta floresta, pasto, lavoura ou cidade sobre o terreno (ou usa o slider de urbanização), escolhe a chuva (mm em 1 h) e aperta 'Chover'. Cada célula separa infiltração e escoamento pelo método do Número de Curva: a floresta infiltra muito, o asfalto quase nada. Um hidrograma ao vivo na foz compara a curva atual com a 'bacia original' em fantasma: a cidade gera um pico mais alto e mais cedo, que é a enchente. Alternadores: mata ciliar; rio canalizado (a água corre mais rápido e piora o pico a jusante); piscinão ou parque linear (amortece o pico). MODO 3 'Áreas de risco': o aluno coloca casas (modelos livres) na várzea, numa encosta íngreme desmatada ou no alto. Depois da tempestade, a mancha de inundação sobe pela curva cota-vazão, e as encostas sem vegetação acima de um limiar de declive sinalizam deslizamento. As casas atingidas ficam marcadas. Barras extras mostram a recarga do lençol freático e o assoreamento: o sedimento das encostas nuas eleva o leito do rio. SACADA: o hidrograma lado a lado mostra que enchente urbana não é 'chuva demais', é 'água que chega rápido demais'. Perguntas do guia: 'O que é divisor de águas?', 'Por que a cidade alaga mais que o campo com a mesma chuva?', 'Para que serve a mata ciliar?', 'Canalizar o rio resolve?'.

**Por que é visual.** Bacia, divisor de águas e escoamento são conceitos sobre 'para onde a água vai', difíceis de acompanhar num desenho estático. Ver a gota descer, a sub-bacia acender e o hidrograma mudar quando se pinta asfalto liga relevo, uso do solo e enchente numa única causa visível.

**Riscos.** Sobreposição parcial com Relevo 3D (terreno 3D) e Clima Simulator (chuva); aqui o foco é hidrologia e ocupação. O modelo hidrológico precisa ser simples e honesto (D8 + Número de Curva + tempo de percurso por célula) e apresentado como modelo didático. Riscos técnicos: (1) a grade de ~100×100 células é o limite para manter fluidez no celular; (2) o pincel exige raycast sobre o terreno. Moradia em área de risco é tema sensível: tratar como problema de renda e política urbana, nunca como culpa dos moradores.

### Caminho da Chuva — olhar mecânica engenhosa

- **Tópico:** Bacia hidrográfica (divisor de águas, nascente, afluente, foz, montante e jusante) e escoamento superficial urbano comparado ao rural; enchentes
- **BNCC:** EF06GE04, EF06GE12, EF06GE10, EF08GE17, EM13CHS304
- **Público:** 6º ano do EF. No EM, serve para gestão de riscos, com as enchentes do RS em 2024 como contexto.
- **Tipo:** misto

**Ideia.** Uma bacia 3D: vale cercado de serras, rio principal com afluentes e uma cidade com ponte perto da foz. (1) GOTA: o aluno toca em qualquer ponto e solta uma gota, que desce pelo caminho de maior declive até o rio. Tocando no rio, toda a área a montante se acende e os divisores de águas aparecem como linhas. Desafio: 'um caminhão tombou e vazou óleo aqui; quais cidades precisam fechar a captação?' Aha: a cidade mais próxima, do outro lado do divisor, está a salvo, e uma bem distante rio abaixo não está. (2) MESMA CHUVA, OUTRA ENCHENTE: o aluno pinta usos do solo (mata, pasto, lavoura, asfalto, parque, piscinão, telhado verde) e pode retificar ou canalizar o rio. Antes de chover, desenha com o dedo o hidrograma que espera (vazão na ponte ao longo das horas). Cai a mesma chuva de 80 mm, dividida em infiltração e escoamento conforme a cobertura de cada célula. O hidrograma real é traçado sobre o palpite e, se a vazão passa da capacidade da ponte, as ruas da cidade 3D alagam. Aha: impermeabilizar não só aumenta o volume, também antecipa e afina o pico (a enchente chega antes e mais alta); canalizar acelera a água e empurra a enchente para quem mora rio abaixo; parques e piscinões achatam o pico. Leituras: % infiltrado, pico em m³/s, tempo até o pico, área alagada.

**Por que é visual.** O trajeto da água e a forma do hidrograma não se veem no dia a dia. Comparar o palpite com a curva real, depois de mudar só a cobertura do solo, torna a relação de causa concreta e mensurável.

**Riscos.** O modelo hidrológico é simplificado (escoamento por coeficiente mais tempo de percurso por área, com direção de fluxo D8) e precisa ser apresentado como modelo. O gerador de terreno pode ser compartilhado com a Caixa de Areia; se só um dos dois entrar, o modo Gota/divisor pode virar um modo do outro. Pintar a grade sobre o 3D no celular exige otimização. Enchentes reais tiveram vítimas, então o tom precisa ser cuidadoso.
