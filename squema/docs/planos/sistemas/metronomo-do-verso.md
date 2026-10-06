# Metrônomo do Verso

> **Área:** Português · **id:** `metronomo-do-verso` · **Tipo sugerido:** 2D
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/metronomo-do-verso.html`

## Propostas de pesquisa que formam este sistema

### Metrônomo do Verso — olhar mecânica engenhosa

- **Tópico:** Versificação: sílabas poéticas, elisão/sinalefa, contagem até a última tônica, acento rítmico, metros (redondilha menor e maior, decassílabo heroico e sáfico, alexandrino) e esquema de rimas.
- **BNCC:** EF69LP48, EM13LP49, EM13LP52
- **Público:** 8º–9º ano do EF (redondilha, rima, aliteração) e 1º–2º ano do EM (escansão completa, decassílabo, soneto)
- **Tipo:** 2D

**Ideia.** No palco, o verso aparece como uma fileira de contas (as sílabas gramaticais) sobre uma régua numerada de 1 a 12. Antes de tudo o aluno PREVÊ quantas sílabas poéticas o verso tem e marca na régua. Depois mexe direto no verso: arrasta a vogal final de uma palavra até a vogal inicial da seguinte e as duas se fundem como gotas (sinalefa/elisão: "que_ar-de"). As sílabas depois da última tônica ficam esmaecidas e caem da régua, porque a contagem para ali. Um metrônomo de Web Audio toca a batida, com as tônicas fortes (bumbo) e as átonas fracas (chimbal). Assim o aluno OUVE que "Amor é fogo que arde sem se ver" pulsa na 6ª e na 10ª sílaba (heroico) e compara com um sáfico (4-8-10). Modo "Toque o ritmo": a voz (Web Speech, opcional) lê o verso, o aluno bate na tela ou no teclado nas sílabas fortes, e um "piano-roll" de acentos compara os toques dele com o padrão. Modo "Conserte o verso": o verso tem 11 sílabas e há um banco de sinônimos com tamanhos diferentes (feliz/contente/alegre). O aluno troca palavras até o verso caber no metro e o metrônomo parar de tropeçar. Modo "Rimas": o soneto inteiro aparece com as terminações coloridas por família sonora (no estilo da visualização de rimas de Hamilton do WSJ). O esquema ABBA ABBA CDC DCD se monta sozinho e a aliteração salta à vista ("Vozes veladas, veludosas vozes", Cruz e Sousa). Corpus em domínio público: Gonçalves Dias (Canção do Exílio em redondilha maior, Canção do Tamoio em redondilha menor), Camões, Bilac ("Ora (direis) ouvir estrelas!"), Castro Alves, Cruz e Sousa e uma sextilha de cordel de Leandro Gomes de Barros. O aha: a sílaba poética não é a gramatical. Vogais se fundem de uma palavra para outra, o que vem depois da última tônica não conta, e o metro é literalmente um ritmo musical: dá para ouvir e bater com a mão (a Canção do Exílio tem o mesmo balanço da redondilha do cordel e das cantigas).

**Por que é visual.** A escansão costuma ser feita com barras no caderno e parece arbitrária. Ver as vogais se fundirem, as pós-tônicas caírem da régua e ouvir o pulso do metro transforma uma regra decorada em percepção rítmica. E dá para experimentar: trocar uma palavra e sentir o verso desandar.

**Riscos.** A escansão tem licenças (diérese, sinérese, hiato opcional): usar só versos com escansão conferida numa tabela embutida e aceitar as leituras alternativas marcadas. A Web Speech pt-BR lê com prosódia própria, fora do metro, por isso a referência é o metrônomo sintetizado e a voz fica opcional. Usar apenas textos em domínio público (evitar letras de música e poetas vivos).
