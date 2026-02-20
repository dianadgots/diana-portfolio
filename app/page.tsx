import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeImages from "@/components/HomeImages";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export default function Home() {
  return (
    <>
      <div id="scroll-to-top" className="scroll-to-top"></div>
      <Navigation />
      <Hero />
      <HomeImages />
      <SelectedWork />
      <Services />
      <Footer />
      <Animations />
    </>
  );
}
