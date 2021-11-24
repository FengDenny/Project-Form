import React from "react";
import {
  Container,
  DisplayFlexMiddle,
  theme,
  Navigate,
  GridTwo,
} from "../../styled-components/globalStyled";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { FooterContainer } from "../../styled-components/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin);

export default function Footer() {
  const history = useHistory();
  return (
    <FooterContainer>
      <Container>
        <ThemeProvider theme={theme}>
          <DisplayFlexMiddle
            theme={{
              height: "100px",
              alignItems: "center",
              flexDirection: "row",
              justifyContentCenter: "center",
            }}
          >
            <Navigate href='https://github.com/FengDenny'>
              <FontAwesomeIcon icon={faGithub} />
            </Navigate>
            <Navigate href='https://www.linkedin.com/in/denny-feng/'>
              <FontAwesomeIcon icon={faLinkedin} />
            </Navigate>
          </DisplayFlexMiddle>
        </ThemeProvider>
      </Container>
    </FooterContainer>
  );
}
