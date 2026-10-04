# MONO — Ateliê de blocos

Abra **index.html** no Chrome ou Edge. O arquivo é completo e funciona offline: não precisa de servidor, instalação ou conta.

A apresentação inicial recria, com geometria 3D editável, o robô e a montagem do vídeo `Gravação de Tela 2026-09-29 013028.mp4`. É uma reconstrução visual, não uma extração exata da malha original do vídeo.

## Um material web específico para cada produto

Abra **produtos/index.html** para acessar a coleção. Cada apresentação é um arquivo HTML independente, com o seu próprio modelo, sequência de encaixe, câmera que acompanha a montagem, instruções, oito vistas ilustradas e inventário de peças:

- `produtos/robo-explorador.html`: robô inspirado no vídeo; 134 peças.
- `produtos/casa-modular.html`: terreno, paredes, fachada, esquadrias, telhado, chaminé e árvores; 58 peças.
- `produtos/veiculo-explorador.html`: chassi, rodas, carroceria, cabine, teto, capô, faróis e para-choques; 19 peças.
- `produtos/foguete-orbital.html`: plataforma, motor, módulos, aletas, cone, visor e antena; 11 peças.
- `produtos/praca-lego.html`: maquete de praça com loja, porta, vitrine, calçada, árvores, flores, cerca, postes, banco e quatro personagens; 41 peças.
- `produtos/turma-personagens.html`: palco de dois níveis com sete minifiguras customizadas e holofotes; 12 peças.

A apresentação começa automaticamente sem som e abre o manual ao terminar. Navegadores configurados para reduzir movimento começam pausados. Qualquer etapa do manual pode ser aberta na cena 3D. A opção **Câmera auto** acompanha o conjunto em montagem; ao girar a cena manualmente, esse acompanhamento é desligado.

Para gerar o material de **uma criação sua**, abra **Construir → Material de montagem → Baixar manual web**. O HTML exportado leva o modelo atual e gera suas ilustrações e lista de peças. Ele pode ser enviado sozinho ou publicado em uma hospedagem estática. Os arquivos em `produtos` são exemplos específicos; nenhum envio ou publicação externa foi realizado.

## Construir suas próprias coisas

1. Clique em **Construir → Bancada vazia**. Você também pode começar pelos exemplos **Robô**, **Casa**, **Veículo**, **Foguete**, **Praça LEGO** ou **Turma de personagens**.
2. A biblioteca tem três abas:
   - **Formas**: bloco, placa, cubo, viga, arco, rampa, cilindro, esfera, cone, roda, painel e olho.
   - **Estilo LEGO**: placa lisa, bloco redondo com pino, viga Technic com furos, escada, janela com vidro, porta com moldura, cerca, engrenagem, anel, flor, árvore e poste de luz.
   - **Personagens**: oito minifiguras prontas (Exploradora, Astronauta, Construtora, Chef, Rainha, Herói, Mago e Criança com balão) e um botão para sortear um personagem.
3. Clique em uma peça na cena. Edite largura, altura, profundidade, posição, cor e rotação em qualquer ângulo. As mesmas formas podem virar móveis, cenários, máquinas, animais, personagens ou estruturas abstratas.
4. Arraste a peça no plano X/Z. Ajuste a altura em **Y**. A opção de grade alinha as posições a intervalos de 0,25 unidade.
5. Selecione um personagem para customizar: a cor do painel veste o tronco; também é possível trocar pele, pernas, cor do cabelo ou chapéu e cor dos detalhes. Escolha entre 10 cabelos e chapéus, 6 expressões, 6 estampas e 6 acessórios (mochila, capa, ferramenta, escudo, balão). **Sortear visual** gera uma combinação nova. **Acenar**, **Pular** e **Dançar** animam o personagem.
6. Com **Empilhar ao arrastar** ativo, a peça arrastada pousa no topo das peças abaixo dela, como um bloco de encaixe. Os pinos entram na peça de cima e não somam altura.
7. Defina a **etapa de montagem** de cada peça. **Reproduzir minha montagem** anima a sua própria construção.
8. Use **Salvar projeto** para baixar um JSON e **Abrir um projeto** para continuar depois. O editor também tenta salvar automaticamente neste navegador.

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
| Cena viva | Botão ☺, no alto da cena: liga e desliga as animações de personagens, capas, árvores, flores e engrenagens |
| Exportar imagem PNG | Botão de imagem, no alto da cena |
| Reproduzir / pausar | Play ou Espaço no modo Apresentação |

A **Cena viva** começa ligada, exceto quando o navegador pede menos movimento. O som de encaixe é sintetizado e pode ser ativado pelo botão **Som**; com ele ligado, os personagens também fazem um som ao pular, acenar ou dançar. O som não é o áudio do vídeo original. O manual mostra as etapas do projeto atual.

## Arquivos

- `index.html`: aplicativo completo, pronto para abrir e compartilhar.
- `src/template.html`, `src/style.css`, `src/app.js`: fontes editáveis.
- `src/vendor/`: Three.js 0.160.1 e sua licença MIT.
- `src/build.py`: recompõe o HTML com Python; usa os arquivos locais de `vendor` quando já existem.
- `verificacao/`: capturas e relatório da verificação automatizada em Chromium.
- `contato_video.png` e `quadro_*.png`: referências preservadas da análise anterior.

Para reconstruir depois de editar o código, execute `python src/build.py` nesta pasta. Para repetir os testes de desenvolvimento, execute `npm install --prefix src/test-tools --ignore-scripts playwright@1.55.0` e `node src/verify.cjs`. Para regenerar as páginas de `produtos`, execute `node src/export-products.cjs`. Os scripts procuram o Chromium no caminho do Windows usado originalmente e em `/opt/pw-browsers/chromium`; para usar outro, defina a variável `CHROMIUM_PATH`. Nada disso é necessário para usar `index.html`.
