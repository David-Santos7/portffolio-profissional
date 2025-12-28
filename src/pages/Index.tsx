import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero / topo */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* Sobre */}
        <AboutSection />

        {/* Experiência */}
        <ExperienceSection />

        {/* Projetos */}
        <ProjectsSection />

        {/* Contato */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
