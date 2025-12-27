import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import FAQsPage from "./pages/FAQ.jsx";
import FoundationPage from "./pages/Foundation.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import OurDoctors from "./pages/OurDoctors.jsx";
import NotFound from "./not_found.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/ourdoctors" element={<OurDoctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
