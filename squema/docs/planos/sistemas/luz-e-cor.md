# Luz e Cor

> **Área:** Física · **id:** `luz-e-cor` · **Tipo:** misto · **Fundo:** noite · **Potencial visual:** ★★★★★
> **Público:** 9º ano (cores da luz e dos objetos: EF09CI04, modos 1 e 2) e 2º ano do Ensino Médio (refração, reflexão total e dispersão para o ENEM, modo 3)
> **BNCC:** EF09CI04, EF09CI05, EM13CNT301, EM13CNT308
> **Status:** planejado (especificação revisada) · demo a construir em `demos/luz-e-cor.html`

Numa sala escura em 3D, três holofotes (vermelho, verde e azul) formam sombras ciano, magenta e amarela, e as frutas mudam de cor (a folha fica preta sob luz vermelha). Num modo 2D, um laser atravessa água, vidro e diamante até a reflexão total, passa por um prisma e por uma gota de chuva.

**O aluno:** Mistura holofotes RGB, prevê a cor dos objetos e gira um laser entre meios

## Ficha do catálogo

| Campo | Valor |
| --- | --- |
| O que visualizar | luz colorida, sombras, refração |
| Papel da IA | transformar cores e ângulos em explicação |
| Tags | 3D, modelos livres |

**Objetivos de aprendizagem**

- Compor cores pela síntese aditiva da luz (RGB) e explicar a cor dos objetos pela luz que eles refletem (EF09CI04)
- Aplicar a Lei de Snell e o ângulo-limite para explicar a reflexão total e a fibra óptica
- Explicar a dispersão no prisma e o arco-íris (vermelho a 42°, violeta a 40°)

**Etapas da demonstração**

1. Sala escura em 3D: ligar os holofotes R, G e B um a um até a parede ficar branca
2. Arrastar a raposa e o personagem entre as luzes: as sombras saem ciano, magenta e amarela e, onde se sobrepõem, azul, vermelha, verde ou preta
3. Frutas sob luz controlada: antes de trocar a luz, o aluno escolhe na paleta a cor prevista (banana sob luz azul fica preta)
4. Laser entre meios: medir os ângulos, ver a luz desacelerar e girar até a reflexão total
5. Prisma e gota: a luz branca se abre em cores, e o arco-íris aparece de costas para o Sol

## Desenho da demonstração

### Conceito
Uma sala escura com três holofotes, vermelho, verde e azul, apontados para uma parede branca. Ligados juntos, eles dão BRANCO, e esse é o primeiro susto. Quando o aluno arrasta a raposa ou o personagem para a frente das luzes, o próprio motor de sombras desenha três sombras coloridas. A sacada é perceber que a sombra de uma luz é o lugar aonde só as OUTRAS chegam: tapar o azul deixa amarelo, que é vermelho + verde. Mover os holofotes para sobrepor sombras cria azul, vermelho, verde e preto, e o sistema verifica cada desafio amostrando a parede. Depois, a mesma sala ilumina banana, tomate e folha com uma lanterna de cor escolhida, e o aluno aposta numa paleta antes de trocar a luz. Sob luz vermelha, a folha verde fica PRETA, porque o objeto só devolve a parte da luz recebida que ele reflete. O terceiro modo, em 2D, liga a cor à refração. Um laser girado sobre a fronteira entre ar, água, vidro e diamante mostra a Lei de Snell, com as frentes de onda mais próximas no meio mais lento. O raio refratado some na reflexão total depois do ângulo-limite (48,6° na água), e a luz fica presa numa fibra. No prisma e na gota, o índice de refração depende da cor e abre a luz branca no arco-íris.

