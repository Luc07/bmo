# BMO - Busca de Preços para Farmácias

O BMO é uma aplicação simples desenvolvida para otimizar o processo de busca de preços nas lojas da nossa rede de farmácias. A aplicação permite que o usuário leia o código de barras de um produto e visualize seu preço, nome e código. Enquanto isso, uma propaganda em vídeo é exibida ao fundo em loop, criando uma experiência informativa e atrativa para o cliente.

## Colaboradores

Este projeto foi desenvolvido por [Yohan Lopes](https://github.com/YoYolops) e mim.

## Objetivo

Facilitar a consulta de preços diretamente no ponto de venda, enquanto reforça a comunicação visual com o cliente por meio de propagandas em vídeo.

## Tecnologias Utilizadas

- **Frontend**: [Next.js](https://nextjs.org/) (React com funcionalidades de Server-Side Rendering e Static Generation)
- **Backend**: [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/) e [TypeScript](https://www.typescriptlang.org/)
- **Containerização**: [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)


## Funcionalidades

- **Busca de Preços**: Lê o código de barras e retorna as informações do produto (nome, preço, código).
- **Exibição de Propaganda em Vídeo**: Vídeo configurado para execução em loop ao fundo da interface de consulta.
- **Modal de Informações**: Apresenta um modal sobre o produto lido. Após alguns segundos, o modal fecha automaticamente e o vídeo continua rodando.

## Como Funciona

1. **Leitura do Produto**: Ao ler o código de barras, o sistema consulta o backend para buscar as informações do produto.
2. **Modal de Informações**: As informações são exibidas em um modal, que desaparece após alguns segundos.
3. **Exibição do Vídeo**: Um vídeo de propaganda em loop é exibido ao fundo e não é interrompido durante o processo de leitura do código.
