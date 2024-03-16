import Head from "next/head";
import InfoHeader from "./components/core/InfoHeader";
import Portfolio from "./components/core/Portfolio";
import HireMe from "./components/core/HireMe";
import Contact from "./components/core/Contact";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vijay Munusamy - Software Engineer</title>
        <meta
          name="description"
          content="This is the portfolio web page to project my skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/vm.svg" />
      </Head>
      <InfoHeader />
      <Portfolio />
      <Flex flexWrap="wrap">
        <HireMe />
        <Contact />
      </Flex>
    </>
  );
}
