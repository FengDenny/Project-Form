import React from "react";
import {
  Container,
  DisplayFlexMiddle,
  CardSpacer,
  theme,
  H1,
  H2,
  Pragraph,
  SpanColor,
  HRLine,
  PrimarySpan,
  GridTwo,
} from "../../styled-components/globalStyled";
import GoogleMapContainer from "../../components/map/GoogleMapContainer";
import { PreviewForm } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import { formInputCheck } from "./algorithms/FormAlgorithm";
import { countries } from "../../components/form/data/countries";
import { stateArray } from "../../components/form/data/states";
import {
  budgetsOptions,
  servicesOptions,
} from "../../components/form/data/selects";
export default function FormPreview(props, { isActive }) {
  var propsCheck = [
    props.last,
    props.first,
    props.title,
    props.email,
    props.country,
    props.state,
    props.address,
    props.city,
    props.zipcode,
    props.feet,
    props.inches,
    props.number,
    props.service,
    props.budget,
  ];
  // if serevice/budget is null use first ele
  const budget = budgetsOptions[0];
  const service = servicesOptions[0];

  return (
    <Container>
      <CardSpacer />
      <ThemeProvider theme={theme}>
        {formInputCheck(propsCheck) ? (
          <PreviewForm>
            <H1
              theme={{
                grayColor: "var(--label-black-color)",
                fontSizeSM: "25px",
              }}
            >
              Preview of Form Submission
            </H1>
            <GridTwo theme={{ gridGap: "34px", gridPadding: "25px 0 0 0" }}>
              <DisplayFlexMiddle
                theme={{
                  height: "300px",
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
                  {props.last || props.first ? (
                    <div>{props.last + " " + props.first}</div>
                  ) : null}
                </H2>

                <Pragraph
                  theme={{
                    fontSizeSM: "20px",
                    fontWeight: "200",
                    top: "5px",
                  }}
                >
                  {props.title ? (
                    <SpanColor>
                      Preferred Title: <PrimarySpan>{props.title}</PrimarySpan>
                    </SpanColor>
                  ) : (
                    <SpanColor>
                      Preferred Title: <PrimarySpan>None</PrimarySpan>
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
                  {props.email ? (
                    <SpanColor>
                      Email: <PrimarySpan>{props.email}</PrimarySpan>
                    </SpanColor>
                  ) : null}
                </Pragraph>
                <HRLine
                  theme={{ marginTop: "10px", top: "10px", hrWidth: "100%" }}
                ></HRLine>
                <Pragraph
                  theme={{
                    fontSizeSM: "20px",
                    fontWeight: "200",
                    top: "20px",
                  }}
                >
                  {props.country ? (
                    <SpanColor>
                      Country/Region: <PrimarySpan>{props.country}</PrimarySpan>
                    </SpanColor>
                  ) : (
                    <SpanColor>
                      Country/Region: <PrimarySpan>{countries[0]}</PrimarySpan>
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
                  {props.address ? (
                    <SpanColor>
                      Address: <PrimarySpan>{props.address}</PrimarySpan>
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
                  {props.city ? (
                    <SpanColor>
                      City: <PrimarySpan>{props.city}</PrimarySpan>
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
                  {props.state ? (
                    <SpanColor>
                      State: <PrimarySpan>{props.state}</PrimarySpan>
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
                  {props.zipcode ? (
                    <SpanColor>
                      Zip Code: <PrimarySpan>{props.zipcode}</PrimarySpan>
                    </SpanColor>
                  ) : null}
                </Pragraph>
                <HRLine
                  theme={{ marginTop: "15px", top: "10px", hrWidth: "100%" }}
                ></HRLine>
                <Pragraph
                  theme={{
                    fontSizeSM: "20px",
                    fontWeight: "200",
                    top: "20px",
                  }}
                >
                  {props.feet && props.inches ? (
                    <SpanColor>
                      Height:{" "}
                      <PrimarySpan>
                        {props.feet}' {props.inches}"
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
                  {props.number ? (
                    <SpanColor>
                      Phone Number: <PrimarySpan>{props.number}</PrimarySpan>
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
                  {props.service ? (
                    <SpanColor>
                      Service: <PrimarySpan>{props.service}</PrimarySpan>
                    </SpanColor>
                  ) : (
                    <SpanColor>
                      Services: <PrimarySpan>{service.service}</PrimarySpan>
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
                  {props.budget ? (
                    <SpanColor>
                      Budget: <PrimarySpan>{props.budget}</PrimarySpan>
                    </SpanColor>
                  ) : (
                    <SpanColor>
                      Budget: <PrimarySpan>{budget.budget}</PrimarySpan>
                    </SpanColor>
                  )}
                </Pragraph>
              </DisplayFlexMiddle>
              {props.address && props.city ? (
                <GoogleMapContainer
                  isActive={"map-container"}
                  mapAddress={`${props.address} ${props.city}`}
                />
              ) : null}
            </GridTwo>
          </PreviewForm>
        ) : null}
      </ThemeProvider>
    </Container>
  );
}
