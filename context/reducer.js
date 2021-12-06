export const initialState = {
  userName: null,
  userEmail: null,
  userJobTitle: null,
  userContactNumber: null,
  userLinkedIn: null,
  userGitHub: null,
  userSummary: null,
};

export const actionTypes = {
  setUserName: "setUserName",
  setUserEmail: "setUserEmail",
  setUserJobTitle: "setUserJobTitle",
  setUserContactNumber: "setUserContactNumber",
  setUserLinkedIn: "setUserLinkedIn",
  setUserGitHub: "setUserGitHub",
  setUserSummary: "setUserSummary",
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
    default:
      return state;
  }
};

export default reducer;
