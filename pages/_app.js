import { DataLayer } from "../context/resumeContext";
import reducer, { initialState } from "../context/reducer";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <DataLayer reducer={reducer} initialState={initialState}>
      {router.pathname == "/resumetemplate" ? (
        <Component {...pageProps} />
      ) : (
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </DataLayer>
  );
}
export default MyApp;
