import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="Aprendendo sobre search engine optimization utilizando a ferramenta Next.js" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                    <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css" media="all" rel="stylesheet"
                        id="font-awesome-5-kit-css" />
                    <link href="https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css" media="all"
                        rel="stylesheet" id="font-awesome-5-kit-css" />
                    <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" rel="stylesheet"
                        id="font-awesome-5-kit-css" />
                    <script src="https://kit.fontawesome.com/63b4b25a67.js" crossorigin="anonymous"></script>
                    <link href="/static/css/main.c86fa80c.chunk.css" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript>
                        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
                    </NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument