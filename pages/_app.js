import { DataLayer } from "../context/resumeContext";
import reducer, { initialState } from "../context/reducer";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
function MyApp({ Component, pageProps }) {
  return (
    <DataLayer reducer={reducer} initialState={initialState}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </DataLayer>
  );
}
export default MyApp;
