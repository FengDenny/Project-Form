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
  return { type: "SET_USER_HEIGHT", feet, inches };
};

export const setUserCountry = (country) => {
  return { type: "SET_USER_COUNTRY", country };
};

export const setUserStates = (states) => {
  return { type: "SET_USER_STATES", states };
};

export const setUserCity = (city) => {
  return { type: "SET_USER_CITY", city };
};

export const setUserPhoneNumber = (phoneNumber) => {
  return { type: "SET_USER_PHONE_NUMBER", phoneNumber };
};

export const setUserServices = (services) => {
  return { type: "SET_USER_SERVICES", services };
};

export const setUserBudget = (budget) => {
  return { type: "SET_USER_BUDGET", budget };
};

export const setUserAddress = (address) => {
  return { type: "SET_USER_ADDRESS", address };
};

export const setUserZipCode = (zipcode) => {
  return { type: "SET_USER_ZIPCODE", zipcode };
};
