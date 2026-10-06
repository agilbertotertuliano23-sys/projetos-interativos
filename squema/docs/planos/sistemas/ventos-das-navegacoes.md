# Ventos das Navegações

> **Área:** História · **id:** `ventos-das-navegacoes` · **Tipo sugerido:** 2D
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/ventos-das-navegacoes.html`

## Propostas de pesquisa que formam este sistema

### Ventos das Navegações — olhar mecânica engenhosa

- **Tópico:** Grandes navegações: ventos, correntes e monções no Atlântico e no Índico; volta do mar e a chegada de Cabral
- **BNCC:** EF07HI02, EF07HI06, EF07HI13, EM13CHS201
- **Público:** 7º ano do EF (navegações, Atlântico e Índico). Também serve ao Ensino Médio, em diálogo com Geografia (circulação atmosférica) e com o comércio atlântico.
- **Tipo:** 2D

**Ideia.** Um mapa equirretangular com os polígonos do Natural Earth, de 60°N a 45°S e de 80°W a 90°E. Sobre ele corre um campo de ventos animado por partículas: alísios de NE e de SE, calmarias equatoriais e das latitudes de 30°, ventos de oeste e a monção do Índico, que inverte entre junho e dezembro. As faixas se deslocam com um seletor de mês. O aluno pilota um navio. Escolhe a caravela de vela latina, que bolina até cerca de 55° do vento, ou a nau de vela redonda, que chega só a cerca de 70°. Depois marca pontos de rota ou gira o leme ao vivo. A velocidade sai de um diagrama polar visível no painel, com a seta do vento relativo ao barco.

MODO 1, Lisboa → Cabo da Boa Esperança → Calicute. Antes de zarpar, o aluno DESENHA a rota que acha mais rápida. O simulador navega por ela e conta os dias. A rota 'óbvia', colada à costa africana, empaca nas calmarias e nos alísios de SE: o barco faz zigue-zague e o contador dispara. A rota que se abre para o oceano pega os ventos de oeste perto de 35°S e, no caminho, passa rente ao Brasil. AHA: a chegada de Cabral em 1500 é consequência física da volta do mar, e não um 'acaso' no vazio. Rotas-fantasma de Dias (1487-88), Gama (1497) e Cabral (1500) servem de comparação.

MODO 2, Volta da Guiné. Voltar de São Jorge da Mina a Lisboa. Ir reto para o norte é ir contra o vento. A solução é subir pelo meio do Atlântico até os Açores. Com a nau, só a volta funciona; com a caravela, dá para tentar bolinar e ver quanto custa.

MODO 3, Monção. Partir de Malindi ou de Calicute com o slider de mês. Na estação certa, com o piloto local, a travessia leva cerca de 23 dias. Na errada, como Gama em 1498, leva cerca de 132 dias, e o indicador de escorbuto sobe depois de uns 60 dias no mar. AHA: os navegadores do Índico já dominavam esse calendário de ventos.

NO PAINEL, um extra sobre o Atlântico Sul: o giro de ventos e correntes explica as ligações diretas entre Luanda e Rio ou Salvador. O guia pergunta e responde: por que não ir em linha reta? O que é bolinar?

**Por que é visual.** O vento é invisível no livro. Com partículas em movimento e um navio que empaca ou dispara, o aluno sente na mão a física da vela e a circulação atmosférica. Então descobre que a rota histórica é a solução de um problema, e não um traço decorado no mapa.

**Riscos.** O campo de ventos é climatológico e simplificado: não há tempestades nem correntes detalhadas. Ele precisa ser calibrado para que as rotas históricas saiam de fato mais rápidas que a costeira. A carreira da Índia usava sobretudo naus; a caravela entra como contraste técnico. Evitar a narrativa do 'descobrimento heroico': o guia lembra que a terra já era habitada e que pilotos árabes, guzerates e suaílis dominavam a monção. O controle do leme por toque precisa funcionar a 390px. Não confunde com Clima Simulator (chuva orográfica) nem com Terra Interativa (dados de países).
