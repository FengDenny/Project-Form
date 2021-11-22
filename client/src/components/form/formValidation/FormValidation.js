// Validator for last and first name
export const nameValidation = (nameType, name, setError) => {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){0,39}$/;
  switch (nameType) {
    case nameType:
      if (nameType.length === 0) {
        setError(`${name} is required.`);
      } else if (nameType.length >= 40 || !nameType.match(nameRegex)) {
        setError(`${name} can only be up to 40 characters.`);
      } else {
        setError("");
      }
      break;
    default:
      break;
  }
};

export const emailValidation = (nameType, setError) => {
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!nameType.match(emailRegex)) {
    setError("Enter a valid email.");
  } else {
    setError("");
  }
};

export const termsValidation = (nameType, setError) => {
  var isChecked = document.getElementById("agree");
  if (nameType && isChecked.checked === false) {
    setError("You must agree to our terms by checking the box.");
  } else {
    setError("");
  }
};

export const addressValidations = (nameType, name, setError) => {
  const addressRegex =
    /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/;
  const cityRegex = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
  const zipRegex = /^\d{5}$/;
  switch (nameType) {
    case nameType:
      if (nameType.length === 0) {
        setError(`${name} is required.`);
      } else if (
        name === "Address" &&
        (nameType.length >= 40 || !nameType.match(addressRegex))
      ) {
        setError(`${name} can only be up to 40 alphanumeric characters.`);
      } else if (
        name === "City" &&
        (nameType.length >= 40 || !nameType.match(cityRegex))
      ) {
        setError(`Invalid ${name}.`);
      } else if (name === "zip code" && !nameType.match(zipRegex)) {
        setError(`Invalid ${name}`);
      } else {
        setError("");
      }
      break;
    default:
      break;
  }
};
