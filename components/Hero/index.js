import React from "react";
import { chakra, Box, useColorModeValue, Button, Stack, Image, Text, Icon } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box px={{ base: "2", sm: "8", md: "12" }} py={24} mx="auto">
      <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" textAlign={{ base: "left", md: "center" }}>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          Resumes Made{" "}
          <Text display={{ base: "block", lg: "inline" }} w="full" color="purple.700" fontWeight="extrabold">
            Easy
          </Text>
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Create resumes online with a few clicks and send download directly. Free, and no registration required place.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            variant="solid"
            colorScheme="purple"
            bgColor="purple.700"
            color="white"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            _hover={{ bgColor: "purple.500" }}
            href="/resume"
          >
            Create Your Resume Now
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
        </Stack>
      </Box>
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" mt={20} textAlign="center">
        <Image w="full" rounded="lg" shadow="2xl" src="/hero-image.png" alt="Hellonext feedback boards software screenshot" />
      </Box>
    </Box>
  );
};

export default Hero;
