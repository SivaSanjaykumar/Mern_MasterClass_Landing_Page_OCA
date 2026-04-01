import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import AboutSection from "./sections/AboutSection";
import Bonuses from "./sections/Bonuses";
import FAQ from "./sections/FAQ";
import FeaturesGrid from "./sections/FeaturesGrid";
import Footer from "./sections/Footer";
import MasterclassDetails from "./sections/MasterClassDetails";
import ShowCase from "./sections/ShowCase";
import Testimonials from "./sections/Testimonials";
import WhyDifferent from "./sections/WhyDifferent";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import CompaniesSection from "./sections/CompaniesSection";
import GallerySection from "./sections/GallerySection";

// ✅ Landing page as its own component
const LandingPage = () => (
  <div>
<Hero />
<ScrollToTopBtn/>
<WhyDifferent />      
<FeaturesGrid />       
<ShowCase />           
<CompaniesSection />  
<Testimonials />      
<GallerySection />     
<MasterclassDetails /> 
<Bonuses />           
<AboutSection />
<Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>         {/* ✅ wraps everything */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;