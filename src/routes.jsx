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

export const pages = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <Services /> },
  { path: '/assessments', element: <Assessments /> },
  { path: '/tutoring', element: <Tutoring /> },
  { path: '/access-arrangements', element: <AccessArrangements /> },
  { path: '/faqs', element: <Faqs /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/about', element: <About /> },
  { path: '/resources', element: <Resources /> },
  { path: '/contact', element: <Contact /> },
];
