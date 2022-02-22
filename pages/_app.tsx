import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
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
              "#262626",
              "#525252",
              "#171717",
              "#262626",
              "#171717",
            ],
          },
        }}
        styles={{
          Textarea: (theme) => ({
            input: {
              "&:focus, &:focus-within": {
                borderColor: `${theme.colors.violet[5]}!important`,
              },
            },
          }),
          TextInput: (theme) => ({
            input: {
              "&:focus, &:focus-within": {
                borderColor: `${theme.colors.violet[5]}!important`,
              },
            },
          }),
          Select: (theme) => ({
            input: {
              "&:focus, &:focus-within": {
                borderColor: `${theme.colors.violet[5]}!important`,
              },
            },
          }),
          MultiSelect: (theme) => ({
            input: {
              "&:focus, &:focus-within": {
                borderColor: `${theme.colors.violet[5]}!important`,
              },
            },
          }),
          DatePicker: (theme) => ({
            input: {
              "&:focus, &:focus-within": {
                borderColor: `${theme.colors.violet[5]}!important`,
              },
            },
          }),
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
