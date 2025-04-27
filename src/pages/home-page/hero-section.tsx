import video from '@/assets/video/main.mp4';

export function HeroSection() {
  return (
    <section className="relative h-screen">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-4 text-white">
        <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
        More than 100 ideas for a <br/> better life
        </h1>
        {/* <p className="max-w-2xl text-center text-xl md:text-2xl">
          We provide the best engineering solutions for your business. Our team
          of experts will help you achieve your goals.
        </p> */}
      </div>
    </section>
  );
}
