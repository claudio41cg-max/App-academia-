# SmartPhysical — Auditoria e Placar de Correções

Atualizado em: 03/10/2026

## Regra deste arquivo

Este documento é o placar oficial de problemas do SmartPhysical.
Sempre que um problema for confirmado, ele entra aqui.
Sempre que for corrigido e testado, a contagem diminui e a correção fica registrada no histórico.

---

## Placar atual

| Categoria | Inicial confirmado | Corrigido | Restante |
|---|---:|---:|---:|
| GIF/mídia claramente incompatível com o exercício | 15 | 5 | 10 |
| Exercícios com instrução genérica | 100 | 10 | 90 |
| Segurança de pagamento/licença | 1 | 0 | 1 |
| Bug funcional X5 | 1 | 0 | 1 |
| Arquitetura: app inteiro concentrado em um index.html | 1 | 0 | 1 |

> Os números acima são apenas problemas já confirmados. A auditoria continua e pode encontrar novos itens.

---

## Auditoria concluída — PEITO

- Mídias revisadas: **10/10**
- Pendências de GIF dentro de PEITO: **0**
- Exercícios de PEITO com instrução específica: **10/10**
- Organização didática aplicada: **SUPINO → CRUCIFIXO → CROSSOVER**
- Todos os 10 exercícios de peito agora usam uma demonstração correspondente ao movimento nominal.

> Observação: várias mídias foram obtidas de fontes externas. Para uma versão comercial definitiva, o ideal é migrar as demonstrações aprovadas para uma biblioteca própria/licenciada e estável, evitando dependência de links externos.

---

## GIFs/mídias com problema confirmado

### Corrigidos — PEITO

- [x] **Supino Reto Barra** — mídia revisada e trocada por demonstração correspondente.
- [x] **Supino Inclinado Barra** — antes usava um GIF de supino inclinado no Smith; agora usa barra livre em banco inclinado.
- [x] **Supino Declinado Barra** — o antigo slot da flexão ajoelhada virou supino declinado, com demonstração correspondente.
- [x] **Supino Reto Halteres** — mídia revisada e trocada por demonstração correspondente.
- [x] **Supino Inclinado Halteres** — mídia revisada e trocada por demonstração correspondente.
- [x] **Supino Horizontal na Máquina** — mídia revisada e trocada por chest press em máquina.
- [x] **Crucifixo na Máquina** — mídia revisada e trocada por pec deck fly.
- [x] **Crucifixo Reto Halteres** — mídia revisada e trocada por dumbbell chest fly.
- [x] **Crossover Polia Alta** — mídia revisada com trajetória de cima para baixo.
- [x] **Crossover Polia Baixa** — mídia revisada com trajetória de baixo para cima.

### Ainda pendentes

- [x] Prancha Toque Ombro — removido da categoria TRAPÉZIO e substituído por exercício compatível com GIF local.
- [x] Prancha Toque Ombro Alt — removido da categoria TRAPÉZIO e substituído por exercício compatível com GIF local.
- [ ] Abdominal Oblíquo — GIF atual usa crucifixo inverso no cross.
- [ ] Bicicleta no Ar — GIF atual usa apoio de frente com medicine ball.
- [ ] Prancha Lateral — GIF atual usa apoio de frente na parede.
- [ ] Abdominal Tesoura — GIF atual usa apoio com step.
- [ ] Abdominal Rolinho — GIF atual usa apoio de joelhos.
- [x] Cadeira Abdutora — slot foi reorganizado na revisão de PERNA e deixou de usar o mapeamento incompatível.
- [ ] Panturrilha Sentado — GIF atual usa flexão de joelho no cabo.
- [ ] Panturrilha Unilateral — GIF atual usa flexão de joelho no cabo.
- [ ] Saltos com Corda — GIF atual usa barra fixa/pull-up.
- [ ] Panturrilha Halteres — GIF atual usa flexão de joelho no cabo.
- [ ] Panturrilha Joelho Flexionado — GIF atual usa flexão de joelho no cabo.

