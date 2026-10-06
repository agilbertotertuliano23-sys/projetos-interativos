# Pilha Viva

> **Área:** Química · **id:** `pilha-viva` · **Tipo sugerido:** 2D
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/pilha-viva.html`

## Propostas de pesquisa que formam este sistema

### Pilhas e Eletrólise — olhar currículo (BNCC/ENEM)

- **Tópico:** Oxirredução e NOX, pilha de Daniell, potenciais padrão de redução e ddp, ânodo, cátodo e ponte salina, eletrólise e galvanoplastia (leis de Faraday), corrosão e metal de sacrifício, baterias e descarte
- **BNCC:** EM13CNT107, EM13CNT104, EM13CNT106, EM13CNT307, EM13CNT309
- **Público:** 2ª e 3ª série do EM e preparação para o ENEM (eletroquímica ~6,6%); o modo Corrosão também serve ao 9º ano como introdução
- **Tipo:** 2D

**Ideia.** Tem três modos. (1) MONTAR PILHA: o aluno escolhe dois eletrodos (Mg, Al, Zn, Fe, Ni, Pb, Cu, Ag), cada um mergulhado na solução do seu íon, a partir de uma tabela de E° embutida. O sistema decide sozinho quem é ânodo e quem é cátodo. A animação mostra átomos do ânodo perdendo 2e⁻ e saindo como íons (a placa afina), elétrons em pontos correndo pelo fio até o cátodo, e íons da solução se depositando (a placa engrossa) enquanto a solução azul de CuSO₄ desbota. O voltímetro mostra E°cát − E°ân. O ponto central: pela ponte salina passam íons K⁺ e NO₃⁻, nunca elétrons. Se o aluno retira a ponte, a corrente para na hora porque as cargas se acumulam, uma concepção errada clássica desfeita na tela. Uma lupa mostra a superfície do eletrodo no nível das partículas. (2) ELETRÓLISE: uma bateria externa força a reação não espontânea. Em 'Cobrear a chave', a massa depositada cresce com a corrente e o tempo (m = M·i·t / n·F), com gráfico ao vivo. Em 'Salmoura', o NaCl aquoso libera bolhas de H₂ e Cl₂, e o indicador fica rosa no cátodo, onde se forma NaOH. Os sinais do ânodo e do cátodo trocam em relação à pilha, e a tela destaca isso. (3) CORROSÃO: pregos de ferro em água com O₂: sozinho, enrolado em zinco (proteção, metal de sacrifício como em navios e gasodutos) e enrolado em cobre (corrosão acelerada). A ferrugem cresce no tempo, e o guia liga o resultado aos potenciais da tabela.

**Por que é visual.** Na pilha acontecem quatro fluxos ao mesmo tempo (elétrons no fio, cátions, ânions e massa entre as placas), e o desenho estático do livro mistura todos. Ver a placa afinar e a outra engrossar, a cor sumir e a corrente parar quando a ponte sai dá sentido aos nomes ânodo, cátodo e ponte salina. A troca de sinais entre pilha e eletrólise é a pegadinha mais comum em vestibulares.

**Riscos.** Pode se sobrepor à Eletricidade Lab da Física, que trata de circuitos. Para diferenciar, o foco aqui são as reações nos eletrodos e na solução. As convenções de sinal do ânodo e do cátodo, que mudam entre pilha e eletrólise, precisam de rótulos impecáveis. A ordem de descarga na eletrólise aquosa é simplificada e o efeito da concentração (Nernst) fica fora: isso precisa estar declarado. Os potenciais devem ser os valores padrão de referência. Pb e Ag: tratar o descarte com responsabilidade, sem sugerir experimentos com metais tóxicos.

### Escada dos Metais — olhar mecânica engenhosa

- **Tópico:** Reatividade dos metais, oxirredução e pilhas (eletroquímica)
- **BNCC:** EM13CNT107, EM13CNT104, EM13CNT301
- **Público:** 2ª série EM (modo Mergulho acessível ao 9º ano EF)
- **Tipo:** 2D

**Ideia.** MODO 1 'Mergulho': uma bancada com placas de Mg, Zn, Fe, Cu e Ag e béqueres de sulfato de cobre (azul), sulfato de zinco, sulfato de ferro, nitrato de prata e ácido clorídrico diluído. O aluno mergulha uma placa e observa as evidências. O zinco no sulfato de cobre fica coberto de cobre avermelhado e o azul desbota. O cobre no sulfato de zinco não faz nada. O cobre no nitrato de prata cria 'pelos' de prata e deixa a solução azulada. O ferro no ácido solta bolhas de H₂. A lupa mostra Zn → Zn²⁺ + 2e⁻ e Cu²⁺ + 2e⁻ → Cu. Cada resultado vai para uma tabela, e o aluno arrasta os metais para os degraus de uma escada ('quem cede elétrons para quem'). SACADA: com 5 ou 6 mergulhos ele monta sozinho a fila de reatividade, e a fila PREVÊ os mergulhos que ele ainda não fez. O guia desafia: 'e o magnésio no sulfato de ferro?' (prever, depois testar). MODO 2 'Pilha': o aluno escolhe dois metais e o eletrólito (limão, batata, laranja, água com sal, água pura). O voltímetro mostra uma tensão que é a distância entre os degraus (E° embutidos, ex.: Zn/Cu ≈ 1,1 V). Os elétrons correm pelo fio, o ânodo emagrece e o cátodo engorda. O 'aha' é que a fruta quase não importa: quem define a voltagem são os metais, e a água pura não conduz. MODO 3 'Desafio': acender um LED vermelho (cerca de 1,8 V) e ligar uma calculadora (1,5 V) com o menor número de células. As tensões se somam em série, e a resistência interna explica por que 2 limões quase não bastam. Bônus: escolher o ânodo de sacrifício que protege o casco de um navio ou um aquecedor.

**Por que é visual.** A oxirredução é invisível e costuma ser ensinada como uma tabela de potenciais para decorar. A escada transforma os potenciais numa régua espacial que o próprio aluno constrói pela evidência, e a pilha vira literalmente a 'distância entre dois degraus'.

**Riscos.** Pilhas de fruta reais dão menos tensão que a diferença de E° (cerca de 0,9 V para Zn/Cu no limão) e corrente mínima: é preciso modelar a resistência interna para não prometer um LED aceso que na prática não acende. Os E° valem para condições padrão (1 mol/L, 25 °C), e isso deve ser avisado. Não incentivar o manuseio de nitrato de prata ou HCl em casa. Incluir o descarte correto de pilhas e baterias (EM13CNT104).
