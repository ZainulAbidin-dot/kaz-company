import '@/assets/styles/Home.css'; // Ensure this CSS file exists
import video from '../assets/video/design.mp4'; // Import video correctly
import About from './About';
import BoxComponent from '@/components/BoxComponent';
import Solutions from '@/components/Solutions';
import Operations from './Operations';
import Projects from './Projects';
import '@/assets/styles/Solution.css';

const Home = () => {
  return (
    <>
      <div className='relative h-[100vh] flex items-center justify-center'>
        {/* Background Video */}
        <video
          src={video}
          className='absolute inset-0 w-full h-full object-cover'
          style={{ top: 'calc(var(--navbar-height) * -1)' }}
          autoPlay
          loop
          muted
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-[#00000099]' style={{ top: 'calc(var(--navbar-height) * -1)' }} />

        {/* Hero Text */}
        <div className='relative text-white text-center w-[60%]'>
          <h1 className='text-4xl font-bold'>The Foremost Engineering and System Integration Company</h1>
        </div>
      </div>

      <div className='autoRotate container mx-auto w-[90%] mt-30'>
        <About />
      </div>

      <div className='autoRotate w-[100%] m-2 mt-0 ml-0'>
        <Solutions />
      </div>

      <div className='autoRotate h-[100vh] mt-20 relative'>
        <div className='hero-text flex relative z-10 text-white'>
          <BoxComponent />
          <Operations />
        </div>
      </div>

      <div className='m-2 ml-0'>
        <Projects />
      </div>

      <div className='container flex items-center mx-auto w-[90%] mt-10'>
        <BoxComponent />
        <Solutions />
      </div>
    </>
  );
};

export default Home;
