import careers_img from '@/assets/images/career_img_3.jpg';
import { Card } from '@/components/ui/card';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { cn } from '@/lib/utils';

const events = [
  {
    title: '1990',
    cardTitle: 'Company Foundation',
    cardSubtitle: 'Saudi Controls was established in Riyadh',
    cardDetailedText:
      'Saudi Controls was founded with a vision to become a leading provider of industrial automation and control systems in the Kingdom of Saudi Arabia.',
  },
  {
    title: '1995',
    cardTitle: 'First Major Project',
    cardSubtitle: 'Partnership with Saudi Aramco',
    cardDetailedText:
      "Completed our first major installation project with Saudi Aramco, implementing advanced control systems across multiple facilities. This partnership marked a significant milestone in our company's growth and established our reputation in the industry.",
  },
  {
    title: '2005',
    cardTitle: 'International Expansion',
    cardSubtitle: 'Opening of Dubai Office',
    cardDetailedText:
      'Expanded operations to the UAE with the opening of our Dubai office, marking the beginning of our international presence in the Middle East region.',
  },
  {
    title: '2015',
    cardTitle: 'Digital Transformation',
    cardSubtitle: 'Launch of Smart Solutions Division',
    cardDetailedText:
      'Established our Smart Solutions division to focus on Industry 4.0 technologies, IoT integration, and advanced automation systems. This strategic move positioned us at the forefront of the digital transformation in industrial control systems.',
  },
  {
    title: '2023',
    cardTitle: 'Innovation Center',
    cardSubtitle: 'Research & Development Facility',
    cardDetailedText:
      'Opened state-of-the-art Innovation Center in Riyadh, dedicated to developing next-generation control systems and training future engineers. The facility serves as a hub for technological advancement and knowledge transfer in the region.',
  },
];

export function HistoryPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <img src={careers_img} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 h-full w-full bg-black opacity-75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h1 className="my-8 text-center !text-3xl font-bold text-white md:!text-5xl">
          Saudi Controls History
        </h1>
        <HistoryTimeline />
      </div>
    </div>
  );
}

function HistoryTimeline() {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-4 w-1 bg-black md:left-1/2 md:-translate-x-1/2" />
      {events.map((event, index) => (
        <div
          key={index}
          className={cn(
            'mb-8 flex items-start gap-4 md:items-center md:gap-0',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          )}
        >
          <div
            className={cn(
              'relative h-6 w-6 flex-shrink-0 rounded-full bg-black',
              'translate-x-1/4 md:translate-x-0',
              index % 2 === 0
                ? 'md:left-1/2 md:-translate-x-1/2'
                : 'md:right-1/2 md:translate-x-1/2'
            )}
          />

          {/* Spacer for desktop layout */}
          <div className="hidden md:block md:w-1/2" />

          {/* Card */}
          <HistoryTimelineCard event={event} index={index} />
        </div>
      ))}
    </div>
  );
}

function HistoryTimelineCard({
  event,
  index,
}: {
  event: (typeof events)[number];
  index: number;
}) {
  const { isMobile } = useIsMobile();

  const animationClass =
    index % 2 !== 0 || isMobile ? 'animate-fadeInRight' : 'animate-fadeInLeft';

  const cardRef = useFadeInAnimation({
    animationClass,
    threshold: 0.5,
    delay: 200 * index,
  });

  return (
    <div className="flex-1 md:w-1/2" ref={cardRef} data-animatable>
      <Card className="border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] p-4 backdrop-blur-md md:p-6">
        <div className="text-white">
          <div className="mb-2 text-sm">{event.title}</div>
          <h3 className="mb-2 text-xl font-bold">{event.cardTitle}</h3>
          <h4 className="mb-2 text-lg">{event.cardSubtitle}</h4>
          <p className="text-sm">{event.cardDetailedText}</p>
        </div>
      </Card>
    </div>
  );
}
