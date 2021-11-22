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
} from "../../styled-components/globalStyled";

import { PreviewForm } from "../../styled-components/styled";
import { ThemeProvider } from "styled-components";
import { formInputCheck } from "./algorithms/FormAlgorithm";
import { countries } from "../../components/form/data/countries";
import { states } from "../../components/form/data/states";
export default function FormPreview(props) {
  var propsCheck = [
    props.last,
    props.first,
    props.title,
    props.email,
    props.country,
    props.state,
  ];

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
            <DisplayFlexMiddle
              theme={{
                height: "15vh",
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
              <HRLine></HRLine>
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
                {props.state ? (
                  <SpanColor>
                    State: <PrimarySpan>{props.state}</PrimarySpan>
                  </SpanColor>
                ) : (
                  <SpanColor>
                    State: <PrimarySpan>{states[0]}</PrimarySpan>
                  </SpanColor>
                )}
              </Pragraph>
            </DisplayFlexMiddle>
          </PreviewForm>
        ) : null}
      </ThemeProvider>
    </Container>
  );
}
