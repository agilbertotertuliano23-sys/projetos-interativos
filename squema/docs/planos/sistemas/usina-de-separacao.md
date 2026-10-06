# Usina de Separação

> **Área:** Química · **id:** `usina-de-separacao` · **Tipo sugerido:** 2D
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/usina-de-separacao.html`

## Propostas de pesquisa que formam este sistema

### Usina de Separação — olhar currículo (BNCC/ENEM)

- **Tópico:** Misturas homogêneas e heterogêneas, fases e métodos de separação (ímã, decantação, funil de separação, filtração, evaporação, destilação simples e fracionada) e tratamento de água
- **BNCC:** EF06CI01, EF06CI03, EM13CNT310, EM13CNT104, EM13CNT301
- **Público:** 6º e 7º ano do EF (bancada e ETA); 1ª série do EM e revisão para o ENEM (torre de petróleo, sequências de separação em misturas complexas)
- **Tipo:** 2D

**Ideia.** Tem três modos. (1) BANCADA: o aluno recebe uma 'mistura-mistério' num béquer, como água + areia + sal + óleo + limalha de ferro, com fases visíveis. Uma LUPA mostra o nível das partículas: na fase homogênea (água + sal) elas estão espalhadas por igual, e nas heterogêneas há fronteiras. O aluno arrasta ferramentas para a mistura. Cada passo é animado e retira um componente. Uma ordem errada estraga o resultado: filtrar antes de tirar o óleo entope o papel; evaporar antes de tirar a areia deixa sal com areia. O ponto central: cada ferramenta acende na TABELA DE PROPRIEDADES a única coluna que ela explora (magnetismo, densidade, tamanho de partícula, ponto de ebulição). O aluno percebe que separar é procurar a propriedade em que os componentes diferem, e não decorar nomes de métodos. O guia pergunta 'em que esses dois componentes são diferentes?' antes de cada passo. (2) TORRE DE PETRÓLEO: coluna de destilação fracionada com gradiente de temperatura. O aluno aquece o petróleo cru e vê o vapor subir e condensar em cada bandeja onde a temperatura fica abaixo do ponto de ebulição da fração (GLP, gasolina, querosene, diesel, lubrificantes, asfalto), com as faixas reais embutidas. Ao mudar o perfil térmico, as frações mudam de bandeja. (3) ETA: a água barrenta do rio passa pela estação de tratamento: coagulação (sulfato de alumínio e cal formam flocos de Al(OH)₃), floculação, decantação, filtração, cloração e fluoretação. Uma leitura de turbidez e de micro-organismos mostra o efeito de cada etapa. Pular uma etapa mostra a consequência, por exemplo cloro sem filtração.

**Por que é visual.** No livro, a separação de misturas vira uma lista de métodos para decorar. A animação mostra a fase sumindo e a tabela de propriedades acendendo, e assim liga cada método à propriedade física que ele explora. A lupa de partículas mostra por que a água com sal parece uma substância pura e por que a filtração não separa o sal. A torre deixa o gradiente de temperatura visível, coisa que a foto de uma refinaria não mostra.

**Riscos.** Muitas misturas têm mais de uma ordem válida, então o verificador precisa aceitar sequências equivalentes e não uma resposta única. As faixas de ebulição das frações do petróleo são aproximadas e variam conforme a fonte, então devem aparecer como faixas. A química da coagulação precisa estar correta sem pesar para o 6º ano: usar um nível de detalhe ajustável. A fronteira entre fases deve ser desenhada sem efeitos de 'mistura mágica' que reforcem concepções erradas, como a de que o sal 'some' na água.

### Usina de Separação — olhar mecânica engenhosa

- **Tópico:** Misturas homogêneas e heterogêneas, fases e métodos de separação
- **BNCC:** EF06CI01, EF06CI03, EM13CNT307
- **Público:** 6º ano EF (casos de refinaria e destilação fracionada para a 1ª série EM)
- **Tipo:** 2D

**Ideia.** Uma 'lama' chega por um cano: água + sal + areia + óleo + limalha de ferro. Outros casos: água barrenta de rio (a sequência de uma estação de tratamento de água), água do mar nas salinas de Mossoró, caldo de cana no alambique, petróleo na refinaria, cascalho de garimpo. O aluno monta uma linha de produção encaixando estações (ímã, peneira, filtro, funil de decantação, centrífuga, tanque de evaporação ao sol, destilador simples, coluna de fracionamento) e ligando as saídas, como um Opus Magnum de bolso. Cada estação age sobre UMA propriedade (magnetismo, tamanho de partícula, densidade, solubilidade, temperatura de ebulição) e tem lupa de partículas em cada bocal. A meta é encher cada pote com um componente puro, com medidor de pureza e de energia/tempo gastos. SACADA 1 (previsão): quase todo aluno manda a água salgada para o filtro. O sal passa, e a lupa mostra os íons atravessando os poros do papel: mistura homogênea não se separa por filtro, só com mudança de estado. SACADA 2: a ordem importa. Evaporar antes de filtrar deixa sal e areia juntos, e o pote sai 'contaminado' (pureza 60%). SACADA 3: um contador de fases ao vivo e a lupa em misturas que 'parecem' homogêneas (leite, sangue, granito), com a centrífuga separando a nata. Os dados reais ficam embutidos: densidades, ebulições, solubilidade do NaCl (36 g/100 g de água).

**Por que é visual.** Cada método de separação é a exploração física de uma diferença de propriedade. Ver o fluxo se dividir estação por estação, com lupa nas partículas, torna explícito o 'porquê' de cada método, que nos livros aparece só como uma lista de nomes.

**Riscos.** O quebra-cabeça não pode ter uma única ordem certa: validar pelas propriedades, não por receita fixa. No celular (390px), montar a linha precisa ser 'tocar para colocar' em encaixes, não arrastar livre. Simplificações devem ser declaradas (sal da salina não sai 100% puro; a decantação de água e óleo usa funil de separação). O caso do garimpo/mercúrio fica só para discussão, sem procedimento.
