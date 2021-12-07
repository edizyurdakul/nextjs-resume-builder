export const initialState = {
  userPersonalInfo: { name: "", email: "", jobTitle: "", contactNumber: "", linkedInUrl: "", gitHubUrl: "", languages: [] },
  userSummary: null,
  userWorkHistory: [
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
  setPersonalInfo: "setUserPersonalInfo",
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
