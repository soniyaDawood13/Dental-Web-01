import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CtaBanner />
    </main>
  );
}
