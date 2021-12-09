import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {
  Text,
  Box,
  chakra,
  Flex,
  Center,
  Heading,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
  Button,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Personal, Summary, WorkHistory } from "../components/Form";
import { ResumeTemplate } from "../components/Resume";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useDataLayerValue } from "../context/resumeContext";

const steps = [
  { label: "Personal Info", formComponent: <Personal /> },
  { label: "Summary", formComponent: <Summary /> },
  { label: "Work History", formComponent: <WorkHistory /> },
  { label: "Skills" },
  { label: "Education" },
  { label: "Personal Projects" },
  { label: "Certifications" },
];

export default function resume() {
  const [{ userPersonalInfo, userSummary }, dispatch] = useDataLayerValue();

  const toast = useToast();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Layout>
      <Box as="main" py={24}>
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
          size="xs"
          cursor="pointer"
          _hover={{ bgColor: "purple.500" }}
          href="/"
          mb={4}
        >
          Go Back
        </Button>
        <chakra.h1
          mb={12}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color="gray.100"
        >
          Start building your new{" "}
          <Text display={{ base: "block", lg: "inline" }} w="full" color="purple.700" fontWeight="extrabold">
            resume
          </Text>
        </chakra.h1>
        <Steps onClickStep={(step) => setStep(step)} orientation="vertical" activeStep={activeStep} colorScheme="purple">
          {steps.map(({ label, formComponent }) => (
            <Step label={label} key={label}>
              {formComponent}
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Center p={4} flexDir="column">
            <Heading fontSize="xl">Woohoo! All steps completed!</Heading>
            <Center>
              <Button
                mt={6}
                mr={6}
                size="sm"
                variant="solid"
                colorScheme="purple"
                bgColor="purple.700"
                color="white"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                mb={{ base: 2, sm: 0 }}
                size="md"
                cursor="pointer"
                _hover={{ bgColor: "purple.500" }}
              >
                <PDFDownloadLink
                  document={<ResumeTemplate userPersonalInfo={userPersonalInfo} userSummary={userSummary} />}
                  fileName="resume.pdf"
                >
                  {({ blob, url, loading, error }) => (loading ? "Loading document..." : "Download PDF")}
                </PDFDownloadLink>
              </Button>
              <Button
                mt={6}
                size="sm"
                variant="solid"
                colorScheme="red"
                bgColor="red.700"
                color="white"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "auto" }}
                mb={{ base: 2, sm: 0 }}
                size="md"
                cursor="pointer"
                _hover={{ bgColor: "red.500" }}
                onClick={() => setIsOpen(true)}
              >
                Reset
              </Button>

              <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      Reset Details{" "}
                    </AlertDialogHeader>

                    <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => {
                          reset();
                          onClose();
                        }}
                        ml={3}
                      >
                        Reset
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </Center>
          </Center>
        ) : (
          <Flex w="100%" justify="flex-end">
            <Button mr={4} size="sm" variant="ghost" onClick={prevStep} isDisabled={activeStep === 0}>
              Prev
            </Button>
            <Button
              size="sm"
              onClick={() => {
                nextStep();
                if (activeStep === steps.length - 1) {
                  toast({
                    title: "Resume created.",
                    description: "Your resume was sucessfully, you can download now!",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Flex>
        )}
      </Box>
    </Layout>
  );
}
