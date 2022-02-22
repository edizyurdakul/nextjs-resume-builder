import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Stepper,
  Button,
  Group,
  TextInput,
  Textarea,
  Grid,
  Select,
  Checkbox,
  MultiSelect,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

const CreateResume: NextPage = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <Box>
      <Link href="/" passHref>
        <Button size={"xs"} component="a" color={"violet"}>
          Go Back
        </Button>
      </Link>
      <Box component="main" sx={{ padding: "4rem 0" }}>
        <Stepper
          orientation={"horizontal"}
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          color={"violet"}
        >
          <Stepper.Step
            label="Personal Details"
            description={""}
            allowStepSelect={active > 0}
          >
            <Grid>
              <Grid.Col xs={8} sm={8}>
                <TextInput label="Name" placeholder="Your name" />
              </Grid.Col>
              <Grid.Col xs={4} sm={4}>
                <TextInput label="Job Title" placeholder="Job Title" />
              </Grid.Col>
              <Grid.Col xs={12} sm={12}>
                <TextInput label="Email" placeholder="Your email" />
              </Grid.Col>
              <Grid.Col xs={4} sm={4}>
                <TextInput label="Contact" placeholder="Contact" />
              </Grid.Col>
              <Grid.Col xs={4} sm={4}>
                <TextInput label="GitHub" placeholder="GitHub" />
              </Grid.Col>
              <Grid.Col xs={4} sm={4}>
                <TextInput label="LinkedIn" placeholder="LinkedIn" />
              </Grid.Col>
            </Grid>
          </Stepper.Step>
          <Stepper.Step
            label="Summary"
            description={""}
            allowStepSelect={active > 1}
          >
            <Grid>
              <Grid.Col xs={12} sm={12}>
                <Textarea label="Summary" placeholder="Summary" />
              </Grid.Col>
            </Grid>
          </Stepper.Step>
          <Stepper.Step
            label="Work History"
            description={""}
            allowStepSelect={active > 2}
          >
            <Grid>
              <Grid.Col xs={8} sm={8}>
                <TextInput label="Company" placeholder="Company name" />
              </Grid.Col>
              <Grid.Col xs={4} sm={4}>
                <TextInput label="Job Title" placeholder="Job Title" />
              </Grid.Col>
              <Grid.Col xs={12} sm={8}>
                <TextInput
                  label="Company Website"
                  placeholder="Company website"
                />
              </Grid.Col>
              <Grid.Col xs={4} sm={4}>
                <Select
                  label="Employment Type"
                  placeholder="Select employment type"
                  data={[
                    { value: "full-time", label: "Full-time" },
                    { value: "part-time", label: "Part-time" },
                    { value: "contract", label: "Contract" },
                    { value: "freelance", label: "Freelance" },
                    { value: "self-employed", label: "Self-employed" },
                    { value: "internship", label: "Internship" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col xs={4} sm={6}>
                <TextInput label="Country" placeholder="Country" />
              </Grid.Col>
              <Grid.Col xs={4} sm={6}>
                <TextInput label="City" placeholder="City" />
              </Grid.Col>
              <Grid.Col xs={4} sm={6}>
                <DatePicker placeholder="Pick date" label="From" />
              </Grid.Col>
              <Grid.Col xs={4} sm={6}>
                <DatePicker placeholder="Pick date" label="To" />
              </Grid.Col>
              <Grid.Col xs={4} sm={6}>
                {/* Todo checkbox enable To date becomes disabled */}
                <Checkbox color={"violet"} label="I currently work here" />
              </Grid.Col>
              <Grid.Col xs={12} sm={12}>
                {/* Todo implement auto adding 
                  https://mantine.dev/core/multi-select/#creatable
                */}
                <MultiSelect
                  color={"violet"}
                  searchable
                  nothingFound="Nothing found"
                  clearButtonLabel="Clear selection"
                  clearable
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                    { value: "riot", label: "Riot" },
                    { value: "next", label: "Next.js" },
                    { value: "blitz", label: "Blitz.js" },
                  ]}
                  label="Technologies"
                  aria-label="Select technologies"
                />
              </Grid.Col>
              <Grid.Col xs={12} sm={12}>
                <Textarea label="Description" placeholder="Description" />
              </Grid.Col>
            </Grid>
          </Stepper.Step>
          <Stepper.Step
            label="Skills"
            description={""}
            allowStepSelect={active > 3}
          >
            <Grid>
              <Grid.Col xs={12} sm={12}>
                <MultiSelect
                  color={"violet"}
                  searchable
                  nothingFound="Nothing found"
                  clearButtonLabel="Clear selection"
                  clearable
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                    { value: "riot", label: "Riot" },
                    { value: "next", label: "Next.js" },
                    { value: "blitz", label: "Blitz.js" },
                  ]}
                  label="Skills"
                  aria-label="Select skills"
                />
              </Grid.Col>
            </Grid>
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          {active < 1 ? (
            <Button
              color={"violet"}
              variant={"outline"}
              disabled
              onClick={prevStep}
            >
              Back
            </Button>
          ) : (
            <Button color={"violet"} variant={"outline"} onClick={prevStep}>
              Back
            </Button>
          )}

          {active >= 4 ? (
            <Button color={"violet"} onClick={nextStep}>
              Complete
            </Button>
          ) : (
            <Button color={"violet"} onClick={nextStep}>
              Next step
            </Button>
          )}
        </Group>
      </Box>
    </Box>
  );
};

export default CreateResume;
