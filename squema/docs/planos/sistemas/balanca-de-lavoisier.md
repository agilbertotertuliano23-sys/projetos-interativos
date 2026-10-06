# Balança de Lavoisier

> **Área:** Química · **id:** `balanca-de-lavoisier` · **Tipo sugerido:** 2D
> **Status:** proposta selecionada da pesquisa — a especificação completa (ficha, modelo, dados, guia) está em síntese
> Demo a construir em `demos/balanca-de-lavoisier.html`

## Propostas de pesquisa que formam este sistema

### Balança de Átomos — olhar currículo (BNCC/ENEM)

- **Tópico:** Conservação da massa e proporções (Lavoisier e Proust), balanceamento de equações, mol, cálculo estequiométrico, reagente limitante e em excesso, energia de combustão
- **BNCC:** EF06CI02, EF09CI02, EM13CNT101, EM13CNT309, EM13CNT301
- **Público:** 8º e 9º ano do EF (conservação da massa e balanceamento visual); 1ª e 2ª série do EM e preparação para o ENEM (mol, limitante, combustíveis)
- **Tipo:** 2D

**Ideia.** Tem três modos. (1) BALANCEAR: uma equação, como CH₄ + O₂ → CO₂ + H₂O, com seletores de coeficiente. Embaixo, uma caixa de partículas desenha cada molécula como bolhas coloridas (C cinza, H branco, O vermelho). Uma balança de dois pratos conta os átomos de cada elemento de cada lado, inclina enquanto há diferença e fica nivelada quando a equação está balanceada. O ponto central: há um botão tentador 'mudar índice' (H₂O → H₂O₂). Ele 'balanceia' a conta, mas a bolha vira outra substância, a água oxigenada, e o guia mostra que o índice define a substância e o coeficiente define a quantidade. (2) REAGENTE LIMITANTE: o aluno informa massas em gramas de dois reagentes (H₂ + O₂, N₂ + H₂ → NH₃, Fe + S). Uma trilha converte g → mol → partículas. Ao clicar em 'Reagir', as moléculas se encontram e reagem em pares conforme a proporção, e as que sobram brilham como excesso. Um gráfico de barras mostra os mols antes e depois. O aluno descobre que o limitante não é o reagente de menor massa. Um alternador sistema aberto/fechado repete Lavoisier: queimar palha de aço num frasco aberto 'ganha massa' e queimar madeira 'perde massa', mas no frasco fechado a balança fica nivelada. (3) COMBUSTÍVEL: o aluno escolhe 1 L de etanol, gasolina (octano), gás natural ou H₂ e vê o mol queimado, o CO₂ emitido e a energia liberada (ΔH de combustão embutido) por grama, por litro e por kJ. É uma comparação típica do ENEM, com problemas gerados com valores novos a cada rodada.

**Por que é visual.** A estequiometria é abstrata porque o aluno só vê números. Contar bolhas de átomos que se rearranjam mostra que nada se cria nem se perde. A balança que inclina dá retorno imediato no balanceamento. Ver as moléculas que sobram torna o reagente em excesso concreto, sem decorar 'regra de três'. A dificuldade mais documentada (confundir índice com coeficiente) vira um erro que o aluno vê acontecer.

**Riscos.** A caixa de partículas precisa de escala explícita ('1 bolha = 1 mol' ou 'n moléculas'), senão o aluno confunde partícula com mol. O balanceamento deve aceitar múltiplos dos coeficientes e indicar a forma mínima. Os dados de ΔH de combustão e densidade dos combustíveis precisam de fonte e de arredondamento coerente. O sistema aberto deve ser animado com clareza (o gás entra ou sai) para não reforçar a ideia de que a massa 'some'.

### Balança de Lavoisier — olhar mecânica engenhosa

- **Tópico:** Conservação da massa, proporções definidas (Proust) e balanceamento de equações
- **BNCC:** EF09CI02, EF06CI02, EM13CNT101
- **Público:** 8º e 9º ano EF e 1ª série EM
- **Tipo:** 2D

**Ideia.** MODO 1 'Aberto x fechado': quatro experimentos sobre uma balança digital: palha de aço queimando, vela acesa, comprimido efervescente na água e vinagre com bicarbonato, primeiro aberto e depois com uma bexiga na boca do frasco. Antes de cada um o aluno aposta se a massa vai subir, descer ou ficar igual, e a balança responde. A palha de aço GANHA massa porque incorpora o O₂ do ar. A vela PERDE porque o CO₂ e o vapor escapam. Com a bexiga, a massa NÃO muda. Partículas de gás aparecem entrando e saindo do sistema. O 'aha' é que a massa só parecia sumir ou aparecer porque o sistema estava aberto. MODO 2 'Equilibre na balança': a equação aparece com moléculas em bolinhas (cores CPK). O aluno mexe só nos coeficientes, e cada elemento tem uma mini-balança que pende para o lado com mais átomos dele. SACADA: há um botão tentador, 'mudar o índice'. Se o aluno troca H₂O por H₂O₂ para fechar a conta, a molécula vira água oxigenada, com ficha e estrutura ('você fabricou outra substância'). Se troca CO₂ por CO, surge o monóxido tóxico. Assim ele vê que o coeficiente conta moléculas e o índice define qual é a substância. MODO 3 'Receita de Proust': os reagentes entram em gramas (ex.: 4 g de H₂ + 40 g de O₂). O aluno prevê quanto de água se forma e o que sobra, e a reação acontece molécula a molécula até que o excesso fica parado no prato. A razão 1:8 se mantém qualquer que seja a quantidade colocada. Os desafios gerados usam equações do cotidiano: gás do fogão, etanol no carro, ferrugem, fotossíntese.

**Por que é visual.** A contagem de átomos vira um peso que inclina a balança: a conservação deixa de ser regra decorada e passa a ser algo que se vê pender e equilibrar. Com o gás visível escapando, o aparente 'sumiço' de massa se explica sozinho.

**Riscos.** A balança de átomos (contagem) e a balança de massa (gramas) não podem se confundir: usar mostradores diferentes. A palha de aço exige números coerentes (Fe → Fe₂O₃ ou Fe₃O₄). O botão 'mudar índice' deve ficar restrito a substâncias reais com dados embutidos (H₂O₂, CO, O₃); para o resto, mostrar 'substância inexistente'. A verificação precisa exigir os menores inteiros. O comprimido efervescente deve ser genérico, sem marca.
