import Tilt from 'react-parallax-tilt';
import '@/assets/styles/About.css';
import image from '@/assets/images/Engr_Abdulrahman_A_Z_Alshathry.png';

const About = () => {
  return (
    <div>
      <div className='grid grid-cols-5 grid-rows-4 gap-4'>
        <div className='col-end-3 row-span-3 col-start-1 row-start-1 rounded p-2 mt-6'>
          <Tilt
            className='background-stripes parallax-effect-glare-scale'
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
            }}
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
          >
            <section className='mx-auto inner-element'>
              <blockquote className='relative text-center p-4 rounded '>
                <p className='text-sm italic  pl-2  text-left'>
                  To make Saudi Controls the leader in providing diversified and innovative solutions in Technology{' '}
                  <br /> sectors in KSA.
                </p>
                <cite className='block text-sm text-gray-600 pt-6 mt-45 pr-2 text-right'>
                  CEO & Chairman <br /> Engr. Abdulrahman A Z Alshathry
                </cite>
              </blockquote>
            </section>
          </Tilt>
        </div>
        <div className='row-span-3 col-start-5 row-start-1'>{/* <CircleComponent /> */}</div>
        <div className='col-start-3 row-start-1'>
          <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl mt-8'>Overview</h1>
        </div>
        <div className='col-span-5 row-span-2 col-start-1 row-start-4'>
          <p className='text-sm md:text-base lg:text-md xl:text-lg'>
            Currently undergoing exponential growth, Saudi Controls has branched out from its head office in Riyadh to
            every corner of the kingdom, providing tailor-made technical solutions utilizing state of the art
            innovations in various fields of civil and security systems to an ever expanding client base with which we
            share a long-term relationship built on trust and reliability.
          </p>
        </div>
        <div className='col-span-3 row-span-2 col-start-3 row-start-2'>
          <p className='text-sm md:text-base lg:text-md xl:text-lg pr-18 mb-2'>
            Saudi Controls Ltd. is one of the foremost engineering and systems integration companies in Saudi Arabia, a
            longtime trendsetter in the field with an established reputation for multidisciplinary expertise and
            competitive prices going back 25 years.
          </p>
          <p className='text-sm md:text-base lg:text-md xl:text-lg pr-18'>
            Currently undergoing exponential growth, Saudi Controls has branched out from its head office in Riyadh to
            every corner of the kingdom, providing tailor-made technical solutions utilizing state of the art
            innovations in various fields of civil and security systems to an ever expanding client base with which we
            share a long-term relationship built on trust and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
