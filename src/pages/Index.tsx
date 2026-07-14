import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectRobotics from "@/components/sections/ProjectRobotics";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { usePageMetadata } from "@/hooks/usePageMetadata";

function Index() {
  usePageMetadata({
    title: "David Santos Souza | Desenvolvedor Front-end",
    description: "Portfólio de David Santos Souza, desenvolvedor front-end com projetos em educação e tecnologia aplicada à aprendizagem.",
    path: "/",
  });

  return (
    <div className="min-h-screen bg-background">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ProjectRobotics />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
