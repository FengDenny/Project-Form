import React from "react";
import {
  Container,
  DisplayFlexMiddle,
  theme,
  Card,
  Span,
  Header,
  H1,
} from "../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { Hero, HeroLogo, HeroCard } from "../styled-components/styled";
import FormData from "./form/FormData";
import { useSelector } from "react-redux";

export default function HeroSection() {
  const { form } = useSelector((state) => ({ ...state }));

  return (
    <Hero>
      <Container>
        <ThemeProvider theme={theme}>
          <DisplayFlexMiddle evenly>
            <Header>
              <HeroLogo>
                Data<Span>Survey.</Span>
              </HeroLogo>
              <H1>
                Our goal is to create an hassle free, and easy to use data
                survey for our fellow customers .
              </H1>
            </Header>
            <HeroCard>
              <FormData />
            </HeroCard>
          </DisplayFlexMiddle>
        </ThemeProvider>
      </Container>
    </Hero>
  );
}
