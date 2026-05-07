import { ContactFooter } from "@/components/ContactFooter";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { InsuranceSection } from "@/components/InsuranceSection";
import { MaterialsSection } from "@/components/MaterialsSection";
import { ServiceAreas } from "@/components/ServiceAreas";
import { ServiceGrid } from "@/components/ServiceGrid";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ServiceGrid />
        <MaterialsSection />
        <InsuranceSection />
        <FaqSection />
        <ServiceAreas />
      </main>
      <ContactFooter />
    </div>
  );
}
