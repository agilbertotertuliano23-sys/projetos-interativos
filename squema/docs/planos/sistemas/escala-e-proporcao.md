# Escala e Proporção

> **Área:** Matemática · **id:** `escala-e-proporcao` · **Tipo:** misto · **Fundo:** ceu · **Potencial visual:** ★★★★★
> **Público:** 6º ao 9º ano (escalas, plantas baixas, ampliação e redução, grandezas direta e inversamente proporcionais, regra de três) e 1º ano do EM (k² e k³, grandezas determinadas por razão ou produto). É o núcleo da 'matemática básica', o bloco mais cobrado do ENEM (cerca de 37%).
> **BNCC:** EF06MA21, EF06MA28, EF07MA17, EF08MA12, EF08MA13, EF09MA07, EF09MA08, EM13MAT314
> **Status:** planejado (especificação revisada) · demo a construir em `demos/escala-e-proporcao.html`

Um cubo e uma casa ampliados em 3D se montam com k² placas e k³ cópias do original. Uma planta baixa e um mapa são medidos com régua arrastável, e pares de grandezas viram pontos numa reta ou retângulos de área constante.

**O aluno:** Amplia objetos em 3D, mede plantas e mapas com régua e classifica grandezas

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | maquetes, mapas, grandezas proporcionais |
| Papel da IA | montar a regra de três passo a passo |
| Tags | 3D, modelos livres |

**Objetivos de aprendizagem**

- Usar escalas numéricas e gráficas de plantas, mapas e maquetes
- Relacionar o fator k com k² (área) e k³ (volume)
- Distinguir grandezas direta, inversamente e não proporcionais e resolver regras de três

**Etapas da demonstração**

1. Amplie o cubo ×2 e monte-o com 8 cópias do original
2. A casa vira maquete de 1:10 a 1:200: tinta ×k², massa ×k³
3. Meça a planta e o mapa com a régua e converta para metros
4. Fotocopie o mapa a 150%: a escala gráfica continua certa, a numérica não
5. Direta × inversa: pontos numa reta ou retângulos de área constante

## Desenho da demonstração

### Conceito
O erro mais comum do raciocínio proporcional é achar que tudo cresce no mesmo ritmo, como se dobrar o tamanho dobrasse a tinta e o concreto. Ele só se desfaz quando o aluno VÊ. No modo AMPLIAR (3D), um cubo ou uma casa-bloco ampliados por k = 2 se montam, peça por peça, com 8 cópias do original (2 × 2 × 2), enquanto a fachada se cobre com 4 placas: comprimento ×k, área ×k², volume ×k³. A mesma casa (10 m × 8 m × 3 m) vira maquete em escalas de 1:10 a 1:200, ao lado de um personagem para dar a noção de tamanho. Em 1:100 surge uma curiosidade: os números ficam iguais e só a unidade muda (10 m → 10 cm, 108 m² → 108 cm², 240 m³ → 240 cm³). O 'Gigante de Galileu' mostra por que não existem pessoas de 17 m: o peso cresce ×1.000 e o osso só ×100. No modo PLANTA E MAPA, a planta baixa dessa mesma casa (1:50) e um bairro fictício (1:25.000) são medidos com uma régua arrastável. A sacada é 'fotocopiar ampliado 150%': a escala gráfica cresce junto e continua certa, enquanto a escala numérica impressa fica errada, e o aluno precisa descobrir a nova (1:16.667). No modo DIRETA × INVERSA, cada par da tabela vira um ponto numa reta pela origem (direta: razão constante) ou um RETÂNGULO de área constante cujos cantos desenham a hipérbole (inversa: produto constante). A regra 'inverte a fração' deixa de ser decorada: o produto constante está na tela.

