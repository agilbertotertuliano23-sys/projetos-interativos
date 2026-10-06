# Seleção Natural

> **Área:** Biologia · **id:** `selecao-natural` · **Tipo sugerido:** 2D
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/selecao-natural.html`

## Propostas de pesquisa que formam este sistema

### Seleção Natural — olhar currículo (BNCC/ENEM)

- **Tópico:** Evolução: variação, seleção natural, Lamarck × Darwin, resistência a antibióticos
- **BNCC:** EF09CI10, EF09CI11, EM13CNT208, EM13CNT201, EM13CNT205
- **Público:** 9º ano EF (Lamarck × Darwin e camuflagem) e 1ª a 3ª série EM (resistência bacteriana, deriva)
- **Tipo:** 2D

**Ideia.** MODO 'Você é o predador': o palco mostra uma casca de árvore em textura procedural (bétula clara com liquens ou tronco escurecido pela fuligem da Revolução Industrial) com 60 mariposas (Biston betularia). A cor de cada uma é um valor contínuo de claro a escuro, herdado dos pais com pequena variação e mutação rara. O aluno faz o papel do pássaro e tem 15 s por geração para clicar ('comer') as que enxergar. As sobreviventes se reproduzem até repor 60, e o painel mostra o histograma de cor por geração e a cor média ao longo do tempo. Depois o aluno troca o tronco para 'poluído' e joga mais 5 gerações: a população escurece sozinha. A SACADA: o aluno não quis mudar as mariposas, nem elas se esforçaram. A variação já existia, e o 'ambiente' (a mão do aluno) só filtrou. O histograma deixa claro que nenhuma cor nova surgiu do nada e que só a frequência mudou. Um alternador 'predador automático' faz uma ave simulada caçar, para turmas grandes ou para o projetor. MODO 'Lamarck × Darwin': a mesma população de girafas, com pescoços variados, enfrenta uma seca em duas linhas do tempo lado a lado. Em Lamarck, o pescoço estica pelo uso e o filho herda. Em Darwin, as de pescoço mais longo sobrevivem mais e deixam mais filhotes. O botão 'Experimento de Weismann' corta a cauda de camundongos por 5 gerações, e a cauda dos filhotes nunca encurta: a herança dos caracteres adquiridos é refutada. MODO 'Resistência bacteriana': uma placa de Petri tem 300 bactérias com resistência variável. O aluno escolhe a dose e quantos dias tomar o antibiótico. Se parar no 3º dia, sobram justamente as mais resistentes, que repovoam a placa, e a resistência média sobe no gráfico. SACADA 2: o antibiótico não cria a resistência, ele a seleciona. Opcional: um modo 'Deriva' compara populações de 10 e de 500 indivíduos sem seleção, e um alelo se fixa ao acaso só nas pequenas.

**Por que é visual.** A seleção natural acontece na população e ao longo de gerações. As figuras estáticas do livro (girafa esticando, mariposa mudando de cor) induzem o erro de achar que o indivíduo se transforma. Aqui o aluno vê o histograma mudar só porque alguns morrem e outros se reproduzem, e sente o mecanismo agindo pelas próprias mãos. É o 'aha' que o texto não entrega.

**Riscos.** Linguagem teleológica ('para se adaptar') precisa ser corrigida pelo guia. Os alvos de clique no celular devem ter pelo menos 28 px, e a camuflagem precisa funcionar de verdade: testar o contraste nas duas cascas. O tema pode gerar resistência religiosa em algumas turmas, então a abordagem deve ser científica e respeitosa. É preciso diferenciar do Ecossistema Vivo: lá muda a QUANTIDADE de presas e predadores, aqui muda a CARACTERÍSTICA da população.

### Caça Camuflada — olhar mecânica engenhosa

- **Tópico:** Seleção natural e as ideias evolucionistas de Darwin e Lamarck (mariposa Biston betularia e o melanismo industrial)
- **BNCC:** EF09CI10, EF09CI11, EM13CNT201, EM13CNT301
- **Público:** 9º ano EF (Lamarck × Darwin, seleção natural) e 3ª série EM (evolução)
- **Tipo:** 2D

**Ideia.** MODO 1 — VOCÊ É O PÁSSARO. O palco mostra um tronco com textura de casca: clara com liquens ou escura de fuligem. Nele pousam 30 mariposas, cada uma com um tom de asa herdável (valor contínuo de 0 a 1, com padrão salpicado). O aluno tem 8 s por geração para tocar e 'comer' as que encontrar. As sobreviventes se reproduzem (o filhote tem o tom da mãe ± uma pequena mutação), e a nova geração pousa em lugares sorteados. Um histograma de tons embaixo do tronco se desloca a cada geração. SACADA: o aluno nunca escolheu mudar a espécie, só caçou o que via. Mesmo assim, em 6 a 8 gerações, a população fica da cor do tronco. A frase-revelação do guia: 'nenhuma mariposa mudou de cor; a população mudou'.
MODO 2 — MANCHESTER 1850–2000. Um pássaro automático (a chance de detectar cresce com o contraste entre asa e casca) roda 150 gerações em segundos. O aluno move o controle de poluição ao longo dos anos (Revolução Industrial, depois as leis de ar limpo) e compara a curva de % de formas escuras com dados históricos embutidos (cerca de 98% em 1895, queda depois de 1970).
MODO 3 — DARWIN × LAMARCK NO TRIBUNAL. O mesmo cenário roda com as duas teorias como modelos alternativos. Em Lamarck, cada mariposa escurece por esforço e transmite isso aos filhos. Em Darwin, só há variação herdável e sobrevivência diferencial. O aluno precisa propor o experimento que separa as duas: criar ovos de mães escuras num tronco claro. Ele registra a previsão de cada teoria e roda: os filhotes nascem escuros e não clareiam, como diz Darwin. Desafio extra: zerar a variação (todas iguais) e ver a seleção parar. Sem variação não há evolução.

**Por que é visual.** A camuflagem só existe para quem olha. O aluno sente, como predador, a dificuldade de achar a mariposa certa. O histograma em movimento separa o que não muda (o indivíduo) do que muda (a população). Um texto ou um gráfico pronto esconderiam justamente essa sacada.

**Riscos.** 1) É um clássico já conhecido (Ask a Biologist, PhET Natural Selection). Sem a camada Darwin × Lamarck e os dados históricos, vira só 'cliquem nas mariposas'.
2) A casca e as asas precisam ser procedurais em canvas (ruído e salpicos) e calibradas para a camuflagem funcionar também em telas de 390px.
3) Os textos do guia devem evitar a frase errada 'a mariposa se adaptou'.
4) Não sobrepõe o Ecossistema Vivo, que trata dinâmica presa–predador e não herança ou variação.
Extensão possível com o mesmo motor de seleção: modo Megaplaca, com bactérias atravessando faixas crescentes de antibiótico, como no experimento de Harvard de 2016.
