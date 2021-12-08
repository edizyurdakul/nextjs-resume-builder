import { FormControl, FormLabel, Input, Textarea, Box, SimpleGrid, GridItem, Stack, chakra } from "@chakra-ui/react";
import { useDataLayerValue } from "../../context/resumeContext";
import { actionTypes } from "../../context/reducer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

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
  const [{ userPersonalInfo, userWorkHistory }, dispatch] = useDataLayerValue();
  console.log(userPersonalInfo);
  const updateContext = (obj) => {
    dispatch({
      type: actionTypes.setUserPersonalInfo,
      userPersonalInfo: obj,
    });
  };

  /* handlers i think this could be optimized better in the future*/
  const handleName = (event) => {
    let userPersonalObject = userPersonalInfo;
    userPersonalObject.name = event.target.value;
    updateContext(userPersonalObject);
    console.log(userPersonalInfo);
  };

  const handleEmail = (event) => {
    let userPersonalObject = userPersonalInfo;
    userPersonalObject.email = event.target.value;
    updateContext(userPersonalInfo);
    console.log(userPersonalInfo);
  };
  const handleJobTitle = (event) => {
    let userPersonalObject = userPersonalInfo;
    userPersonalObject.jobTitle = event.target.value;
    updateContext(userPersonalInfo);
    console.log(userPersonalInfo);
  };

  const handleContact = (event) => {
    let userPersonalObject = userPersonalInfo;
    userPersonalObject.contactNumber = event.target.value;
    updateContext(userPersonalInfo);
    console.log(userPersonalInfo);
  };

  const handleLinkedIn = (event) => {
    let userPersonalObject = userPersonalInfo;
    userPersonalObject.linkedInUrl = event.target.value;
    updateContext(userPersonalInfo);
    console.log(userPersonalInfo);
  };

  const handleGitHub = (event) => {
    let userPersonalObject = userPersonalInfo;
    userPersonalObject.gitHubUrl = event.target.value;
    updateContext(userPersonalInfo);
    console.log(userPersonalInfo);
  };

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
          onChange={handleName}
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
          onChange={handleEmail}
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
          onChange={handleJobTitle}
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
          onChange={handleContact}
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
          onChange={handleLinkedIn}
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
          onChange={handleGitHub}
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
