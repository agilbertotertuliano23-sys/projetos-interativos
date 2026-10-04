# MONO — Ateliê de blocos

Abra **index.html** no Chrome ou Edge. O arquivo é completo e funciona offline: não precisa de servidor, instalação ou conta.

## Identidade e tela inicial

O cabeçalho usa o logo MONO feito de blocos amarelos e pretos (`src/assets/mono-logo.webp`); a letra "o" do logo vira o ícone da aba (`src/assets/mono-icon.png`). As cores do site seguem o logo: amarelo `#f9ae01`, preto `#161616` e fundo claro.

A tela inicial tem três colunas:

- **À esquerda, os recursos da maquete:** montagem passo a passo, vista explodida, corte por andar, dia e noite, cena viva, giro 360°, vistas (frente, fundos, lado e topo), personagens que acenam, manual com lista de peças e o atalho para personalizar.
- **No centro, a maquete em 3D.** Ela começa pela **Casa moderna**.
- **À direita, o seletor de maquetes** com miniaturas 3D das 13 maquetes e as etapas de montagem: Casa moderna, Sobrado urbano, Ilhas de dioramas, Robô dançarino, Dragão oriental, Cargueiro espacial, Skyline de Nova York, Praça LEGO, Turma de personagens, Robô explorador, Casa modular, Veículo explorador e Foguete orbital.

Em telas menores, o seletor e as etapas descem para baixo da maquete. No celular, tudo fica em uma coluna.

O **Robô explorador** recria, com geometria 3D editável, o robô e a montagem do vídeo `Gravação de Tela 2026-09-29 013028.mp4`. É uma reconstrução visual, não uma extração exata da malha original do vídeo.

## Maquetes inspiradas nas referências

Foram montadas com peças genéricas e nomes próprios, sem marcas, logotipos ou personagens licenciados:

- **Robô dançarino** (30 peças): hub programável com matriz de luzes animada, motores azul, branco e rosa, vigas Technic, sensor de cor, cabos e notas musicais. Com a cena viva ligada, o tronco pula e os braços acenam.
- **Dragão oriental** (139 peças): corpo verde com ventre bege em espiral ao redor de um pilar de rochas, garras, chifres, bigodes, sete esferas de cristal, raios de energia e um aprendiz.
- **Cargueiro espacial** (40 peças): casco em disco, mandíbulas, painéis detalhados, cabine lateral iluminada, antena parabólica, canhões e motores azuis. A nave flutua sobre o suporte.
- **Skyline de Nova York** (50 peças): Estátua da Liberdade, Empire State, Chrysler, um edifício intermediário e o One World Trade Center sobre o mapa.
- **Ilhas de dioramas** (101 peças): sete ilhas (obra, selva, deserto, portal, ilha pirata, castelo e cidade), cada uma com seu personagem. O barco balança, o portal gira e o semáforo troca de cor.

## As casas

As duas casas foram inspiradas nas fotos de referência de uma casa moderna de blocos de encaixe:

- **Casa moderna** (70 peças): térreo envidraçado com pilares cinza, cozinha azul, mesa de jantar, sofá; andar de cima com fachada branca, janela larga, varanda de vidro, cama, escrivaninha e estante; torre ripada de madeira com três andares, poltrona e lustre de vidro; piscina com patinho, espreguiçadeiras, fogueira, palmeiras, praia e dois moradores. Os fundos são abertos, como uma casa de bonecas: use **Vistas → Fundos** para ver o interior.
- **Sobrado urbano** (76 peças): fundação com viga de furos, entrada recuada com pilares pretos, toldo, degraus de madeira, canteiro com estacas, friso azul, varanda florida com guarda-corpo de vidro, brise de tubos de madeira, terraço com palmeira e luminária, e três moradores.

## Um material web específico para cada produto

Abra **produtos/index.html** para acessar a coleção. Cada apresentação é um arquivo HTML independente, com o seu próprio modelo, sequência de encaixe, câmera que acompanha a montagem, instruções, oito vistas ilustradas e inventário de peças:

