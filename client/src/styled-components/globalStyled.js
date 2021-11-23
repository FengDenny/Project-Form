import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

html, body{
    background:var(--bg-color)
}

:root{
    --primary-font: 'Lora', serif;
    --bg-color: #F6F9FC;
    --primary-color: #7796FE;
    --secondary-color: #FF865B;
    --light-gray-color: #8A8787;
    --label-black-color: #000000;
    --success: #20bf6b;
    --error: #eb4d4b;
    --border-radius: 10px;
    --box-shadow-alert: 0 2rem 4rem rgba(0, 0, 0, 0.25);
    --content-overlay: rgba(0, 0, 0, 0.5);

}
`;

export const theme = {
  justifyContentCenter: "center",
  justifyContentEvenly: "space-evenly",
  alignItems: "center",
  flexDirection: "row",
  fontSizeSM: "20px",
  fontSizeMD: "30px",
  fontSizeLG: "40px",
  height: "50vh",
  maxWidth: "300px",
  formItemHeight: "32.97px",
  grayColor: "var(--light-gray-color)",
  color: "var(--label-black-color)",
  fontWeight: "200",
  alignCenter: "center",
  alignStart: "flex-start",
  top: "5px",
  marginTop: "0px",
  marginLeft: "2px",
  marginTopInput: "2px",
  errorLabelWidth: "0px",
  left: "0",
  h1Top: "0",
  labelTop: "0",
  gridPadding: "25px 0 0 0;",
  gridGap: "5px",
};

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
`;

export const DisplayFlexMiddle = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.flexDirection};
  justify-content: ${(props) =>
    props.evenly
      ? props.theme.justifyContentEvenly
      : props.theme.justifyContentCenter};
  align-items: ${(props) => props.theme.alignItems};
  height: ${(props) => props.theme.height};
`;

export const H1 = styled.h1`
  position: relative;
  font-size: ${(props) => props.theme.fontSizeSM};
  max-width: ${(props) => props.theme.maxWidth};
  color: ${(props) => props.theme.grayColor};
  font-weight: ${(props) => props.theme.fontWeight};
  align-self: ${(props) =>
    props.center ? props.theme.alignCenter : props.theme.alignStart};
  left: ${(props) => props.theme.left};
  top: ${(props) => props.theme.h1top};
`;

export const H2 = styled.h2`
  position: relative;
  top: ${(props) => props.theme.top};
  font-size: ${(props) => props.theme.fontSizeSM};
  max-width: ${(props) => props.theme.maxWidth};
  color: ${(props) => props.theme.grayColor};
  font-weight: ${(props) => props.theme.fontWeight};
  align-self: ${(props) =>
    props.center ? props.theme.alignCenter : props.theme.alignStart};
`;

export const Pragraph = styled.p`
  position: relative;
  top: ${(props) => props.theme.top};
  font-size: ${(props) => props.theme.fontSizeSM};
  max-width: ${(props) => props.theme.maxWidth};
  color: ${(props) => props.theme.grayColor};
  font-weight: ${(props) => props.theme.fontWeight};
  align-self: ${(props) =>
    props.center ? props.theme.alignCenter : props.theme.alignStart};
`;

export const Header = styled.header`
  display: block;
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.fontSizeLG};
`;

export const SpanColor = styled.span`
  color: ${(props) => props.theme.color};
`;

export const AsteriskSpan = styled.span`
  color: var(--primary-color);
`;
export const PrimarySpan = styled.span`
  color: var(--primary-color);
`;

// Card

export const Card = styled.div`
  border: #fff;
  background-color: #fff;
  border-radius: var(--border-radius);
  width: 373px;
  height: 325px;
  box-shadow: 0 8px 16px 0 var(--content-overlay);
`;

export const SmallCard = styled(Card)`
  width: ${(props) => props.theme.maxWidth};
  height: ${(props) => props.theme.height};
`;

export const CardSpacer = styled.div`
  margin-top: 5px;
`;

// Grid
export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding: ${(props) => props.theme.gridPadding};
  grid-gap: ${(props) => props.theme.gridGap};
`;

export const HRLine = styled.hr`
  color: var(--light-gray-color);
  width: 100%;
  position: relative;
  margin-top: ${(props) => props.theme.marginTop};
  top: ${(props) => props.theme.top};
`;
