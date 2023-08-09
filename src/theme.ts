import { extendTheme, ThemeConfig } from "@chakra-ui/react";
//  extendTheme is function
// ThemeConfig is interface

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

export default theme;
