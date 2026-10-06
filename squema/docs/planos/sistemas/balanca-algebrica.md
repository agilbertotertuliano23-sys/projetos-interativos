# Balança Algébrica

> **Área:** Matemática · **id:** `balanca-algebrica` · **Tipo:** misto · **Fundo:** papel · **Potencial visual:** ★★★★☆
> **Público:** 6º e 7º anos (balança e propriedades da igualdade, equações do 1º grau), 8º ano (equação com duas incógnitas como reta, sistemas 2×2) e 2º ano do EM (sistemas 3×3, escalonamento e classificação). As equações estão no bloco de 'matemática básica' do ENEM.
> **BNCC:** EF06MA14, EF07MA13, EF07MA18, EF08MA07, EF08MA08, EM13MAT301
> **Status:** planejado — especificação completa da síntese (sem revisão adversarial) · demo a construir em `demos/balanca-algebrica.html`

Equações viram balanças com caixas, pesos e balões, que tombam se a operação for feita num prato só. Sistemas 2×2 são duas balanças com retas que se cruzam, e sistemas 3×3 são três planos em 3D que o escalonamento gira até revelar a solução.

**O aluno:** Opera nos dois pratos da balança, combina balanças e escalona planos em 3D

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | equações, sistemas, planos 3D |
| Papel da IA | diagnosticar cada passo da resolução |
| Tags | 3D |

**Objetivos de aprendizagem**

- Resolver equações do 1º grau pelas propriedades da igualdade
- Resolver e interpretar sistemas 2×2 pelo método da adição e pelo gráfico
- Classificar sistemas 3×3 (SPD, SPI, SI) e entender o escalonamento

**Etapas da demonstração**

1. A equação vira uma balança com caixas, pesos e balões
2. Opere nos dois pratos; se mexer num prato só, a balança tomba
3. Duas balanças: tirar A de dentro de B elimina uma incógnita
4. No gráfico, a nova reta passa pelo mesmo cruzamento
5. Três planos em 3D: escalonar gira os planos sem mover a solução

## Desenho da demonstração

### Conceito
A álgebra é a maior barreira de abstração do Ensino Fundamental. Aqui a equação é uma balança de dois pratos, com caixas-mistério que pesam x, pesos de 1 e balões que puxam 1 para cima (os termos negativos). O aluno resolve operando nos pratos: tira uma caixa de cada lado, põe pesos para anular balões, divide os dois pratos em grupos iguais. Cada passo é escrito ao lado como uma linha algébrica. A sacada: com a 'Mão livre', ele pode mexer num prato só, e a balança tomba na hora. A regra 'o que se faz de um lado se faz do outro' vira física. No modo DUAS BALANÇAS, um sistema 2×2 é representado por duas balanças, com caixas azuis (x) e verdes (y). Como os dois pratos da balança A pesam o mesmo, dá para tirar o conteúdo de A de dentro dos pratos de B sem desequilibrar nada: é o método da adição, justificado com as mãos. No gráfico ao lado, a nova equação aparece como uma reta que passa pelo mesmo cruzamento, até ficar horizontal (y = 4). Num sistema impossível, a subtração deixa um prato vazio contra 6 balões, e a balança mostra que o equilíbrio era impossível. No modo TRÊS PLANOS (3D, EM), cada equação de um sistema 3×3 é um plano. Escalonar é girar um plano em torno da reta que ele tem em comum com outro, sem mover a solução, até os três ficarem paralelos aos planos coordenados (x = 1, y = 2, z = 3). A classificação aparece como ponto (SPD), reta (SPI) ou nada (SI).

### Layout
Modo Balança (2D): balança grande no centro do palco, com dois pratos e o fiel. Abaixo dela, a 'bancada' com caixas, pesos e balões disponíveis (usada na Mão livre). À direita (abaixo, no celular), o caderno com as linhas algébricas de cada passo e um selo verde '=' ou vermelho '≠'. Os botões de operação ficam no painel, num grupo 'nos dois pratos'. Modo Duas balanças (2D): duas balanças menores lado a lado (empilhadas no celular) e, abaixo, o plano cartesiano com as duas retas, o cruzamento e as retas novas em tracejado. Modo Três planos (3D): cena three.js com o cubo de referência [−6, 6]³, eixos coloridos, três planos translúcidos (vermelho, azul e verde) recortados ao cubo, as retas de interseção dos pares em branco grosso e o ponto solução como esfera brilhante. O painel mostra as três equações (editáveis no modo Livre) e a lista de passos do escalonamento. Celular (390 px): palco de ~60 vh, itens da balança com 40 px e caderno algébrico recolhível. No 3D, pixel ratio de no máximo 1,5, botões 'vista de frente' e 'vista de cima', rotação com um dedo e zoom com pinça.

