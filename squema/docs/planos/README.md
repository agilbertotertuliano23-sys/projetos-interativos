# Planos — 35 novos sistemas nas áreas fundamentais

Expansão do SQUEMA: **5 novos sistemas** (esquema + demonstração interativa) para cada uma das
7 áreas fundamentais — Matemática, Português, Física, Química, Biologia, História e Geografia —,
somando-se aos 35 sistemas do [mapa original](../mapa_sistemas_educacionais_IA.md).

Status: **planejados**. As demonstrações ainda não foram construídas.

- **Matemática e Física** (10 sistemas): especificação completa — ficha do catálogo, conceito,
  modos, controles, modelo com fórmulas e valores, dados com fontes, desafios, roteiro do guia,
  sugestões para a sala, cuidados de conteúdo e checklist de verificação.
- **Português, Química, Biologia, História e Geografia** (25 sistemas): proposta selecionada da
  pesquisa — tópico, habilidades da BNCC, público e a ideia da demonstração com sua mecânica
  interativa. A ficha e o modelo detalhado ficam para a etapa de construção.

## Como os planos foram feitos

1. **Pesquisa em dois olhares, por área** (feita nas 7 áreas). Um pesquisador partiu do currículo
   (habilidades da BNCC para os anos finais do Fundamental e para o Ensino Médio, conteúdos mais
   cobrados no ENEM) e listou o que os sistemas existentes ainda não cobrem. O outro partiu de
   simulações educacionais marcantes (PhET, GeoGebra, Explorable Explanations…) e propôs
   mecânicas em que o aluno prevê, manipula e descobre. Em Português, só o segundo olhar
   retornou resultado. Tudo está em [`pesquisa/`](pesquisa/), inclusive as ideias não escolhidas.
2. **Escolha dos 5 por área.** Em Matemática e Física, um diretor criativo e pedagógico escolheu
   os 5 e escreveu a especificação completa. Nas outras áreas, os 5 foram escolhidos entre os
   candidatos das duas pesquisas (tópicos distintos, séries variadas, sem repetir os sistemas
   existentes), juntando as propostas que tratam do mesmo tema.
3. **Construção** (próxima etapa): um agente por demo constrói seguindo o
   [guia de construção](GUIA_CONSTRUCAO.md), testa com `ferramentas/verificar-demo.cjs`
   (desktop e celular) e um revisor adversarial confere conteúdo, funcionamento e visual.

## Os 35 sistemas planejados

### Matemática

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Máquina do Acaso** | 2D | frequências, espaço amostral, risco | [especificação completa](sistemas/maquina-do-acaso.md) |
| **Estatística Viva** | 2D | média, dispersão, gráficos enganosos | [especificação completa](sistemas/estatistica-viva.md) |
| **Escala e Proporção** | misto | maquetes, mapas, grandezas proporcionais | [especificação completa](sistemas/escala-e-proporcao.md) |
| **Trigonometria Viva** | misto | triângulos, sombras, ciclo trigonométrico | [especificação completa](sistemas/trigonometria-viva.md) |
| **Balança Algébrica** | misto | equações, sistemas, planos 3D | [especificação completa](sistemas/balanca-algebrica.md) |

Pesquisa da área: [pesquisa/matematica.md](pesquisa/matematica.md)

### Português

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Metrônomo do Verso** | 2D | Versificação: sílabas poéticas, elisão/sinalefa, contagem até a última tônica, acento rítmico, metros (redondilha menor e maior, decassílabo heroico e sáfico, alexandrino) e esquema de rimas. | [proposta da pesquisa](sistemas/metronomo-do-verso.md) |
| **A Herança da Vírgula** | misto | Pontuação e efeitos de sentido: vírgula, ponto, interrogação e exclamação; vocativo; a vírgula proibida entre sujeito e verbo; ambiguidade e humor produzidos pela pontuação. | [proposta da pesquisa](sistemas/heranca-da-virgula.md) |
| **De Onde Eu Falo?** | 2D | Variação linguística regional (lexical e fonética), isoglossas, áreas dialetais do português brasileiro e preconceito linguístico. | [proposta da pesquisa](sistemas/de-onde-eu-falo.md) |
| **Esteira do Latim** | 2D | Variação histórica: evolução do latim ao português pelas leis fonéticas (metaplasmos), via popular × via erudita, palavras divergentes e famílias de palavras com radical erudito. | [proposta da pesquisa](sistemas/esteira-do-latim.md) |
| **O Robô que Lê pela Regra** | misto | Sílaba tônica, classificação em oxítona, paroxítona e proparoxítona e acentuação gráfica, incluindo hiatos e acentos diferenciais do Acordo Ortográfico de 1990. | [proposta da pesquisa](sistemas/robo-leitor.md) |

Pesquisa da área: [pesquisa/portugues.md](pesquisa/portugues.md)

### Física

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Forças em Ação** | 2D | inércia, atrito, peso aparente | [especificação completa](sistemas/forcas-em-acao.md) |
| **Pista de Energia** | 2D | energia cinética, potencial e térmica | [especificação completa](sistemas/pista-de-energia.md) |
| **Toque Térmico** | 2D | calor, temperatura, sensação térmica | [especificação completa](sistemas/toque-termico.md) |
| **Do Ímã à Tomada** | misto | campo magnético, indução, potência e consumo | [especificação completa](sistemas/do-ima-a-tomada.md) |
| **Luz e Cor** | misto | luz colorida, sombras, refração | [especificação completa](sistemas/luz-e-cor.md) |

