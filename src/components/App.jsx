import "./App.css";
import "./page__content.css";
import Header from "./Header/Header";
import Promo from "./Promo/Promo";
import About from "./About/About";
import Partners from "./Partners/Partners";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Doc from "./Doc/Doc";
import Contacts from "./Contacts/Contacts";

function App() {
return (
  <div className="page__content">
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <Promo />
            <About />
            <Partners />
            <Footer />
          </>
        }
      />
        <Route
          path="/documents/*"
          element={
            <>
              <Header />
              <Doc />
              <Footer />
            </>
          }
        />
      <Route path="/contacts/*"   element={
            <>
              <Header />
              <Contacts />
              <Footer />
            </>
          } />
    </Routes>
  </div>
);
}

export default App;
