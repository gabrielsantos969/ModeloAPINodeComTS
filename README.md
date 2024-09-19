# Modelo API Node Com TypeScript

## Inicialização do projeto

Aqui é adicionado as dependências iniciais para esse projeto.
```bash
npm i express cors helmet morgan dotenv express-async-errors
```


Nessa segunda parte é adicionada as dependências para o os tipos que vamos utilizar.

```bash
npm i -D @types/express @types/cors @types/helmet @types/morgan @types/dotenv ts-node
```

Instalação do TypeScript no nosso projeto

```bash
npm install -D typescript 
```

## Configuração do __tsconfig.json__

Para fazer essa configuração rode o comando abaixo para criar o tsconfig.json

```bash
npx tsc --init
```

Após isso pode utilizar essa nossa configuração:

```json
{
    "compilerOptions": {
      "target": "es2016",
      "module": "commonjs",
      "rootDir": "./src/",
      "moduleResolution": "node",
      "baseUrl": ".",
      "outDir": "./dist/",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true
    },
    "ts-node": { "transpileOnly": true }
  }
```

## Configuração do __.env__

Crie um arquivo na raiz do projeto com o nome __.env__, após isso pode utilizar essa configuração para adicionar a PORT que vamos rodar e o HOST da aplicação.

```
PORT=3001
HOST=
```

Nesse caso o host está vazio mas vêm como padrão '__http://localhost__' e a porta caso esteja vazia, vêm com o padrão __3000__.

## Arquitetura do Projeto, Descrição das Pastas e Arquivos

```
src/
├── config/
│   └── ... (arquivos de configuração)
├── controllers/
│   └── ... (controladores da aplicação)
├── models/
│   └── ... (modelos de dados)
├── interfaces/
│   └── ... (interfaces TypeScript)
├── routes/
│   └── ... (definições de rotas)
├── utils/
│   └── ... (funções utilitárias)
├── app.ts 
└── server.ts 
```

* __src/__: Diretório raiz do código-fonte.

  - __config/__: Contém arquivos de configuração da aplicação.
  - __controllers/__: Inclui os controladores que gerenciam a lógica de negócios.
  - __models/__: Contém os modelos de dados utilizados pela aplicação.
  - __interfaces/__: Armazena as interfaces TypeScript para tipagem estática.
  - __routes/__: Define as rotas da aplicação.
  - __utils/__: Contém funções utilitárias e helpers.
  - __app.ts__: Arquivo principal que configura a aplicação.
  - __server.ts__: Arquivo que inicializa e configura o servidor.


## Iniciando o projeto para Desenvolvimento

No __package.json__ na parte de scripts possui esses listados abaixo:

```json
"scripts": {
    "dev": "npx nodemon src/server.ts 'src/' -e ts",
    "compile": "npx tsc",
    "start": "node ./dist/server.js"
  }
```
---

Para inicializar o projeto em modo de desenvolvedor, instale o __nodemon__.

```bash
npm i -D nodemon
```

Rodando o comando abaixo é possível iniciar o projeto em modo de desenvolvimento.

```bash
npm run dev
```

## Iniciando o projeto para Produção

Para inicializar o projeto em produção é necessário compilar o projeto primeiro com:

```bash
npm run compile
```

Após isso é só iniciar o projeto com:

```bash
npm run start
```

---

Então é isso pessoal, espero que tenham gostado!! 

<h1>Onde me encontrar</h1>

[![Perfil DIO](https://img.shields.io/badge/-Meu%20Perfil%20na%20DIO-30A3DC?style=flap)](https://www.dio.me/users/gabrielsantos98898)
![Linkedin](https://img.shields.io/badge/-Gabriel_Santos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-santos-b53632196/)