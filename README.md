# Next.js - Server Side Rendering Example

## Exemplo de aplicação Next.js, um framework que utiliza React JS com suporte ao SSR

Para iniciar um projeto utilizando Next.js já configurado basta digitar este comando no seu terminal:

```
npm init next-app nome-da-aplicacao
```

Inciar um projeto do zero sem dependências adicionais requer a seguinte trilha de comandos em seu terminal:

```
npm init -y
npm install next react react-dom
```

O Next.js tem configurações que integram o live reload e webpack ao servidor de desenvolvimento. Para isso basta adicionar esta configuração
ao seu package.json:

```javascript
"scripts": {
  "dev": "next"
}
```

Para rodar a aplicação na sua máquina, depois de configurar suas bibliotecas, escolha um gerenciador de pacotes e execute seu respectivo comando:

```
yarn dev

ou

npm run dev
```