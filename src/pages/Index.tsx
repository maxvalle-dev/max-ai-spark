import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import ServicesAISection from "@/components/home/ServicesAISection";
import CounterBand from "@/components/home/CounterBand";
import AboutSection from "@/components/home/AboutSection";
import ProfessionalServices from "@/components/home/ProfessionalServices";
import ReviewsSection from "@/components/home/ReviewsSection";
import ClientsSection from "@/components/home/ClientsSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/Footer";
import MobileFooterBar from "@/components/MobileFooterBar";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="pb-mobile-bar">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <ServicesAISection />
        <CounterBand />
        <AboutSection />
        <ProfessionalServices />
        <ReviewsSection />
        <ClientsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <MobileFooterBar />
      <ChatWidget />
    </div>
  );
};

export default Index;
