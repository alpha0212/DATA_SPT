import Head from "next/head";

export default function Title({ title }) {
  return (
    <Head>
      <title>SPT | {title}</title>
      <meta name="description" content="자기주도학습" />
      <meta name="study" content="스카이 과외공부법" />
      <meta name="site_name" content="스카이 플래너" />
      <meta name="recommended" content="skyplanner" />
      <meta name="shorts" content="스플" />
    </Head>
  );
}
