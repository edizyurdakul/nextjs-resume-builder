export const initialState = {
  userPersonalInfo: {
    name: "Ediz Yurdakul",
    email: "edizyurdakul@gmail.com",
    jobTitle: "Frontend Web Developer",
    contactNumber: "Currently Underdevelopment!",
    linkedInUrl: "https://linkedin.com/edizyurdakul",
    gitHubUrl: "https://github.com/edizyurdakul",
    languages: [],
  },
  userSummary:
    "Front-end developer with experience building successful digital products using modern technologies such as React, Next.JS, Gatsby.JS, and more. Proficient in a wide range of development and testing tools as well as version control tools. A continuous learner, keeping up with new technologies and changes to languages and frameworks such as React 17, Next. JS 12.",
  userWorkHistory: [
    {},
    /*{
      company: "",
      jobTitle: "",
      companyWebsite: "",
      employmentType: "",
      isRemote: false,
      country: "",
      city: "",
      technologies: "",
      from: { month: "", year: "" },
      to: { month: "", year: "" },
      currentWork: false,
      description: "",
    },*/
  ],
  userSkills: [],
  userEducation: [
    /*
    {
      school: "",
      degree: "",
      fieldOfStudy: "",
      grade: "",
      country: "",
      city: "",
      from: { month: "", year: "" },
      to: { month: "", year: "" },
      description: "",
    },*/
  ],
  userPersonalProjects: [
    /*{
      title: "",
      technologies: "",
      numberOfWorkers: "",
      from: { month: "", year: "" },
      to: { month: "", year: "" },
      currentlyWork: false,
      description: "",
    },*/
  ],
  userCertifications: [{ title: "", issuer: "", issueDate: { month: "", year: "" } }],
};

export const actionTypes = {
  setUserPersonalInfo: "setUserPersonalInfo",
  setUserSummary: "setUserSummary",
  setUserSkills: "setUserSkills",
  setUserWorkHistory: "setUserWorkHistory",
  setUserEducation: "setUserEducation",
  setUserPersonalProjects: "setUserPersonalProjects",
  setUserCertifications: "setUserCertifications",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setPersonalInfo:
      return {
        ...state,
        userName: action.userPersonalInfo,
      };
    case actionTypes.setUserSummary:
      return {
        ...state,
        userSummary: action.userSummary,
      };
    case actionTypes.setUserSkills:
      return {
        ...state,
        userSkills: action.userSkills,
      };
    case actionTypes.setUserWorkHistory:
      return {
        ...state,
        userWorkHistory: action.userWorkHistory,
      };
    case actionTypes.setUserSkills:
      return {
        ...state,
        userSkills: action.userSkills,
      };
    case actionTypes.setUserEducation:
      return {
        ...state,
        userEducation: action.userEducation,
      };
    case actionTypes.setUserCertifications:
      return {
        ...state,
        userCertifications: action.userCertifications,
      };
    default:
      return state;
  }
};

export default reducer;
