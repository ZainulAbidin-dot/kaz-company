import bms from '@/assets/images/operations/bms.png';
import communications from '@/assets/images/operations/communications.png';
import ev from '@/assets/images/operations/ev.png';
import iot from '@/assets/images/operations/iot.png';
import twinning from '@/assets/images/operations/twinning.png';
import traffic from '@/assets/images/operations/traffic.png';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

const operationsMaintenance = [
  {
    image: traffic,
    title: 'Transportation Systems',
    description:
      'Our transportation solutions ensure seamless mobility by integrating intelligent traffic management, public transit coordination, and smart infrastructure monitoring.',
  },
  {
    image: bms,
    title: 'Building Management Systems',
    description:
      'We offer state-of-the-art building management systems that optimize energy consumption, automate security controls, and provide real-time monitoring for improved operational efficiency.',
  },
  {
    image: ev,
    title: 'EV',
    description:
      'We design and implement advanced EV solutions, including automated charging station, space optimization, and real-time availability tracking to enhance efficiency and user experience.',
  },
  {
    image: iot,
    title: 'IoT',
    description:
      'We develop and deploy cutting-edge IoT solutions, enabling real-time data collection, intelligent automation, and seamless device integration to enhance operational efficiency and user experience.',
  },
  {
    image: communications,
    title: 'Communication Systems',
    description:
      'We design and implement advanced communication systems, including seamless connectivity, real-time data transmission, and integrated network solutions to enhance efficiency and user experience.',
  },
  {
    image: twinning,
    title: 'Digital Twinning',
    description:
      'We design and implement advanced parking solutions, including automated ticketing, space optimization, and real-time availability tracking to enhance efficiency and user experience.',
  },

];

export function OperationAndMaintenanceSection() {
  const ref = useFadeInAnimation({
    animationClass: 'animate-fadeInDown',
    threshold: 0.25,
  });

  return (
    <section className="py-20" ref={ref} data-animatable>
      <Wrapper>
        <div className="items-left flex flex-col justify-between gap-8 lg:text-center md:text-center">
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
            Operation & Maintenance
          </h2>
          <p className="text-muted-foreground text-lg">
            The ability to integrate operations and maintenance constraints from
            the design stage is key to guaranteeing that the system is
            functional and maintained in line with budget forecasts throughout
            its useful life. SCL boasts this unique knowhow thanks to its
            engineers who are specialized in operations and maintenance. SCL
            sometimes goes beyond its role of engineering and project management
            and operates and maintains the following systems infrastructures:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationsMaintenance.map((item, index) => (
              <div key={index} className="group perspective">
                <div className="relative w-full h-[400px] transform-style-3d transition-transform duration-1500 group-hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-gray-900 p-6 rounded-lg backface-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-32 drop-shadow-md object-contain"
                      style={{
                        filter: "brightness(0.9) contrast(1.2)",
                        mixBlendMode: "multiply",
                      }}
                    />
                    <h3 className="mt-4 text-2xl font-bold text-center card__z">
                      {item.title}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white p-6 rounded-lg rotate-y-180 backface-hidden">
                    <p className="text-center text-lg card__z">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
