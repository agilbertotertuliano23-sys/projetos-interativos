# Planos — 35 novos sistemas nas áreas fundamentais

Expansão do SQUEMA: **5 novos sistemas** (esquema + demonstração interativa) para cada uma das
7 áreas fundamentais — Matemática, Português, Física, Química, Biologia, História e Geografia —,
somando-se aos 35 sistemas do [mapa original](../mapa_sistemas_educacionais_IA.md).

Status: **planejados**. As demonstrações ainda não foram construídas. Cada plano traz o que
o construtor precisa: ficha do catálogo, conceito, modos, controles, modelo com fórmulas e
valores, dados reais com fontes, desafios, roteiro do guia, sugestões para a sala, cuidados
de conteúdo e checklist de verificação.

## Como os planos foram feitos

1. **Pesquisa em dois olhares, por área.** Um pesquisador partiu do currículo (habilidades da
   BNCC para os anos finais do Fundamental e para o Ensino Médio, conteúdos mais cobrados no
   ENEM) e listou o que os sistemas existentes ainda não cobrem. O outro partiu de
   simulações educacionais marcantes (PhET, GeoGebra, Explorable Explanations…) e propôs
   mecânicas em que o aluno prevê, manipula e descobre. Resultado: [`pesquisa/`](pesquisa/).
2. **Síntese.** Um diretor criativo e pedagógico escolhe os 5 melhores de cada área (tópicos
   distintos, séries variadas, ao menos um em 3D) e escreve a especificação completa.
3. **Revisão adversarial.** Um professor especialista e engenheiro de front-end procura erros
   conceituais, dados errados, sobreposição com sistemas existentes e inviabilidade técnica,
   e corrige a especificação.
4. **Construção** (próxima etapa): um agente por demo constrói seguindo o
   [guia de construção](GUIA_CONSTRUCAO.md), testa com `ferramentas/verificar-demo.cjs`
   (desktop e celular) e um revisor adversarial corrige conteúdo, funcionamento e visual.

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
| **Metrônomo do Verso** | 2D | Versificação: sílabas poéticas, elisão/sinalefa, contagem até a última tônica, acento rítmico, metros (redondilha menor e maior, decassílabo heroico e sáfico, alexandrino) e esquema de rimas. | [proposta (síntese em andamento)](sistemas/metronomo-do-verso.md) |
| **A Herança da Vírgula** | misto | Pontuação e efeitos de sentido: vírgula, ponto, interrogação e exclamação; vocativo; a vírgula proibida entre sujeito e verbo; ambiguidade e humor produzidos pela pontuação. | [proposta (síntese em andamento)](sistemas/heranca-da-virgula.md) |
| **De Onde Eu Falo?** | 2D | Variação linguística regional (lexical e fonética), isoglossas, áreas dialetais do português brasileiro e preconceito linguístico. | [proposta (síntese em andamento)](sistemas/de-onde-eu-falo.md) |
| **Esteira do Latim** | 2D | Variação histórica: evolução do latim ao português pelas leis fonéticas (metaplasmos), via popular × via erudita, palavras divergentes e famílias de palavras com radical erudito. | [proposta (síntese em andamento)](sistemas/esteira-do-latim.md) |
| **O Robô que Lê pela Regra** | misto | Sílaba tônica, classificação em oxítona, paroxítona e proparoxítona e acentuação gráfica, incluindo hiatos e acentos diferenciais do Acordo Ortográfico de 1990. | [proposta (síntese em andamento)](sistemas/robo-leitor.md) |

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
| **Usina de Separação** | 2D | Misturas homogêneas e heterogêneas, fases e métodos de separação (ímã, decantação, funil de separação, filtração, evaporação, destilação simples e fracionada) e tratamento de água | [proposta (síntese em andamento)](sistemas/usina-de-separacao.md) |
| **Balança de Lavoisier** | 2D | Conservação da massa e proporções (Lavoisier e Proust), balanceamento de equações, mol, cálculo estequiométrico, reagente limitante e em excesso, energia de combustão | [proposta (síntese em andamento)](sistemas/balanca-de-lavoisier.md) |
| **Corrida das Reações** | 2D | Cinética química (teoria das colisões, energia de ativação, temperatura, concentração, superfície de contato, catalisador, diagrama de energia com ΔH) e equilíbrio químico dinâmico (Kc, Q, Le Chatelier) | [proposta (síntese em andamento)](sistemas/corrida-das-reacoes.md) |
| **Pilha Viva** | 2D | Oxirredução e NOX, pilha de Daniell, potenciais padrão de redução e ddp, ânodo, cátodo e ponte salina, eletrólise e galvanoplastia (leis de Faraday), corrosão e metal de sacrifício, baterias e descarte | [proposta (síntese em andamento)](sistemas/pilha-viva.md) |
| **Paciência de Mendeleev** | misto | Tabela periódica: periodicidade, propriedades periódicas e a previsão de elementos desconhecidos | [proposta (síntese em andamento)](sistemas/paciencia-de-mendeleev.md) |

