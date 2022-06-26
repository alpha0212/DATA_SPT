import Head from "next/head";

export default function Title({title}) {
    return (
        <Head>
            <title>SPT | {title}</title>
        </Head>
    )
}