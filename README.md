# WhatsApp News

Projeto TypeScript com live reload para desenvolvimento.

## Instalação

```bash
npm install
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com live reload
- `npm run build`: Compila o TypeScript para JavaScript
- `npm start`: Inicia o servidor em modo de produção
- `npm run watch`: Observa alterações nos arquivos TypeScript e recompila automaticamente

## Estrutura do Projeto

```
.
├── src/           # Código fonte TypeScript
├── dist/          # Código compilado JavaScript
├── package.json   # Dependências e scripts
├── tsconfig.json  # Configuração do TypeScript
└── nodemon.json   # Configuração do Nodemon
```

## Desenvolvimento

Para iniciar o desenvolvimento, execute:

```bash
npm run dev
```

O servidor será iniciado na porta 3000 (ou na porta especificada pela variável de ambiente PORT). 