# backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Criar o container com MySQL:
$ docker-compose up -d

# Criar as tabelas/estruturas na dB:
$ node ace migration:run

# Instalar dependências:
$ yarn install

# Rodar o servidor local que muda a cada alteração:
$ yarn dev

# Buildar pra produção e executar o servidor:
$ yarn build
$ yarn start
```
