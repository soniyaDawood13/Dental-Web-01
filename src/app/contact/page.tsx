import type { Metadata } from "next";
import ContactMethods from "@/components/ContactMethods";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — BrightSmile Dental",
};

export default function ContactPage() {
  return (
    <main>
      
      <section className="mesh-bg pt-20 md:pt-24 pb-6 md:pb-8 text-center px-6">
        <h1 className="font-display text-xl md:text-3xl text-(--ink)">
          Schedule your visit today
        </h1>
        <p className="mt-1 text-sm text-(--ink)/65 max-w-xl mx-auto">
          Ready to take the next step toward optimal oral health? We&apos;re
          here to help — schedule an appointment or reach out any way that
          works for you.
        </p>
      </section>
      <ContactMethods />
      <ContactForm />
      
    </main>
  );
}