### Layout
Modos 1 e 2 (3D, fundo noite): a sala é vista de frente em leve perspectiva, com a parede branca ao fundo (8 × 4,5 m), o chão claro e os três holofotes num trilho à frente, com cones de luz suaves. Os objetos ficam sobre o chão e são arrastáveis no plano do chão. OrbitControls tem limites (sem ir atrás da parede). No HUD ficam os chips dos três holofotes com cor e intensidade e, no canto, uma lupa 'tela de celular' que mostra os subpixels RGB da cor sob o cursor. No modo 2 há uma mesa com as frutas no centro e uma lanterna única, e a paleta de previsão aparece como 8 círculos sobre o palco. Modo 3 (2D, fundo noite): a fronteira horizontal fica no meio do palco, com o meio 1 em cima e o meio 2 embaixo. O laser é arrastável e tem uma alça de giro; a normal é tracejada e um transferidor mostra os ângulos. O seletor de peça troca a cena por prisma, gota ou fibra. No celular, o palco fica em cima (cerca de 60% da altura), os chips dos holofotes viram botões grandes e o painel vem embaixo. No 3D, um toque longo pega o objeto e o gesto livre gira a câmera.

### Modos
- **Sombras coloridas (3D)** — Três holofotes R, G e B com liga/desliga, intensidade e posição no trilho, diante de uma parede e de um chão brancos. Objetos arrastáveis (personagem, raposa, flor e árvore, dos modelos livres) projetam sombras coloridas. Os desafios são verificados por amostragem da parede: sombra amarela, sombra azul, sombra preta, parede amarela com sombra vermelha.
- **Cor dos objetos (3D)** — Banana, tomate, folha, papel branco e um objeto misterioso ficam sob uma lanterna cuja cor é a soma dos canais R, G e B ligados. Antes de cada troca de luz, o aluno escolhe a cor prevista numa paleta de 8. O objeto misterioso deve ser descoberto com no máximo três luzes.
- **Laser e prisma (2D)** — Peças: interface plana (ar, água, acrílico, vidro, diamante e materiais misteriosos), prisma de 60°, gota de chuva e fibra óptica dobrável. O laser pode ser vermelho, verde, violeta ou branco. A tela mostra os ângulos, a velocidade da luz em cada meio, a fração refletida e o ângulo-limite.

### Controles
- Seletor de modo (Sombras coloridas / Cor dos objetos / Laser e prisma)
- Holofotes: liga/desliga R, G e B, slider de intensidade (0–100%), arraste no trilho, botão Juntar R e G
- Objetos: arraste no chão, seletor de objetos visíveis, botão Encostar na parede
- Cor dos objetos: interruptores R, G e B da lanterna, paleta de previsão (branco, vermelho, verde, azul, amarelo, ciano, magenta, preto), botão Trocar luz, botão Novo objeto misterioso
- Laser: arraste da caneta e alça de giro (ou slider de ângulo de 0 a 89°), seletor de cor do laser, seletores do meio de cima e do meio de baixo, seletor de peça (interface, prisma, gota, fibra), slider de curvatura da fibra, alternadores Frentes de onda e Transferidor
- Leituras: cor da parede em RGB, cor aparente do objeto, θ₁, θ₂, n₁, n₂, ângulo-limite, v = c/n, % refletida, desvio no prisma, ângulo de saída na gota

