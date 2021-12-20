import { Box, SimpleGrid, GridItem, chakra, Stack } from "@chakra-ui/react";
// Layout component for form

function Layout({ children }) {
  return (
    <Box mt={[10, 0]}>
      <SimpleGrid display={{ base: "initial", md: "grid" }} columns={{ md: 3 }} spacing={{ md: 6 }}>
        <GridItem mt={[5, null, 0]} colSpan={{ md: 3 }}>
          <chakra.form method="POST" shadow="base" rounded={[null, "md"]} overflow={{ sm: "hidden" }}>
            <Stack px={4} py={5} p={[null, 6]} bg="blackAlpha.200" spacing={6}>
              <SimpleGrid columns={6} spacing={6}>
                {children}
              </SimpleGrid>
            </Stack>
          </chakra.form>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default Layout;
