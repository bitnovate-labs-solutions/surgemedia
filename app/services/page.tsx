import type { Metadata } from "next";
import { DigitalServicesSection } from "../_components/home/DigitalServicesSection";
import { FooterSection } from "../_components/home/sections";
import { Navbar } from "../_components/home/Navbar";

export const metadata: Metadata = {
  title: "Digital Services — Surge Media",
};

export default function ServicesPage() {
  return (
    <div className="text-gray-900 antialiased overflow-x-clip min-h-screen">
      <Navbar />
      <DigitalServicesSection />
      <FooterSection
        leadTitle={
          <>
            Need digital support for your{" "}
            <span className="font-playfair italic font-medium">brand?</span>
          </>
        }
        leadDescription="Tell us your goals, timeline, and current setup. We&apos;ll suggest a practical scope that fits your team and budget."
      />
    </div>
  );
}
