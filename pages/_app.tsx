import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@chakra-ui/next-js";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Box, Flex } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <Flex direction="column">
        <Header />
        <Box height="max-content">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Flex>
    </CacheProvider>
  );
}
