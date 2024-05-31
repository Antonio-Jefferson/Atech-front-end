# Atech 💼

<img src="https://github.com/Antonio-Jefferson/Atech-front-end/blob/main/src/assets/images/atech-logo.png" alt="logo">

Este é um projeto incrível que foi desenvolvido como parte de uma avaliação técnica para o cargo de Desenvolvedor Frontend.

## Sumário


- [Atech 💼](#atech-)
  - [Sumário](#sumário)
  - [Design no Figma](#design-no-figma)
  - [Deploy do Projeto](#deploy-do-projeto)
  - [Tecnologias Usadas](#tecnologias-usadas)
  - [Quer testar o projeto então vem comigo](#quer-testar-o-projeto-então-vem-comigo)
  - [1. Requisitos](#1-requisitos)
  - [2. Instalação](#2-instalação)
  - [3. Executando o Projeto](#3-executando-o-projeto)
  - [Testando o Projeto](#testando-o-projeto)
  - [Estrutura de Diretórios](#estrutura-de-diretórios)
  - [Imagens do Projeto](#imagens-do-projeto)
  - [Licença](#licença)

## Design no Figma

- [Figma](https://www.figma.com/design/nyq5l1v7w0gPDXaCH76DsY/Untitled?node-id=0-1&t=yGXa8f6kNAUTp53k-1)
  
## Deploy do Projeto

  Deploy: [ atech-teste](https://atech-front-end.vercel.app/)

## Tecnologias Usadas

- **Angular**: Framework para construção de aplicações web.
- **Angular Material**: Biblioteca de componentes de UI baseada no Material Design.
- **RxJS**: Biblioteca para programação reativa.
- **ngx-mask**: Biblioteca para criação de máscaras de entrada de dados.
- **Toastify**: Biblioteca para notificações toast.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática.
- **Jasmine**: Framework de testes para JavaScript.
- **Karma**: Executor de testes para JavaScript.
- **Zone.js**: Biblioteca que facilita a detecção de mudanças no Angular.

## Quer testar o projeto então vem comigo

## 1. Requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de começar.

## 2. Instalação

1. Clone este repositório para o seu computador:

 ```bash
git clone git@github.com:Antonio-Jefferson/Atech-front-end.git
```

1. Navegue até o diretório do projeto:

  ```bash
  cd Atech-front-end
  ```

1. Instale as dependências do projeto:

```bash
npm install
```

## 3. Executando o Projeto

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento local. Execute o seguinte comando:

```bash
  npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá automaticamente o projeto em seu navegador padrão. Se não abrir automaticamente, você pode acessá-lo manualmente em `http://localhost:4200`.

## Testando o Projeto

Para executar os testes unitários, você pode usar o seguinte comando:

```bash
  npm test
```

Isso executará os testes e exibirá os resultados no Karma.

## Estrutura de Diretórios

 ```bash
  📁 /src
  📁 /app
    📁 /components
      📁 /delete-mode
      📁 /edit-mode
      📁 /footer
      📁 /header
      📁 /list
      📁 /title
    📁 /layout
      📁 /main-layout
    📁 /model
      📄 person.model.ts
    📁 /pages
      📁 /home
      📁 /register
      📁 /user-details
    📁 /services
      📄 localstorage-api.service.spec.ts
      📄 localstorage-api.service.ts
      📄 notification.service.spec.ts
      📄 notification.service.ts
      📄 user-event.service.spec.ts
      📄 user-event.service.ts
    📄 app.component.html
    📄 app.component.sass
    📄 app.component.spec.ts
    📄 app.component.ts
    📄 app.config.ts
    📄 app.routes.ts
  📁 /assets
    📁 /images

 ```

## Imagens do Projeto

  <img src="https://github.com/Antonio-Jefferson/Atech-front-end/blob/main/src/assets/images/home.png" alt="Home Page" width="100%" />
  <img src="https://github.com/Antonio-Jefferson/Atech-front-end/blob/main/src/assets/images/modal-delete.png" alt="Modal Delete" width="100%" />

  <img src="https://github.com/Antonio-Jefferson/Atech-front-end/blob/main/src/assets/images/register.png" alt="Register Page" width="100%" />

  <img src="https://github.com/Antonio-Jefferson/Atech-front-end/blob/main/src/assets/images/user-details.png" alt="User Details" width="100%" />
  <img src="https://github.com/Antonio-Jefferson/Atech-front-end/blob/main/src/assets/images/modal-edit.png" alt="Modal Edit" width="100%" />

  <img src="https://github.com/Antonio-Jefferson/Atech-front-end/blob/main/src/assets/images/footer.png" alt="Footer" width="100%" />

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
