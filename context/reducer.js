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
  setPersonalInfo: "setPersonalInfo",
  setUserSummary: "setUserSummary",
  setUserSkills: "setUserSkills",
  setUserWorkHistory: "setUserWorkHistory",
  setUserEducation: "setUserEducation",
  setUserPersonalProjects: "setUserPersonalProjects",
  setUserCertifications: "setUserCertifications",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setUserName:
      return {
        ...state,
        userName: action.userName,
      };
    case actionTypes.setUserEmail:
      return {
        ...state,
        userEmail: action.userEmail,
      };
    case actionTypes.setUserJobTitle:
      return {
        ...state,
        userJobTitle: action.userJobTitle,
      };
    case actionTypes.setUserContactNumber:
      return {
        ...state,
        userContactNumber: action.userContactNumber,
      };
    case actionTypes.setUserLinkedIn:
      return {
        ...state,
        userLinkedIn: action.userLinkedIn,
      };
    case actionTypes.setUserGitHub:
      return {
        ...state,
        userGitHub: action.userGitHub,
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
    default:
      return state;
  }
};

export default reducer;
