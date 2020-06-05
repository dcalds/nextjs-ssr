import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function ThirdPost() {
    return (
        <>
            <Head>
                <title>Terceiro Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>

                <div>

                    <h1> Terceiro Post </h1>

                    <h2> Servidor Customizado </h2>

                    <Link href="/">
                        <a> Voltar </a>
                    </Link>
                </div>

            </Layout>
        </>
    )
}