### Modos
- **Balança** — Equação ax + b = cx + d feita de caixas, pesos e balões. As operações valem para os dois pratos: ±1 caixa, ±1 peso, ±1 balão, anular pares peso + balão e dividir em n grupos. Cada uma é registrada como linha algébrica. A 'Mão livre' permite mexer num prato só: a balança tomba e aparece '≠'. 'Abrir a caixa' só funciona quando um prato tem uma caixa sozinha, e o valor é conferido por substituição na equação original.
- **Duas balanças** — Sistema 2×2 com caixas azuis (x) e verdes (y). Operações: dobrar uma balança, juntar A em B (adição), tirar A de B (subtração) e trocar uma caixa verde pelo que A diz que ela vale (substituição). O gráfico mostra as retas, o cruzamento e cada nova equação como uma reta pelo mesmo ponto. Há presets SPD, SI e SPI e sliders de coeficientes no modo Livre.
- **Três planos (3D)** — Sistema 3×3 com presets SPD (ponto), SPI (reta comum, como um 'livro aberto'), SI de planos paralelos e SI em 'prisma'. 'Próximo passo' aplica Eᵢ ← Eᵢ + λ·Eⱼ com animação contínua: o plano gira em torno da reta comum. O plano que vira '0 = 0' se dissolve (SPI), e o que vira '0 = −3' sai do cubo (SI). Coeficientes editáveis no modo Livre.

### Controles
- Segmentado de modo: Balança | Duas balanças | Três planos
- Balança: botão 'Nova equação' com nível (1: só pesos; 2: com balões; 3: caixas nos dois pratos); botões 'nos dois pratos': '−1 caixa', '+1 caixa', '−1 peso', '+1 peso', '+1 balão', '−1 balão', 'Anular pares', '÷ 2', '÷ 3' e '÷ n'; alternador 'Mão livre (um prato só)', com arrastar da bancada para um prato; botões 'Desfazer' e 'Abrir a caixa'
- Duas balanças: seletor de preset (SPD, SPD feira, SI, SPI, Livre); sliders inteiros a₁, b₁, a₂, b₂ (0 a 4) e c₁, c₂ (0 a 30) no Livre; botões 'Dobrar A', 'Dobrar B', 'Juntar A em B', 'Tirar A de B' e 'Trocar verde (substituir)'; alternador 'mostrar gráfico'; marcador arrastável no gráfico
- Três planos: seletor de preset (SPD, SPI, SI paralelos, SI prisma, Livre); 12 campos inteiros no Livre (coeficientes de −3 a 3, termo de −9 a 9); botões 'Próximo passo', 'Escalonar tudo' e 'Voltar ao início'; alternadores para mostrar ou ocultar cada plano e as retas de interseção; botões de vista (frente, cima, diagonal)
- Leituras: equação atual, número de passos, valor revelado de x. No 2×2: D = a₁b₂ − a₂b₁ e a classificação. No 3×3: posto da matriz, posto da ampliada, classificação SPD/SPI/SI por extenso e solução

### Modelo
BALANÇA: cada caixa pesa x*, um inteiro oculto de 1 a 9; peso = +1; balão = −1. Peso do prato: P = n_caixas·x* + n_pesos − n_balões. Ângulo θ = clamp(0,05·(P_esq − P_dir), −0,30, +0,30) rad, com mola amortecida (k = 30 s⁻², amortecimento 0,75). Uma operação é válida quando é a mesma nos dois pratos; o caderno escreve 'a·x + b = c·x + d' antes e depois. '÷ n' só é permitido se n divide n_caixas, n_pesos e n_balões de cada prato (senão o guia explica por quê); dividir por zero não existe. 'Anular pares': 1 peso + 1 balão no mesmo prato somam 0 e somem juntos. Na Mão livre, mexer num prato só muda o P daquele lado: a balança tomba e o caderno mostra '≠'. Gerador: sorteia x*, depois a ≠ c em {0, ..., 4} e b, d em [−6, 9] com a·x* + b = c·x* + d, com no máximo 9 itens de cada tipo por prato. Exemplo padrão: 3x − 4 = x + 6. Os pratos são '3 caixas + 4 balões' e '1 caixa + 6 pesos', e cada um pesa 11 com x* = 5. Resolução: −1 caixa nos dois → 2x − 4 = 6; +4 pesos nos dois (anulando os balões) → 2x = 10; ÷ 2 → x = 5. DUAS BALANÇAS: a₁x + b₁y = c₁ e a₂x + b₂y = c₂, com x* e y* ocultos. 'Tirar A de B' é B − A; se faltar item em B para tirar, entram balões (valores negativos). 'Juntar' é B + A, e 'Dobrar' é 2·A. Toda combinação B + λA é uma reta que passa pelo cruzamento (x*, y*): se o coeficiente de x zera, a reta é horizontal (y = k); se o de y zera, é vertical (x = k). Classificação: D = a₁b₂ − a₂b₁. D ≠ 0 → SPD (retas concorrentes); D = 0 e equações proporcionais → SPI (retas coincidentes); D = 0 e equações não proporcionais → SI (retas paralelas). TRÊS PLANOS: plano n·p = d, com n = (a, b, c). O desenho é o polígono da interseção do plano com o cubo [−6, 6]³: interseções com as 12 arestas, pontos ordenados por ângulo em torno do centroide, material translúcido (opacidade 0,45, dois lados). Reta de interseção de dois planos: direção n₁ × n₂ e um ponto obtido resolvendo o sistema 2×2 com a coordenada de maior componente da direção fixada em 0. Solução por eliminação gaussiana com pivô parcial. Posto(A) e posto([A|b]) com tolerância 1e−9: posto 3 → SPD; posto(A) = posto([A|b]) < 3 → SPI; postos diferentes → SI. Animação de um passo Eᵢ ← Eᵢ + λEⱼ: para t de 0 a 1 em 1,2 s, n(t) = nᵢ + tλnⱼ e d(t) = dᵢ + tλdⱼ. Todo plano intermediário contém a reta Eᵢ ∩ Eⱼ, por isso a solução não se move. Um plano que termina com n = 0 vira '0 = 0' e some com fade (SPI), ou vira '0 = k ≠ 0', sai do cubo e mostra 'impossível' (SI). PRESET SPD: E1: x + y + z = 6; E2: x − y + z = 2; E3: 2x + y − z = 1; solução (1, 2, 3). Passos animados: E2 ← E2 − E1 → −2y = −4; E3 ← E3 − 2E1 → −y − 3z = −11; E3 ← E3 − ½E2 → −3z = −9; E1 ← E1 + ½E2 → x + z = 4; E1 ← E1 + ⅓E3 → x = 1. Normalizações sem animação (não mudam o plano): −½E2 → y = 2 e −⅓E3 → z = 3. No final, os planos são x = 1, y = 2 e z = 3, paralelos aos planos coordenados. PRESET SPI: E3 = 2x + 2z = 8 (= E1 + E2); E3 − E1 − E2 → 0 = 0, e a solução é a reta (t, 2, 4 − t). SI PRISMA: E3 = 2x + 2z = 5; as interseções dos pares são três retas paralelas, de direção (1, 0, −1), sem ponto comum; E3 − E1 − E2 → 0 = −3.

