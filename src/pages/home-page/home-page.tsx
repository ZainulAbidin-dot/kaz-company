import { AboutSection } from './about-section';
import { ContactSection } from './contact-section';
import { GallerySection } from './gallery-section';
import { HeroSection } from './hero-section';
import { OperationAndMaintenanceSection } from './operation-and-maintenance-section';
import { PartnersSection } from './partners-section';
import { SolutionsSection } from './solutions-section';

export function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <OperationAndMaintenanceSection />
      <PartnersSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
