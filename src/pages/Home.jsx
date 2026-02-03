import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import NumbersSection from "../components/NumbersSection";
import YouTubeSection from "../components/Youtube";
import Doctors from "../components/Doctors";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import VisionSection from "../components/VisionSection";
import Testimonials from "../components/Testimonials";
import InstagramSection from "../components/InstagramSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <NumbersSection />
     
      <Doctors />
      
      <Services />
      <WhyChooseUs />
       <YouTubeSection />
      <InstagramSection />
      <VisionSection />
      <Testimonials />
      
    </>
  );
}