---

## PEITO — nova organização

A categoria PEITO passa a ser apresentada por família de movimento, nesta ordem:

### SUPINO
1. Supino Reto com Barra — foco: peitoral médio
2. Supino Inclinado com Barra — foco: peitoral superior
3. Supino Declinado com Barra — foco: peitoral inferior
4. Supino Reto com Halteres — foco: peitoral médio
5. Supino Inclinado com Halteres — foco: peitoral superior
6. Supino Horizontal na Máquina — foco: peitoral médio

### CRUCIFIXO
7. Crucifixo na Máquina — foco: peitoral maior
8. Crucifixo Reto com Halteres — foco: peitoral maior

### CROSSOVER
9. Crossover na Polia Alta — foco: peitoral inferior
10. Crossover na Polia Baixa — foco: peitoral superior

Cada um dos 10 exercícios recebeu:
- foco específico;
- instrução própria;
- passo a passo;
- erros comuns;
- equipamento mais claro;
- família de movimento para facilitar entendimento.

---

## Outros problemas confirmados

### Segurança

- [ ] A senha mestre `smart3535` está escrita diretamente no HTML.
  - Protótipo: funciona.
  - Produto comercial: inseguro.
  - Solução futura: validação de licença fora do cliente, com painel administrativo.

### X5

- [ ] O cartão “Execução X5 - Vídeo 9” usa o elemento `id="vid-x5-13"`, mas o botão chama `vid-x5-9`.
  - Resultado provável: botão de tela cheia do vídeo 9 não encontra o vídeo correto.

### Arquitetura

- [ ] HTML/CSS/JavaScript e grande parte dos dados estão concentrados em um único `index.html`.
  - Isso aumenta risco de regressão e torna manutenção mais difícil.
  - A separação será feita gradualmente, sem reescrever o app inteiro de uma vez.

---

## Evolução da tela de exercício — PEITO

- [x] Separar **Como executar** em card próprio.
- [x] Adicionar **Respiração** específica por família de movimento.
- [x] Separar **Erros comuns** em card visual de atenção.
- [x] Mostrar **última carga usada** no exercício.
- [x] Mostrar até 4 registros recentes de **carga · séries · repetições**.
- [x] Atualizar o histórico automaticamente ao salvar/adicionar o exercício com peso.
- [x] Evitar várias duplicações do mesmo exercício no mesmo dia: o registro do dia é atualizado.

## Segunda demonstração visual — PEITO

- [x] Testada uma segunda demonstração visual.
- [x] Removida por preferência do usuário.
- [x] Voltamos para **um único GIF principal por exercício**.
- [x] PEITO migrado para GIFs locais 360×360 do próprio repositório.


## Padronização visual local 360×360 — PEITO

Em 03/10/2026, os 10 exercícios de PEITO passaram a usar os GIFs locais 360×360 já existentes no próprio repositório, vindos da pasta de exercícios enviada pelo usuário.

- [x] Supino Reto com Barra → `supino reto pegada aberta.gif`
- [x] Supino Inclinado com Barra → `supino inclinado banco.gif`
- [x] Supino Declinado com Barra → `supino declinado barra.gif`
- [x] Supino Reto com Halteres → `supino reto com halteres.gif`
- [x] Supino Inclinado com Halteres → `Supino inclinado com halteres.gif`
- [x] Supino Horizontal na Máquina → `supino horizontal maquina.gif`
- [x] Crucifixo na Máquina → `Crucifixo Maquina.gif`
- [x] Crucifixo Reto com Halteres → `supino crucifixo com halteres.gif`
- [x] Crossover Polia Alta → `crucifixo no cross polia alta.gif`
- [x] Crossover Polia Baixa → `crucifixo beixo no croos em pe.gif`

Resultado: **10/10 exercícios de peito usando GIFs locais 360×360**, sem depender de URLs externas para esta categoria.

## Auditoria — BÍCEPS

Em 03/10/2026, os 10 exercícios de BÍCEPS foram conferidos na biblioteca local 360×360.

