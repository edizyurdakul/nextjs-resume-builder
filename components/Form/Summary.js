import { useEffect, useState } from "react";

import FormLayout from "./Layout";
import { FormControl, FormLabel, Textarea, GridItem } from "@chakra-ui/react";

function Summary() {
  function handleChange(event) {
    const value = event.target.value;
    setSummary(value);
  }

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
          onChange={handleChange}
        />
      </FormControl>
    </FormLayout>
  );
}

export default Summary;
