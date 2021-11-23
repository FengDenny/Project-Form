const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  title: "",
  height: { feet: "", inches: "" },
  phoneNumber: "",
  email: "",
  country: "",
  states: "",
  city: "",
  services: "",
  budget: "",
  address: "",
  zipcode: "",
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
    case "SET_USER_CITY":
      return { ...state, states: action.city };
    case "SET_USER_SERVICES":
      return { ...state, states: action.services };
    case "SET_USER_BUDGET":
      return { ...state, states: action.budget };
    case "SET_USER_ADDRESS":
      return { ...state, states: action.address };
    case "SET_USER_ZIPCODE":
      return { ...state, states: action.zipcode };
    default:
      return state;
  }
};

export default formReducer;
