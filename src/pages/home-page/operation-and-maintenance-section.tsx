import bms from '@/assets/images/operations/bms.png';
import traffic from '@/assets/images/operations/traffic.png';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

const operationsMaintenance = [
  {
    image: traffic,
    title: 'Job application (individuals)',
    description:
      'View Jobs.',
  },
  {
    image: bms,
    title: 'Request for employees (sectors)',
    description:
      'View Details.',
  },
  // {
  //   image: ev,
  //   title: 'EV',
  //   description:
  //     'We design and implement advanced EV solutions, including automated charging station, space optimization, and real-time availability tracking to enhance efficiency and user experience.',
  // },
  // {
  //   image: iot,
  //   title: 'IoT',
  //   description:
  //     'We develop and deploy cutting-edge IoT solutions, enabling real-time data collection, intelligent automation, and seamless device integration to enhance operational efficiency and user experience.',
  // },
  // {
  //   image: communications,
  //   title: 'Communication Systems',
  //   description:
  //     'We design and implement advanced communication systems, including seamless connectivity, real-time data transmission, and integrated network solutions to enhance efficiency and user experience.',
  // },
  // {
  //   image: twinning,
  //   title: 'Digital Twinning',
  //   description:
  //     'We design and implement advanced parking solutions, including automated ticketing, space optimization, and real-time availability tracking to enhance efficiency and user experience.',
  // },

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
            Kaz is a recruitment brokerage firm specializing in the hospitality industry. We offer employment services to small, medium, and large businesses, delivering faster and more localized hiring solutions compared to traditional recruitment channels.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
