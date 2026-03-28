
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

const App = () => {
  return (
    <div>
      <Hero />
      <PainPoints />
      <ShowCase />
      <FeaturesGrid/>
      <WhyDifferent/>
      <Testimonials/>
      <Bonuses/>
      <MasterclassDetails/>
      <FAQ/>
      <AboutSection/>
      <Footer/>
    </div>
  );
};

export default App;
