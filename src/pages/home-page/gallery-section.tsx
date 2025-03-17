import { ImageGallery, ImageItem } from '@/components/gallery/gallery';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';

const galleryData: ImageItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Mountain landscape',
    title: 'Alpine Majesty',
    description:
      'Towering peaks pierce through misty clouds in this dramatic mountain landscape.',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern architecture',
    title: 'Urban Symmetry',
    description:
      'Glass and steel create mesmerizing patterns in modern architectural design.',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Waterfall',
    title: "Nature's Power",
    description: 'A majestic waterfall cascades through lush green forest.',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Mountain sunset',
    title: 'Golden Hour',
    description: 'Warm sunlight bathes the landscape in ethereal golden tones.',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Urban night',
    title: 'City Lights',
    description:
      'The urban landscape comes alive with countless twinkling lights.',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Nature landscape',
    title: 'Serene Waters',
    description:
      'A pristine lake reflects the surrounding landscape like a mirror.',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Nature landscape',
    title: 'Serene Waters',
    description:
      'A pristine lake reflects the surrounding landscape like a mirror.',
  },

  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    alt: 'Nature landscape',
    title: 'Serene Waters',
    description:
      'A pristine lake reflects the surrounding landscape like a mirror.',
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
            Image Gallery
          </h2>
          <ImageGallery imageItems={galleryData} />
        </div>
      </Wrapper>
    </section>
  );
}
