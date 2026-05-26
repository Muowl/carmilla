# Carmilla — Paleta v1

Tema escuro de fundo rosado-vinho com accents quentes (rosa, lavanda, mint, pêssego, champagne).
Inspirado na atmosfera de boudoir/cripta vampírica — sóbrio, autoral, de identidade própria.

> Nome de trabalho: **Carmilla** (Sheridan Le Fanu, 1872 — clássico romance vampírico gótico).
> Renomeie à vontade antes de publicar.

---

## Tokens

| Token            | Hex        | Uso                                                        |
|------------------|------------|------------------------------------------------------------|
| `crypt`          | `#16101A`  | Background mais profundo (página, gutter)                  |
| `boudoir`        | `#2E1B2D`  | Background principal (editor, painel)                      |
| `velvet`         | `#3A2438`  | Superfície elevada (cards, popups, status bar)             |
| `selection`      | `#4A3245`  | Linha atual, seleção, range highlight                      |
| `pearl`          | `#F4ECE3`  | Texto principal / foreground / pontuação                   |
| `carmine`        | `#FF5FA2`  | Keywords, storage (`const`, `let`, `class`, `if`, `return`)|
| `wisteria`       | `#D5A6FF`  | Instâncias (`this`, `super`, `null`, `undefined`)          |
| `verdigris`      | `#7AD9C2`  | Classes, tipos, suporte                                    |
| `absinthe`       | `#7AE0A6`  | Funções, métodos, declarações de função                    |
| `champagne`      | `#F3E2AB`  | Strings, template literals                                 |
| `peach-velvet`   | `#FFAE8A`  | Números, booleanos                                         |
| `pomegranate`    | `#E84B6E`  | Erros, deleções, alertas                                   |
| `ash-mauve`      | `#9E83A4`  | Comentários, código desabilitado                           |

## Princípios de design

1. **Coerência térmica.** Tudo puxa para o lado quente do espectro — em vez do azul/roxo gélido que domina a maioria dos temas escuros.
2. **Comentários em mauve, não em azul.** Comentários `#9E83A4` se integram à atmosfera do fundo rosa em vez de destoarem com um azul frio.
3. **Accent rosa saturado.** `#FF5FA2` (Carmine) puxa para o magenta/rosé — afirma identidade própria.
4. **Verde menos elétrico.** Absinthe `#7AE0A6` é um mint elegante, longe do verde neon de praxe.
5. **Contraste WCAG.** Pearl sobre Boudoir ≈ 12:1 (AAA). Carmine sobre Boudoir ≈ 5.5:1 (AA). Ash Mauve sobre Boudoir ≈ 4.2:1 (AA para comentários, deliberadamente sutil).

## Mapeamento TextMate (resumo)

```
comment                                  → ash-mauve  (italic)
keyword, storage, keyword.control        → carmine
variable.language, constant.language     → wisteria
entity.name.type, entity.name.class,
support.class, support.type              → verdigris
entity.name.function, support.function   → absinthe
string, string.template                  → champagne
constant.numeric, constant.language.boolean → peach-velvet
invalid, invalid.illegal                 → pomegranate
text, punctuation, source                → pearl
```

## Arquivos neste diretório

- `PALETTE.md` — esta especificação (fonte da verdade).
- `index.html` — showcase visual da paleta + amostra de código.
- `carmilla.json` — tema VS Code (pronto para empacotar como extensão).

## Para publicar

1. Renomeie se quiser (atualize `name`/`displayName` em `carmilla.json`).
2. VS Code: `yo code` → "New Color Theme" → cole o JSON.
3. Licença sugerida: MIT. Nenhum hex é cópia direta de outro tema, então não há dependência de atribuição.
