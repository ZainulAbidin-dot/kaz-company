import React from 'react';

import Tilt from 'react-parallax-tilt';

import img from '@/assets/images/bg2.webp';
import st1 from '@/assets/images/st1.png';
import st2 from '@/assets/images/st2.png';
import st3 from '@/assets/images/st3.png';
import st4 from '@/assets/images/st4.png';
import st5 from '@/assets/images/st5.png';
import st6 from '@/assets/images/st6.png';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

const solutions = [
  {
    image: st1,
    title: 'Building Automation',
    details: [
      'Building and Energy Management Systems',
      'HVAC Control',
      'Lighting Control Systems',
      'Security / Access Control Systems',
      'Hotel/Room Management',
      'Fire Alarm Systems',
      'Public Address System',
    ],
  },
  {
    image: st2,
    title: 'Industrial Automation',
    details: [
      'PLC / SCADA Systems',
      'Industrial Networks',
      'Control Panels',
      'Instrumentation',
      'Industrial Communication',
      'Industrial Security',
    ],
  },
  {
    image: st3,
    title: 'Communication',
    details: [
      'Structured Cabling',
      'Fiber Optic Networks',
      'IP Telephony',
      'Wireless Networks',
      'Data Centers',
      'Public Address System',
    ],
  },
  {
    image: st4,
    title: 'Security',
    details: [
      'CCTV Systems',
      'Access Control Systems',
      'Intrusion Detection Systems',
      'Perimeter Security',
      'Security Management Systems',
      'Public Address System',
    ],
  },
  {
    image: st5,
    title: 'Audio Visual',
    details: [
      'Conference Room AV',
      'Digital Signage',
      'Video Walls',
      'Interactive Displays',
      'Control Systems',
      'Public Address System',
    ],
  },
  {
    image: st6,
    title: 'Software',
    details: [
      'Building Management Software',
      'Energy Management Software',
      'Security Management Software',
      'Industrial Automation Software',
      'Communication Software',
      'Public Address System',
    ],
  },
  // {
  //   image: st7,
  //   title: 'Services',
  //   details: [
  //     'Engineering',
  //     'Design',
  //     'Installation',
  //     'Commissioning',
  //     'Maintenance',
  //     'Training',
  //     'Consulting',
  //   ],
  // },
];

export function SolutionsSection() {
  const sectionRef = useFadeInAnimation({
    animationClass: 'animate-fadeInDown',
    threshold: 0.25,
  });

  return (
    <div
      ref={sectionRef}
      className="relative w-full px-6 py-24 md:py-32"
      data-animatable
    >
      <img
        src={img}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <Wrapper>
        <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Title & Description */}
          <div className="mx-auto mb-12 lg:w-1/2">
            <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Solution & Technologies
            </h1>
            <p className="text-lg leading-relaxed text-gray-600">
              Saudi Controls specializes in tailored high-tech solutions, spanning building automation, industrial systems, communications, and security.
            </p>
            <p className="my-2 text-lg leading-relaxed text-gray-600">              
              From intelligent building management to advanced security systems, our expertise ensures seamless integration, reliability, and future-ready innovations for our clients. 
            </p>
          </div>

          {/* Circular Layout for Desktop */}
          <div className="relative hidden justify-center md:flex">
            <div
              className="relative h-[500px] min-w-[500px] animate-spin rounded-full lg:w-1/2"
              style={{
                animationDuration: '60s',
                animationTimingFunction: 'linear',
              }}
            >
              {solutions.map((solution, index) => {
                const CONTAINER_SIZE = 500;
                const CIRCLE_RADIUS = 200;
                const CENTER_POSITION = CONTAINER_SIZE / 2;

                const angle = (index * (2 * Math.PI)) / solutions.length;
                const x =
                  CIRCLE_RADIUS * Math.cos(angle - Math.PI / 2) +
                  CENTER_POSITION;
                const y =
                  CIRCLE_RADIUS * Math.sin(angle - Math.PI / 2) +
                  CENTER_POSITION;

                return (
                  <div
                    key={index}
                    className="absolute animate-spin"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      translate: '-50% -50%',
                      animationDuration: '60s',
                      animationTimingFunction: 'linear',
                      animationDirection: 'reverse',
                      transformOrigin: 'center',
                    }}
                  >
                    <SolutionItem solution={solution} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-wrap justify-center gap-8 md:hidden">
            {solutions.map((solution, index) => (
              <SolutionItem solution={solution} key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

function SolutionItem({ solution }: { solution: (typeof solutions)[number] }) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Popover open={isHovered}>
      <PopoverTrigger>
        <Tilt
          className="background-stripes parallax-effect-glare-scale cursor-pointer"
          perspective={1000}
          scale={1.02}
          glareEnable
          glareMaxOpacity={0.45}
          glareBorderRadius="50%"
          onEnter={() => setIsHovered(true)}
          onLeave={() => setIsHovered(false)}
        >
          <div className="flex h-30 w-30 items-center justify-center rounded-full bg-black transition-transform hover:scale-110">
            <img
              src={solution.image}
              alt={solution.title}
              className="h-15 w-15 shrink-0 object-contain"
            />
          </div>
        </Tilt>
      </PopoverTrigger>
      <PopoverContent className="animate-fadeIn w-[250px]">
        <h2 className="mb-4 border-b pb-2 text-lg font-bold text-gray-900">
          {solution.title}
        </h2>
        <ul className="space-y-2">
          {solution.details.map((detail, i) => (
            <li
              key={i}
              className="flex items-center text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
              {detail}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