### Layout
Modo Ampliar (3D): cena three.js com piso quadriculado de 1 m, objeto original à esquerda e ampliado à direita. Cada um tem uma régua 3D amarela ao lado e rótulos CSS2D com as medidas. OrbitControls com limites de distância e ângulo (a câmera não passa por baixo do piso). Na parte de baixo do palco, três 'chips' grandes com barras comparativas: 'Comprimento ×k', 'Área ×k²' e 'Volume ×k³', cada um com o número e a contagem de peças (placas e cópias). Sub-vista Maquete: mesa com a maquete da casa e um personagem de 1,70 m na escala da maquete. Modo Planta e mapa (2D, canvas): 'folha' branca com a planta ou o mapa, régua arrastável de duas pontas (uma move, a outra gira) graduada em cm do papel virtual, e escalas numérica e gráfica no rodapé da folha. Modo Direta × inversa (2D): tabela de pares à esquerda (acima, no celular) e gráfico cartesiano à direita, com pontos ou retângulos; as cartas de classificação ficam numa faixa horizontal rolável. Painel lateral com controles e leituras. Celular (390 px): palco de ~58 vh. No 3D, a câmera reenquadra os dois objetos automaticamente a cada mudança de k. A régua do mapa tem alças de 44 px. A tabela é recolhível.

### Modos
- **Ampliar (3D)** — Objetos: cubo (aresta 1 m); casa-bloco de 10 × 8 × 3 m (modelo livre 'casa' ajustado a essas medidas, telhado decorativo fora das contas); caixa d'água cilíndrica (r = 1 m, h = 2 m) e personagem (1,70 m). Fator k: ½, 1, 2, 3 ou contínuo de 0,5 a 4. 'Montar com cópias' anima k³ cópias do original preenchendo o ampliado e k² placas cobrindo uma face. Para k = 1,5, a montagem usa meios-cubos: 27 contra 8. Sub-vista Maquete com escala de 1:10 a 1:200. 'Gigante de Galileu': o personagem ×k mostra massa ×k³, área do osso ×k² e pressão no osso ×k.
- **Planta e mapa** — Planta baixa da casa em 1:50, com os cômodos nomeados, e mapa de um bairro fictício em 1:25.000 (escola, praça, posto de saúde, ponte, rio e um terreno). A régua arrastável mostra 'no papel: x cm → real: y m'. 'Medir área' calcula retângulos a partir de dois lados. As fotocópias ampliadas (125%, 150%, 200%) e reduzidas (50%, 75%) mudam o desenho e a escala gráfica, mas não o rótulo da escala numérica.
- **Direta × inversa** — Situações: Feira (kg × preço, direta), Viagem de 240 km (velocidade × tempo, inversa), Torneiras enchendo 1.200 L (nº de torneiras × tempo, inversa), Táxi (km × preço com bandeirada, não proporcional) e Quadrado (lado × área, não proporcional). Um slider de x preenche a tabela com as colunas y, y/x e x·y. No gráfico aparecem os pontos e, na inversa, os retângulos de área constante. Há ainda cartas para classificar e um montador de regra de três passo a passo.

