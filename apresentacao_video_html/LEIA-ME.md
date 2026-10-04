# MONO — Ateliê de blocos

Abra **index.html** no Chrome ou Edge. O arquivo é completo e funciona offline: não precisa de servidor, instalação ou conta.

A apresentação inicial recria, com geometria 3D editável, o robô e a montagem do vídeo `Gravação de Tela 2026-09-29 013028.mp4`. É uma reconstrução visual, não uma extração exata da malha original do vídeo.

## Um material web específico para cada produto

Abra **produtos/index.html** para acessar a coleção. Cada apresentação é um arquivo HTML independente, com o seu próprio modelo, sequência de encaixe, câmera que acompanha a montagem, instruções, oito vistas ilustradas e inventário de peças:

- `produtos/robo-explorador.html`: robô inspirado no vídeo; 134 peças.
- `produtos/casa-modular.html`: terreno, paredes, fachada, esquadrias, telhado, chaminé e árvores; 58 peças.
- `produtos/veiculo-explorador.html`: chassi, rodas, carroceria, cabine, teto, capô, faróis e para-choques; 19 peças.
- `produtos/foguete-orbital.html`: plataforma, motor, módulos, aletas, cone, visor e antena; 11 peças.

A apresentação começa automaticamente sem som e abre o manual ao terminar. Navegadores configurados para reduzir movimento começam pausados. Qualquer etapa do manual pode ser aberta na cena 3D. A opção **Câmera auto** acompanha o conjunto em montagem; ao girar a cena manualmente, esse acompanhamento é desligado.

Para gerar o material de **uma criação sua**, abra **Construir → Material de montagem → Baixar manual web**. O HTML exportado leva o modelo atual e gera suas ilustrações e lista de peças. Ele pode ser enviado sozinho ou publicado em uma hospedagem estática. Os arquivos em `produtos` são exemplos específicos; nenhum envio ou publicação externa foi realizado.

## Construir suas próprias coisas

1. Clique em **Construir → Bancada vazia**. Você também pode começar pelos exemplos **Robô**, **Casa**, **Veículo** ou **Foguete**.
2. Escolha entre 12 tipos de peças: bloco, placa, cubo, viga, arco, rampa, cilindro, esfera, cone, roda, painel e olho.
3. Clique em uma peça na cena. Edite largura, altura, profundidade, posição, cor e rotação em qualquer ângulo. As mesmas formas podem virar móveis, cenários, máquinas, animais, personagens ou estruturas abstratas.
4. Arraste a peça no plano X/Z. Ajuste a altura em **Y**. A opção de grade alinha as posições a intervalos de 0,25 unidade.
5. Defina a **etapa de montagem** de cada peça. **Reproduzir minha montagem** anima a sua própria construção.
6. Use **Salvar projeto** para baixar um JSON e **Abrir um projeto** para continuar depois. O editor também tenta salvar automaticamente neste navegador.

Há até **400 peças** por projeto. As dimensões e coordenadas têm limites no painel. A construção combina formas geométricas; não inclui escultura de malhas, recortes booleanos ou simulação física de encaixes. As peças podem se sobrepor livremente.

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
| Exportar imagem PNG | Botão de imagem, no alto da cena |
| Reproduzir / pausar | Play ou Espaço no modo Apresentação |

O som de encaixe é sintetizado e pode ser ativado pelo botão **Som**; não é o áudio do vídeo original. O manual mostra as etapas do projeto atual.

## Arquivos

- `index.html`: aplicativo completo, pronto para abrir e compartilhar.
- `src/template.html`, `src/style.css`, `src/app.js`: fontes editáveis.
- `src/vendor/`: Three.js 0.160.1 e sua licença MIT.
- `src/build.py`: recompõe o HTML com Python; usa os arquivos locais de `vendor` quando já existem.
- `verificacao/`: capturas e relatório da verificação automatizada em Chromium.
- `contato_video.png` e `quadro_*.png`: referências preservadas da análise anterior.

Para reconstruir depois de editar o código, execute `python src/build.py` nesta pasta. Para repetir os testes de desenvolvimento, execute `npm install --prefix src/test-tools --ignore-scripts playwright@1.55.0` e `node src/verify.cjs`; ajuste o caminho do Chromium no script se necessário. Nada disso é necessário para usar `index.html`.
