import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  DisplayFlexMiddle,
  CardSpacer,
  ResultCard,
  theme,
  H1,
  H2,
  Pragraph,
  SpanColor,
  HRLine,
  PrimarySpan,
  GridTwo,
} from "../../styled-components/globalStyled";
import { ResultVerification } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import { countries } from "../../components/form/data/countries";
import { stateArray } from "../../components/form/data/states";
import { formInputCheck } from "../../components/form/algorithms/FormAlgorithm";
import {
  budgetsOptions,
  servicesOptions,
} from "../../components/form/data/selects";
import GoogleMapContainer from "../../components/map/GoogleMapContainer";

export default function FormResult({ isActive }) {
  const { form } = useSelector((state) => ({ ...state }));
  const {
    firstName,
    lastName,
    title,
    height,
    phoneNumber,
    email,
    country,
    states,
    city,
    services,
    budget,
    address,
    zipcode,
  } = form;
  var selectorCheck = [
    firstName,
    lastName,
    title,
    height,
    phoneNumber,
    email,
    country,
    states,
    city,
    services,
    budget,
    address,
    zipcode,
  ];
  // if serevice/budget is null use first ele
  const expenses = budgetsOptions[0];
  const service = servicesOptions[0];

  return (
    <ResultVerification className='result'>
      <Container>
        <ThemeProvider theme={theme}>
          {formInputCheck(selectorCheck) ? (
            <>
              <DisplayFlexMiddle
                theme={{
                  height: "100px",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContentCenter: "center",
                }}
              >
                <H1
                  theme={{
                    grayColor: "var(--primary-color)",
                    fontSizeSM: "25px",
                  }}
                >
                  Results Verification Page Denny Feng
                </H1>
              </DisplayFlexMiddle>
              <DisplayFlexMiddle>
                <ResultCard theme={{ maxWidth: "60%", height: "400px" }}>
                  <GridTwo
                    theme={{ gridGap: "0px", gridPadding: "25px 0 0 19px" }}
                  >
                    <DisplayFlexMiddle
                      theme={{
                        alignItems: "flex-start",
                        flexDirection: "column",
                        justifyContentCenter: "center",
                      }}
                    >
                      <H2
                        center
                        theme={{
                          grayColor: "var(--primary-color)",
                          maxWidth: "200px",
                          fontWeight: "200",
                          alignCenter: "center",
                        }}
                      >
                        {lastName || firstName ? (
                          <div> {lastName + " " + firstName}</div>
                        ) : null}
                      </H2>

                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "5px",
                        }}
                      >
                        {title ? (
                          <SpanColor>
                            Preferred Title: <PrimarySpan> {title}</PrimarySpan>
                          </SpanColor>
                        ) : (
                          <SpanColor>
                            Preferred Title: <PrimarySpan> None</PrimarySpan>
                          </SpanColor>
                        )}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "5px",
                        }}
                      >
                        {email ? (
                          <SpanColor>
                            Email: <PrimarySpan> {email}</PrimarySpan>
                          </SpanColor>
                        ) : null}
                      </Pragraph>
                      <HRLine
                        theme={{
                          marginTop: "10px",
                          top: "10px",
                          hrWidth: "70%",
                        }}
                      ></HRLine>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {country ? (
                          <SpanColor>
                            Country/Region: <PrimarySpan>{country}</PrimarySpan>
                          </SpanColor>
                        ) : (
                          <SpanColor>
                            Country/Region:
                            <PrimarySpan>{countries[0]}</PrimarySpan>
                          </SpanColor>
                        )}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {address ? (
                          <SpanColor>
                            Address: <PrimarySpan>{address}</PrimarySpan>
                          </SpanColor>
                        ) : null}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {city ? (
                          <SpanColor>
                            City: <PrimarySpan>{city}</PrimarySpan>
                          </SpanColor>
                        ) : null}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {states ? (
                          <SpanColor>
                            State: <PrimarySpan>{states}</PrimarySpan>
                          </SpanColor>
                        ) : (
                          <SpanColor>
                            State: <PrimarySpan>{stateArray[0]}</PrimarySpan>
                          </SpanColor>
                        )}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {zipcode ? (
                          <SpanColor>
                            Zip Code: <PrimarySpan>{zipcode}</PrimarySpan>
                          </SpanColor>
                        ) : null}
                      </Pragraph>
                      <HRLine
                        theme={{
                          marginTop: "15px",
                          top: "10px",
                          hrWidth: "70%",
                        }}
                      ></HRLine>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {height ? (
                          <SpanColor>
                            Height:{" "}
                            <PrimarySpan>
                              {height[0].feet}' {height[0].inches}"
                            </PrimarySpan>
                          </SpanColor>
                        ) : null}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {phoneNumber ? (
                          <SpanColor>
                            Phone Number:{" "}
                            <PrimarySpan>{phoneNumber}</PrimarySpan>
                          </SpanColor>
                        ) : null}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {services ? (
                          <SpanColor>
                            Service: <PrimarySpan>{services}</PrimarySpan>
                          </SpanColor>
                        ) : (
                          <SpanColor>
                            Service:{" "}
                            <PrimarySpan>{service.service}</PrimarySpan>
                          </SpanColor>
                        )}
                      </Pragraph>
                      <Pragraph
                        theme={{
                          fontSizeSM: "20px",
                          fontWeight: "200",
                          top: "20px",
                        }}
                      >
                        {budget ? (
                          <SpanColor>
                            Budget: <PrimarySpan>{budget}</PrimarySpan>
                          </SpanColor>
                        ) : (
                          <SpanColor>
                            Budget: <PrimarySpan>{expenses.budget}</PrimarySpan>
                          </SpanColor>
                        )}
                      </Pragraph>
                    </DisplayFlexMiddle>
                    {address && city ? (
                      <GoogleMapContainer
                        isActive={"result-map-container"}
                        mapAddress={`${address} ${city}`}
                      />
                    ) : null}
                  </GridTwo>
                </ResultCard>
              </DisplayFlexMiddle>
            </>
          ) : null}
        </ThemeProvider>
      </Container>
    </ResultVerification>
  );
}
