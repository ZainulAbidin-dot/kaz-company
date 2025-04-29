import { BallCanvas } from '@/components/Ball';
import { Wrapper } from '@/components/ui/wrapper';
import { partners } from '@/constants';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';
import { useIsMobile } from '@/hooks/use-is-mobile';

export function PartnersSection() {
  const sectionRef = useFadeInAnimation({
    threshold: 0.25,
    animationClass: 'animate-fadeInDown',
  });

  const { isMobile } = useIsMobile();

  return (
    <section className="py-20" ref={sectionRef} data-animatable>
      <Wrapper>
        <div className="flex flex-col gap-10">
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
            Our Partners
          </h2>
            <div className="flex flex-col gap-4">
              <div className="overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  <div className="flex justify-center gap-4">
                    {partners.map((partner, index) => (
                      <div
                        className="flex aspect-square size-44 items-stretch justify-stretch rounded-md border p-2 shadow"
                        key={index}
                      >
                        <img
                          src={partner}
                          alt={`Partner ${index}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="overflow-x-hidden">
                <div className="animate-marquee-reverse whitespace-nowrap">
                  <div className="flex justify-center gap-4">
                    {partners.map((partner, index) => (
                      <div
                        className="flex aspect-square size-44 items-stretch justify-stretch rounded-md border p-2 shadow"
                        key={index}
                      >
                        <img
                          src={partner}
                          alt={`Partner ${index}`}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Wrapper>
    </section>
  );
}
