import Tilt from 'react-parallax-tilt';

import aboutImage from '@/assets/images/company.jpg';
import visionImage from '@/assets/images/promise.png';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

export function AboutPage() {
  const sectionRef = useFadeInAnimation({
    animationClass: 'animate-fadeInLeft',
    threshold: 0.25,
  });

  return (
    <section ref={sectionRef} className="py-20" data-animatable>
      <Wrapper>
        <div className="flex flex-col items-center mt-12 gap-12 lg:flex-row">
          <div
            className="background-stripes space-y-6 px-2 py-6 lg:w-1/2"
          >
          <Tilt
            className=""
            perspective={1000}
            scale={1.02}
          >

            <img
              src={aboutImage}
              alt="Engr. Abdulrahman A. Z. Alshathry"
              className="aspect-video w-full rounded-lg object-cover"
            />
            </Tilt>
          </div>
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-bold lg:text-5xl text-gray-900">About Us</h2>
            <p className="text-lg text-gray-600">
            Our commitment to excellence, integrity, and innovation is deeply rooted in Saudi values and will continue to guide our path forward. As we navigate the future, we remain focused on embracing new technologies, fostering sustainability, and enhancing operational efficiency. Together, with our partners and stakeholders, we will set new industry benchmarks, drive progress, and lead the way in transparency and technological advancement.
            </p>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row">
            <div className="space-y-6 lg:w-1/2">
                <h2 className="text-3xl font-bold lg:text-5xl text-gray-900">Our Promise</h2>
                <p className="text-lg text-gray-600">
                At Saudi Controls, we don’t just deploy systems—we architect future-ready ecosystems where innovation meets reliability. By integrating Saudi talent with global expertise, we transform Vision 2030’s ambitions into operational realities. Our team of highly skilled professionals works closely with clients to develop customized, scalable solutions that meet the evolving demands of the Kingdom’s infrastructure. From smart cities to industrial automation, we are dedicated to shaping a more connected and intelligent future.
                </p>
            </div>
            <div
            className="background-stripes parallax-effect-glare-scale space-y-6 px-2 py-6 lg:w-1/2"
            >
            <Tilt
            className="parallax-effect-glare-scale "
            perspective={1000}
            scale={1.02}
            glareEnable
            glareMaxOpacity={0.45}
            glareBorderRadius="50%"
            >

            <img
                src={visionImage}
                alt="Engr. Abdulrahman A. Z. Alshathry"
                className="aspect-video w-full rounded-lg object-contain"
            />
            </Tilt>
            </div>
        </div>
      </Wrapper>
    </section>
  );
}
