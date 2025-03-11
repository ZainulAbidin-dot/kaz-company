import om1 from '@/assets/images/om1.png';
import om2 from '@/assets/images/om2.png';
import om3 from '@/assets/images/om3.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

const operationsMaintenance = [
  {
    image: om1,
    title: 'Parking Systems',
    description:
      'We design and implement advanced parking solutions, including automated ticketing, space optimization, and real-time availability tracking to enhance efficiency and user experience.',
  },
  {
    image: om2,
    title: 'Transportation Systems',
    description:
      'Our transportation solutions ensure seamless mobility by integrating intelligent traffic management, public transit coordination, and smart infrastructure monitoring.',
  },
  {
    image: om3,
    title: 'Building Management Systems',
    description:
      'We offer state-of-the-art building management systems that optimize energy consumption, automate security controls, and provide real-time monitoring for improved operational efficiency.',
  },
];

export function OperationAndMaintenanceSection() {
  const ref = useFadeInAnimation({
    animationClass: 'animate-fadeInUp',
    threshold: 0.25,
  });

  return (
    <section className="py-20" ref={ref}>
      <Wrapper>
        <div className="flex flex-col items-center justify-between gap-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-left md:text-5xl">
            Operation & Maintenance
          </h2>
          <p className="text-muted-foreground text-center text-lg md:text-left">
            The ability to integrate operations and maintenance constraints from
            the design stage is key to guaranteeing that the system is
            functional and maintained in line with budget forecasts throughout
            its useful life. SCL boasts this unique knowhow thanks to its
            engineers who are specialized in operations and maintenance. SCL
            sometimes goes beyond its role of engineering and project management
            and operates and maintains the following systems infrastructures:
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {operationsMaintenance.map((item, index) => (
              <Card key={index} className="">
                <CardHeader>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mx-auto h-32 w-32 drop-shadow-md"
                    style={{
                      filter: 'brightness(0.5) contrast(1.2)',
                      mixBlendMode: 'multiply',
                    }}
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-4 text-2xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
