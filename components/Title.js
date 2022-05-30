import Head from "next/head";

export default function Title({title}) {
    return (
        <Head>
            <title>STP | {title}</title>
        </Head>
    )
}