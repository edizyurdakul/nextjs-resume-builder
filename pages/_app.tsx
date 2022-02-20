import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {
            // override dark colors here to change them for all components
            dark: [
              "#fafafa",
              "#f5f5f5",
              "#e5e5e5",
              "#d4d4d4",
              "#a3a3a3",
              "#737373",
              "#525252",
              "#171717",
              "#262626",
              "#171717",
            ],
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
