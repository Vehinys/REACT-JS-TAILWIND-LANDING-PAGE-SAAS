import { Branding } from "./components/Branding";
import { CallToAction } from "./components/CallToAction";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BulletPoints } from "./components/BulletPoints";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CallToAction />
      <BulletPoints />
      <Pricing />
      <CallToAction minify />
      <Footer />
    </>
  );
}

export default App;