### Modelo
COR (modos 1 e 2): cada canal se soma linearmente. O holofote i tem cor pura, (1,0,0), (0,1,0) ou (0,0,1), e intensidade Iᵢ entre 0 e 1. Num ponto da parede, que tem refletância 0,9 nos três canais, a cor por canal é Σ Iᵢ·visível(ponto, luz i)·cos(ângulo de incidência)·0,9, e 'visível' vem do mapa de sombras. Regras: R + G = amarelo, G + B = ciano, R + B = magenta, R + G + B = branco. A sombra de uma luz é a região aonde só as outras chegam: tapar R dá ciano; tapar G, magenta; tapar B, amarelo; tapar R e G, azul; tapar R e B, verde; tapar G e B, vermelho; tapar as três, preto. Nos objetos, a cor aparente é luz ⊙ refletância (produto canal a canal). Para classificar na paleta, um canal conta como 'aceso' se o valor for ≥ 0,25; sem nenhum aceso, o resultado é preto. Implementação em three.js: renderer.toneMapping = NoToneMapping, outputColorSpace = SRGBColorSpace e SpotLight com decay = 0 e castShadow (mapa de 1024 no desktop e 512 no celular). Parede, chão e frutas usam MeshLambertMaterial sem emissão e sem contorno, e a luz ambiente fica em no máximo 0,02, para a sombra preta ser preta de verdade. Verificação dos desafios: sobre uma grade de 40 × 24 pontos da parede, faz-se um raycast de cada ponto para cada holofote contra as malhas dos objetos. Um desafio está cumprido quando existe uma região de pelo menos 6 pontos vizinhos com o conjunto pedido de luzes visíveis. REFRAÇÃO (modo 3): Lei de Snell, n₁·sen θ₁ = n₂·sen θ₂. Se (n₁/n₂)·sen θ₁ > 1, há reflexão total e não existe raio refratado. Ângulo-limite: θL = arcsen(n₂/n₁). A velocidade da luz no meio é v = c/n (c = 299 792 km/s), e o comprimento de onda no meio é λ/n, o espaçamento das frentes de onda. Fração refletida (Fresnel, luz não polarizada): R = ½·[((n₁·cos θ₁ − n₂·cos θ₂)/(n₁·cos θ₁ + n₂·cos θ₂))² + ((n₁·cos θ₂ − n₂·cos θ₁)/(n₁·cos θ₂ + n₂·cos θ₁))²]. O brilho dos raios refletido e refratado é proporcional a R e a 1 − R (4,3% refletidos na incidência normal entre ar e vidro). Dispersão (Cauchy): n(λ) = A + B/λ², com λ em µm. Água: A = 1,3239 e B = 0,00314. Acrílico: 1,4787 e 0,00450. Vidro BK7: 1,5045 e 0,00422. Diamante: 2,3791 e 0,0133. O laser branco é feito de 7 raios (700, 620, 580, 530, 470, 440 e 405 nm), com cores aproximadas. Prisma equilátero (60°) de vidro: desvio mínimo D = 2·arcsen(n·sen 30°) − 60°, que vai de 38,3° (700 nm) a 39,8° (405 nm). Gota esférica de água: o raio que entra com parâmetro de impacto b refrata, reflete uma vez dentro e sai, com desvio D = 180° + 2i − 4r. O ângulo do arco, 180° − D, é máximo no raio de Descartes: 42,4° para o vermelho (n = 1,331) e 40,6° para o violeta (n = 1,343). Fibra: uma faixa de vidro (n = 1,50) no ar, com um trecho reto e um arco de raio ajustável. Os raios são traçados por interseção reta–reta e reta–círculo, com até 60 reflexões. A luz vaza quando o ângulo de incidência na parede externa da curva fica menor que θL = 41,8°.

### Dados
Índices de refração a 589 nm: ar 1,0003 (usar 1,000); água 1,333; acrílico 1,49; vidro crown (BK7) 1,517; diamante 2,417 (refractiveindex.info: Daimon & Masumura 2007 para a água; Schott para o BK7; Phillip & Taft para o diamante). Materiais misteriosos (n): gelo 1,31; sílica fundida 1,46; safira 1,77; zircônia cúbica 2,15. Ângulos-limite com o ar: água 48,6°; acrílico 42,2°; vidro 41,1°; diamante 24,4°. Velocidade da luz: no vácuo 299 792 km/s; na água ≈ 225 000 km/s; no vidro ≈ 197 000 km/s; no diamante ≈ 124 000 km/s. Uma fibra óptica real tem núcleo de n ≈ 1,48 e casca de n ≈ 1,46: o ângulo crítico é ≈ 80,6°, e ela aceita luz até ≈ 14° do eixo (abertura numérica ≈ 0,24). Profundidade aparente olhando perto da vertical: h' ≈ h·n_ar/n_água ≈ 0,75·h, então uma piscina de 2 m parece ter 1,5 m. Refletâncias simplificadas (R, G, B), declaradas como modelo: banana (0,90; 0,75; 0,10); tomate (0,80; 0,08; 0,06); folha (0,10; 0,55; 0,10); papel branco (0,90; 0,90; 0,90). Objetos misteriosos: amarelo (0,85; 0,80; 0,05), ciano (0,05; 0,70; 0,80), magenta (0,80; 0,05; 0,75). História: Ibn Sahl (984) e Snell (1621) descreveram a lei da refração; Descartes (1637) explicou o ângulo do arco-íris; Newton (experimentos de 1666, publicados em 1672) decompôs a luz branca com prismas; Thomas Young (1802) propôs três receptores de cor, a base do RGB; Charles Kao (Nobel de 2009) mostrou que a fibra de vidro serve para comunicações. O experimento das sombras coloridas é um clássico dos museus de ciência ('Colored Shadows', Exploratorium).