- `produtos/casa-moderna.html`: casa moderna com torre ripada, interior mobiliado e piscina; 70 peças.
- `produtos/sobrado-urbano.html`: sobrado de três andares com varanda e terraço; 76 peças.
- `produtos/ilhas-de-dioramas.html`, `produtos/robo-dancarino.html`, `produtos/dragao-oriental.html`, `produtos/cargueiro-espacial.html` e `produtos/skyline-nova-york.html`: as cinco maquetes inspiradas nas referências.
- `produtos/robo-explorador.html`: robô inspirado no vídeo; 134 peças.
- `produtos/casa-modular.html`: terreno, paredes, fachada, esquadrias, telhado, chaminé e árvores; 58 peças.
- `produtos/veiculo-explorador.html`: chassi, rodas, carroceria, cabine, teto, capô, faróis e para-choques; 19 peças.
- `produtos/foguete-orbital.html`: plataforma, motor, módulos, aletas, cone, visor e antena; 11 peças.
- `produtos/praca-lego.html`: maquete de praça com loja, porta, vitrine, calçada, árvores, flores, cerca, postes, banco e quatro personagens; 41 peças.
- `produtos/turma-personagens.html`: palco de dois níveis com sete minifiguras customizadas e holofotes; 12 peças.

A apresentação começa automaticamente sem som e abre o manual ao terminar. Navegadores configurados para reduzir movimento começam pausados. Qualquer etapa do manual pode ser aberta na cena 3D. A opção **Câmera auto** acompanha o conjunto em montagem; ao girar a cena manualmente, esse acompanhamento é desligado.

Para gerar o material de **uma criação sua**, abra **Construir → Material de montagem → Baixar manual web**. O HTML exportado leva o modelo atual e gera suas ilustrações e lista de peças. Ele pode ser enviado sozinho ou publicado em uma hospedagem estática. Os arquivos em `produtos` são exemplos específicos; nenhum envio ou publicação externa foi realizado.

## Construir suas próprias coisas

1. Clique em **Construir → Bancada vazia**. Você também pode começar pelos exemplos **Robô**, **Casa moderna**, **Sobrado urbano**, **Casa**, **Veículo**, **Foguete**, **Praça LEGO** ou **Turma de personagens**.
2. A biblioteca tem cinco abas:
   - **Formas**: bloco, placa, cubo, viga, arco, rampa, cilindro, esfera, cone, roda, painel e olho.
   - **LEGO**: placa lisa, bloco redondo com pino, viga Technic com furos, escada, janela com vidro, porta com moldura, cerca, engrenagem, anel, flor, árvore e poste de luz.
   - **Casa**: palmeira, painel de vidro, guarda-corpo, ripado de madeira, água, espreguiçadeira, sofá, cama, mesa, cadeira, estante com livros, cozinha, luminária pendente e fogueira. Cada uma começa com uma cor natural, que pode ser trocada no painel.
   - **Extras**: hub programável, motor, cabo flexível, esfera de cristal, raio de energia, disco, antena parabólica, painel detalhado, painel de luz, tronco de pirâmide, placa com texto, portal, barco, trilhos, semáforo e rocha.
   - **Personagens**: catorze minifiguras prontas (Exploradora, Astronauta, Construtora, Chef, Rainha, Herói, Mago, Criança com balão, Moradora, Morador, Aprendiz, Pirata, Policial e Arqueóloga) e um botão para sortear um personagem.
3. Clique em uma peça na cena. Edite largura, altura, profundidade, posição, cor e rotação em qualquer ângulo. As mesmas formas podem virar móveis, cenários, máquinas, animais, personagens ou estruturas abstratas.
4. Arraste a peça no plano X/Z. Ajuste a altura em **Y**. A opção de grade alinha as posições a intervalos de 0,25 unidade.
5. Selecione um personagem para customizar: a cor do painel veste o tronco; também é possível trocar pele, pernas, cor do cabelo ou chapéu e cor dos detalhes. Escolha entre 11 cabelos e chapéus (incluindo o chapéu pirata), 6 expressões, 6 estampas e 6 acessórios (mochila, capa, ferramenta, escudo, balão). **Sortear visual** gera uma combinação nova. **Acenar**, **Pular** e **Dançar** animam o personagem.
6. Com **Empilhar ao arrastar** ativo, a peça arrastada pousa no topo das peças abaixo dela, como um bloco de encaixe. Os pinos entram na peça de cima e não somam altura.
7. Em **Movimento na cena viva**, qualquer peça pode flutuar com o conjunto, balançar na água, girar, rodar de frente, dançar, dançar e acenar ou pulsar. Na **Placa com texto**, escreva até 24 caracteres.
8. Defina a **etapa de montagem** de cada peça. **Reproduzir minha montagem** anima a sua própria construção.
9. Use **Salvar projeto** para baixar um JSON e **Abrir um projeto** para continuar depois. O editor também tenta salvar automaticamente neste navegador.

