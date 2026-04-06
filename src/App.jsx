import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Assessments from "./pages/Assessments";
import Tutoring from "./pages/Tutoring";
import AccessArrangements from "./pages/AccessArrangements";
import Faqs from "./pages/Faqs";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="tutoring" element={<Tutoring />} />
          <Route path="access-arrangements" element={<AccessArrangements />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