### Desafios
Sombras: 'Deixe a parede branca' (os três holofotes ligados com intensidades iguais, ± 5%). 'Faça uma sombra amarela' (uma região aonde só R e G chegam). 'Faça uma sombra azul' (só B chega): é preciso sobrepor as sombras de R e G, juntando os dois holofotes no trilho. 'Faça uma sombra preta' (nenhuma luz chega): é preciso aproximar o objeto da parede até as três sombras se sobreporem. 'Deixe a parede amarela e, mesmo assim, faça uma sombra vermelha' (azul desligado; a sombra do verde fica vermelha). Cor dos objetos: 8 rodadas de previsão com placar. 'Descubra a cor do objeto misterioso usando no máximo três luzes': a resposta é dada na paleta e conferida pela refletância secreta. Laser: 'Meça o ângulo-limite da água' (girar até o raio refratado sumir e registrar; aceita 48,6° ± 1°). 'Descubra o n do material misterioso' medindo θ₁ e θ₂ (aceita ± 0,03). 'Qual cor sai da gota com o ângulo maior?' (vermelho, 42°), com previsão antes. 'Dobre a fibra até a luz vazar' e registre o menor raio de curvatura que ainda guia a luz.

## Guia (mascote)

**Abertura:** Esta sala está no escuro. Ligue os holofotes <b>vermelho</b>, <b>verde</b> e <b>azul</b>, um de cada vez. Que cor a parede vai ficar com os três juntos?

- **Por que vermelho com verde dá amarelo?**  
  Na luz, as cores se SOMAM: é a síntese aditiva. O olho tem três tipos de cones, mais sensíveis ao vermelho, ao verde e ao azul. Vermelho e verde juntos estimulam os cones do mesmo jeito que a luz amarela, e o cérebro vê amarelo. Os três juntos dão branco.
- **Por que as sombras saem coloridas?**  
  Cada holofote faz a sua própria sombra. Onde a raposa tapa o azul, só o vermelho e o verde chegam: amarelo. Tapando o vermelho fica ciano (verde + azul); tapando o verde, magenta (vermelho + azul). Onde as três sombras se sobrepõem, não chega luz nenhuma: preto.
- **Por que a folha ficou preta na luz vermelha?**  
  A cor de um objeto é a luz que ele reflete. A folha reflete principalmente o verde e absorve quase todo o vermelho e o azul. Sob luz só vermelha, não há verde para refletir, e ela quase não devolve luz: parece preta.
- **Misturar tinta não é igual a misturar luz?**  
  Não. A tinta ABSORVE cores (síntese subtrativa): cada pigmento tira uma parte da luz branca, e somar tintas tira cada vez mais, até escurecer. Por isso as primárias das tintas de impressora são ciano, magenta e amarelo, e as da luz são vermelho, verde e azul.
- **Por que o raio de luz entorta ao entrar na água?**  
  A luz é mais lenta na água: cerca de 225 000 km/s, contra 300 000 km/s no ar. Quando ela chega inclinada, um lado da frente de onda desacelera antes do outro e a direção muda, aproximando-se da normal. A Lei de Snell resume isso: n₁·sen θ₁ = n₂·sen θ₂.
- **O que é a reflexão total?**  
  Ao passar de um meio mais refringente para um menos refringente (da água para o ar), o raio se afasta da normal. No <b>ângulo-limite</b> (48,6° na água) ele sai rente à superfície; acima disso não sai nada e toda a luz volta. É isso que prende a luz nas fibras ópticas da internet.
- **Por que o arco-íris tem o vermelho por fora?**  
  Cada gota refrata a luz do Sol, reflete uma vez por dentro e a devolve para trás, concentrada num ângulo de cerca de 42° para o vermelho e 40° para o violeta, medido a partir do ponto oposto ao Sol. As gotas que mandam vermelho ao seu olho formam um círculo maior, então o vermelho fica por fora. Por isso o arco-íris aparece de costas para o Sol.
