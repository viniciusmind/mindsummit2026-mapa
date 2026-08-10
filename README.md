# Mind Summit 2026 — Mapa do evento

Mapa interativo do Mind Summit 2026 (Pavilhão 3, Transamérica Expo Center, São Paulo · 16 e 17 de setembro de 2026), implementado como site estático **mobile-first** a partir do handoff do Claude Design.

## Rodar

É um site estático — basta servir a pasta. Ex.:

```bash
npx serve .
```

Ou abrir `index.html` por um servidor local (recomendado, para o `file://` não limitar recursos).

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Estrutura do mapa: cabeçalho, filtros, planta baixa, 2º andar, legendas e bottom sheet. |
| `styles.css` | Tokens da marca Mind (cores, Satoshi), shell responsivo e estilos do mapa/sheet. |
| `app.js` | Filtros, painel de detalhes por zona (dados `ZONES`) e auto-escala das plantas. |
| `assets/` | Logos das marcas e fontes Satoshi (`.woff2`). |

## Decisões de implementação

- **Tecnologia:** HTML/CSS/JS estático, sem build, sem dependências de framework.
- **Responsivo (mobile-first):** cabeçalho, filtros, legendas, rodapé e bottom sheet fazem *reflow* e se ajustam ao celular. As **plantas** (planta baixa e 2º andar) são diagramas espaciais: a planta baixa é escalada proporcionalmente para caber na largura (nunca acima de 1:1, texto vetorial nítido); a faixa de salas do 2º andar rola horizontalmente em telas estreitas.
- **Pan/zoom na planta:** em telas onde a planta é reduzida (celular), o usuário pode **arrastar para mover**, usar **dois dedos para dar zoom** e **toque duplo** para alternar entre "caber na tela" e 1:1. No desktop (planta já em 1:1) os gestos ficam desativados e a rolagem da página é preservada. Uma dica discreta aparece sobre a planta em telas de toque.
- **Ícones offline:** os ~11 glifos [Phosphor](https://phosphoricons.com) (peso *fill*) usados estão **embutidos como sprite SVG** no `index.html` (`<symbol>` + `<use>`). Sem CDN, sem requisições externas — funciona 100% offline (ideal para acesso por QR code no evento).
- **Design System Mind:** paleta, tipografia (Satoshi) e o componente Button (pílulas de filtro: `default` preenchido / `stroke` contornado) reproduzidos a partir dos tokens do handoff.

## Pontos em aberto

- **Data do evento:** vem de markup fixo (`16 e 17 de setembro de 2026`), como no protótipo.