Pesquisa da área: [pesquisa/quimica.md](pesquisa/quimica.md)

### Biologia

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Seleção Natural** | 2D | Evolução: variação, seleção natural, Lamarck × Darwin, resistência a antibióticos | [proposta (síntese em andamento)](sistemas/selecao-natural.md) |
| **Fábrica de Proteínas** | misto | Genética molecular: tradução, código genético, mutações e DNA recombinante | [proposta (síntese em andamento)](sistemas/fabrica-de-proteinas.md) |
| **Fotossíntese Lab** | misto | Bioenergética: fotossíntese, respiração celular e fermentação | [proposta (síntese em andamento)](sistemas/fotossintese-lab.md) |
| **Surto & Vacina** | 2D | Imunologia e saúde coletiva: vacinas, memória imunológica, soro × vacina, cobertura vacinal | [proposta (síntese em andamento)](sistemas/surto-e-vacina.md) |
| **Célula no Copo** | 2D | Membrana plasmática e transporte: difusão, osmose e transporte ativo | [proposta (síntese em andamento)](sistemas/celula-no-copo.md) |

Pesquisa da área: [pesquisa/biologia.md](pesquisa/biologia.md)

### História

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Sítio Arqueológico** | misto | Como sabemos do passado sem escrita: o que se preserva (tafonomia), estratigrafia e datação por carbono-14, com sambaquis e os primeiros americanos | [proposta (síntese em andamento)](sistemas/sitio-arqueologico.md) |
| **Desafio Champollion** | misto | Escrita no mundo antigo: decifrando hieróglifos egípcios com a Pedra de Roseta, os cartuchos reais e o método de Champollion | [proposta (síntese em andamento)](sistemas/desafio-champollion.md) |
| **Ventos das Navegações** | 2D | Grandes navegações: ventos, correntes e monções no Atlântico e no Índico; volta do mar e a chegada de Cabral | [proposta (síntese em andamento)](sistemas/ventos-das-navegacoes.md) |
| **Rotas do Atlântico** | 2D | Mercantilismo, pacto colonial e tráfico transatlântico de africanos escravizados (diáspora africana) | [proposta (síntese em andamento)](sistemas/rotas-do-atlantico.md) |
| **Quem Pode Votar?** | 2D | Cidadania e direito de voto: de Atenas à Constituição de 1988 (voto censitário, Lei Saraiva, voto de cabresto, voto por ordem) | [proposta (síntese em andamento)](sistemas/quem-pode-votar.md) |

Pesquisa da área: [pesquisa/historia.md](pesquisa/historia.md)

### Geografia

| Sistema | Tipo | Tópico | Plano |
| --- | --- | --- | --- |
| **Mapas que Mentem** | misto | Cartografia: projeções cartográficas, distorções e anamorfoses | [proposta (síntese em andamento)](sistemas/mapas-que-mentem.md) |
| **Caixa de Areia Topográfica** | misto | Cartografia: curvas de nível, perfil topográfico e escala | [proposta (síntese em andamento)](sistemas/caixa-de-areia.md) |
| **Caminho da Chuva** | 3D | Hidrografia: bacia hidrográfica, escoamento superficial, enchentes urbanas e áreas de risco | [proposta (síntese em andamento)](sistemas/caminho-da-chuva.md) |
| **Pirâmide Viva** | 2D | População: pirâmide etária, transição demográfica, crescimento vegetativo e bônus demográfico | [proposta (síntese em andamento)](sistemas/piramide-viva.md) |
| **Operador da Rede** | misto | Energia: fontes, matriz energética × matriz elétrica, intermitência e impactos socioambientais | [proposta (síntese em andamento)](sistemas/operador-da-rede.md) |

Pesquisa da área: [pesquisa/geografia.md](pesquisa/geografia.md)
