<h1 align="center">
    <img alt="Find a friend" src=".github/cover.png" />
</h1>

<br>

## O desafio

Este projeto foi desenvolvido como resposta ao desafio Green Code Challenge proposto pela Rocketseat.

Neste desafio eu exerci o papel de um Desenvolvedor Front-end Pleno, trabalhando em tempo integral (só que não), de forma remota numa Startup com até 50 funcionários.

Os requisitos e qualificações eram:

- HTML;
- CSS;
- Saber trabalhar com responsividade;
- Saber trabalhar com uma boa semântica;
- JavaScript e Typescript;
- Consumo de API.
- React.js;
- Saber fazer uma boa comunicação com o backend;
- Clean Code.

## A Startup

A FindAFriend acredita que todo bichinho merece uma vida confortável e segura. Por isso, cria soluções que ajudam ONGs e entidades protetoras a conectar pessoas adotantes e animais resgatados. Atualmente, a empresa recebeu um grande investimento de uma indústria de medicina animal e agora precisa evoluir seu único produto ativo - o FindAFriend, para atender às expectativas do investidor.

## O Produto FindAFriend

O FindAFriend é um produto desenvolvido pela Startup FindAFriend onde você pode encontrar o animal de estimação ideal para seu estilo de vida!

No FindAFriend, as ONGs cadastram os bichinhos disponíveis para adoção informando características como: porte, nível de energia, nível de independência, sociabilidade e gênero.

Ao entrar na aplicação, a pessoa adotante pode filtrar os bichinhos de acordo com suas preferências e lifestyle. Depois é só entrar em contato com a ONG para agendar uma visita e conhecer pessoalmente seu match perfeito!

## Como rodar o projeto:

### Backend

Para rodar o projeto você irá precisar da api da equipe de backend.

Clone o repositório

```bash
git clone git@github.com/rocketseat-education/gcc-find-a-friend-api
```

Entre no diretório do projeto

```bash
cd gcc-find-a-friend-api
```

Instale as dependências

```bash
npm i --silent
```

Rode as migrations e seed inicial da base de dados

```bash
npx prisma migrate dev
```

Suba a api

```bash
npm run dev
```

### Frontend

Clone o repositório

```bash
git clone git@github.com/rafaelreisramos/gcc-find-a-friend-web
```

Entre no diretório do projeto

```bash
cd gcc-find-a-friend-web
```

Instale as dependências

```bash
npm i --silent
```

Copie o arquivo .env.example para .env

```bash
cp .env.example .env
```

Rode o projeto.

```bash
npm run dev
```
