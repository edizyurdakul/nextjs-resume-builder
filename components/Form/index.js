import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Select,
  Box,
  SimpleGrid,
  GridItem,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { useDataLayerValue } from "../../context/resumeContext";
import { actionTypes } from "../../context/reducer";
import React, { useState } from "react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { CheckCircleIcon } from "@chakra-ui/icons";

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
  const [{ userPersonalInfo }, dispatch] = useDataLayerValue();
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

export const WorkHistory = () => {
  const [{ userWorkHistory }, dispatch] = useDataLayerValue();
  const updateContext = (obj) => {
    dispatch({
      type: actionTypes.setUserWorkHistory,
      userWorkHistory: obj,
    });
  };
  let userWorkHistoryObject = {
    company: "",
    jobTitle: "",
    companyWebsite: "",
    employmentType: "",
    country: "",
    city: "",
    technologies: [],
    from: { month: "", year: "" },
    to: { month: "", year: "" },
    currentWork: false,
    description: "",
  };

  const [current, setCurrent] = useState(false);
  /* handlers i think this could be optimized better in the future*/
  const handleCompany = (event) => {
    userWorkHistoryObject.company = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };

  const handleJobTitle = (event) => {
    userWorkHistoryObject.jobTitle = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistory);
  };

  const handleCompanyWebsite = (event) => {
    userWorkHistoryObject.companyWebsite = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };
  const handleEmploymentType = (event) => {
    userWorkHistoryObject.employmentType = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };

  const handleCountry = (event) => {
    let userWorkHistoryObject = userWorkHistory;
    userWorkHistoryObject.country = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };

  const handleCity = (event) => {
    userWorkHistoryObject.city = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };
  const handleFromMonth = (event) => {
    userWorkHistoryObject.city = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };
  const handleFromYear = (event) => {
    userWorkHistoryObject.city = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };
  const handleToMonth = (event) => {
    userWorkHistoryObject.city = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };
  const handleToYear = (event) => {
    userWorkHistoryObject.city = event.target.value;
    updateContext(userWorkHistoryObject);
    console.log(userWorkHistoryObject);
  };
  const handleCheckbox = (event) => {
    setCurrent(!current);
  };

  const handleTech = () => {
    userWorkHistoryObject.technologies = selectedItems;
    updateContext(userWorkHistoryObject);
  };

  // bad implementation on hard coded values
  const technologies = [
    { value: "next.js", label: "Next.JS" },
    { value: "gatsby.js", label: "Gatsby.JS" },
    { value: "prisma", label: "Prisma" },
    { value: "react", label: "React" },
    { value: "vue.js", label: "Vue.JS" },
    { value: "remix", label: "Remix" },
  ];
  const [pickerItems, setPickerItems] = useState(technologies);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
      handleTech();
    }
  };
  return (
    <FormLayout>
      {/* Company */}
      <FormControl as={GridItem} colSpan={[6, 4]}>
        <FormLabel htmlFor="Company" fontSize="sm" fontWeight="md" color="gray.50">
          Company
        </FormLabel>
        <Input
          type="text"
          name="company"
          id="company"
          mt={1}
          focusBorderColor="purple.500"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleCompany}
        />
      </FormControl>
      {/*  Job Title */}
      <FormControl as={GridItem} colSpan={[6, 2]}>
        <FormLabel htmlFor="job_title_company" fontSize="sm" fontWeight="md" color="gray.50">
          Job Title
        </FormLabel>
        <Input
          type="text"
          name="job_title_company"
          id="job_title_company"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleJobTitle}
        />
      </FormControl>
      {/* Company Website */}
      <FormControl as={GridItem} colSpan={[6, 4]}>
        <FormLabel htmlFor="company_website" fontSize="sm" fontWeight="md" color="gray.50">
          Company Website
        </FormLabel>
        <Input
          type="text"
          name="company_website"
          id="company_website"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleCompanyWebsite}
        />
      </FormControl>
      {/* Employment Type */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel htmlFor="employment_type" fontSize="sm" fontWeight="md" color="gray.50">
          Employment Type
        </FormLabel>
        <Select
          colorScheme="purple"
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Select Employment Type"
          onChange={handleEmploymentType}
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Self-employed">Self-employed</option>
          <option value="Contract">Contract</option>
          <option value="Freelance">Freelance</option>
          <option value="Internship">Internship</option>
        </Select>
      </FormControl>
      {/* Country */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel htmlFor="country" fontSize="sm" fontWeight="md" color="gray.50">
          Country
        </FormLabel>
        <Input
          type="text"
          name="country"
          id="country"
          autoComplete="url"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleCountry}
        />
      </FormControl>
      {/* City */}
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel htmlFor="city" fontSize="sm" fontWeight="md" color="gray.50">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="url"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleCity}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="from" fontSize="sm" fontWeight="md" color="gray.50">
          From
        </FormLabel>
        <Input
          type="text"
          name="frommonth"
          id="frommonth"
          placeholder="Month"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleFromMonth}
        />
        <Input
          mt={6}
          type="text"
          name="fromyear"
          id="fromyear"
          placeholder="Year"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleFromYear}
        />
        <Checkbox
          mt={4}
          colorScheme="purple"
          focusBorderColor="purple.400"
          shadow="sm"
          size="md"
          w="full"
          rounded="md"
          onChange={handleCheckbox}
        >
          currently work here
        </Checkbox>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="to" fontSize="sm" fontWeight="md" color="gray.50">
          To
        </FormLabel>
        {current ? (
          <>
            <Input
              isDisabled
              type="text"
              name="tomonth"
              id="tomonth"
              placeholder="Month"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleToMonth}
            />
            <Input
              isDisabled
              mt={6}
              type="text"
              name="toyear"
              id="toyear"
              placeholder="Year"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleToYear}
            />
          </>
        ) : (
          <>
            <Input
              type="text"
              name="tomonth"
              id="tomonth"
              placeholder="Month"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleToMonth}
            />
            <Input
              mt={6}
              type="text"
              name="toyear"
              id="toyear"
              placeholder="Year"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              onChange={handleToYear}
            />
          </>
        )}
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6]}>
        <CUIAutoComplete
          label="Technologies"
          placeholder="Type a technology"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) => handleSelectedItemsChange(changes.selectedItems)}
          highlightItemBg="purple.500"
          listStyleProps={{ backgroundColor: "gray.800", textAlign: "left" }}
        />
      </FormControl>
    </FormLayout>
  );
};
