import React from "react";
import { chakra, Box, Text, Flex, useColorModeValue, Icon, Stack } from "@chakra-ui/react";

export default function Features() {
  const Feature = (props) => {
    return (
      <Flex>
        <Box ml={{ base: 0, sm: 4, md: 4 }}>
          <chakra.dt fontSize="lg" fontWeight="medium" lineHeight="6" color={useColorModeValue("gray.900")}>
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex w="auto" justifyContent="center" alignItems="center">
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900")}
            >
              A{" "}
              <Text display={{ base: "block", lg: "inline" }} w="full" color="purple.700" fontWeight="extrabold">
                Better
              </Text>{" "}
              way to create resumes
            </chakra.h2>
            <chakra.p mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }} color={useColorModeValue("gray.500", "gray.400")}>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus
              quisquam.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="No Registration">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature title="Free To Use">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature title="ATS Scan Friendly">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature title="Ready For Download">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
