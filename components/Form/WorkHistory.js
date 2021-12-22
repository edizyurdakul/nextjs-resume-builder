import { useSelector, useState } from "react";

import { FormControl, FormLabel, Input, Select, GridItem } from "@chakra-ui/react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";

function WorkHistory() {
  const resume = useSelector((state) => {
    return state.resume.value.workHistory;
  });

  function handleChange(event) {
    const value = event.target.value;
    // event.target.name.split("-")[0] === "from"
    //   ? setWorkHistory({
    //       ...workHistory,
    //       from: {
    //         ...workHistory.from,
    //         ...(event.target.name.split("-")[1] === "month" && { month: value }),
    //         ...(event.target.name.split("-")[1] === "year" && { year: value }),
    //       },
    //     })
    //   : event.target.name.split("-")[0] === "to"
    //   ? setWorkHistory({
    //       ...workHistory,
    //       to: {
    //         ...workHistory.to,
    //         ...(event.target.name.split("-")[1] === "month" && { month: value }),
    //         ...(event.target.name.split("-")[1] === "year" && { year: value }),
    //       },
    //     })
    //   : setWorkHistory({ ...workHistory, [event.target.name]: value });
  }

  const handleCheckbox = () => {
    // setCurrent(!current);
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
      const selectedItemsWithoutLabel = selectedItems.map(({ label, ...keepAttrs }) => keepAttrs);
      // setWorkHistory({
      //   ...workHistory,
      //   technologies: selectedItemsWithoutLabel,
      // });
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
          onChange={handleChange}
        />
      </FormControl>
      {/*  Job Title */}
      <FormControl as={GridItem} colSpan={[6, 2]}>
        <FormLabel htmlFor="job_title_company" fontSize="sm" fontWeight="md" color="gray.50">
          Job Title
        </FormLabel>
        <Input
          type="text"
          name="jobTitle"
          id="jobTitle"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
      </FormControl>
      {/* Company Website */}
      <FormControl as={GridItem} colSpan={[6, 4]}>
        <FormLabel htmlFor="company_website" fontSize="sm" fontWeight="md" color="gray.50">
          Company Website
        </FormLabel>
        <Input
          type="text"
          name="companyWebsite"
          id="companyWebsite"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
      </FormControl>
      {/* Employment Type */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel htmlFor="employment_type" fontSize="sm" fontWeight="md" color="gray.50">
          Employment Type
        </FormLabel>
        <Select
          name="employmentType"
          colorScheme="purple"
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          placeholder="Select Employment Type"
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel htmlFor="from" fontSize="sm" fontWeight="md" color="gray.50">
          From
        </FormLabel>
        <Input
          type="text"
          name="from-month"
          placeholder="Month"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
        <Input
          mt={6}
          type="text"
          name="from-year"
          placeholder="Year"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
        <Checkbox
          mt={4}
          colorScheme="purple"
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          fontSize="sm"
          style={{ fontSize: "sm" }}
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
              name="to-month"
              id="to-month"
              placeholder="Month"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              defaultValue=""
              rounded="md"
            />
            <Input
              isDisabled
              mt={6}
              type="text"
              name="to-year"
              id="to-year"
              placeholder="Year"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              defaultValue=""
              rounded="md"
            />
          </>
        ) : (
          <>
            <Input
              type="text"
              name="to-month"
              placeholder="Month"
              id="to-month"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              defaultValue=""
              rounded="md"
              onChange={handleChange}
            />
            <Input
              mt={6}
              type="text"
              name="to-year"
              id="to-year"
              placeholder="Year"
              mt={1}
              focusBorderColor="purple.400"
              shadow="sm"
              size="sm"
              w="full"
              defaultValue=""
              rounded="md"
              onChange={handleChange}
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
          labelStyleProps={{ mb: "0px", fontSize: "sm" }}
          inputStyleProps={{ size: "sm", rounded: "md", shadow: "md", _focus: { borderColor: "purple.400" } }}
          toggleButtonStyleProps={{ size: "sm" }}
          tagStyleProps={{ mb: "2px!important", _focus: { borderColor: "purple.500", borderRadius: "sm" } }}
          listStyleProps={{ backgroundColor: "gray.800", textAlign: "left" }}
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 6]}>
        <FormLabel htmlFor="description" fontSize="sm" fontWeight="md" color="gray.50">
          Description
        </FormLabel>
        <Textarea
          type="textarea"
          name="description"
          id="description"
          mt={1}
          focusBorderColor="purple.500"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
      </FormControl>
    </FormLayout>
  );
}

export default WorkHistory;
