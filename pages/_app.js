import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  components: {
    Steps,
  },
});
