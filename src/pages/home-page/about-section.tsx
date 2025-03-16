import Tilt from 'react-parallax-tilt';

import aboutImage from '@/assets/images/Engr_Abdulrahman_A_Z_Alshathry.png';
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
          <Tilt
            className="background-stripes parallax-effect-glare-scale space-y-6 px-2 py-6 shadow-xl lg:w-1/2"
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
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Engr. Abdulrahman A. Z. Alshathry
              </h3>
              <p className="text-lg text-gray-600">Chief Executive Officer</p>
              <blockquote className="mt-4 text-gray-700 italic">
                "Our commitment to excellence and innovation drives us to
                deliver the best solutions for our clients."
              </blockquote>
            </div>
          </Tilt>
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900">Overview</h2>
            <p className="text-lg text-gray-600">
              Currently undergoing exponential growth, Saudi Controls has
              branched out from its head office in Riyadh to every corner of the
              kingdom, providing tailor-made technical solutions utilizing state
              of the art innovations in various fields of civil and security
              systems to an ever expanding client base with which we share a
              long-term relationship built on trust and reliability.
            </p>
            <p className="text-lg text-gray-600">
              Saudi Controls Ltd. is one of the foremost engineering and systems
              integration companies in Saudi Arabia, a longtime trendsetter in
              the field with an established reputation for multidisciplinary
              expertise and competitive prices going back 25 years.
            </p>
            <p className="text-lg text-gray-600">
              Currently undergoing exponential growth, Saudi Controls has
              branched out from its head office in Riyadh to every corner of the
              kingdom, providing tailor-made technical solutions utilizing state
              of the art innovations in various fields of civil and security
              systems to an ever expanding client base with which we share a
              long-term relationship built on trust and reliability.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
