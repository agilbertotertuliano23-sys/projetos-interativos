# Caixa de Areia Topográfica

> **Área:** Geografia · **id:** `caixa-de-areia` · **Tipo sugerido:** misto
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/caixa-de-areia.html`

## Propostas de pesquisa que formam este sistema

### Do Relevo ao Mapa — olhar currículo (BNCC/ENEM)

- **Tópico:** Cartografia: curvas de nível, perfil topográfico e escala
- **BNCC:** EF06GE08, EF06GE09, EM13CHS106, EM13CHS206
- **Público:** 6º ano (habilidades centrais de cartografia) e revisão para ENEM e vestibulares (escala e perfis aparecem em questões de interpretação).
- **Tipo:** misto

**Ideia.** Tela dividida: à esquerda uma ilha 3D com morro, vale com rio, escarpa e sela entre dois picos; à direita o mapa topográfico da mesma ilha visto de cima. SACADA 'O mar sobe': um slider levanta o nível do mar de 0 a 600 m. Cada linha de costa que a água deixa para trás é carimbada no mapa como uma curva de nível. O aluno 'fabrica' o mapa e entende que curva de nível é onde estaria a praia se o mar chegasse àquela altitude. Mudar a equidistância (50 m ou 100 m) muda o número de curvas. Na leitura do mapa, passar o dedo mostra a altitude, curvas juntas acendem em vermelho (declive forte) e curvas espaçadas em verde. Ao tocar, o 3D destaca a regra do V (curvas que apontam para montante marcam o vale do rio) e os círculos concêntricos do topo do morro. MODO 'Perfil': o aluno traça um segmento A–B sobre o mapa. Um plano de corte aparece no 3D e o perfil topográfico é desenhado com exagero vertical ajustável (1×, 5×, 10×); o guia explica por que o perfil exagerado 'mente' sobre a inclinação. Desafios: 'Qual trilha até o pico é mais suave?' e 'De onde se vê o farol?' (linha de visada no perfil). MODO 'Escala': uma régua arrastável mede a distância no mapa em cm e converte pela escala numérica e pela gráfica. O zoom troca a escala (1:5.000, 1:50.000, 1:1.000.000) e mostra o paradoxo cobrado em prova: escala grande = área pequena com muito detalhe. Problemas são gerados na hora, como '4,2 cm a 1:50.000 = ? km'.

**Por que é visual.** Curva de nível é a passagem mais difícil do 3D para o 2D no Fundamental: no papel o aluno vê linhas, não um morro. Fazer o mar subir e carimbar as linhas, e traçar o perfil vendo o corte no 3D, resolve essa tradução diretamente.

**Riscos.** Sobreposição visual com Relevo 3D (terreno), mas o foco é a representação cartográfica, não a formação do relevo. Riscos técnicos: (1) as curvas saem de marching squares sobre a grade de altitudes (~100 linhas de código); (2) o toque no mapa 2D precisa ficar sincronizado com o 3D; (3) no celular os dois painéis precisam ser empilhados. O terreno procedural deve ter formas didáticas claras (vale em V, sela, escarpa); o modelo 'ilha' existente serve só como referência visual.

### Caixa de Areia Topográfica — olhar mecânica engenhosa

- **Tópico:** Curvas de nível, mapa topográfico, perfil topográfico, equidistância, declividade e leitura do relevo em 2D
- **BNCC:** EF06GE09, EF06GE08, EM13CHS106
- **Público:** 6º ano do EF, com desafios de declividade e cota para o EM e cursos técnicos.
- **Tipo:** misto

**Ideia.** Inspirada no AR Sandbox da UC Davis. A tela mostra o mesmo terreno duas vezes: um bloco 3D e, ao lado, o mapa topográfico com cores hipsométricas e curvas de nível recalculadas ao vivo (marching squares). (1) ESCULPIR: com o dedo, o aluno levanta morros e cava vales no 3D e vê as curvas se juntarem nas encostas íngremes e se afastarem nas suaves; um slider muda a equidistância (10, 20 ou 50 m). (2) ENCHER O VALE: há uma barragem no fundo do vale. Ao subir o nível da água, a margem do lago desenha exatamente cada curva de nível, uma de cada vez. Aha: a margem de um lago é uma curva de nível. O painel mostra a área alagada e quais casas ficam abaixo da cota escolhida. (3) PREVEJA O PERFIL: só o mapa 2D fica visível, com um segmento A–B. O aluno desenha com o dedo o perfil que imagina; ao confirmar, o bloco 3D é cortado ao longo de A–B e o perfil real aparece sobre o palpite, com nota. As fases ensinam a 'regra do V' (curvas em V apontando para montante indicam vale; para jusante, espigão), a diferença entre morro e depressão e o exagero vertical, que mostra por que um perfil 'mente' a inclinação. Desafio: traçar uma trilha até o pico sem passar de 15% de declividade; os trechos íngremes ficam vermelhos sob o traço.

**Por que é visual.** A curva de nível é a tradução 2D↔3D que os alunos mais têm dificuldade de fazer. Ver as duas representações mudarem juntas sob a própria mão, e testar um palpite de perfil contra o corte real, constrói essa tradução mental de um jeito que o livro não consegue.

**Riscos.** Escultura via raycast exige atualizar a malha e os contornos a cada traço (uma grade de cerca de 128×128 basta). Precisa ficar claramente diferente do Relevo 3D: aqui não há tectônica, o foco é a representação cartográfica. A nota do perfil desenhado precisa ser tolerante. No celular, empilhar 3D e mapa em vez de colocá-los lado a lado.