- [x] Rosca Direta Barra → `rosca dierta pegada aberta.gif`
- [x] Rosca Alternada Halteres → `rosca alternada com giro.gif`
- [x] Rosca Martelo → `rosca neutra com halteres.gif`
- [x] Rosca Concentrada → `Rosca Concentrada.gif`
- [x] Rosca Scott → corrigido para `rosca  direta no banco scort.gif`
- [x] Rosca Inversa → corrigido para `rosca dierata pegada invertida barra W.gif`
- [x] Rosca Barra W → `rosca direta barra W.gif`
- [x] Rosca na Polia → `rosca direta no cross barra W.gif`
- [x] Rosca Foco no Banco → corrigido para `rosca unilateral com halteres sentado no banco.gif`
- [!] Rosca 21 → `rosca direta barra W sentado banco.gif` é 360×360, mas não representa claramente o método 21; manter como pendência visual até existir um GIF específico.

Resultado: **10/10 arquivos de Bíceps validados em 360×360** e **3 apontamentos quebrados/incorretos corrigidos**. A Rosca 21 continua com mídia provisória por falta de demonstração específica na biblioteca atual.

## Auditoria — TRÍCEPS

Em 03/10/2026, a categoria TRÍCEPS foi reorganizada por famílias de movimento, sem ficar presa aos nomes antigos do app.

### POLIA
1. Tríceps Polia Barra Triângulo → `triceps no cross barra triangulo.gif`
2. Tríceps Polia Unilateral → `triceps pegada pronada uniatres no cross.gif`

### FRANCÊS
3. Tríceps Francês Polia → `triceps françes bilateral no cross.gif`
4. Tríceps Francês Unilateral Polia → `triceps françes unilateral no corss.gif`
5. Tríceps Francês Barra W → `Triceps frances barra W.gif`

### TESTA
6. Tríceps Testa Barra → `triceps testa com barra.gif`
7. Tríceps Testa Pegada Neutra → `triceps testa pegada neutra deitado no banco.gif`
8. Tríceps Testa Halteres → `triceps tresta com halteres.gif`

### BANCO / PARALELAS
9. Tríceps no Banco → `triceps paralelo no banco.gif`
10. Tríceps Paralelas Máquina → `triceps na paralela maquiba.gif`

Resultado: **10/10 exercícios de Tríceps usando GIFs locais 360×360**, organizados em sequência lógica. Os nomes antigos que não se encaixavam bem foram substituídos, mantendo os IDs internos para preservar compatibilidade com treinos salvos. Também foram adicionadas instruções, respiração e erros comuns específicos.

## Auditoria — PERNA

Em 03/10/2026, a categoria PERNA foi reorganizada por famílias de movimento, priorizando exercícios conhecidos e GIFs locais compatíveis.

### AGACHAMENTO
1. Agachamento Livre Barra → `Agachamento livre com barra.gif`
2. Agachamento Máquina → `agachamento na maquina.gif`

### MÁQUINAS
3. Leg Press Pés Afastados → `leg press pés afastados.gif`
4. Cadeira Extensora → `cadeira extensora.gif`
5. Cadeira Flexora → `cadeira flex.gif`

### POSTERIOR
6. Stiff Barra → `stiff com barra.gif`
7. Stiff Halteres → `Stiff com Halteres.gif`

### UNILATERAL / TERRA
8. Passada Halteres → `passada com halteres.gif`
9. Agachamento Búlgaro → `agachamento bulgaro.gif`
10. Levantamento Terra Barra → `levantamento terra com barra.gif`

Resultado: **10 exercícios de perna reorganizados em sequência lógica**, usando GIFs locais. O `leg press.gif` 720×720 foi evitado para manter o padrão visual 360×360. Foram adicionadas instruções, respiração e erros comuns específicos, preservando os IDs internos para compatibilidade com treinos salvos.



## Auditoria — OMBRO

