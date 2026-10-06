# Desafio Champollion

> **Área:** História · **id:** `desafio-champollion` · **Tipo sugerido:** misto
> **Status:** planejado — proposta selecionada da pesquisa (ficha, modelo, dados e guia a detalhar na construção)
> Demo a construir em `demos/desafio-champollion.html`

## Propostas de pesquisa que formam este sistema

### Desafio Champollion — olhar mecânica engenhosa

- **Tópico:** Escrita no mundo antigo: decifrando hieróglifos egípcios com a Pedra de Roseta, os cartuchos reais e o método de Champollion
- **BNCC:** EF06HI07, EF06HI02, EM13CHS101
- **Público:** 6º ano do EF (formas de registro das sociedades antigas, Egito). Também serve a oficinas de leitura de fontes em qualquer série.
- **Tipo:** misto

**Ideia.** Uma Pedra de Roseta em 3D (bloco girável com três faixas: hieróglifos, demótico e grego) abre a demo. Ao clicar nas faixas, o aluno descobre que é o mesmo decreto, de 196 a.C., em três escritas. O centro da demo é o QUADRO DE DECIFRAÇÃO: o cartucho de Ptolomeu (da Roseta) e o de Cleópatra (do obelisco de Philae), com os nomes em grego ao lado. O aluno arrasta fichas de som (P, T, O, L, M, I, S, K, A, R...) sobre os sinais. O sistema checa a CONSISTÊNCIA entre os cartuchos: um sinal presente nos dois precisa ter o mesmo som. O leão e o banquinho 'travam' com brilho quando ganham o som certo nos dois nomes.

AHAS EM SEQUÊNCIA: (a) os hieróglifos também representam sons, e não só ideias. (b) Cleópatra tem dois sinais diferentes para T (a mão e o pão): existem homófonos. (c) os sinais finais de Cleópatra não 'soam': são determinativos de nome feminino, e a escrita mistura som e sentido.

FASE 3, o salto real de 1822: os cartuchos de Abu Simbel. Disco solar (Ra) + ms + s dá Ramsés; o íbis de Thoth + ms dá Tutmés. AHA: o sistema também escrevia nomes egípcios antigos, e não só os gregos. FASE 4: o aluno escreve o próprio nome com o 'alfabeto' uniliteral aproximado e baixa o cartucho como imagem. Os sinais vêm da fonte Noto Sans Egyptian Hieroglyphs (Google Fonts, que é permitido), com sinais desenhados no canvas como alternativa.

**Por que é visual.** Decifrar é comparar padrões visuais. A peça que só 'trava' quando é coerente nos dois cartuchos faz o aluno refazer, com as mãos, o raciocínio de Champollion: uma descoberta por experimentação, e não uma figurinha.

**Riscos.** As transliterações precisam ser conferidas com fonte egiptológica (Ptolomeu p-t-w-l-m-y-s; Cleópatra q-l-i-w-p-A-d-r-A-t + determinativos). Não dizer que os hieróglifos são um alfabeto: a maioria dos sinais é bi/triliteral ou ideograma, e o guia deve explicar isso. Os sinais Unicode dependem de a fonte carregar, por isso é preciso um fallback desenhado. Reconhecer Thomas Young e outros antecessores. Não se sobrepõe a Civilizações 3D (a pirâmide como monumento): aqui o foco é a escrita e o método.
