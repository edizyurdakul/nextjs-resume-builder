import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { store } from "../app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      {/* {router.pathname === "/resumetemplate" ? (
        <Component {...pageProps} />
      ) : (
        
      )} */}
    </Provider>
  );
}
export default MyApp;
