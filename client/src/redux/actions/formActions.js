export const setUserFirstName = (firstName) => {
  return { type: "SET_USER_FIRST_NAME", firstName };
};

export const setUserLastName = (lastName) => {
  return { type: "SET_USER_LAST_NAME", lastName };
};

export const setUserEmail = (email) => {
  return { type: "SET_USER_EMAIL", email };
};

export const setUserTitle = (title) => {
  return { type: "SET_USER_TITLE", title };
};

export const setUserHeight = (feet, inches) => {
  return { type: "SET_USER_HEIGHT", feet: feet, inches: inches };
};

export const setUserCountry = (country) => {
  return { type: "SET_USER_COUNTRY", country };
};

export const setUserStates = (states) => {
  return { type: "SET_USER_STATES", states };
};