Há até **400 peças** por projeto. Cada dimensão vai de 0,01 a 10 unidades e cada coordenada de −30 a 30. A construção combina formas geométricas; não inclui escultura de malhas, recortes booleanos ou simulação física de encaixes. As peças podem se sobrepor livremente.

## Controles

| Ação | Controle |
| --- | --- |
| Girar câmera | Arrastar o fundo |
| Mover câmera | Shift + arrastar |
| Aproximar/afastar | Roda do mouse ou gesto de pinça |
| Enquadrar toda a construção | Botão de centralizar, no alto da cena |
| Mover peça em X/Z | Arrastar a peça ou usar as setas |
| Alterar altura | Page Up / Page Down |
| Duplicar | Botão Duplicar ou Ctrl/Cmd + D |
| Excluir | Botão Excluir ou Delete |
| Desfazer / refazer | Botões ou Ctrl/Cmd + Z / Ctrl/Cmd + Shift + Z |
| Salvar projeto | Botão Salvar projeto ou Ctrl/Cmd + S |
| Girar peça 90° em Y | R (Shift + R gira no sentido contrário) |
| Copiar / colar peça | Ctrl/Cmd + C / Ctrl/Cmd + V |
| Personagem acenar | Clicar de novo em um personagem já selecionado |
| Personagem pular | Clicar no personagem no modo Apresentação |
| Cena viva | Botão ☺, no alto da cena, ou o recurso Cena viva: liga e desliga as animações de personagens, capas, árvores, palmeiras, flores, água, fogueira, luminárias e engrenagens |
| Corte por andar | Controle deslizante nos recursos: esconde as peças que começam acima da altura escolhida |
| Dia e noite | Recurso Dia e noite: fundo escuro, janelas acesas, postes, luminárias e fogo brilhando |
| Giro 360° | Recurso Giro 360°; girar a cena com o mouse ou escolher uma vista desliga o giro |
| Vistas | Frente, Fundos, Lado e Topo, com transição suave da câmera |
| Exportar imagem PNG | Botão de imagem, no alto da cena |
| Reproduzir / pausar | Play ou Espaço no modo Apresentação |

A **Cena viva** começa ligada, exceto quando o navegador pede menos movimento. O som de encaixe é sintetizado e pode ser ativado pelo botão **Som**; com ele ligado, os personagens também fazem um som ao pular, acenar ou dançar. O som não é o áudio do vídeo original. O manual mostra as etapas do projeto atual.

## Arquivos

- `index.html`: aplicativo completo, pronto para abrir e compartilhar.
- `src/template.html`, `src/style.css`, `src/app.js`: fontes editáveis.
- `src/assets/`: logo e ícone, embutidos no HTML pelo `build.py`.
- `src/vendor/`: Three.js 0.160.1 e sua licença MIT.
- `src/build.py`: recompõe o HTML com Python; usa os arquivos locais de `vendor` quando já existem.
- `verificacao/`: capturas e relatório da verificação automatizada em Chromium.
- `contato_video.png` e `quadro_*.png`: referências preservadas da análise anterior.

Para reconstruir depois de editar o código, execute `python src/build.py` nesta pasta. Para repetir os testes de desenvolvimento, execute `npm install --prefix src/test-tools --ignore-scripts playwright@1.55.0` e `node src/verify.cjs`. Para regenerar as páginas de `produtos`, execute `node src/export-products.cjs`. Os scripts procuram o Chromium no caminho do Windows usado originalmente e em `/opt/pw-browsers/chromium`; para usar outro, defina a variável `CHROMIUM_PATH`. Nada disso é necessário para usar `index.html`.
