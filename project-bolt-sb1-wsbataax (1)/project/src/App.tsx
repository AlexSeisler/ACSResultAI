import { Header } from "./components/layout/Header";
import { HomeHero } from "./components/sections/home/HomeHero";
import { PainPoints } from "./components/sections/home/PainPoints";
import { Services } from "./components/sections/Services";
import { ValueProposition } from "./components/sections/home/ValueProposition";
import { Testimonials } from "./components/sections/Testimonials";
import { ContactForm } from "./components/sections/home/ContactForm";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />
      <main>
        <HomeHero />
        <PainPoints />
        <Services />
        <ValueProposition />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;