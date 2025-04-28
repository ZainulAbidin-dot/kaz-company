import Tilt from 'react-parallax-tilt';

import aboutImage from '@/assets/images/Kaz.webp';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

export function AboutSection() {
  const sectionRef = useFadeInAnimation({
    animationClass: 'animate-fadeInLeft',
    threshold: 0.25,
  });

  return (
    <section ref={sectionRef} className="py-20" data-animatable>
      <Wrapper>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div
            className="background-stripes parallax-effect-glare-scale space-y-6 px-2 py-6 shadow-xl lg:w-1/2 rounded-2xl"
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
              src={aboutImage}
              alt="Engr. Abdulrahman A. Z. Alshathry"
              className="aspect-video w-full rounded-lg object-cover"
            />
            </Tilt>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Owner Name
              </h3>
              <p className="text-lg text-gray-600">Designation</p>
              <blockquote className="mt-4 text-gray-700 italic">
                Quote
              </blockquote>
            </div>
          </div>
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-bold lg:text-5xl text-gray-900">About KAZ</h2>
            <p className="text-lg text-gray-600">
              Kaz Is A Recruitment Brokerage Company Specializing In Hospitality Industry
            </p>
            <p className="text-lg text-gray-600">
               We Provide Employment Services To Small, Medium And Large Companies Through Local And Rapid Employment Solutions Compared To Other Employment Channels. 
            </p>
            <p className="text-lg text-gray-600">
              Join us as we ignite tomorrow, empowering visionary ideas with unwavering trust and relentless expertise.
            </p>
            {/* <p className="text-lg text-gray-600">
              Empowering Vision. Engineered by Trust.
            </p> */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
