# Corrida das Reações

> **Área:** Química · **id:** `corrida-das-reacoes` · **Tipo sugerido:** 2D
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/corrida-das-reacoes.html`

## Propostas de pesquisa que formam este sistema

### Reator de Colisões — olhar currículo (BNCC/ENEM)

- **Tópico:** Cinética química (teoria das colisões, energia de ativação, temperatura, concentração, superfície de contato, catalisador, diagrama de energia com ΔH) e equilíbrio químico dinâmico (Kc, Q, Le Chatelier)
- **BNCC:** EM13CNT101, EM13CNT205, EM13CNT301, EM13CNT307
- **Público:** 2ª série do EM e preparação para o ENEM e vestibulares
- **Tipo:** 2D

**Ideia.** Tem dois ou três modos. (1) VELOCIDADE: um reator 2D com partículas A (azul) e B (laranja) que se movem com velocidades sorteadas pela distribuição de Maxwell-Boltzmann. Cada colisão é testada: se a energia do choque passa de Ea, elas reagem e viram produto, com um brilho. Ao lado, o histograma das energias tem uma linha vertical em Ea, e a área depois da linha fica sombreada: é a fração de colisões efetivas. O ponto central: subir 10 °C quase não muda a média, mas a área sombreada cresce muito, e o aluno vê por que a velocidade quase dobra. O botão 'catalisador' baixa a linha de Ea e o caminho no diagrama de energia, mas o ΔH fica igual. 'Triturar' um bloco sólido de B expõe mais partículas e acelera a reação (superfície de contato). O gráfico de concentração × tempo e a velocidade instantânea são desenhados ao vivo. (2) EQUILÍBRIO: uma reação reversível de cor real, N₂O₄ (incolor) ⇌ 2 NO₂ (castanho), com a cor do gás na caixa. As curvas de concentração se estabilizam enquanto os contadores '→ reações/s' e '← reações/s' continuam rodando até ficarem iguais: o equilíbrio é dinâmico e não estático. Dá para MARCAR uma molécula e vê-la trocar de lado mesmo em equilíbrio. Perturbações (adicionar reagente, retirar produto, comprimir o êmbolo, aquecer ou resfriar) deslocam o sistema. Um medidor Q × K mostra para onde ele vai andar, e a cor do gás confirma. (3) Opcional, HABER-BOSCH: o aluno escolhe pressão, temperatura e catalisador e procura o meio-termo entre rendimento e velocidade que a indústria de fertilizantes usa.

**Por que é visual.** Energia de ativação, distribuição de energias e equilíbrio dinâmico são processos estatísticos que nenhuma figura parada mostra. A pesquisa em ensino de Química registra concepções erradas persistentes: equilíbrio estático, concentrações iguais no equilíbrio, catalisador que desloca o equilíbrio. Aqui elas são desmentidas pela própria simulação, porque o aluno vê as reações continuarem e o catalisador acelerar os dois sentidos.

**Riscos.** Com poucas partículas, as taxas e o Kc ficam ruidosos. É preciso usar médias móveis e deixar claro que o K é uma média. A termodinâmica precisa ser coerente: a Ea inversa deve ser Ea + ΔH, para que o efeito da temperatura sobre K surja naturalmente e não seja programado à parte. O desempenho no celular deve ser testado (até ~200 partículas com grade espacial). O NO₂ é tóxico, e o texto não deve sugerir que o experimento seja feito em casa. Juntar cinética e equilíbrio numa demo só exige uma interface muito clara entre os modos.

### Corrida das Reações — olhar mecânica engenhosa

- **Tópico:** Cinética química: teoria das colisões, energia de ativação, fatores da rapidez e catalisadores
- **BNCC:** EM13CNT101, EM13CNT205, EM13CNT301
- **Público:** 2ª série EM
- **Tipo:** 2D

**Ideia.** MODO 1 'Arena de colisões': partículas A e B quicam numa caixa e só os choques com energia acima da barreira (e orientação certa) formam produto; o choque eficaz pisca. Os controles são temperatura, concentração, tamanho dos pedaços (comprimido efervescente inteiro x em pó) e catalisador, e a curva de concentração x tempo é traçada ao vivo. MODO 2 'Montanha de ativação': um histograma das energias das partículas (Maxwell–Boltzmann) com a linha da energia de ativação e a 'cauda' acima dela pintada. Antes de subir 10 °C, o aluno aposta se a reação fica 3% mais rápida, 30% ou o dobro. SACADA: a energia média sobe só cerca de 3%, mas a cauda pintada quase DOBRA, e a reação também (Arrhenius com Ea ≈ 50 kJ/mol). O 'aha' é que a rapidez depende das poucas partículas muito energéticas, não da média. O catalisador abre um 'túnel' mais baixo na montanha: os reagentes, os produtos e o ΔH continuam os mesmos, e mais cauda vira choque eficaz. MODO 3 'Desafios do cotidiano', cada um com previsão numérica respondida pelo modelo: fazer a pulseira de neon durar a festa toda (água gelada x quente), quanto tempo o leite dura dentro e fora da geladeira, por que a serragem pega fogo antes da tora, e uma enzima com temperatura ótima e desnaturação.

**Por que é visual.** Rapidez é estatística de bilhões de colisões. Ver a cauda da distribuição crescer explica a regra '+10 °C ≈ 2x', que costuma ser decorada, e o 'túnel' do catalisador desfaz a ideia de que ele 'empurra' a reação ou é consumido.

**Riscos.** A regra '2x a cada 10 °C' só vale para Ea perto de 50 kJ/mol em temperatura ambiente: mostrar quando falha. A arena 2D é estocástica, então é preciso média de várias rodadas para a curva não oscilar. Usar a distribuição 3D no histograma (a 2D da caixa tem outra forma) e explicar essa escolha. Deixar claro que o catalisador não muda o ΔH nem é consumido. Não sobrepor com a titulação (pH), que já existe.
