import Layout from "@containers/Layout";
import "@styles/Globals.sass";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
