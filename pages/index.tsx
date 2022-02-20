import type { NextPage } from "next";
import Head from "next/head";
import { Box, Title, Text, Center, Image } from "@mantine/core";
import Navbar from "../components/Navbar";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  hero: {},
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Center className={classes.hero} mt={32}>
          <Box>
            <Title align={"center"} order={1} mb={8}>
              <Text color={"violet"} inherit component={"span"}>
                Build{" "}
              </Text>{" "}
              and{" "}
              <Text color={"violet"} inherit component={"span"}>
                optimize{" "}
              </Text>{" "}
              your developer resume
            </Title>
            <Text align={"center"} mb={32}>
              Completely free to use, create and download Clean ATS-friendly
              resume format to ensure you get seen by recruiters
            </Text>
            <div>
              <Image src="https://kutty.netlify.app/hero.jpg" alt={"hero"} />
            </div>
          </Box>
        </Center>
      </main>
    </Box>
  );
};

export default Home;
