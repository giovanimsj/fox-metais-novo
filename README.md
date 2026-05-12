# Fox Metais

Site institucional da Fox Metais, desenvolvido como uma landing page responsiva para apresentar a empresa, os materiais comprados e os canais de contato.

## Visão geral

O projeto entrega uma experiência de página única com foco comercial, organizada nas seções:

- `Hero`: apresentação principal e chamadas para ação.
- `Materiais`: galeria com categorias de materiais recicláveis.
- `Sobre`: posicionamento da empresa e diferenciais.
- `Contato`: informações de contato, formulário e mapa incorporado.

Além do frontend em React, existe um servidor Express enxuto usado para servir os arquivos estáticos em produção.

## Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Express
- Wouter
- Radix UI / componentes utilitários em `client/src/components/ui`
- Lucide React

## Estrutura do projeto

```text
.
|-- client/
|   |-- index.html
|   |-- public/
|   `-- src/
|       |-- components/
|       |-- contexts/
|       |-- hooks/
|       |-- pages/
|       |-- App.tsx
|       |-- const.ts
|       |-- index.css
|       `-- main.tsx
|-- server/
|   `-- index.ts
|-- shared/
|   `-- const.ts
|-- patches/
|   `-- wouter@3.7.1.patch
|-- package.json
`-- vite.config.ts
```

## Como rodar localmente

### Pré-requisitos

- Node.js 22 ou compatível com o ambiente do projeto
- `pnpm`

### Instalação

```bash
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

O Vite sobe o frontend em modo de desenvolvimento com `--host`, usando a porta `3000` por padrão e procurando a próxima porta livre se ela já estiver ocupada.

### Build de produção

```bash
pnpm build
```

Esse comando:

1. gera o frontend em `dist/public`
2. compila o servidor Express para `dist/index.js`

### Executar em produção

```bash
pnpm start
```

O servidor publica os arquivos estáticos gerados e responde rotas do frontend com `index.html`, permitindo navegação client-side.

## Scripts disponíveis

- `pnpm dev`: inicia o Vite em modo de desenvolvimento
- `pnpm build`: gera o build do frontend e empacota o servidor
- `pnpm start`: sobe o servidor Express em produção
- `pnpm preview`: pré-visualiza o build do Vite
- `pnpm check`: valida o TypeScript sem emitir arquivos
- `pnpm format`: formata o projeto com Prettier

## Variáveis de ambiente

O projeto referencia algumas variáveis opcionais/integradas à infraestrutura original. Se elas não forem usadas no seu cenário, parte dessas integrações pode ser ignorada.

### Frontend

- `VITE_ANALYTICS_ENDPOINT`: endpoint do script de analytics injetado em `client/index.html`
- `VITE_ANALYTICS_WEBSITE_ID`: identificador do site para analytics
- `VITE_FRONTEND_FORGE_API_KEY`: chave usada pelo componente de mapa baseado em proxy
- `VITE_FRONTEND_FORGE_API_URL`: base URL do proxy de mapas
- `VITE_OAUTH_PORTAL_URL`: URL do portal OAuth usada em `client/src/const.ts`
- `VITE_APP_ID`: identificador da aplicação usado na URL de login

### Ambiente do servidor / Vite plugin

- `BUILT_IN_FORGE_API_URL`: base URL usada pelo proxy `/manus-storage`
- `BUILT_IN_FORGE_API_KEY`: chave usada pelo proxy `/manus-storage`
- `PORT`: porta do servidor Express em produção
- `NODE_ENV`: controla comportamento de desenvolvimento/produção

## Observações de implementação

- O projeto é uma SPA com rota principal `/` e fallback para página `404`.
- A navegação do cabeçalho faz scroll suave entre seções da mesma página.
- O formulário de contato atualmente é demonstrativo: ele apenas registra os dados no console e exibe uma confirmação local, sem integração com backend.
- As imagens principais estão apontando para URLs externas.
- O `vite.config.ts` contém plugins auxiliares para debug e proxy de storage usados no ambiente original do projeto.

## Pontos úteis para manutenção

- Conteúdo institucional e materiais estão definidos diretamente nos componentes.
- O visual global, paleta e utilitários compartilhados estão centralizados em `client/src/index.css`.
- O servidor em `server/index.ts` não expõe API de negócio; ele só serve o build estático.
- Existe um patch aplicado ao `wouter` em `patches/wouter@3.7.1.patch`.

## Status da validação

A estrutura e os scripts foram documentados a partir do código-fonte atual do repositório.

Não foi possível executar a validação de TypeScript neste ambiente porque as dependências ainda não estão instaladas e a chamada padrão de `pnpm` no PowerShell local está bloqueada pela política de execução de scripts.
