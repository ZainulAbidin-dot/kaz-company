import { AboutSection } from './about-section';
import { ContactSection } from './contact-section';
import { HeroSection } from './hero-section';
import { OperationAndMaintenanceSection } from './operation-and-maintenance-section';
import { PartnersSection } from './partners-section';

export function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      {/* <SolutionsSection /> */}
      <OperationAndMaintenanceSection />
      <PartnersSection />
      {/* <GallerySection /> */}
      <ContactSection />
    </div>
  );
}
