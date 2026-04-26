import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import SolutionSteps from "@/components/SolutionSteps";
import RiskTypes from "@/components/RiskTypes";
import SampleReport from "@/components/SampleReport";
import ChatWidget from "@/components/ChatWidget";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPoints />
      <SolutionSteps />
      <RiskTypes />
      <SampleReport />
      <ChatWidget />
      <Pricing />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  );
}