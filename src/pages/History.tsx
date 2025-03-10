import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import careers_img from '@/assets/images/career_img_3.jpg'

const events = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText:
      "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
    direction: "left",
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText:
      "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
    direction: "right",
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText:
      "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
    direction: "left",
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText:
      "On 10 May 1940, Hitler began his long-awaited offensive in the west...",
    direction: "right",
  },
  // ... other events
];

const HistoryContent = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (containerRef.current) {
  //       containerRef.current.scrollBy({
  //         top: 3,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 20);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-y-3 w-full my-4"
      aria-activedescendant=""
    >
      <Circle />

      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
            {event.direction === "left" ? (
              <EventCard items={event} />
            ) : (
              <div></div>
            )}
            <Pillar />
            {event.direction === "right" ? (
              <EventCard items={event} />
            ) : (
              <div></div>
            )}
          </div>
          <Circle />
        </React.Fragment>
      ))}
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-6 h-6 bg-black mx-auto z-90"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-black mx-auto z-90"></div>
  );
};

interface Item {
  cardTitle: string;
  cardSubtitle: string;
  cardDetailedText: string;
}

const EventCard = ({ items }: { items: Item }) => {
  return (
    <Card
      className="mt-10 flex flex-col items-center justify-center p-6 
    bg-white 
    dark:bg-[rgba(182, 182, 199, 0.12)] shadow-lg backdrop-blur-xs border border-[rgba(255,255,255,0.2)]"
    >
      <CardContent className="min-h-[50vh] text-black">
        <h2 className="text-xl font-bold">{items.cardTitle}</h2>
        <h3 className="text-lg">{items.cardSubtitle}</h3>
        <p className="text-sm">{items.cardDetailedText}</p>
      </CardContent>
    </Card>
  );
};

const History = () => {
  return (
    <>
      <div className="mt-5 text-4xl text-white z-100 fixed top-0 left-0 w-full text-center py-4">Saudi Controls History</div>
      <div className="flex items-center justify-center mt-20">
      <img src={careers_img} alt="" className="fixed inset-0 w-full h-full object-cover" />
      <div className="fixed absolute inset-0 bg-[#00000099]"></div>

      {/* Hero Text */}
      <div className='w-[80%] overflow-scroll mt-20'>
        <HistoryContent />
      </div>
      </div>
    </>
  )
}
export default History;