### Dados
As equações e os sistemas são gerados no código com soluções inteiras. PRESETS VERIFICADOS. Equações: 2x + 3 = 11 → x = 4 (nível 1); 3x − 4 = x + 6 → x = 5 (nível 2); 5x − 2 = 2x + 7 → x = 3 (nível 3). Sistemas 2×2: SPD {x + y = 10; x + 3y = 18} → (6, 4), com B − A: 2y = 8. SPD 'feira' {2x + y = 13; x + y = 8} → (5, 3), contexto fictício: 2 cadernos e 1 caneta custam R$ 13, e 1 caderno e 1 caneta custam R$ 8. SI {x + y = 10; 2x + 2y = 14}: B − 2A dá 0 = −6. SPI {x + y = 10; 2x + 2y = 20}: B − 2A dá 0 = 0. Sistemas 3×3: SPD {x + y + z = 6; x − y + z = 2; 2x + y − z = 1} → (1, 2, 3). SPI {x + y + z = 6; x − y + z = 2; 2x + 2z = 8} → reta (t, 2, 4 − t). SI prisma {x + y + z = 6; x − y + z = 2; 2x + 2z = 5}. SI paralelos {x + y + z = 6; x + y + z = 2; x − y + z = 0}. HISTÓRIA: al-Khwārizmī, 'Livro compêndio sobre o cálculo por completamento e balanceamento' (al-jabr wa'l-muqābala, c. 820). Al-jabr ('restaurar', passar um termo subtraído para o outro lado somando) e al-muqābala ('equilibrar', cancelar termos iguais dos dois lados) são justamente as operações da balança, e a palavra 'álgebra' vem de al-jabr. O método de eliminação para sistemas lineares aparece no livro chinês 'Os Nove Capítulos da Arte Matemática' (por volta do séc. I), no capítulo 8 (Fangcheng), com tabelas de coeficientes; hoje ele é chamado de eliminação de Gauss. O sinal '=' foi criado por Robert Recorde em 1557, no livro 'The Whetstone of Witte'.

### Desafios
BALANÇA: (1) Resolver a equação gerada. O caderno precisa terminar em 'x = k', com k = x*, e a substituição na equação original fechar (os dois pratos pesam igual). Um placar compara o número de passos com o mínimo possível (3 passos em 3x − 4 = x + 6). (2) 'Ache o passo errado': o guia mostra uma resolução escrita com um passo inválido, por exemplo '3x − 4 = x + 6 → 3x = x + 2' (tirou 4 de um lado só), e o aluno toca na linha errada; conferido pelo índice da linha. (3) 'Equilibre com a mão livre': dada uma balança torta, o aluno põe ou tira itens de um prato só até ela equilibrar e escreve a nova equação; conferido por P_esq = P_dir e pela equação digitada. DUAS BALANÇAS: (4) Achar x e y com no máximo 3 operações; conferido ao abrir as caixas. (5) 'Transforme em impossível': no Livre, mudar só c₂ para o sistema virar SI; conferido por D = 0 e c₂ ≠ λ·c₁. (6) 'Mesma resposta pelo gráfico': arrastar o marcador até o cruzamento, com tolerância de 0,1. TRÊS PLANOS: (7) Escalonar o SPD até os três planos ficarem paralelos aos planos coordenados; conferido quando cada normal tem uma única componente não nula e a leitura (1, 2, 3) aparece. (8) A partir do SI prisma, mudar um único número de E3 para o sistema virar SPI (5 → 8); conferido pelos postos. (9) Classificar 4 sistemas sorteados (SPD, SPI ou SI) olhando a cena 3D, antes de ver os postos.

## Guia (mascote)

**Abertura:** Esta balança é a equação 3x − 4 = x + 6. Cada caixa pesa x, cada peso vale 1 e cada balão puxa 1 para cima. Tire coisas iguais dos dois pratos até sobrar uma caixa sozinha. Quer ver o que acontece se mexer num prato só? Ligue a 'Mão livre'.

- **Por que posso tirar a mesma coisa dos dois lados?**  
  Porque os dois pratos pesam o mesmo. Tirando o mesmo peso de cada um, eles continuam iguais, e a balança fica reta. É a propriedade da igualdade: somar, subtrair, multiplicar ou dividir os dois membros pelo mesmo número (diferente de zero, na divisão) mantém a igualdade.
- **O que o balão representa?**  
  Um termo negativo: ele puxa 1 para cima, ao contrário do peso. Um peso e um balão no mesmo prato se anulam (+1 − 1 = 0). Para eliminar um −4, colocamos 4 pesos dos dois lados.
- **E aquela regra de 'passar para o outro lado trocando o sinal'?**  
  É um atalho. 'Passar o 4 somando' é, na verdade, somar 4 dos dois lados: à esquerda, −4 + 4 vira zero; à direita, aparece o + 4. A balança mostra o que o atalho esconde.
- **E se a solução for negativa ou uma fração?**  
  A balança funciona melhor com caixas de peso inteiro e positivo. Para resultados negativos ou fracionários, as mesmas regras continuam valendo no papel, e o modo Duas balanças mostra soluções em qualquer ponto do gráfico.
- **Por que a solução do sistema é o cruzamento das retas?**  
  Cada reta reúne todos os pares (x, y) que satisfazem uma das equações. O ponto que está nas duas retas satisfaz as duas equações ao mesmo tempo: é a solução do sistema.
- **O que significam SPD, SPI e SI?**  
  SPD é possível e determinado: uma única solução (retas que se cruzam, ou três planos num ponto). SPI é possível e indeterminado: infinitas soluções (retas iguais, ou planos com uma reta em comum). SI é impossível: nenhuma solução (retas paralelas, ou planos sem ponto comum).
- **Escalonar muda a solução do sistema?**  
  Não. Somar a uma equação um múltiplo de outra gira o plano em torno da reta que os dois têm em comum. O ponto da solução está nessa reta, então continua no lugar. É isso que a animação mostra.
- **De onde vem a palavra 'álgebra'?**  
  Do árabe al-jabr, que quer dizer 'restaurar', no livro de al-Khwārizmī (por volta de 820). Ele resolvia equações restaurando termos e equilibrando os dois lados, as mesmas operações da balança.

## Para usar em sala
- Comece com a 'Mão livre' ligada: peça que alguém tire os 4 balões só do prato esquerdo e discuta por que a balança tombou.
- Corrida de passos: em duplas, resolvam a mesma equação com o menor número de operações e comparem os cadernos algébricos.
- No 2×2, peça que inventem um problema de compra (cadernos e canetas) que vire o preset 'feira' e o resolvam pelas balanças e pelo gráfico.
- No EM, projete os três planos e peça que a turma classifique o sistema antes de escalonar; depois confirme girando a cena.

## Como a IA entra
O guia recebe a equação atual, o histórico de operações, a validade do último passo e o estado dos pratos; nos sistemas, recebe também as equações, o determinante e os postos. Ele comenta cada passo ('você tirou 1 caixa dos dois pratos: 3x − 4 = x + 6 virou 2x − 4 = 6'), detecta passos inválidos e diz qual propriedade foi quebrada, sugere a próxima operação quando o aluno trava e gera equações e sistemas novos, com solução inteira, no nível escolhido. Uma IA conectada pode ler uma resolução escrita pelo aluno e apontar a linha em que a igualdade se quebrou.

## Cuidados de conteúdo
A balança é uma metáfora imperfeita para os negativos: o guia precisa apresentar os balões como 'peso negativo', e x* fica inteiro e positivo no modo Balança. '÷ n' só com grupos iguais nos dois pratos, nunca por zero. Validar que cada operação mantém a equação equivalente e registrar a linha algébrica exata, sem simplificações escondidas. No 2×2, o foco é a solução e o método, não os parâmetros da reta: não há sliders de inclinação, só coeficientes da equação, para não repetir o Funções Visuais. No 3×3, usar tolerância numérica no posto e no teste de 'normal com uma só componente', recortar os planos ao cubo e desenhá-los com dois lados e opacidade baixa, para as interseções ficarem visíveis, com câmera inicial na diagonal. Produtos notáveis e fatoração (algeblocos) ficam fora deste sistema, para a demo não inchar. As siglas SPD, SPI e SI são a nomenclatura usada no Brasil e aparecem sempre com o nome por extenso.

## Verificação (comportamentos a testar)
- 3x − 4 = x + 6 com x* = 5: a balança começa reta. '−1 caixa' mantém a balança reta e o caderno escreve 2x − 4 = 6; '+4 pesos' e 'Anular pares' levam a 2x = 10; '÷ 2' leva a x = 5. 'Abrir a caixa' mostra 5 e '3·5 − 4 = 11 = 5 + 6'.
- Com a 'Mão livre', tirar 1 peso só do prato direito inclina a balança para a esquerda e mostra '≠'.
- Em 2x = 10, '÷ 3' é recusado com explicação.
- Duas balanças SPD: 'Tirar A de B' resulta em 2y = 8; a reta nova é horizontal em y = 4 e passa por (6, 4); D = 2.
- SI: tirar A de B duas vezes deixa um prato vazio contra 6 balões, a balança tomba, o gráfico mostra retas paralelas e D = 0.
- Três planos SPD: 'Escalonar tudo' termina com os planos x = 1, y = 2 e z = 3 e a esfera em (1, 2, 3); a esfera não se move durante nenhum passo.
- SPI: E3 − E1 − E2 dissolve o terceiro plano ('0 = 0') e a reta comum continua destacada. SI prisma: posto(A) = 2, posto([A|b]) = 3 e três retas paralelas visíveis.
- Em 390 px, os botões de operação ficam acessíveis sem rolar o palco, e a cena 3D gira com um dedo e aproxima com pinça.

## Miniatura
Modo Balança com 3x − 4 = x + 6: a balança reta, com 3 caixas laranja e 4 balões coloridos flutuando presos ao prato esquerdo e 1 caixa com 6 pesos no direito, e o caderno ao lado com as duas primeiras linhas ('3x − 4 = x + 6' → '2x − 4 = 6') e o selo verde '='.
