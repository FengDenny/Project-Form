import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Card,
  CardSpacer,
  theme,
  GridTwo,
  AsteriskSpan,
  H1,
  DisplayFlexMiddle,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import {
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  SelectOptions,
  FormButton,
  FormSubmission,
} from "../../styled-components/styled";

import { formInputCheck, formatPhoneNumber } from "./algorithms/FormAlgorithm";
import ReCAPTCHA from "../form/formValidation/FormCaptcha";

export default function FormLogic({
  number,
  setNumber,
  numberError,
  lastName,
  setLastName,
  firstName,
  setFirstName,
  email,
  setEmail,
  titleOptions,
  handleFormSubmit,
  title,
  setTitle,
  SmallCard,
  openModal,
  StyledModal,
  afterOpen,
  beforeClose,
  opacity,
  StyledCloseModal,
  FormPreview,
  modalOpen,
  dataArray,
  firstNameError,
  lastNameError,
  emailError,
  termsError,
  setTerms,
  terms,
  countries,
  country,
  setCountry,
  states,
  state,
  setState,
  address,
  setAddress,
  addressError,
  city,
  setCity,
  cityError,
  zipCode,
  setZipCode,
  zipCodeError,
  feetError,
  inchesError,
  setFeet,
  setInches,
  feet,
  inches,
  services,
  service,
  setService,
  budgets,
  budget,
  setBudget,
}) {
  const firstRender = useRef(true);
  const [verified, setVerified] = useState(false);
  const formatPhoneRef = useRef();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // getElementById();
  }, []);

  // const getElementById = () => {
  //   if (emailError)
  //     emailError
  //       ? (document.getElementById("email").style.borderColor = "red")
  //       : (document.getElementById("email").style.borderColor = "green");
  //   else {
  //     lastNameError
  //       ? (document.getElementById("lastName").style.borderColor = "red")
  //       : (document.getElementById("lastName").style.borderColor = "green");
  //     nameError
  //       ? (document.getElementById("firstName").style.borderColor = "red")
  //       : (document.getElementById("firstName").style.borderColor = "green");
  //   }
  // };

  return (
    <Container onSubmit={handleFormSubmit}>
      <ThemeProvider theme={theme}>
        <Card>
          <H1
            theme={{
              h1top: "15px",
              left: "15px",
              grayColor: "var(--light-gray-color)",
              fontSizeSM: "20px",
              fontWeight: "200",
            }}
          >
            Required Fields <AsteriskSpan>* </AsteriskSpan>
          </H1>
          <GridTwo theme={{ gridPadding: "25px 0 0 0" }}>
            {/* Last Name */}
            <FormGroup>
              <FormLabel htmlForm='lastName' theme={{ fontSizeSM: "17px" }}>
                Last Name <AsteriskSpan>* </AsteriskSpan>
              </FormLabel>
              <FormInput
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Doe'
                maxLength='40'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                theme={{ maxWidth: "152px", formItemHeight: "32.97px" }}
                required
              />

              {lastNameError && lastName && (
                <FormLabel
                  theme={{
                    color: "var(--error)",
                    fontSizeSM: "15px",
                    marginTop: "2px",
                    errorLabelWidth: "153px",
                  }}
                >
                  {lastNameError}
                </FormLabel>
              )}
            </FormGroup>
            {/* First Name */}
            <FormGroup>
              <FormLabel htmlForm='firstName' theme={{ fontSizeSM: "17px" }}>
                First Name <AsteriskSpan>* </AsteriskSpan>
              </FormLabel>
              <FormInput
                type='text'
                id='firstName'
                name='firstName'
                placeholder='John'
                maxLength='40'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                theme={{ maxWidth: "152px", formItemHeight: "32.97px" }}
                required
              />

              {firstNameError && firstName && (
                <FormLabel
                  theme={{
                    color: "var(--error)",
                    fontSizeSM: "15px",
                    marginTop: "2px",
                    errorLabelWidth: "153px",
                  }}
                >
                  {firstNameError}
                </FormLabel>
              )}
            </FormGroup>
          </GridTwo>
          {/* Preferred Title */}
          <FormGroup>
            <FormLabel htmlForm='title' theme={{ fontSizeSM: "17px" }}>
              Preferred Title <AsteriskSpan>* </AsteriskSpan>
            </FormLabel>
            <FormSelect
              onChange={(e) => setTitle(e.target.value)}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
            >
              {titleOptions.map((options) => (
                <SelectOptions
                  id='title'
                  value={options.title}
                  key={options.id}
                  required
                >
                  {options.title}
                </SelectOptions>
              ))}
            </FormSelect>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlForm='email' theme={{ fontSizeSM: "17px" }}>
              Email <AsteriskSpan>* </AsteriskSpan>
            </FormLabel>
            <FormInput
              type='email'
              id='email'
              name='email'
              placeholder='JohnDoe@yahoo.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
              required
            />
            {emailError && (
              <FormLabel
                theme={{
                  color: "var(--error)",
                  fontSizeSM: "15px",
                  marginTop: "7px",
                }}
              >
                {emailError}
              </FormLabel>
            )}
          </FormGroup>
        </Card>
        <CardSpacer />
        <Card>
          {/* Country/Region */}
          <FormGroup>
            <FormLabel
              htmlForm='countryRegion'
              theme={{ fontSizeSM: "17px", marginTop: "10px" }}
            >
              Country / Region <AsteriskSpan>* </AsteriskSpan>
            </FormLabel>
            <FormSelect
              onChange={(e) => setCountry(e.target.value)}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
            >
              {countries.map((country, index) => (
                <SelectOptions
                  id='countryRegion'
                  value={country}
                  key={`country-${index}`}
                  required
                >
                  {country}
                </SelectOptions>
              ))}
            </FormSelect>
          </FormGroup>
          {/* Street Address */}
          <FormGroup>
            <FormLabel htmlForm='address' theme={{ fontSizeSM: "17px" }}>
              Street Address <AsteriskSpan>* </AsteriskSpan>
            </FormLabel>
            <FormInput
              type='text'
              id='address'
              name='address'
              placeholder='1600 Holloway Ave'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
              required
            />
          </FormGroup>
          {addressError && (
            <FormLabel
              theme={{
                color: "var(--error)",
                fontSizeSM: "15px",
                labelTop: "5px",
                marginLeft: "16px",
              }}
            >
              {addressError}
            </FormLabel>
          )}
          {/* City */}
          <FormGroup>
            <FormLabel htmlForm='city' theme={{ fontSizeSM: "17px" }}>
              City <AsteriskSpan>* </AsteriskSpan>
            </FormLabel>
            <FormInput
              type='text'
              id='city'
              name='city'
              placeholder='San Francisco'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
              required
            />
          </FormGroup>
          {cityError && (
            <FormLabel
              theme={{
                color: "var(--error)",
                fontSizeSM: "15px",
                labelTop: "5px",
                marginLeft: "16px",
              }}
            >
              {cityError}
            </FormLabel>
          )}
          {/* State, Zip code */}
          <GridTwo theme={{ gridPadding: "5px 0 0 0" }}>
            {/* Last Name */}
            <FormGroup>
              <FormLabel htmlForm='state' theme={{ fontSizeSM: "17px" }}>
                State <AsteriskSpan>* </AsteriskSpan>
              </FormLabel>
              <FormSelect
                onChange={(e) => setState(e.target.value)}
                theme={{ maxWidth: "152px", formItemHeight: "32.97px" }}
              >
                {states.map((state, index) => (
                  <SelectOptions
                    id='countryRegion'
                    value={state}
                    key={`states-${index}`}
                    required
                  >
                    {state}
                  </SelectOptions>
                ))}
              </FormSelect>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlForm='zipcode' theme={{ fontSizeSM: "17px" }}>
                Zip Code <AsteriskSpan>* </AsteriskSpan>
              </FormLabel>
              <FormInput
                type='94112'
                id='zipcode'
                name='firstName'
                placeholder='94116'
                maxLength='5'
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                theme={{ maxWidth: "152px", formItemHeight: "32.97px" }}
                required
              />

              {zipCodeError && (
                <FormLabel
                  theme={{
                    color: "var(--error)",
                    fontSizeSM: "15px",
                    labelTop: "5px",
                    marginLeft: "2px",
                  }}
                >
                  {zipCodeError}
                </FormLabel>
              )}
            </FormGroup>
          </GridTwo>
        </Card>
        <CardSpacer />
        <SmallCard theme={{ maxWidth: "373px", height: "375px" }}>
          <GridTwo theme={{ gridPadding: "5px 0 0 0" }}>
            {/* Height */}
            <FormGroup>
              <FormLabel htmlForm='height' theme={{ fontSizeSM: "17px" }}>
                Your Height <AsteriskSpan> (optional) </AsteriskSpan>
              </FormLabel>
              <FormInput
                type='text'
                id='feet'
                name='height'
                placeholder='5'
                maxLength='2'
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                theme={{
                  maxWidth: "152px",
                  formItemHeight: "32.97px",
                  marginTopInput: "5px",
                }}
              />
              <FormLabel
                htmlForm='feet'
                theme={{
                  fontSizeSM: "17px",
                  marginTop: "2px",
                  color: "var( --light-gray-color)",
                }}
              >
                Feet {""}
                {feetError && (
                  <FormLabel
                    theme={{
                      color: "var(--error)",
                      fontSizeSM: "15px",
                      labelTop: "-1px",
                      marginLeft: "45px",
                    }}
                  >
                    {feetError}
                  </FormLabel>
                )}
              </FormLabel>
            </FormGroup>
            <FormGroup>
              <FormInput
                type='text'
                id='inches'
                name='inches'
                placeholder='5'
                maxLength='2'
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                theme={{
                  maxWidth: "152px",
                  formItemHeight: "32.97px",
                  marginTopInput: "22px",
                }}
              />
              <FormLabel
                htmlForm='inches'
                theme={{
                  fontSizeSM: "17px",
                  marginTop: "2px",
                  color: "var( --light-gray-color)",
                }}
              >
                Inches {""}
                {inchesError && (
                  <FormLabel
                    theme={{
                      color: "var(--error)",
                      fontSizeSM: "15px",
                      labelTop: "-1px",
                      marginLeft: "15px",
                    }}
                  >
                    {inchesError}
                  </FormLabel>
                )}
              </FormLabel>
            </FormGroup>
          </GridTwo>
          {/* Phone Number */}
          <FormGroup>
            <FormLabel htmlForm='phoneNumber' theme={{ fontSizeSM: "17px" }}>
              Phone Number <AsteriskSpan> (optional) </AsteriskSpan>
            </FormLabel>

            <FormInput
              ref={formatPhoneRef}
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='(xxx) xxx - xxxx'
              maxLength='16'
              value={number}
              onChange={(e) => {
                formatPhoneNumber(formatPhoneRef, e.target.value);
                setNumber(e.target.value);
              }}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
            />
          </FormGroup>

          {numberError && (
            <FormLabel
              theme={{
                color: "var(--error)",
                fontSizeSM: "15px",
                labelTop: "5px",
                marginLeft: "15px",
              }}
            >
              {numberError}
            </FormLabel>
          )}

          {/* Services */}
          <FormGroup>
            <FormLabel htmlForm='services' theme={{ fontSizeSM: "17px" }}>
              Services <AsteriskSpan> (optional) </AsteriskSpan>
            </FormLabel>
            <FormSelect
              onChange={(e) => setService(e.target.value)}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
            >
              {services.map((options) => (
                <SelectOptions
                  id='services'
                  value={options.service}
                  key={options.id}
                >
                  {options.service}
                </SelectOptions>
              ))}
            </FormSelect>
          </FormGroup>
          {/* Budget */}
          <FormGroup>
            <FormLabel htmlForm='budget' theme={{ fontSizeSM: "17px" }}>
              Budget <AsteriskSpan> (optional) </AsteriskSpan>
            </FormLabel>
            <FormSelect
              onChange={(e) => setBudget(e.target.value)}
              theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
            >
              {budgets.map((options) => (
                <SelectOptions
                  id='budget'
                  value={options.budget}
                  key={options.id}
                >
                  {options.budget}
                </SelectOptions>
              ))}
            </FormSelect>
          </FormGroup>
        </SmallCard>

        {/* Preview Form  */}
        {formInputCheck(dataArray) ? (
          <>
            <CardSpacer />
            {firstNameError ||
            lastNameError ||
            emailError ||
            termsError ||
            cityError ||
            zipCodeError ||
            feetError ||
            inchesError ||
            numberError ||
            addressError ||
            !address ||
            !city ? null : (
              <SmallCard theme={{ maxWidth: "373px", height: "55px" }}>
                <FormGroup>
                  <FormButton
                    onClick={openModal}
                    // disabled={!email || !firstName || !lastName || !title}
                    theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
                  >
                    Preview Form
                  </FormButton>
                </FormGroup>
              </SmallCard>
            )}

            <StyledModal
              isOpen={modalOpen}
              afterOpen={afterOpen}
              beforeClose={beforeClose}
              onBackgroundClick={openModal}
              backgroundProps={{ opacity }}
            >
              <StyledCloseModal onClick={openModal}>&times;</StyledCloseModal>

              <FormPreview
                last={lastName}
                first={firstName}
                title={title}
                email={email}
                country={country}
                state={state}
                address={address}
                feet={feet}
                inches={inches}
                zipcode={zipCode}
                number={number}
                service={service}
                budget={budget}
                city={city}
              />
            </StyledModal>
          </>
        ) : null}
        <CardSpacer />
        {/* Submit Form */}
        <Card>
          <FormGroup>
            <FormSubmission>
              <FormLabel
                htmlFor='agree'
                theme={{
                  fontSizeSM: "20px",
                  color: "var( --light-gray-color)",
                }}
              >
                By submitting, I agreed to the {""}
                <NavLink to='#' style={{ color: "var(--primary-color)" }}>
                  Terms
                </NavLink>
                <AsteriskSpan>* </AsteriskSpan>
              </FormLabel>
              <FormInput
                type='checkbox'
                id='agree'
                name='agreed'
                value={terms}
                onChange={() => setTerms(true)}
                theme={{ maxWidth: "26px", formItemHeight: "13px" }}
              />
              {!terms && (
                <FormLabel
                  theme={{
                    color: "var(--error)",
                    fontSizeSM: "15px",
                  }}
                >
                  You must agree to our terms by checking the box.
                </FormLabel>
              )}
              <ReCAPTCHA setVerified={setVerified} />
              {!verified ? (
                <FormLabel
                  theme={{
                    fontSizeSM: "16px",
                    color: "var( --error)",
                  }}
                >
                  Please verify that you're not a bot!
                </FormLabel>
              ) : null}
              <FormButton
                type='submit'
                disabled={
                  !email ||
                  !firstName ||
                  !lastName ||
                  !zipCode ||
                  !address ||
                  !terms ||
                  !number ||
                  !feet ||
                  !inches ||
                  !verified
                }
                theme={{ maxWidth: "340px", formItemHeight: "32.97px" }}
              >
                Submit
              </FormButton>
            </FormSubmission>
          </FormGroup>
        </Card>
      </ThemeProvider>
    </Container>
  );
}
