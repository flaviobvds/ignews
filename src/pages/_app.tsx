import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from '../components/Header'
import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    )
}
