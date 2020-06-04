import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function SecondPost() {
    return (
        <Layout>
            <Head>
                <title>Segundo Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>

                <h1> Segundo Post </h1>

                <h2> Utilizando HOCs (High Order Components) </h2>

                <Link href="/">
                    <a> Voltar </a>
                </Link>
            </div>

        </Layout>
    )
}