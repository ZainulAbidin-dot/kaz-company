import { BallCanvas } from '@/components/Ball';
import { Wrapper } from '@/components/ui/wrapper';
import { partners } from '@/constants';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

export function PartnersSection() {
  const sectionRef = useFadeInAnimation({
    threshold: 0.25,
    animationClass: 'animate-fadeInDown',
  });

  return (
    <section className="py-20" ref={sectionRef} data-animatable>
      <Wrapper>
        <div className="flex flex-col gap-10">
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
            Our Partners
          </h2>
          <div className="flex flex-wrap justify-center">
            {partners.map((partner, index) => (
              <div
                className="size-24 sm:size-36 md:size-42 lg:size-48"
                key={index}
              >
                <BallCanvas icon={partner} />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
