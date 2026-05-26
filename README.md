<h1 align="center">🥀 Carmilla</h1>

<p align="center"><em>Calor de cripta para noites de código.</em></p>

<p align="center">
  Tema escuro autoral de identidade <strong>boudoir/vinho</strong> — fundo rosado-vinho e accents quentes:
  carmim, lavanda, mint absinto, pêssego veludo e champagne.
</p>

<p align="center">
  <a href="https://muowl.github.io/carmilla/"><strong>🔗 Ver o showcase ao vivo</strong></a>
</p>

---

> **Status:** v1 em desenvolvimento, rumo à publicação (VS Code Marketplace e outros editores).
> O nome *Carmilla* é uma homenagem ao romance gótico de Sheridan Le Fanu (1872), um clássico da literatura vampírica.

## Por que existe

A maioria dos temas escuros puxa para o lado frio do espectro (azuis, roxos gélidos). Carmilla faz o oposto:
**coerência térmica** — tudo puxa para o quente. O detalhe que define a identidade são os comentários em
**Ash Mauve**, que dialogam com o fundo em vez de destoarem dele.

## Preview

<p align="center">
  <img src="preview.png" alt="Showcase do tema Carmilla: paleta, mockup de editor e mapa de tokens" width="720">
</p>

Veja [ao vivo](https://muowl.github.io/carmilla/) (requer GitHub Pages habilitado) ou abra [`index.html`](index.html) localmente no navegador.

## Paleta

| Token          | Hex        | Uso                                              |
|----------------|------------|--------------------------------------------------|
| Crypt          | `#16101A`  | Background mais profundo — página, gutter        |
| Boudoir        | `#2E1B2D`  | Background principal — editor, painéis           |
| Velvet         | `#3A2438`  | Superfície elevada — cards, status bar           |
| Selection      | `#4A3245`  | Linha atual, seleção, ranges                     |
| Pearl          | `#F4ECE3`  | Texto principal / foreground                     |
| Carmine        | `#FF5FA2`  | Keywords, storage (`const`, `class`, `return`)   |
| Wisteria       | `#D5A6FF`  | Instâncias (`this`, `super`, `null`)             |
| Verdigris      | `#7AD9C2`  | Classes, tipos, suporte                          |
| Absinthe       | `#7AE0A6`  | Funções, métodos                                 |
| Champagne      | `#F3E2AB`  | Strings, template literals                       |
| Peach Velvet   | `#FFAE8A`  | Números, booleanos                               |
| Pomegranate    | `#E84B6E`  | Erros, deleções, alertas                         |
| Ash Mauve      | `#9E83A4`  | Comentários, código desabilitado                 |

Especificação completa, rationale de design e mapeamento TextMate em [`PALETTE.md`](PALETTE.md).

## Instalação

Enquanto não está no Marketplace, o projeto já é uma extensão empacotável.

### Via arquivo `.vsix`

1. Gere o pacote: `npm run package` (usa o [`@vscode/vsce`](https://github.com/microsoft/vscode-vsce) via `npx`, gera `carmilla-1.0.0.vsix`).
2. No VS Code: paleta de comandos (`Ctrl+Shift+P`) → **Extensions: Install from VSIX...** → selecione o `.vsix` gerado.
3. Ative em **Color Theme** (`Ctrl+K Ctrl+T`) → **Carmilla**.

### Para desenvolvimento

Abra esta pasta no VS Code e pressione `F5` para abrir uma janela *Extension Development Host* com o tema já carregado.

## Arquivos

| Arquivo          | Papel                                                            |
|------------------|------------------------------------------------------------------|
| `PALETTE.md`     | Fonte da verdade — especificação portável e rationale            |
| `carmilla.json`  | Tema VS Code (UI + sintaxe + terminal ANSI + git)                |
| `package.json`   | Manifesto da extensão (`contributes.themes`)                     |
| `index.html`     | Showcase visual                                                  |

## Licença

[MIT](LICENSE). Nenhum hex é cópia direta de outro tema, então não há obrigação de atribuição a terceiros.