- **Por que a piscina parece mais rasa?**  
  A luz que sai do fundo se afasta da normal ao passar da água para o ar, e o olho prolonga os raios em linha reta. Olhando de cima, o fundo parece estar a cerca de 3/4 da profundidade real: uma piscina de 2 m parece ter 1,5 m.

## Para usar em sala
- Antes de ligar o terceiro holofote, peça que cada aluno escreva no caderno a cor que a parede terá com os três ligados; muitos respondem marrom ou preto.
- No modo 2, faça rodadas de 'aposta na cor' em voz alta com a banana sob luz azul e a folha sob luz vermelha (EF09CI04).
- No modo 3, cada grupo mede o ângulo-limite de um meio diferente e calcula n = 1/sen θL. Depois comparem com a tabela e relacionem com a fibra óptica que leva internet (EF09CI05).
- Com uma lupa de verdade, mostre a tela de um celular e compare os subpixels com a lupa da sala escura.

## Como a IA entra
No 3D, o guia recebe quais holofotes estão ligados, as intensidades e as posições deles, a posição dos objetos, as regiões de sombra encontradas (com o conjunto de luzes que chega a cada uma) e a cor da parede. No modo 2, recebe a cor da lanterna, a refletância de cada objeto, a previsão do aluno e a cor aparente. No modo 3, recebe a peça, os meios, n₁, n₂, a cor do laser, θ₁, θ₂, o ângulo-limite, a fração refletida e, na gota, o ângulo de saída de cada cor. Ele transforma os números em explicação ou propõe um experimento ('junte o vermelho e o verde para criar uma sombra azul'). Uma IA conectada poderia gerar objetos misteriosos e conferir as medições do aluno.

## Cuidados de conteúdo
A soma aditiva só sai correta no three.js com tone mapping desligado, decay = 0, materiais Lambert sem emissão e sem o contorno 'bolha' na parede, no chão e nas frutas, e luz ambiente quase nula. Os modelos livres podem manter o estilo, porque só projetam sombra. Trabalhar no espaço linear e converter para sRGB na saída; caso contrário, R + G sai amarelo-esverdeado. Três luzes com sombras pesam no celular: usar mapas de 512, poucos objetos e renderização sob demanda. Não confundir com as 'sombras coloridas' de Goethe (uma luz colorida mais uma branca, um efeito de contraste da percepção): aqui o efeito é físico, uma soma de luzes. As refletâncias RGB são simplificadas e devem ser declaradas como modelo, porque a cor real depende do espectro inteiro. Não usar lentes nem espelhos curvos, que ficam no Óptica Lab, nem a roda de cores de pigmento, que fica no Estúdio Criativo; os pigmentos aparecem só como contraste na conversa. Os ângulos do arco-íris precisam estar corretos (42,4° no vermelho e 40,6° no violeta), sem inverter a ordem. A fibra do palco é um bastão de vidro no ar, para o zigue-zague ficar visível; dizer que a fibra real tem casca com n ≈ 1,46. Usar n = 1,000 para o ar.

## Verificação (comportamentos a testar)
- Três holofotes a 100% apontados para a parede: cor da parede ≈ (0,9; 0,9; 0,9), branca. Só R e G: amarela.
- Objeto entre as luzes com as três ligadas: aparecem sombras ciano, magenta e amarela, e a sombra do holofote azul é a amarela.
- Holofotes R e G juntos no trilho: as sombras deles se sobrepõem e essa região fica azul.
- Banana sob luz azul: cor aparente (0; 0; 0,10), classificada como preta. Sob luz vermelha + verde: amarela. Folha sob luz vermelha: preta.
- Laser do ar para a água a 45°: refratado a 32,0°. Da água para o ar a 48°: ainda sai, a 82,1°. A 49°: reflexão total.
- Ar–vidro com incidência normal: 4,3% da luz refletida.
- Prisma de vidro: o violeta é desviado mais que o vermelho (39,8° contra 38,3° no desvio mínimo).
- Gota: ângulo máximo de saída de 42,4° para o vermelho e 40,6° para o violeta.

## Miniatura
Modo 'Sombras coloridas' com os três holofotes ligados, a parede branca e a raposa no meio projetando três sombras lado a lado, em ciano, magenta e amarelo, com a lupa de subpixels no canto.
