import { Card } from '@/components/ui/card';
import careers_img from '@/assets/images/career_img_3.jpg';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { useEffect, useRef } from 'react';

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

export default function History() {
  return (
    <div>
      <div className='fixed inset-0 pointer-events-none'>
        <img src={careers_img} alt='' className='fixed inset-0 w-full h-full object-cover -z-10' />
        <div className='fixed inset-0 w-full h-full bg-black opacity-75' />
      </div>

      <div className='max-w-7xl mx-auto px-4 isolate z-10'>
        <h1 className='!text-3xl md:!text-5xl font-bold text-white my-8 text-center'>Saudi Controls History</h1>
        <HistoryTimeline />
      </div>
    </div>
  );
}

function HistoryTimeline() {
  return (
    <div className='relative'>
      <div className='absolute top-0 bottom-0 left-4 md:left-1/2 w-1 bg-black md:-translate-x-1/2' />
      {events.map((event, index) => (
        <div
          key={index}
          className={cn(
            'flex items-start md:items-center gap-4 md:gap-0 mb-8',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          )}
        >
          <div
            className={cn(
              'w-6 h-6 rounded-full bg-black flex-shrink-0 relative',
              'translate-x-1/4 md:translate-x-0',
              index % 2 === 0 ? 'md:left-1/2 md:-translate-x-1/2' : 'md:right-1/2 md:translate-x-1/2'
            )}
          />

          {/* Spacer for desktop layout */}
          <div className='hidden md:block md:w-1/2' />

          {/* Card */}
          <HistoryTimelineCard event={event} index={index} />
        </div>
      ))}
    </div>
  );
}

function HistoryTimelineCard({ event, index }: { event: (typeof events)[number]; index: number }) {
  const cardRef = useFadeInAnimation(index);
  return (
    <div className='flex-1 md:w-1/2 opacity-0' ref={cardRef}>
      <Card className='bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] p-4 md:p-6'>
        <div className='text-white'>
          <div className='text-sm mb-2'>{event.title}</div>
          <h3 className='text-xl font-bold mb-2'>{event.cardTitle}</h3>
          <h4 className='text-lg mb-2'>{event.cardSubtitle}</h4>
          <p className='text-sm'>{event.cardDetailedText}</p>
        </div>
      </Card>
    </div>
  );
}

function useFadeInAnimation(index: number) {
  const { isMobile } = useIsMobile();
  const elementRef = useRef<HTMLDivElement>(null);

  const animationClass = isMobile || index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass]);

  return elementRef;
}
