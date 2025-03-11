import { AboutSection } from './about-section';
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
    </div>
  );
}
