import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useRef } from "react";



const Index = () => {
  const signInRef = useRef<HTMLButtonElement | null>(null);
  const signUpRef = useRef<HTMLButtonElement | null>(null);

  const scrollToRef = (ref: typeof signInRef) => {
    const el = ref.current;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    try {
      el.focus({ preventScroll: true });
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero signInRef={signInRef} signUpRef={signUpRef} />
      <ProductShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
