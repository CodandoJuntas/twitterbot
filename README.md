# CodandoJuntas TwitterBot 

> O TwitterBot do [CodandoJuntas](https://github.com/CodandoJuntas/entenda) é responsável por retweetar a hashtag #CodandoJuntas com o propósito de divulgar o que as meninas que participam do projeto estão desenvolvendo. Com isso, é fácil descobrir projetos que você tem interesse em colaborar ou buscar ajuda pro seu projeto.


O código é baseado no [Airbnb JS style guide](https://github.com/airbnb/javascript).


## Como rodar localmente

Configure as variáveis de ambiente: 
```bash
ACCESS_TOKEN
ACCESS_TOKEN_SECRET
CONSUMER_KEY
CONSUMER_SECRET
```
E então, execute o comando `make start` no seu terminal.

## Como testar

### Checar sintaxe 
```bash
make lint # verifica o lint apenas uma vez
make watch # verifica o lint em toda alteração no código
```

## Como fazer o deploy

Depois que suas alterações estiverem na  `master`, rode o comando `make deploy-prod` no seu terminal.

## Como contribuir

Utilizamos o GitFlow para trabalhar nesse projeto. Caso você não conheça, vale a pena ler esse [artigo](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04).

Após uma contribuição, seu nome será adicionado na lista de colaboradores :)

## Colaboradores

[@evelynstender](https://github.com/evelynstender)