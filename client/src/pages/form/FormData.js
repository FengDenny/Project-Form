/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import FormLogic from "../../components/form/FormLogic";
import FormPreview from "../../components/form/FormPreview";
import { useDispatch } from "react-redux";
import { SmallCard } from "../../styled-components/globalStyled";
import { StyledModal, StyledCloseModal } from "../../styled-components/styled";
import {
  titleOptions,
  servicesOptions,
  budgetsOptions,
} from "../../components/form/data/selects";

import { countries } from "../../components/form/data/countries";
import { stateArray } from "../../components/form/data/states";
import {
  nameValidation,
  emailValidation,
  termsValidation,
  addressValidations,
  heightValidation,
  PhoneNumberValidation,
} from "../../components/form/formValidation/FormValidation";

import {
  setUserFirstName,
  setUserLastName,
  setUserTitle,
  setUserEmail,
  setUserCountry,
  setUserStates,
  setUserCity,
  setUserPhoneNumber,
  setUserServices,
  setUserBudget,
  setUserAddress,
  setUserZipCode,
  setUserHeight,
} from "../../redux/actions/formActions";
export default function FormData() {
  // Redux dispatch
  const dispatch = useDispatch();
  // Email
  const [email, setEmail] = useState("");
  // Names
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  // Number
  const [number, setNumber] = useState("");
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
  // servicesOptions
  const [service, setService] = useState();
  // budget
  const [budget, setBudget] = useState();
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
  const [feetError, setFeetError] = useState();
  const [inchesError, setInchesError] = useState();
  const [numberError, setNumberError] = useState();
  // Required fields array checker
  const dataArray = {
    title,
    firstName,
    lastName,
    email,
    country,
    state,
    address,
    city,
    zipCode,
    terms,
  };
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
    city && addressValidations(city, "city", setCityError);
    zipCode && addressValidations(zipCode, "zip code", setZipCodeError);
    feet && heightValidation(feet, "Feet", setFeetError);
    inches && heightValidation(inches, "Inches", setInchesError);
    number && PhoneNumberValidation(number, "phone number", setNumberError);
  }, [
    lastName,
    firstName,
    email,
    terms,
    country,
    stateArray,
    address,
    city,
    zipCode,
    feet,
    inches,
    number,
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserFirstName(firstName));
    dispatch(setUserLastName(lastName));
    dispatch(setUserEmail(email));
    dispatch(setUserCity(city));
    dispatch(setUserAddress(address));
    dispatch(setUserZipCode(zipCode));
    dispatch(setUserHeight(feet, inches));
    dispatch(setUserPhoneNumber(number));

    // servicesOptions
    if (!service) {
      dispatch(setUserServices("E-mail"));
      setService("E-mail");
    } else {
      dispatch(setUserServices(service));
    }

    // budget
    if (!budget) {
      dispatch(setUserBudget("< $50"));
      setBudget("< $50");
    } else {
      dispatch(setUserBudget(budget));
    }

    // title
    if (!title) {
      dispatch(setUserTitle("None"));
      setTitle("None");
    } else {
      dispatch(setUserTitle(title));
    }

    // country
    if (!country) {
      dispatch(setUserCountry("Afghanistan"));
      setCountry("Afghanistan");
    } else {
      dispatch(setUserCountry(country));
    }
    // state
    if (!state) {
      dispatch(setUserStates("AL"));
      setState("AL");
    } else {
      dispatch(setUserStates(state));
    }

    console.log(
      firstName,
      lastName,
      title,
      email,
      country,
      state,
      address,
      zipCode
    );
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
      stateArray={stateArray}
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
      feetError={feetError}
      inchesError={inchesError}
      setFeet={setFeet}
      setInches={setInches}
      feet={feet}
      inches={inches}
      number={number}
      setNumber={setNumber}
      numberError={numberError}
      servicesOptions={servicesOptions}
      service={service}
      setService={setService}
      budgetsOptions={budgetsOptions}
      budget={budget}
      setBudget={setBudget}
    />
  );
}
