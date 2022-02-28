import type { NextPage } from "next";
import { useState, useEffect, ChangeEvent, SetStateAction } from "react";
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
  Divider,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

const CreateResume: NextPage = () => {
  // Mantine Stepper
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // Form Data Collection
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    job_title: "",
    github: "",
    linkedin: "",
    portfolio: "",
    summary: "",
  });

  // Breakdown each form for their respective steps, for easier form management.

  // Handles Personal Step
  const handlePersonal = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handles Summary Step
  const handleSummary = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // Handling Work history

  const [workHistory, setWorkHistory] = useState<
    Array<{
      company: string;
      job_title: string;
      company_website: string;
      employment_type: string;
      country: string;
      city: string;
      from: Date;
      to: Date;
      current: boolean;
      tech: Array<string>;
      desc: string;
    }>
  >([
    {
      company: "",
      job_title: "",
      company_website: "",
      employment_type: "",
      country: "",
      city: "",
      from: new Date(),
      to: new Date(),
      current: false,
      tech: [],
      desc: "",
    },
  ]);

  const addWorkHistory = () => {
    setWorkHistory([
      ...workHistory,
      {
        company: "",
        job_title: "",
        company_website: "",
        employment_type: "",
        country: "",
        city: "",
        from: new Date(),
        to: new Date(),
        current: false,
        tech: [],
        desc: "",
      },
    ]);
  };

  const removeWorkHistory = (i: number) => {
    let newWorkHistory = [...workHistory];
    newWorkHistory.splice(i, 1);
    setWorkHistory(newWorkHistory);
  };

  useEffect(() => {
    console.log(workHistory);
  }, [workHistory]);

  return (
    <>
      <Head>
        <title>Create You Resume!</title>
      </Head>
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
            {/* Personal Step */}
            <Stepper.Step
              label="Personal Details"
              description={""}
              allowStepSelect={active > 0}
            >
              <Grid>
                <Grid.Col xs={8} sm={8}>
                  <TextInput
                    id="name"
                    label="Name"
                    placeholder="Your name"
                    onChange={handlePersonal}
                    value={formData.name}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={4} sm={4}>
                  <TextInput
                    id="job_title"
                    label="Job Title"
                    placeholder="Job Title"
                    onChange={handlePersonal}
                    value={formData.job_title}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <TextInput
                    id="email"
                    label="Email"
                    placeholder="Your email"
                    onChange={handlePersonal}
                    value={formData.email}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={4} sm={4}>
                  <TextInput
                    id="contact"
                    label="Contact Number"
                    placeholder="Contact"
                    onChange={handlePersonal}
                    value={formData.contact}
                    required
                  />
                </Grid.Col>
                <Grid.Col xs={4} sm={4}>
                  <TextInput
                    id="github"
                    label="GitHub"
                    placeholder="GitHub"
                    onChange={handlePersonal}
                    value={formData.github}
                  />
                </Grid.Col>
                <Grid.Col xs={4} sm={4}>
                  <TextInput
                    id="linkedin"
                    label="LinkedIn"
                    placeholder="LinkedIn"
                    onChange={handlePersonal}
                    value={formData.linkedin}
                  />
                </Grid.Col>
                <Grid.Col xs={12} sm={12}>
                  <TextInput
                    id="portfolio"
                    label="Portfolio Website"
                    placeholder="Your portfolio website"
                    onChange={handlePersonal}
                    value={formData.portfolio}
                  />
                </Grid.Col>
              </Grid>
            </Stepper.Step>
            {/* Summary Step */}
            <Stepper.Step
              label="Summary"
              description={""}
              allowStepSelect={active > 1}
            >
              <Grid>
                <Grid.Col xs={12} sm={12}>
                  <Textarea
                    id="summary"
                    label="Summary"
                    placeholder="Summary"
                    onChange={handleSummary}
                    value={formData.summary}
                    required
                  />
                </Grid.Col>
              </Grid>
            </Stepper.Step>
            {/* Work History Step */}
            <Stepper.Step
              label="Work History"
              description={""}
              allowStepSelect={active > 2}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  color={"violet"}
                  size="xs"
                  variant="subtle"
                  onClick={addWorkHistory}
                >
                  Add Work History
                </Button>
              </Box>
              {}
              {workHistory.map((work, index) => {
                return (
                  <Grid key={index}>
                    <Grid.Col xs={8} sm={8}>
                      <TextInput
                        name="company"
                        value={work.company}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["company"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Company"
                        placeholder="Company name"
                        // onChange={handleWorkHistory(index)}
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={4}>
                      <TextInput
                        name="job_title"
                        value={work.job_title}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["job_title"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Job Title"
                        placeholder="Job Title"
                      />
                    </Grid.Col>
                    <Grid.Col xs={12} sm={8}>
                      <TextInput
                        name="company_website"
                        value={work.company_website}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["company_website"] =
                            e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Company Website"
                        placeholder="Company website"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={4}>
                      <Select
                        name="employment_type"
                        value={work.employment_type}
                        onChange={(e: string) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["employment_type"] = e;
                          setWorkHistory(newWorkHistory);
                        }}
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
                      <TextInput
                        name="country"
                        value={work.country}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["country"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Country"
                        placeholder="Country"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      <TextInput
                        name="city"
                        value={work.city}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["city"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="City"
                        placeholder="City"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      <DatePicker
                        name="from"
                        value={work.from}
                        onChange={(e: Date) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["from"] = e;
                          setWorkHistory(newWorkHistory);
                        }}
                        placeholder="Pick date"
                        label="From"
                      />
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      {work.current ? (
                        <DatePicker
                          name="to"
                          value={work.to}
                          disabled
                          onChange={(e: Date) => {
                            const newWorkHistory = [...workHistory];
                            newWorkHistory[index]["to"] = e;
                            setWorkHistory(newWorkHistory);
                          }}
                          placeholder="Pick date"
                          label="To"
                        />
                      ) : (
                        <DatePicker
                          name="to"
                          {...(work.current ? "disabled" : null)}
                          value={work.to}
                          onChange={(e: Date) => {
                            const newWorkHistory = [...workHistory];
                            newWorkHistory[index]["to"] = e;
                            setWorkHistory(newWorkHistory);
                          }}
                          placeholder="Pick date"
                          label="To"
                        />
                      )}
                    </Grid.Col>
                    <Grid.Col xs={4} sm={6}>
                      {/* Todo checkbox enable To date becomes disabled */}
                      <Checkbox
                        name="current"
                        checked={work.current}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["current"] = e.target.checked;
                          setWorkHistory(newWorkHistory);
                        }}
                        color={"violet"}
                        label="I currently work here"
                      />
                    </Grid.Col>
                    <Grid.Col xs={12} sm={12}>
                      <MultiSelect
                        value={work.tech}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["tech"] = e;
                          setWorkHistory(newWorkHistory);
                        }}
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
                      <Textarea
                        value={work.desc}
                        onChange={(e) => {
                          const newWorkHistory = [...workHistory];
                          newWorkHistory[index]["desc"] = e.target.value;
                          setWorkHistory(newWorkHistory);
                        }}
                        label="Description"
                        placeholder="Description"
                      />
                    </Grid.Col>
                    <Grid.Col>
                      <Button
                        color={"red"}
                        size="xs"
                        variant="subtle"
                        onClick={(index: any) => {
                          removeWorkHistory(index);
                        }}
                      >
                        Delete Work History
                      </Button>
                    </Grid.Col>
                  </Grid>
                );
              })}
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
            <Stepper.Step
              label="Education"
              description={""}
              allowStepSelect={active > 4}
            >
              <Grid>
                <Grid>
                  <Grid.Col xs={8} sm={8}>
                    <TextInput label="School" placeholder="School name" />
                  </Grid.Col>
                  <Grid.Col xs={4} sm={4}>
                    <Select
                      label="Degree"
                      placeholder="Select degree"
                      data={[
                        {
                          value: "associate-degree",
                          label: "Associate Degree",
                        },
                        { value: "bachelor-degree", label: "Bachelor Degree" },
                        { value: "master", label: "Masters" },
                        { value: "doctoral", label: "Doctoral" },
                        {
                          value: "professional-degree",
                          label: "Professional Degree",
                        },
                        { value: "joint-degree", label: "Joint Degree" },
                      ]}
                    />
                  </Grid.Col>
                  <Grid.Col xs={12} sm={8}>
                    <TextInput
                      label="Field of study"
                      placeholder="Enter field of study"
                    />
                  </Grid.Col>
                  <Grid.Col xs={4} sm={4}>
                    <TextInput label="Grade/GPA" placeholder="Optional" />
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
                    <DatePicker
                      placeholder="Pick date"
                      label="To (Or expected end date)"
                    />
                  </Grid.Col>
                  <Grid.Col xs={12} sm={12}>
                    <Textarea label="Description" placeholder="Description" />
                  </Grid.Col>
                </Grid>
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

            {active >= 5 ? (
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
    </>
  );
};

export default CreateResume;
