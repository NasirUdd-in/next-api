import Head from "next/head";
import "../css/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
