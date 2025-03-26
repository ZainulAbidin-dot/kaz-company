import p1 from '@/assets/images/projects/p1.jpg';
import p2 from '@/assets/images/projects/p2.jpg';
import p3 from '@/assets/images/projects/p3.jpg';
import p4 from '@/assets/images/projects/p4.jpg';
import p5 from '@/assets/images/projects/p5.jpg';
import p6 from '@/assets/images/projects/p6.jpg';
import p8 from '@/assets/images/projects/p8.png';
import p9 from '@/assets/images/projects/p9.png';
import { ImageGallery, ImageItem } from '@/components/gallery/gallery';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

const galleryData: ImageItem[] = [
  {
    id: '1',
    src: p1,
    alt: 'Mountain landscape',
    title: 'Al Qassim National Hospital',
    description:
      'Towering peaks pierce through misty clouds in this dramatic mountain landscape.',
  },
  {
    id: '2',
    src: p2,
    alt: 'Modern architecture',
    title: 'Saudi German Hospital',
    description: '',
  },
  {
    id: '3',
    src: p3,
    alt: 'Waterfall',
    title: 'Kingdom Hospital',
    description: '',
  },
  {
    id: '4',
    src: p4,
    alt: 'Mountain sunset',
    title: 'King Fahad Specialist Hospital - Dammam',
    description: '',
  },
  {
    id: '5',
    src: p5,
    alt: 'Urban night',
    title: 'Saudi Aramco Lab R & D',
    description: '',
  },
  {
    id: '6',
    src: p6,
    alt: 'Nature landscape',
    title: 'Kingdom Tower',
    description: '',
  },
  {
    id: '7',
    src: p9,
    alt: 'Nature landscape',
    title: 'King Fahad Airbase - Taif',
    description: '',
  },

  {
    id: '8',
    src: p8,
    alt: 'Nature landscape',
    title: 'Faisaliya Tower',
    description: '',
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/3774243/pexels-photo-3774243.jpeg?cs=srgb&dl=pexels-souvenirpixels-3774243.jpg&fm=jpg',
    alt: 'Nature landscape',
    title: 'King Fahad Airbase - Taif',
    description: '',
  },
];

export function GallerySection() {
  const sectionRef = useFadeInAnimation({
    animationClass: 'animate-fadeInLeft',
    threshold: 0.25,
  });

  return (
    <section className="py-20" ref={sectionRef} data-animatable>
      <Wrapper>
        <div className="flex flex-col gap-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
            Our Projects
          </h2>
          <ImageGallery imageItems={galleryData} />
        </div>
      </Wrapper>
    </section>
  );
}
