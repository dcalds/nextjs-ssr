<p align="center">
    <img src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" alt="nextjs" title="nextjs" height="80"/>
</p>

<p align="center">

# ****Next.js Blog com Server Side Rendering****

### Exemplo de aplicação Next.js, um framework que utiliza React JS com suporte ao SSR

</p>


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

> Este projeto está integrado ao Vercel, que automaticamente configura o deploy contínuo. [Acesse aqui](https://danilocaldas.now.sh/)