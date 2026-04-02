import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DataTicker from "@/components/DataTicker";
import Problem from "@/components/Problem";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import Results from "@/components/Results";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import CustomCursor from "@/components/CustomCursor";
import ReadingProgress from "@/components/ReadingProgress";

export default function Home() {
  return (
    <>
      <ReadingProgress />
      <CustomCursor />
      <Nav />
      <main className="min-h-screen">
        <SmoothScrollWrapper>
          <Hero />
          <DataTicker />
          <Problem />
          <SocialProof />
          <Services />
          <HowIWork />
          <Results />
          <About />
          <FAQ />
          <Contact />
        </SmoothScrollWrapper>
      </main>
      <Footer />
    </>
  );
}
