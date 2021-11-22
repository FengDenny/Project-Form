import React, { useState, useEffect, useRef } from "react";
import FormLogic from "../../components/form/FormLogic";
import FormPreview from "../../components/form/FormPreview";
import { useDispatch } from "react-redux";
import {
  setUserFirstName,
  setUserLastName,
  setUserTitle,
  setUserEmail,
  setUserCountry,
  setUserStates,
} from "../../redux/actions/formActions";
import { SmallCard } from "../../styled-components/globalStyled";
import { StyledModal, StyledCloseModal } from "../../styled-components/styled";
import { titleOptions } from "../../components/form/data/selects";
import { countries } from "../../components/form/data/countries";
import { states } from "../../components/form/data/states";
import {
  nameValidation,
  emailValidation,
  termsValidation,
  addressValidations,
} from "../../components/form/formValidation/FormValidation";
export default function FormData() {
  // Redux dispatch
  const dispatch = useDispatch();
  // Email
  const [email, setEmail] = useState("");
  // Names
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  // title
  const [title, setTitle] = useState("");
  // country/region
  const [country, setCountry] = useState("");
  // state
  const [state, setState] = useState("");
  // Street Address
  const [address, setAddress] = useState("");
  // city
  const [city, setCity] = useState("");
  // Zip Code
  const [zipCode, setZipCode] = useState("");
  // terms
  const [terms, setTerms] = useState(false);
  // Height
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  // Errors
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [termsError, setTermsError] = useState();
  const [addressError, setAddressError] = useState();
  const [cityError, setCityError] = useState();
  const [zipCodeError, setZipCodeError] = useState();
  // Required fields array checker
  const dataArray = { title, firstName, lastName, email, country, state };
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    console.log(dataArray);
    firstName && nameValidation(firstName, "First name", setFirstNameError);
    lastName && nameValidation(lastName, "Last name", setLastNameError);
    email && emailValidation(email, setEmailError);
    terms && termsValidation(terms, setTermsError);
    address && addressValidations(address, "Address", setAddressError);
    city && addressValidations(city, "City", setCityError);
    zipCode && addressValidations(zipCode, "zip code", setZipCodeError);
  }, [
    lastName,
    firstName,
    email,
    terms,
    country,
    states,
    address,
    city,
    zipCode,
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //
    dispatch(setUserFirstName(firstName));
    dispatch(setUserLastName(lastName));
    dispatch(setUserEmail(email));
    // title
    if (!title) {
      dispatch(setUserTitle("none"));
    } else {
      dispatch(setUserTitle(title));
    }

    // country
    if (!country) {
      dispatch(setUserCountry(country[0]));
    } else {
      dispatch(setUserCountry(country));
    }
    // state
    if (!state) {
      dispatch(setUserStates(states[0]));
    } else {
      dispatch(setUserStates(state));
    }

    console.log(firstName, lastName, title, email, country, states);
  };
  // Form Preview Mode START
  const [modalOpen, setModalOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function openModal(e) {
    e.preventDefault();
    setOpacity(0);
    setModalOpen(!modalOpen);
  }

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  };

  // Form Preview Mode END

  return (
    <FormLogic
      dataArray={dataArray}
      titleOptions={titleOptions}
      handleFormSubmit={handleFormSubmit}
      firstName={firstName}
      firstNameError={firstNameError}
      lastNameError={lastNameError}
      emailError={emailError}
      setEmailError={setEmailError}
      setFirstName={setFirstName}
      setTerms={setTerms}
      terms={terms}
      termsError={termsError}
      title={title}
      setTitle={setTitle}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      beforeClose={beforeClose}
      afterOpen={afterOpen}
      openModal={openModal}
      opacity={opacity}
      modalOpen={modalOpen}
      StyledCloseModal={StyledCloseModal}
      StyledModal={StyledModal}
      SmallCard={SmallCard}
      FormPreview={FormPreview}
      countries={countries}
      country={country}
      setCountry={setCountry}
      states={states}
      state={state}
      setState={setState}
      address={address}
      setAddress={setAddress}
      addressError={addressError}
      city={city}
      setCity={setCity}
      cityError={cityError}
      setCityError={setCityError}
      zipCode={zipCode}
      setZipCode={setZipCode}
      zipCodeError={zipCodeError}
    />
  );
}
