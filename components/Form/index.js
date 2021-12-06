import { FormControl, FormLabel, Input, Textarea, Box, SimpleGrid, GridItem, Stack, chakra } from "@chakra-ui/react";

const FormLayout = ({ children }) => {
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
};

export const Personal = () => {
  return (
    <FormLayout>
      {/* Name */}
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="name" fontSize="sm" fontWeight="md" color="gray.50">
          Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          id="name"
          autoComplete="given-name"
          mt={1}
          focusBorderColor="purple.500"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      {/* Email Address */}
      <FormControl as={GridItem} colSpan={[6, 4]}>
        <FormLabel htmlFor="email_address" fontSize="sm" fontWeight="md" color="gray.50">
          Email Address
        </FormLabel>
        <Input
          type="text"
          name="email_address"
          id="email_address"
          autoComplete="email"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      {/* Job Title */}
      <FormControl as={GridItem} colSpan={[6, 2]}>
        <FormLabel htmlFor="job_title" fontSize="sm" fontWeight="md" color="gray.50">
          Job Title
        </FormLabel>
        <Input
          type="text"
          name="job_title"
          id="job_title"
          autoComplete="organization-title"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      {/* Contact Number */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel htmlFor="phone_number" fontSize="sm" fontWeight="md" color="gray.50">
          Contact Number
        </FormLabel>
        <Input
          type="number"
          name="phone_number"
          id="phone_number"
          autoComplete="tel"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      {/* LinkedIn */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel htmlFor="linkedIn" fontSize="sm" fontWeight="md" color="gray.50">
          LinkedIn
        </FormLabel>
        <Input
          type="url"
          name="linkedin"
          id="linkedin"
          autoComplete="url"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      {/* Github */}
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel htmlFor="github" fontSize="sm" fontWeight="md" color="gray.50">
          GitHub
        </FormLabel>
        <Input
          type="url"
          name="github"
          id="github"
          autoComplete="url"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </FormLayout>
  );
};

export const Summary = () => {
  return (
    <FormLayout>
      <FormControl as={GridItem} colSpan={[6, 6]}>
        <FormLabel htmlFor="summary" fontSize="sm" fontWeight="md" color="gray.50">
          Summary
        </FormLabel>
        <Textarea
          type="textarea"
          name="summary"
          id="summary"
          mt={1}
          focusBorderColor="purple.500"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </FormLayout>
  );
};
