# Operador da Rede

> **Área:** Geografia · **id:** `operador-da-rede` · **Tipo sugerido:** misto
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/operador-da-rede.html`

## Propostas de pesquisa que formam este sistema

### Matriz Energética — olhar currículo (BNCC/ENEM)

- **Tópico:** Energia: fontes, matriz energética × matriz elétrica, intermitência e impactos socioambientais
- **BNCC:** EF09GE18, EF08GE22, EF07GE06, EM13CHS302, EM13CHS304, EM13CHS306
- **Público:** 9º ano (fontes de energia) e Ensino Médio: matriz energética e impactos ambientais aparecem no ENEM todo ano, também em Ciências da Natureza.
- **Tipo:** 2D

**Ideia.** MODO 1 'Um dia na rede': curva de carga de 24 h de um país (o consumo sobe de manhã e tem pico no fim da tarde e à noite). O aluno monta o parque gerador com sliders: hidrelétrica com reservatório, eólica, solar, biomassa, nuclear, termelétrica a gás e a carvão. Ao apertar ▶, o dia passa e um gráfico de área empilhada mostra quem atende cada hora: a solar só de dia, a eólica variando com o vento, a hidrelétrica 'seguindo' a demanda e a térmica cobrindo o resto pela ordem de mérito. Se faltar energia, aparece a faixa vermelha do apagão. Leituras: % renovável, CO₂ emitido, custo médio, área alagada e empregos. SACADA: com muita solar nasce a 'curva do pato': sobra energia ao meio-dia e falta às 19 h. O aluno descobre que o reservatório da hidrelétrica funciona como uma bateria gigante, e por que o Brasil consegue integrar tanta eólica e solar. MODO 2 'Ano seco': o aluno escolhe um ano normal ou de seca (2001, 2021). Os reservatórios descem mês a mês, as térmicas entram, as emissões sobem e a conta de luz troca de bandeira tarifária (verde, amarela, vermelha, escassez hídrica), uma ligação direta com a conta da casa do aluno. MODO 3 'Energética × elétrica': barras comparam o Brasil com o mundo, a França (nuclear), a China (carvão), a Noruega (hídrica) e a Alemanha (eólica e solar). A eletricidade brasileira é ~88% renovável (BEN 2025), mas o conjunto da energia é só ~49% renovável, porque o transporte usa derivados de petróleo. Isso desfaz a confusão clássica de prova entre matriz elétrica e energética. Cada fonte tem uma ficha de impactos: Belo Monte e os ribeirinhos e indígenas, rejeitos nucleares, ruído e conflitos de terra em parques eólicos do Nordeste, mineração de lítio, ocupação de terra pela cana.

**Por que é visual.** O percentual da matriz costuma ser uma pizza estática que esconde o problema real: a energia precisa existir na hora em que é consumida. A simulação hora a hora torna visíveis a intermitência, o papel dos reservatórios, a crise hídrica e a bandeira tarifária, que o livro só descreve.

**Riscos.** Pode se sobrepor a novos sistemas de Física ou Química sobre energia; aqui o foco é geográfico (matriz dos países, território, impactos). O modelo de despacho deve ser simples e assumido como didático. Os dados precisam de ano e fonte (BEN/EPE, IEA/Our World in Data) e devem ser arredondados. Evitar um 'ranking moral' das fontes: mostrar os trade-offs de cada uma.

### Operador da Rede — olhar mecânica engenhosa

- **Tópico:** Fontes de energia e matriz elétrica brasileira (hidrelétrica, eólica, solar, termelétrica, nuclear, biomassa): intermitência, armazenamento, custo, emissões e sazonalidade
- **BNCC:** EF09GE18, EF08GE22, EM13CHS302, EM13CHS306, EM13CHS304
- **Público:** 9º ano do EF e EM.
- **Tipo:** misto

**Ideia.** O aluno opera o sistema elétrico de uma região. No palco, uma cidade 3D (prédios, casas, ruas) acende as luzes conforme a demanda, cercada por usinas (represa, parque eólico, painéis solares, termelétrica). Embaixo, a curva de demanda de 24 h com a geração empilhada por fonte. (1) UM DIA: o dia passa em 60 s. Com um orçamento, o aluno escolhe quanto instalar de cada fonte e, ao vivo, abre ou fecha a represa e liga termelétricas; se a geração ficar abaixo da demanda, os bairros apagam na cena. Aha 1: o solar sobra ao meio-dia e some justamente no pico do começo da noite (a 'curva do pato'); a represa funciona como uma bateria gigante. (2) UM ANO: o calendário corre e o reservatório baixa na estação seca. O aluno descobre que os ventos do Nordeste sopram mais forte justamente na seca, de julho a novembro (complementaridade hidro-eólica). Aha 2: a termelétrica evita o apagão, mas a bandeira tarifária fica vermelha e as emissões sobem. (3) DESAFIO 2035: atender uma demanda que cresce, sem apagão e com custo e CO₂ abaixo das metas. O guia comenta o apagão de 2001 e a crise hídrica de 2021.

**Por que é visual.** Intermitência e armazenamento são conceitos que dependem do tempo: só aparecem quando as curvas de oferta e de demanda correm juntas. O apagão visível na cidade torna o erro imediato e memorável.

**Riscos.** Os perfis horários e sazonais devem ser plausíveis e citados (ONS/EPE: cerca de 88% da eletricidade renovável em 2024; eólica mais solar perto de 24%), mas simplificados. Sem o laço de jogo com o apagão visível, a demo vira planilha. A sobreposição é baixa: Eletricidade trata de circuitos e Economia, de preços.
