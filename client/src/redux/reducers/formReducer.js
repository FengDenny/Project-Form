const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  title: "",
  height: { feet: "", inches: "" },
  phoneNumber: "",
  email: "",
  country: "",
  states: "",
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER_FIRST_NAME":
      return { ...state, firstName: action.firstName };
    case "SET_USER_LAST_NAME":
      return { ...state, lastName: action.lastName };
    case "SET_USER_TITLE":
      return { ...state, title: action.title };
    case "SET_USER_HEIGHT":
      return { ...state, height: action.height };
    case "SET_USER_PHONE_NUMBER":
      return { ...state, phoneNumber: action.phoneNumber };
    case "SET_USER_EMAIL":
      return { ...state, email: action.email };
    case "SET_USER_COUNTRY":
      return { ...state, country: action.country };
    case "SET_USER_STATES":
      return { ...state, states: action.states };
    default:
      return state;
  }
};

export default formReducer;
