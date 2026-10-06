# Surto & Vacina

> **Área:** Biologia · **id:** `surto-e-vacina` · **Tipo sugerido:** 2D
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/surto-e-vacina.html`

## Propostas de pesquisa que formam este sistema

### Imunidade de Rebanho — olhar currículo (BNCC/ENEM)

- **Tópico:** Imunologia e saúde coletiva: vacinas, memória imunológica, soro × vacina, cobertura vacinal
- **BNCC:** EF07CI10, EF07CI09, EM13CNT310, EM13CNT205
- **Público:** 7º ano EF (vacinas, soro × vacina) e EM (R₀, limiar, curvas SIR, políticas públicas)
- **Tipo:** 2D

**Ideia.** MODO 'Surto na cidade': 400 pessoas (pontos ou ícones; 250 no celular) circulam por um bairro estilizado. O aluno escolhe a doença numa tabela embutida com faixas de R₀ (sarampo 12–18, catapora 10–12, poliomielite 5–7, covid-19 da cepa original 2,5–3, gripe sazonal 1,3–1,8) e ajusta a cobertura vacinal e a eficácia da vacina. Entra um 'paciente zero'. As curvas S, I e R se desenham ao vivo, e um contador destaca as pessoas que NÃO podem se vacinar (bebês, imunossuprimidos) e adoeceram. O slider de cobertura mostra a marca do limiar 1 − 1/R₀. A SACADA: acima do limiar o surto se apaga sozinho e protege justamente quem não pôde se vacinar. Para o sarampo, 90% de cobertura não basta, o que explica por que o Brasil perdeu o certificado de eliminação (2019) e o recuperou em novembro de 2024. MODO 'Memória imunológica': um gráfico de anticorpos × dias com os botões '1º contato (vacina)', '2º contato' e 'soro'. A segunda resposta é mais rápida e intensa (células de memória). O soro dá anticorpos prontos na hora, que somem em semanas (imunidade passiva). Casos-problema treinam a escolha: picada de jararaca pede soro antiofídico; prevenir pede vacina. MODO opcional 'Linha do tempo do PNI': varíola (último caso no Brasil em 1971), pólio (último caso em 1989) e sarampo (certificados de 2016 e de 2024), ao lado da cobertura vacinal.

**Por que é visual.** Imunidade de rebanho é um fenômeno coletivo e não linear: um pequeno aumento de cobertura perto do limiar muda tudo, o que é impossível de sentir num parágrafo. A diferença entre soro e vacina, campeã de questões, vira uma comparação direta entre duas curvas no mesmo gráfico.

**Riscos.** R₀ é uma faixa e não um valor exato: mostrar faixas e citar a fonte. Conferir as datas históricas do PNI. O tom deve valorizar a vacinação sem alarmismo e sem dar margem a desinformação. A simulação com agentes precisa de cuidado de desempenho no celular. Ela lembra visualmente o Sociedade Simulator (agentes), mas o foco é epidemiológico. Não dar orientação médica individual.

### Surto & Vacina — olhar mecânica engenhosa

- **Tópico:** Vacinação: memória imunológica no corpo e imunidade coletiva (de rebanho) na população
- **BNCC:** EF07CI10, EF07CI09, EM13CNT310, EM13CNT205
- **Público:** 7º ano EF (vacinação, indicadores de saúde) e 1ª a 3ª série EM
- **Tipo:** 2D

**Ideia.** MODO 1 — NO CORPO. Um gráfico de anticorpos × dias ao lado de uma arena 2D com vírus e células de defesa. O aluno escolhe entre infectar direto ou vacinar antes (antígeno enfraquecido) e infectar depois. Ele vê a resposta primária, lenta, deixar o vírus passar da linha de sintomas. Na segunda exposição, a resposta de memória é rápida e maior e derruba o vírus antes da linha. SACADA: a vacina é um ensaio sem a doença. O mesmo gráfico explica por que algumas vacinas pedem reforço: a memória decai.
MODO 2 — NA ESCOLA. Uma grade de 20×20 alunos, no estilo Kevin Simler e Nicky Case. Antes de rodar, o aluno desenha com o dedo a curva de doentes que espera ver. Depois o surto corre, e a curva real aparece sobre o rabisco. Ao ajustar a cobertura vacinal, ele descobre um limiar súbito: com 50% o surto ainda varre a escola, com 80% morre na largada. Não é linear. Bebês e imunossuprimidos, que não podem tomar a vacina, ficam protegidos quando os vizinhos estão vacinados: a imunidade é coletiva.
MODO 3 — DESAFIO DAS DOSES. 'Você tem 60 doses e o paciente zero aparece amanhã. Proteja os 5 bebês.' O aluno toca nas pessoas para vacinar e descobre sozinho a vacinação em anel e o papel de quem tem muitos contatos. Uma tabela embutida com o R₀ de doenças reais (sarampo 12–18, pólio 5–7, gripe ~1,5) gera o limiar 1 − 1/R₀. A conexão com o Brasil: o sarampo exige cerca de 95% de cobertura, e o país perdeu o certificado de eliminação em 2019 e o recuperou em 2024.

**Por que é visual.** Imunidade de rebanho é um fenômeno emergente: não existe em nenhum indivíduo, só no padrão espacial do contágio. Ver a onda parar ao bater numa muralha de vacinados, e comparar o próprio rabisco com a curva real, torna o limiar não linear inesquecível.

**Riscos.** 1) Tema sensível (hesitação vacinal). O guia precisa ser rigoroso e sem alarmismo, e o modelo SIR em grade deve ser apresentado como simplificação.
2) O desenho da curva à mão tem de funcionar bem no toque, no celular.
3) O Sociedade Simulator (Schelling) também usa uma grade, então o visual precisa ser diferente.
4) Conferir os valores de R₀ e as datas da certificação do sarampo antes de publicar.
Não sobrepõe nenhum sistema existente.
