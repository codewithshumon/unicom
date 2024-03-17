import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import FundingOptions from "./pages/FundingOptions";
import ReferralEngine from "./pages/ReferralEngine";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import StepsModal from "./components/modal/StepsModal";

function App() {
  return (
    <>
      <BrowserRouter>
        <StepsModal />
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/funding-options" element={<FundingOptions />} />
          <Route path="/referral-engine" element={<ReferralEngine />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