### Controles
- Segmentado de modo: Ampliar | Planta e mapa | Direta × inversa
- Ampliar: seletor de objeto (Cubo, Casa, Caixa d'água, Personagem); segmentado k (½ · 1 · 2 · 3) e slider fino de 0,5 a 4 (passo 0,1); botão 'Montar com cópias'; alternador 'Placas da fachada'; alternador 'Maquete' com slider de escala 1:E, E ∈ {10, 20, 25, 50, 75, 100, 125, 200}; botões 'Gigante de Galileu' e 'Centralizar câmera'
- Planta e mapa: segmentado 'Planta 1:50 · Mapa 1:25.000'; régua arrastável (alças de ponta e de giro, encaixe de 0,1 cm); botão 'Medir área'; segmentado 'Fotocópia: 50% · 75% · 100% · 125% · 150% · 200%'; alternadores 'Escala gráfica' e 'Grade de 1 cm'
- Direta × inversa: seletor de situação; slider de x; botão 'Adicionar par'; alternadores 'Retângulos' (inversa) e 'Triângulos de inclinação' (direta); faixa com 8 cartas para classificar (Direta / Inversa / Nenhuma); botão 'Novo problema de regra de três'
- Campo numérico de resposta com botão 'Conferir' (usado pelos desafios)
- Leituras: k, k², k³; medidas originais e ampliadas com unidade; no mapa: medida no papel (cm), medida real (m ou km), escala impressa e escala verdadeira; na tabela: y/x e x·y

### Modelo
SEMELHANÇA com fator linear k: comprimentos L' = k·L; áreas A' = k²·A; volumes V' = k³·V (massas também, se o material for o mesmo). ESCALA 1:E: medida real = medida no desenho × E, na mesma unidade. 1 cm no papel = E cm reais = E/100 m = E/100.000 km. Área real = área no papel × E²; volume real = volume da maquete × E³. Escala 'maior' = denominador MENOR: 1:25.000 mostra mais detalhes que 1:100.000. CASA-BLOCO (medidas definidas no código, não tiradas do modelo 3D): 10 m × 8 m × 3 m. Área de pintura das paredes externas = 2·(10 + 8)·3 = 108 m², sem descontar portas e janelas; volume = 240 m³. Maquete 1:50: 20 × 16 × 6 cm, 432 cm², 1.920 cm³ = 1,92 L. Maquete 1:25: 40 × 32 × 12 cm, 1.728 cm² (= 4 × 432), 15.360 cm³ = 15,36 L (= 8 × 1,92). Maquete 1:100: 10 × 8 × 3 cm, 108 cm², 240 cm³. CÓPIAS: para k inteiro, o ampliado é preenchido por k³ cópias em grade k × k × k (as cópias saem do original e encaixam a cada 60 ms, no máximo 27) e uma face é coberta por k² placas. Para k = 1,5, o original se divide em 2 × 2 × 2 = 8 meios-cubos e o ampliado em 3 × 3 × 3 = 27, e a razão 27/8 = 3,375 = 1,5³. GIGANTE DE GALILEU: personagem de 1,70 m e 70 kg. Multiplicado por k, fica com altura 1,70k m, massa 70k³ kg, seção do osso ×k² e pressão no osso (peso/área) ×k. Com k = 10: 17 m, 70 t, osso com 100 vezes a área e 10 vezes a pressão. FOTOCÓPIA com fator f: todas as medidas no papel ficam ×f e a escala verdadeira passa a ser 1:(E/f). A barra da escala gráfica também fica ×f e continua valendo; a escala numérica impressa não muda e passa a errar pelo fator f. Ex.: 1:25.000 copiado a 150% vira 1:16.667. GRANDEZAS: direta y = k·x (y/x = k; gráfico: reta pela origem). Inversa y = k/x (x·y = k; gráfico: ramo de hipérbole, cada par é um retângulo de lados x e y e área k). Não proporcional afim: y = a·x + b com b ≠ 0 (y/x não é constante e dobrar x não dobra y). Não proporcional quadrática: y = x². Classificação automática: razão constante (desvio < 0,5%) → direta; produto constante → inversa; senão → nenhuma. REGRA DE TRÊS: direta, a/b = c/x → x = b·c/a; inversa, a·b = c·x → x = a·b/c. O montador segue quatro passos: (1) as duas grandezas em colunas; (2) a pergunta 'se uma dobra, a outra dobra ou cai pela metade?'; (3) setas no mesmo sentido (direta) ou em sentidos opostos (inversa); (4) a equação e a conta.

### Dados
PLANTA DA CASA (10 × 8 m) em 1:50, numa folha virtual de 20 × 16 cm (paredes desconsideradas). Sala 5,0 × 4,0 m (20 m²); Cozinha 3,0 × 4,0 m (12 m²); Banheiro 2,0 × 2,5 m (5 m²); Área de serviço 2,0 × 1,5 m (3 m²); Quarto 1 4,0 × 4,0 m (16 m²); Corredor 2,5 × 4,0 m (10 m²); Quarto 2 3,5 × 4,0 m (14 m²); total 80 m². Coordenadas em metros. Faixa de cima (y de 0 a 4): Sala x 0–5, Cozinha x 5–8, Banheiro x 8–10 com y 0–2,5, Serviço x 8–10 com y 2,5–4. Faixa de baixo (y de 4 a 8): Quarto 1 x 0–4, Corredor x 4–6,5, Quarto 2 x 6,5–10. BAIRRO FICTÍCIO em 1:25.000 (1 cm = 250 m), numa folha virtual de 16 × 12 cm, coordenadas em cm de papel: Escola (3,00; 2,00) e Praça (6,36; 4,52), a 4,2 cm uma da outra, ou 1.050 m; Ponte (8,0; 6,0); Posto de saúde (11,0; 8,0); rio em curva; terreno retangular de 2 × 3 cm (→ 500 × 750 m = 375.000 m² = 37,5 ha); escala gráfica com barra de 2 cm = 500 m. SITUAÇÕES (valores fictícios). Feira, banana a R$ 5,00/kg: 1 → 5; 2 → 10; 3 → 15; 4,5 → 22,50. Viagem de 240 km: 40 km/h → 6 h; 60 → 4; 80 → 3; 120 → 2 (x·y = 240). Torneiras iguais de 10 L/min numa caixa de 1.200 L: 1 → 120 min; 2 → 60; 3 → 40; 4 → 30; 5 → 24; 6 → 20 (x·y = 120). Táxi com bandeirada de R$ 5,00 + R$ 3,00/km: 1 → 8; 2 → 11; 4 → 17; 8 → 29, com razões 8; 5,5; 4,25; 3,625. Quadrado: lados 1, 2, 3, 4 → áreas 1, 4, 9, 16. CARTAS: pintores × dias para pintar o mesmo muro (inversa, se todos têm o mesmo ritmo); lado do quadrado × perímetro (direta); lado do quadrado × área (nenhuma); idade × altura de uma pessoa (nenhuma); velocidade × tempo para a mesma distância (inversa); quilos × preço sem desconto (direta); km rodados × preço do táxi (nenhuma, é afim); número de fatias × tamanho de cada fatia da mesma pizza (inversa). REFERÊNCIAS REAIS: ABNT NBR 6492 (representação de projetos de arquitetura), com plantas residenciais geralmente em 1:50 ou 1:100. IBGE: cartas topográficas do mapeamento sistemático brasileiro nas escalas 1:25.000, 1:50.000, 1:100.000, 1:250.000 e 1:1.000.000. Miniaturas colecionáveis de carros costumam ser feitas em 1:18, 1:24, 1:43 e 1:64; um carro de 4,3 m em 1:43 mede 10 cm. Cristo Redentor: estátua de 30 m sobre pedestal de 8 m, de modo que uma miniatura de 15 cm da estátua está em 1:200. Galileu Galilei, Duas Novas Ciências (Discorsi, 1638), Segunda Jornada: o limite de tamanho dos animais, ou lei do quadrado-cubo.

### Desafios
(1) Tinta e massa: 'Se a maquete 1:50 gasta 1,92 L de massa e 432 cm² de tinta, quanto gasta a maquete 1:25?' Campo numérico, tolerância de ±1%: 15,36 L e 1.728 cm². Só depois do palpite roda a animação das 8 cópias. (2) Caça à escala: 'Uma miniatura de 15 cm representa uma estátua de 30 m. Qual é a escala?' Resposta: 1:200 (aceita '1:200' ou '200'). (3) Gigante: 'Com o personagem 3 vezes maior, a pressão no osso fica quantas vezes maior?' Resposta: 3. (4) Planta: medir o Quarto 1 com a régua e digitar a área real: 16 m², ±0,6 m² (a régua encaixa a cada 0,1 cm, ou seja, 5 cm reais). (5) Mapa: distância Escola–Praça: 1.050 m, ±30 m. (6) Fotocópia: depois de ampliar a 150%, digitar a escala verdadeira: 1:16.667, aceitando de 1:16.000 a 1:17.400. O guia então mostra que a barra gráfica continuou certa. (7) Terreno: área real do terreno de 2 × 3 cm no mapa: 375.000 m² ou 37,5 ha, ±2%. (8) Classificação: arrastar as 8 cartas para Direta, Inversa ou Nenhuma. Cada carta é conferida, e o gráfico da situação aparece como prova. (9) Regras de três geradas, por exemplo: '4 pintores pintam o muro em 6 dias; em quantos dias 3 pintores o pintam?' (8, inversa) ou '3 kg custam R$ 15; quanto custam 7 kg?' (R$ 35, direta).

## Guia (mascote)

**Abertura:** Escolha o cubo e aperte 'k = 2'. Antes de olhar os números, chute: quantos cubos originais cabem no ampliado? Depois toque em 'Montar com cópias' e confira.

- **Se eu dobro o tamanho, por que a área fica 4 vezes maior?**  
  A área tem duas dimensões, e as duas dobram: 2 × 2 = 4. Na fachada, cabem 4 placas do tamanho original. O volume tem três dimensões: 2 × 2 × 2 = 8 cópias.
- **1:50 é maior ou menor que 1:100?**  
  Em 1:50, cada centímetro do desenho vale 50 cm reais; em 1:100, vale 100 cm. Então o desenho em 1:50 fica duas vezes maior e mostra mais detalhes. Denominador menor = escala maior.
- **Como transformo centímetros do mapa em metros reais?**  
  Multiplique pelo denominador e ajuste a unidade. Em 1:25.000, 1 cm = 25.000 cm = 250 m. Então 4,2 cm no mapa são 4,2 × 250 = 1.050 m.
- **Por que a escala gráfica continua certa na fotocópia?**  
  Porque a barra é desenhada junto com o mapa: se o mapa cresce 50%, a barra cresce 50% também, e a relação entre os dois não muda. O número impresso '1:25.000' não muda e passa a mentir: a escala verdadeira vira 1:16.667.
- **Como sei se duas grandezas são direta ou inversamente proporcionais?**  
  Teste dobrando uma delas. Se a outra dobra e a razão y/x é sempre a mesma, é direta. Se a outra cai pela metade e o produto x·y é sempre o mesmo, é inversa. Se nenhuma das duas coisas acontece, não é proporcional, como o táxi com bandeirada.
- **Por que, na regra de três inversa, a gente 'inverte'?**  
  Porque o que se mantém é o produto: 4 pintores × 6 dias = 24 'dias de trabalho'. Com 3 pintores, 3 × x = 24, então x = 8. 'Inverter a fração' é só um atalho para escrever esse produto constante.
- **Por que não existem gigantes de 17 metros?**  
  Galileu explicou em 1638: se um corpo fica 10 vezes maior, o peso fica 1.000 vezes maior, mas a área do osso só 100 vezes. A pressão no osso aumenta 10 vezes, e ele quebraria. Por isso animais grandes têm ossos proporcionalmente mais grossos.
- **Lado e área do quadrado são proporcionais?**  
  Não. Quando o lado dobra, a área quadruplica, e a razão área/lado muda (1, 2, 3...). A área é proporcional ao QUADRADO do lado, não ao lado.

## Para usar em sala
- Peça a previsão antes da animação: 'quantos litros de massa para uma maquete duas vezes maior?' A maioria diz o dobro, e as 8 cópias resolvem a discussão.
- Leve uma planta de apartamento (de folheto de lançamento) e compare a escala dela com a da demo; os alunos medem com régua de verdade.
- Use a fotocópia ampliada para discutir por que os mapas impressos trazem escala gráfica.
- Jogo das cartas em duplas: cada um classifica sozinho e depois os dois argumentam usando o teste 'e se dobrar?'.

## Como a IA entra
O guia recebe o modo, o objeto e o fator k, a escala, as medidas da régua (no papel e reais), o fator de fotocópia e a situação de grandezas com a tabela. Ele monta a regra de três passo a passo com os números do aluno e pergunta antes de revelar ('com k = 3, quantas placas?'). Também corrige confusões de unidade (cm² com cm, m³ com litro) e gera problemas novos de escala, maquete e grandezas proporcionais no estilo do ENEM. Uma IA conectada pode criar contextos locais, como a planta da escola ou o mapa do bairro, e explicar o erro específico do aluno.

## Cuidados de conteúdo
Os modelos 3D são cenário. As medidas usadas nas contas (casa de 10 × 8 × 3 m, personagem de 1,70 m) ficam no código, e o modelo é escalado para elas; o telhado é decorativo e fica fora das contas. Unidades sempre explícitas e coerentes: cm, m, km; cm², m², ha; cm³, m³ e litros (1 L = 1.000 cm³; 1 m³ = 1.000 L). Não confundir escala 'grande' com escala 'pequena': denominador menor = escala maior. A régua mede em cm do PAPEL VIRTUAL (a folha tem tamanho definido em cm), não em centímetros físicos da tela, e o rodapé diz isso. A regra 'k³ para a massa' só vale para o mesmo material. Na inversa, deixar claro que 'pintores × dias' supõe que todos trabalham no mesmo ritmo. O táxi é afim, não proporcional: o gráfico é uma reta que NÃO passa pela origem, e esse é o caso que mais confunde. Não repetir o Funções Visuais: aqui não há parâmetros de reta para ajustar, o foco é razão e produto constantes. O mapa é desenhado em canvas, sem tiles da rede. OrbitControls com distância mínima e máxima, para os objetos não se perderem no celular. A animação das cópias tem no máximo 27 peças (k ≤ 3); acima disso, só os números.

## Verificação (comportamentos a testar)
- Cubo com k = 2: leituras 2 m, 4 m² e 8 m³, e 'Montar com cópias' encaixa exatamente 8 cubos e 4 placas numa face. Com k = 3: 27 cubos e 9 placas.
- Casa em maquete 1:50: 20 × 16 × 6 cm, 432 cm², 1.920 cm³ = 1,92 L. Em 1:25: 15,36 L. Em 1:100: 10 × 8 × 3 cm.
- k = 1,5 mostra 27 meios-cubos contra 8 e o número 3,375.
- Gigante com k = 10: 17 m, 70.000 kg e pressão ×10.
- Planta: a régua de ponta a ponta na largura da casa lê 20 cm → 10 m; o Quarto 1 mede 8 × 8 cm → 4 × 4 m = 16 m².
- Mapa: Escola–Praça mede 4,2 cm → 1.050 m. Depois da fotocópia a 150%, a régua lê 6,3 cm: pelo rótulo 1:25.000 dariam 1.575 m (errado); pela barra gráfica, 1.050 m.
- Viagem de 240 km: os retângulos 40 × 6, 60 × 4, 80 × 3 e 120 × 2 têm a mesma área (240) e cantos sobre y = 240/x; a coluna x·y mostra 240 em todas as linhas.
- Táxi: a coluna y/x mostra valores diferentes e o classificador responde 'nenhuma'.
- Em 390 px, a cena 3D mantém os dois objetos enquadrados ao trocar k, e a régua do mapa pode ser arrastada sem rolar a página.

## Miniatura
Modo Ampliar com o cubo em k = 2, no meio da animação 'Montar com cópias': o cubo original de 1 m à esquerda; à direita, o ampliado com 6 das 8 cópias já encaixadas e 2 ainda voando, 4 placas coloridas cobrindo a face da frente e os chips '×2 comprimento · ×4 área · ×8 volume'.
