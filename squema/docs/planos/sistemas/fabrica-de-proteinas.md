# Fábrica de Proteínas

> **Área:** Biologia · **id:** `fabrica-de-proteinas` · **Tipo sugerido:** misto
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/fabrica-de-proteinas.html`

## Propostas de pesquisa que formam este sistema

### Fábrica de Proteínas — olhar currículo (BNCC/ENEM)

- **Tópico:** Genética molecular: tradução, código genético, mutações e DNA recombinante
- **BNCC:** EM13CNT304, EM13CNT202, EF09CI08
- **Público:** 1ª a 3ª série EM (vestibulares e ENEM: síntese proteica, mutação, transgênicos); o 9º ano EF pode usar o modo Mutação simplificado
- **Tipo:** misto

**Ideia.** MODO 'Tradução' (3D): um RNAm chega do núcleo (a transcrição, que o Laboratório Celular já mostra, aparece só em uma linha de recapitulação) e desliza por um ribossomo estilizado com duas subunidades 'bolha'. RNAt em forma de L chegam com o anticódon e o aminoácido, mostrado como uma conta colorida pela propriedade (apolar, polar, ácido, básico), e a cadeia polipeptídica cresce. Há controles de passo a passo e de animação. Ao lado, uma roda do código genético em 2D com os 64 códons acende o códon lido, o AUG de início e os de parada. MODO 'Mutação': usa a sequência real do início do gene da β-globina humana (HBB), AUG GUG CAU CUG ACU CCU GAG GAG AAG..., que vira Met-Val-His-Leu-Thr-Pro-Glu-Glu-Lys... O aluno clica em qualquer base para trocar, inserir ou apagar, e o sistema classifica ao vivo: silenciosa, troca de sentido, sem sentido (parada precoce) ou deslocamento de leitura. Trocar GAG por GUG no 6º aminoácido (Glu6Val) faz a hemácia do palco virar foice: anemia falciforme. A SACADA: trocar a 3ª base de um códon muitas vezes não muda nada, porque o código é degenerado. Apagar 1 base destrói tudo o que vem depois, mas apagar 3 bases seguidas remove um único aminoácido. Assim o aluno DESCOBRE que a leitura é feita em trincas. MODO 'Transgênico': o gene da insulina humana (cadeias A e B, com 21 e 30 aminoácidos, sequências embutidas) é recortado por uma enzima de restrição e colado num plasmídeo. A bactéria o traduz com o mesmo código e produz insulina humana. SACADA 2: o código genético é universal, e por isso desde os anos 1980 a insulina para diabéticos é fabricada por bactérias e leveduras.

**Por que é visual.** No livro, a síntese proteica é uma tabela de códons e um desenho congelado. Ler em trincas, a redundância do código e o efeito desproporcional de uma inserção só ficam claros quando o aluno mexe numa base e vê a proteína inteira mudar, ou não mudar. Ligar a mutação ao formato da hemácia conecta o nível molecular ao organismo.

**Riscos.** Há duas convenções para a posição 6 da β-globina (sem contar a Met inicial; com ela, é o códon 7), e o guia deve explicá-las. Conferir com cuidado a tabela de códons e as sequências da HBB e da insulina. Não repetir a dupla-hélice nem a fita complementar do Laboratório Celular. No 3D, limitar a 2 ou 3 RNAt visíveis para não pesar no celular. O tema transgênicos pede que o guia apresente pontos de vista distintos (EM13CNT304).

### Editor de DNA — olhar mecânica engenhosa

- **Tópico:** Síntese de proteínas (transcrição e tradução), código genético e mutações
- **BNCC:** EF09CI08, EM13CNT202, EM13CNT304
- **Público:** 9º ano EF (introdução) e 1ª a 3ª série EM (genética molecular)
- **Tipo:** 2D

**Ideia.** O palco mostra um trecho real do gene da β-globina (HBB, primeiros ~12 códons) como uma fita de letras coloridas. Abaixo, o RNAm se forma e um ribossomo lê de três em três, pendurando contas de aminoácidos coloridas por propriedade (carregado, polar, hidrofóbico). À direita aparece a consequência: hemácias redondas ou em forma de foice circulando num vaso.
MODO 1 — DO GENE À PROTEÍNA. O aluno toca numa letra para trocá-la (A→T→C→G), e toda a cadeia é recalculada ao vivo. Trocar UMA letra no códon 6 (GAG→GTG, ácido glutâmico→valina) transforma as hemácias em foices: é a anemia falciforme, detectada no teste do pezinho.
MODO 2 — DESAFIOS DE MUTAÇÃO. (a) 'Mude o DNA sem mudar a proteína': mutação silenciosa, porque o código é redundante. (b) 'Faça a proteína parar no 3º aminoácido': criar um códon de parada. (c) 'Apague uma letra só': tudo depois dela vira lixo (mudança da matriz de leitura), mostrado também com a frase 'O GATO COMEU O RATO' lida de três em três.
MODO 3 — MENSAGEM SECRETA. O aluno escreve uma palavra com as letras dos aminoácidos (ex.: VIDA) e o sistema gera um DNA que a codifica. Os colegas recebem só o DNA e decodificam com a tabela do código genético embutida.
SACADA: uma única letra entre milhares decide a forma de uma célula e, ao mesmo tempo, muitas mutações não mudam nada.

**Por que é visual.** A cadeia DNA → RNA → proteína → célula é longa demais para caber na cabeça só com texto. Ver a troca de UMA letra se propagar até o formato da hemácia, em tempo real, cria a ligação causal entre o genótipo molecular e o fenótipo.

**Riscos.** 1) Rigor: indicar a fita molde e a fita codificante, numerar o códon 6 sem a metionina inicial e embutir a tabela completa do código genético.
2) A anemia falciforme é um tema de saúde ligado a populações afrodescendentes: tratar sem estigma e destacar o diagnóstico precoce pelo SUS.
3) Diferenciar do Genética Lab (Punnett, Mendel) e do Laboratório Celular (dupla-hélice como estrutura). Aqui o foco é expressão gênica e mutação.
