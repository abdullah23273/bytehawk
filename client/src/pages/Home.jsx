import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import Process from "../components/home/Process";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Process />
      <CTA />
    </main>
  );
};

export default Home;
