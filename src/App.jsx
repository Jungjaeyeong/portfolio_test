import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./RouterConfig";
import ScrollToTop from "./ScrollToTop";
import GlobalStyle from "./styles/GlobalStyled";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Suspense>
          <RouterConfig />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
