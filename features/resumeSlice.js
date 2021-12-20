import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    personal: {
      name: "Ediz Yurdakul",
      emailAddress: "edizyurdakul@gmail.com",
      jobTitle: "Frontend Developer",
      contactNumber: "+27 999 9999 9999",
      linkedIn: "",
      gitHub: "",
    },
    summary: "I’m a front-end developer specializing in building (and occasionally designing) outstanding digital products.",
    workhistory: [
      {
        company: "Dado Agency",
        jobTitle: "Web Developer",
        companyWebsite: "https://dadoagency.com",
        employmentType: "Contract/Freelancer",
        country: "South Africa",
        city: "Cape Town",
        technologies: ["NextJS", "Prisma", "Typescript", "Postgresql"],
        from: { month: "March", year: "2019" },
        to: { month: "December", year: "2019" },
        currentWork: false,
        description:
          "Worked as a contract/freelance, helped the agency build and maintain(support) websites, during my time worked with projects",
      },
      ,
    ],
    skills: ["NextJS", "Prisma", "Typescript", "Postgresql"],
    education: [{ name: "Varsity College", from: { month: "March", year: "2019" }, to: { month: "December", year: "2022" } }],
    projects: [
      {
        projectTitle: "NextJS Resume Builder",
        githubLink: "https://github.com/edizyurdakul/nextjs-resume-builder",
        liveLink: "https://github.com/edizyurdakul/nextjs-resume-builder",
        technologies: ["NextJS", "Prisma", "Typescript", "Postgresql"],
        description: "",
      },
    ],
    certifications: [],
  },
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
});

export const { addPersonal } = resumeSlice.actions;

export default resumeSlice.reducer;
