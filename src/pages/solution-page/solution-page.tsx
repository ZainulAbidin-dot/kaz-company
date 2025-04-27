import Tilt from "react-parallax-tilt";
import solution2Image from "@/assets/images/2_solution.png";
import solution1Image from "@/assets/images/1_solution.png";
import solution3Image from "@/assets/images/3_solution.png";
import solution4Image from "@/assets/images/4_solution.png";
import { Wrapper } from "@/components/ui/wrapper";
import { useFadeInAnimation } from "@/hooks/use-fadein-animation";

// Type for the Image Object
type Image = {
  src: string;
  alt: string;
  class: string;
};

// Type for the Solution Object
type Solution = {
  title: string;
  content: string[];
  quote: string;
  image: Image;
};

// Solutions Array
const solutions: Solution[] = [
  {
    title: "Intelligent Transportation System (ITS)",
    content: [
      "KAZ is revolutionizing urban mobility by implementing AI-driven traffic management solutions that enhance efficiency, safety, and sustainability. Through real-time congestion prediction and adaptive signal control, our systems dynamically adjust traffic signals to optimize flow and reduce delays.",
      "Advanced collision avoidance technology ensures safer intersections, while Traffic Signal Priority Systems enhance emergency response and public transport efficiency. Additionally, our Pedestrian Signal Control Systems improve walkability by prioritizing foot traffic in high-density areas. As cities embrace electric mobility, we support the integration of EV charging infrastructure with smart grids, ensuring a seamless, sustainable urban future.",
    ],
    quote:
      "Our commitment to excellence and innovation drives us to deliver the best solutions for our clients.",
    image: {
      src: solution2Image, // Fixed image import reference
      alt: "Intelligent Transportation System",
      class: "aspect-video w-full rounded-lg object-contain",
    },
  },
  {
    title: "Building Intelligent Ecosystems",
    content: [
      "KAZ is transforming smart building automation with IoT-enabled Building Management Systems (BMS) that optimize energy efficiency, security, and fire safety. By integrating centralized fire detection systems and real-time monitoring, we enhance safety while reducing operational costs.",
      "Our solutions ensure seamless automation, making buildings more intelligent, responsive, and sustainable. In urban development, we drive sustainability through green building certifications, EV charging networks, and solar energy integration. Additionally, our legacy modernization solutions retrofit outdated systems with AI-driven controls, bringing older infrastructures up to modern efficiency and performance standards.",
    ],
    quote:
      "Our commitment to excellence and innovation drives us to deliver the best solutions for our clients.",
    image: {
      src: solution1Image, // Fixed image import reference
      alt: "Building Intelligent Ecosystems",
      class: "aspect-video w-full rounded-lg object-contain",
    },
  },
  {
    title: "Centralized Fire Alarm Monitoring System",
    content: [
      "24/7 REAL-TIME SURVEILLANCE: MONITOR FIRE ALARMS ACROSS HUNDREDS OF SITES FROM A SINGLE, INTUITIVE DASHBOARD.",
      "GPRS/GSM & FIBER-OPTIC INTEGRATION: SEAMLESS COMMUNICATION ACROSS URBAN AND REMOTE LOCATIONS.",
      "AI-DRIVEN INCIDENT PRIORITIZATION: AUTOMATICALLY FLAG HIGH-RISK ALERTS FOR RAPID RESPONSE.",
      "SCALABLE ARCHITECTURE: SUPPORTS RESIDENTIAL COMPLEXES, INDUSTRIAL ZONES, AND SMART CITY GRIDS.",
    ],
    quote:
      "Our commitment to excellence and innovation drives us to deliver the best solutions for our clients.",
    image: {
      src: solution3Image, // Fixed image import reference
      alt: "Centralized Fire Alarm Monitoring System",
      class: "aspect-video w-full rounded-lg object-contain",
    },
  },
  {
    title: "Management for Water Supply- SCADA",
    content: [
      "Reduce Water Loss: Pinpoint leaks with 99% accuracy, minimizing non-revenue water (NRW).",
      "Energy Efficiency: Optimize pump operations to cut energy costs by up to 30%.",
      "Compliance: Meet Saudi Arabia’s stringent water quality and sustainability regulations.",
      "Scalability: Adaptable to municipal networks, industrial complexes, and agricultural systems.",
    ],
    quote:
      "Our commitment to excellence and innovation drives us to deliver the best solutions for our clients.",
    image: {
      src: solution4Image, // Fixed image import reference
      alt: "Centralized Fire Alarm Monitoring System",
      class: "aspect-video w-full rounded-lg object-contain",
    },
  },
];

export function SolutionPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h1 className="mt-30 text-center !text-3xl font-bold text-black md:!text-5xl">
          Solutions
        </h1>
        <p className="text-center text-muted-foreground my-2 text-xl">
          Elevating Innovation Through Bespoke Technological Mastery Where
          Vision Meets Precision.
        </p>
      </div>

      {solutions.map((solution, index) =>
        index % 2 === 0 ? (
          <SectionWrapperRight key={index} solution={solution} />
        ) : (
          <SectionWrapperLeft key={index} solution={solution} />
        )
      )}
    </div>
  );
}

// SectionWrapperLeft Component
export function SectionWrapperLeft({
  solution,
}: {
  solution: Solution;
}) {
  const sectionRef = useFadeInAnimation({
    animationClass: "animate-fadeInLeft",
    threshold: 0.25,
  });

  return (
    <section ref={sectionRef} className="py-10" data-animatable>
      <Wrapper>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left: Quote & Image */}
          <div className="background-stripes parallax-effect-glare-scale space-y-6 px-2 py-6 lg:w-1/2">
            <div className="text-center">
              <blockquote className="mt-4 text-gray-700 italic">
                {solution.quote}
              </blockquote>
            </div>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={1000}
              scale={1.02}
              glareEnable
              glareMaxOpacity={0.45}
              glareBorderRadius="50%"
            >
              <img
                src={solution.image.src}
                alt={solution.image.alt}
                className={solution.image.class}
              />
            </Tilt>
          </div>

          {/* Right: Title & Content */}
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-900">
              {solution.title}
            </h2>
            {solution.content.map((para, i) => (
              <p key={i} className="text-lg text-gray-600">
                {para}
              </p>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

// SectionWrapperRight Component
export function SectionWrapperRight({
  solution,
}: {
  solution: Solution;
}) {
  const sectionRef = useFadeInAnimation({
    animationClass: "animate-fadeInRight",
    threshold: 0.25,
  });

  return (
    <section ref={sectionRef} className="py-10" data-animatable>
      <Wrapper>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left: Title & Content */}
          <div className="space-y-6 lg:w-1/2">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-900">
              {solution.title}
            </h2>
            {solution.content.map((para, i) => (
              <p key={i} className="text-lg text-gray-600">
                {para}
              </p>
            ))}
          </div>

          {/* Right: Quote & Image */}
          <div className="background-stripes parallax-effect-glare-scale space-y-6 px-2 py-6 lg:w-1/2">
            <div className="text-center">
              <blockquote className="mt-4 text-gray-700 italic">
                {solution.quote}
              </blockquote>
            </div>
            <Tilt
              className="parallax-effect-glare-scale"
              perspective={1000}
              scale={1.02}
              glareEnable
              glareMaxOpacity={0.45}
              glareBorderRadius="50%"
            >
              <img
                src={solution.image.src}
                alt={solution.image.alt}
                className={solution.image.class}
              />
            </Tilt>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
