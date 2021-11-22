import { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./styled-components/globalStyled";
import { ModalProvider } from "styled-react-modal";
import { FadingBackground } from "./styled-components/styled";
import Home from "./pages/Home";
function App() {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <GlobalStyles />
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </ModalProvider>
  );
}

export default App;