Pesquisa da área: [pesquisa/fisica.md](pesquisa/fisica.md)

### Química

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Usina de Separação** | 2D | Misturas homogêneas e heterogêneas, fases e métodos de separação (ímã, decantação, funil de separação, filtração, evaporação, destilação simples e fracionada) e tratamento de água | [proposta da pesquisa](sistemas/usina-de-separacao.md) |
| **Balança de Lavoisier** | 2D | Conservação da massa e proporções (Lavoisier e Proust), balanceamento de equações, mol, cálculo estequiométrico, reagente limitante e em excesso, energia de combustão | [proposta da pesquisa](sistemas/balanca-de-lavoisier.md) |
| **Corrida das Reações** | 2D | Cinética química (teoria das colisões, energia de ativação, temperatura, concentração, superfície de contato, catalisador, diagrama de energia com ΔH) e equilíbrio químico dinâmico (Kc, Q, Le Chatelier) | [proposta da pesquisa](sistemas/corrida-das-reacoes.md) |
| **Pilha Viva** | 2D | Oxirredução e NOX, pilha de Daniell, potenciais padrão de redução e ddp, ânodo, cátodo e ponte salina, eletrólise e galvanoplastia (leis de Faraday), corrosão e metal de sacrifício, baterias e descarte | [proposta da pesquisa](sistemas/pilha-viva.md) |
| **Paciência de Mendeleev** | misto | Tabela periódica: periodicidade, propriedades periódicas e a previsão de elementos desconhecidos | [proposta da pesquisa](sistemas/paciencia-de-mendeleev.md) |

Pesquisa da área: [pesquisa/quimica.md](pesquisa/quimica.md)

### Biologia

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Seleção Natural** | 2D | Evolução: variação, seleção natural, Lamarck × Darwin, resistência a antibióticos | [proposta da pesquisa](sistemas/selecao-natural.md) |
| **Fábrica de Proteínas** | misto | Genética molecular: tradução, código genético, mutações e DNA recombinante | [proposta da pesquisa](sistemas/fabrica-de-proteinas.md) |
| **Fotossíntese Lab** | misto | Bioenergética: fotossíntese, respiração celular e fermentação | [proposta da pesquisa](sistemas/fotossintese-lab.md) |
| **Surto & Vacina** | 2D | Imunologia e saúde coletiva: vacinas, memória imunológica, soro × vacina, cobertura vacinal | [proposta da pesquisa](sistemas/surto-e-vacina.md) |
| **Célula no Copo** | 2D | Membrana plasmática e transporte: difusão, osmose e transporte ativo | [proposta da pesquisa](sistemas/celula-no-copo.md) |

Pesquisa da área: [pesquisa/biologia.md](pesquisa/biologia.md)

### História

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Sítio Arqueológico** | misto | Como sabemos do passado sem escrita: o que se preserva (tafonomia), estratigrafia e datação por carbono-14, com sambaquis e os primeiros americanos | [proposta da pesquisa](sistemas/sitio-arqueologico.md) |
| **Desafio Champollion** | misto | Escrita no mundo antigo: decifrando hieróglifos egípcios com a Pedra de Roseta, os cartuchos reais e o método de Champollion | [proposta da pesquisa](sistemas/desafio-champollion.md) |
| **Ventos das Navegações** | 2D | Grandes navegações: ventos, correntes e monções no Atlântico e no Índico; volta do mar e a chegada de Cabral | [proposta da pesquisa](sistemas/ventos-das-navegacoes.md) |
| **Rotas do Atlântico** | 2D | Mercantilismo, pacto colonial e tráfico transatlântico de africanos escravizados (diáspora africana) | [proposta da pesquisa](sistemas/rotas-do-atlantico.md) |
| **Quem Pode Votar?** | 2D | Cidadania e direito de voto: de Atenas à Constituição de 1988 (voto censitário, Lei Saraiva, voto de cabresto, voto por ordem) | [proposta da pesquisa](sistemas/quem-pode-votar.md) |

Pesquisa da área: [pesquisa/historia.md](pesquisa/historia.md)

### Geografia

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Mapas que Mentem** | misto | Cartografia: projeções cartográficas, distorções e anamorfoses | [proposta da pesquisa](sistemas/mapas-que-mentem.md) |
| **Caixa de Areia Topográfica** | misto | Cartografia: curvas de nível, perfil topográfico e escala | [proposta da pesquisa](sistemas/caixa-de-areia.md) |
| **Caminho da Chuva** | 3D | Hidrografia: bacia hidrográfica, escoamento superficial, enchentes urbanas e áreas de risco | [proposta da pesquisa](sistemas/caminho-da-chuva.md) |
| **Pirâmide Viva** | 2D | População: pirâmide etária, transição demográfica, crescimento vegetativo e bônus demográfico | [proposta da pesquisa](sistemas/piramide-viva.md) |
| **Operador da Rede** | misto | Energia: fontes, matriz energética × matriz elétrica, intermitência e impactos socioambientais | [proposta da pesquisa](sistemas/operador-da-rede.md) |

Pesquisa da área: [pesquisa/geografia.md](pesquisa/geografia.md)
