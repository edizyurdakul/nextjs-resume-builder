import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPersonal } from "../../features/resumeSlice";
import FormLayout from "./Layout";
import { FormControl, FormLabel, Input, GridItem } from "@chakra-ui/react";

function Personal() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.resume.value;
  });
  function handleChange(event) {
    const value = event.target.value;
    const oldObject = data.personal;
    const newObject = { ...oldObject, [event.target.name]: value };
    dispatch(addPersonal(newObject));
  }

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
          onChange={handleChange}
        />
      </FormControl>
      {/* Email Address */}
      <FormControl as={GridItem} colSpan={[6, 4]}>
        <FormLabel htmlFor="email_address" fontSize="sm" fontWeight="md" color="gray.50">
          Email Address
        </FormLabel>
        <Input
          type="text"
          name="email"
          id="email_address"
          autoComplete="email"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
      </FormControl>
      {/* Job Title */}
      <FormControl as={GridItem} colSpan={[6, 2]}>
        <FormLabel htmlFor="job_title" fontSize="sm" fontWeight="md" color="gray.50">
          Job Title
        </FormLabel>
        <Input
          type="text"
          name="jobTitle"
          id="job_title"
          autoComplete="organization-title"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
      </FormControl>
      {/* Contact Number */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel htmlFor="phone_number" fontSize="sm" fontWeight="md" color="gray.50">
          Contact Number
        </FormLabel>
        <Input
          type="number"
          name="contactNumber"
          id="phone_number"
          autoComplete="tel"
          mt={1}
          focusBorderColor="purple.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={handleChange}
        />
      </FormControl>
      {/* LinkedIn */}
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel htmlFor="linkedIn" fontSize="sm" fontWeight="md" color="gray.50">
          LinkedIn
        </FormLabel>
        <Input
          type="url"
          name="linkedInUrl"
          id="linkedin"
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
      {/* Github */}
      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel htmlFor="github" fontSize="sm" fontWeight="md" color="gray.50">
          GitHub
        </FormLabel>
        <Input
          type="url"
          name="gitHubUrl"
          id="github"
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
    </FormLayout>
  );
}

export default Personal;
