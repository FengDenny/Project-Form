import React from "react";
import {
  Container,
  DisplayFlexMiddle,
  theme,
  Pragraph,
} from "../styled-components/globalStyled";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BannerContainer } from "../styled-components/styled";

export default function Banner() {
  return (
    <BannerContainer>
      <Container>
        <ThemeProvider theme={theme}>
          <DisplayFlexMiddle
            theme={{
              height: "50px",
              alignItems: "center",
              flexDirection: "row",
              justifyContentCenter: "center",
            }}
          >
            <Pragraph
              theme={{
                lineHeight: "30px",
                fontSizeSM: "20px",
                maxWidth: "700px",
                grayColor: "#fff",
                fontWeight: "200",
              }}
            >
              CSC 642 848 Fall 2021 Individual Assignment Denny Feng Data Survey
              Form
            </Pragraph>
          </DisplayFlexMiddle>
        </ThemeProvider>
      </Container>
    </BannerContainer>
  );
}