Em 03/10/2026, a categoria OMBRO foi reorganizada por famílias de movimento, mantendo os IDs internos e usando GIFs locais da biblioteca enviada pelo usuário.

### DESENVOLVIMENTO
1. Desenvolvimento com Halteres → `Desenvolvimento com Halteres.gif`
2. Desenvolvimento na Máquina → `Desenvolmento Máquina.gif`
3. Desenvolvimento Smith → `Desenvolvimento Smith.gif`
4. Arnold Press → `desenvolvimento com rotação.gif`

### ELEVAÇÃO LATERAL
5. Elevação Lateral com Halteres → `elevação letaral com haltrers.gif`
6. Elevação Lateral no Cross → `elevação leteral cruzada no cross.gif`

### ELEVAÇÃO FRONTAL
7. Elevação Frontal com Halteres → `elevação frontal com halteres.gif`
8. Elevação Frontal no Cross → `Elevação Frontal Crossover.gif`

### POSTERIOR / REMADA ALTA
9. Crucifixo Inverso com Halteres → `Crucifixo Invertido com Halteres.gif`
10. Remada Alta Barra W → `remada alta com barra W.gif`

Resultado: **10/10 exercícios de ombro organizados com GIFs locais compatíveis**, instruções, respiração e erros comuns específicos.

## ABDÔMEN — observação de continuidade

A categoria ABDÔMEN ainda precisa de revisão completa. Entre os GIFs locais já publicados no repositório, apenas `Abdominal Concentrado.gif` e `Abdominal com Carga.gif` têm correspondência nominal clara com exercícios abdominais. Os demais mapeamentos atuais incluem demonstrações incompatíveis (apoios, crucifixo inverso e barra/cross). Para não repetir o erro de colocar GIF errado com nome certo, a categoria fica marcada como pendente até selecionar mídias realmente compatíveis.



## Auditoria — COSTAS

Em 03/10/2026, a categoria COSTAS foi reorganizada com 10 movimentos conhecidos e GIFs locais compatíveis.

1. Puxada Frontal Pegada Pronada → `pulley pegada aberta pronada.gif`
2. Puxada Frontal Pegada Supinada → `pulley frente pegada supinada.gif`
3. Puxada Fechada Triângulo → `pulley frente pegaga fechda pronada.gif`
4. Remada Curvada Barra → `remada livre com barra.gif`
5. Remada Serrote → `remada serrote.gif`
6. Remada Articulada → `remada articulada.gif`
7. Remada Baixa Triângulo → `remada beixa no pulley triangulo.gif`
8. Remada Cavalinho Barra → `remada cavalino com barra.gif`
9. Remada Inclinada Smith → `remada inclinada no smith.gif`
10. Hiperextensão Tronco → `Hiperextensão do tronco.gif`

Resultado: **10/10 exercícios de costas com GIFs locais compatíveis**, organizados por puxada, remada e lombar.

## Auditoria — TRAPÉZIO

A categoria TRAPÉZIO foi limpa dos dois exercícios de “prancha toque ombro”, que estavam com GIFs incompatíveis, e passou a usar apenas movimentos de trapézio/remada alta com mídia local correspondente.

Resultado: **10/10 exercícios de trapézio reorganizados** em encolhimentos e remadas altas.

## Auditoria — GLÚTEO

A categoria GLÚTEO foi reorganizada em famílias de elevação pélvica, abdução, extensão, unilateral e sumô.

Resultado: **10/10 exercícios de glúteo com GIFs locais compatíveis**, mantendo IDs internos para preservar treinos salvos.

## Próxima sequência planejada

1. Revisar e corrigir ABDÔMEN sem usar GIFs incompatíveis.
2. Revisar PANTURRILHA: a biblioteca local publicada tem apenas um GIF claramente específico de panturrilha.
3. Conferir no celular PERNA, OMBRO, COSTAS, TRAPÉZIO e GLÚTEO.
4. Corrigir qualquer mídia visualmente duvidosa encontrada no teste.
5. Continuar reduzindo o placar oficial de erros.
