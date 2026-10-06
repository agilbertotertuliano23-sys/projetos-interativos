# De Onde Eu Falo?

> **Área:** Português · **id:** `de-onde-eu-falo` · **Tipo sugerido:** 2D
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/de-onde-eu-falo.html`

## Propostas de pesquisa que formam este sistema

### De Onde Eu Falo? — olhar mecânica engenhosa

- **Tópico:** Variação linguística regional (lexical e fonética), isoglossas, áreas dialetais do português brasileiro e preconceito linguístico.
- **BNCC:** EF69LP55, EF69LP56, EM13LP10
- **Público:** 6º–9º ano do EF e 1º ano do EM
- **Tipo:** 2D

**Ideia.** Inspirado no quiz de dialetos do New York Times (Josh Katz), o aluno responde "como você chama…?" escolhendo entre imagens: a raiz (mandioca/aipim/macaxeira), a fruta (tangerina/mexerica/bergamota/poncã), o brinquedo que voa (pipa/papagaio/pandorga/arraia), o estilingue (estilingue/atiradeira/baladeira/bodoque/setra), o sinal de trânsito (semáforo/sinal/sinaleira/farol), o pãozinho (pão francês/cacetinho/pão de sal/carioquinha) e "tu" ou "você". Antes de cada resposta, o aluno PREVÊ para onde o mapa vai pender. A cada resposta, um mapa-mosaico do Brasil (27 UFs em hexágonos, sem precisar de polígonos) se recolore como mapa de calor de probabilidade: uma atualização bayesiana sobre as frequências por UF embutidas. O palpite "você deve ser de…" vai se estreitando. Modo "Isoglossas": o aluno liga e desliga palavra por palavra e vê as fronteiras de cada uma sobrepostas. Descobre que as linhas NÃO coincidem (macaxeira, bergamota e sinaleira têm fronteiras diferentes) e que as "regiões dialetais" (Antenor Nascentes, Atlas Linguístico do Brasil) são feixes de isoglossas. Modo "Detetive": um personagem manda uma mensagem curta ("Bah, guri, comprei bergamota e cacetinho" ou "Oxe, cadê a macaxeira?"), o aluno arrasta o alfinete no mapa e depois vê quanto cada palavra pesou como evidência. Fechamento com fichas: nenhuma variante é "errada" e a norma-padrão é uma variedade adequada a certas situações, não a língua "certa". O aha: o jeito de falar carrega um mapa, e três ou quatro palavras bastam para o modelo acertar a região. A variação é sistemática, tem geografia; não é erro.

**Por que é visual.** A variação costuma aparecer como lista de curiosidades ("no Sul se diz bergamota"). Um mapa que reage a cada resposta mostra que ela tem padrão espacial mensurável e previsível, e as isoglossas sobrepostas revelam como as áreas dialetais se formam.

**Riscos.** Os dados por UF são aproximações e precisam ser declarados assim (baseados nas cartas do ALiB para as capitais e em levantamentos publicados), com nota de que há variação dentro de cada estado e efeito da migração. Evitar estereótipos e caricaturas de sotaque: a voz sintetizada não imita sotaques e os fenômenos fonéticos (r caipira, s chiado, t palatalizado) entram só como ficha ou texto. Alunos de famílias migrantes podem "enganar" o modelo; transformar isso em discussão (o mapa mostra a mistura) em vez de "erro".
