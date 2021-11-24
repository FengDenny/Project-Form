import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  DisplayFlexMiddle,
  theme,
  Span,
  Header,
  Pragraph,
  Main,
} from "../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { Hero, HeroLogo, HeroCard } from "../styled-components/styled";
import FormData from "./form/FormData";
import FormResult from "./form/FormResult";
import Footer from "../utility/Footer/Footer";
import Banner from "../utility/Banner";
import { formInputCheck } from "../components/form/algorithms/FormAlgorithm";

export default function HeroSection() {
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

  return (
    <>
      <Main>
        <Banner />
        <Hero>
          <Container>
            <ThemeProvider theme={theme}>
              <DisplayFlexMiddle evenly>
                <Header>
                  <HeroLogo>
                    Data<Span>Survey.</Span>
                  </HeroLogo>
                  <Pragraph
                    theme={{
                      lineHeight: "30px",
                      fontSizeSM: "20px",
                      maxWidth: "450px",
                      grayColor: "var(--light-gray-color)",
                      fontWeight: "200",
                    }}
                  >
                    This project goal is to create a form that is easy and
                    simple to use. One core feature is the ability to preview
                    form before submission! After submitting, just scroll down
                    to see the form results! It's that simple!
                  </Pragraph>
                </Header>
                <HeroCard>
                  <FormData />
                </HeroCard>
              </DisplayFlexMiddle>
            </ThemeProvider>
          </Container>
        </Hero>
        {!firstName ||
        !lastName ||
        !email ||
        !city ||
        !zipcode ||
        !address ||
        !city ? null : (
          <>
            <FormResult />
            <Footer />
          </>
        )}
      </Main>
    </>
  );
}
