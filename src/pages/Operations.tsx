import om1 from '@/assets/images/om1.png'
import om2 from '@/assets/images/om2.png'
import om3 from '@/assets/images/om3.png'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import '@/assets/styles/Operation.css';
import { Parallax } from 'react-scroll-parallax';
import '@/assets/styles/Solution.css'
  

const Operations = () => {

  return (
    <Parallax speed={1} startScroll={0} endScroll={1000}>
        <div className=' overflow-hidden text-black min-h-[100vh] flex flex-col justify-center items-center'>
            <Parallax speed={15} startScroll={1000} endScroll={3000}>
                <div className='text-left mt-5 w-[90%] md:w-[80%] mx-auto header-content'>
                    <div className='text-3xl md:text-6xl font-normal mb-4'>
                        Operation and Maintenance
                    </div>
                    <p className='text-sm md:text-base'>    
                        The ability to integrate operations and maintenance constraints from the design stage is key to guaranteeing that the system is functional and maintained in line with budget forecasts throughout its useful life. SCL boasts this unique knowhow thanks to its engineers who are specialized in operations and maintenance. SCL sometimes goes beyond its role of engineering and project management and operates and maintains the following systems infrastructures:
                    </p>
                </div>
            </Parallax>
            <Parallax speed={15}  className="spinner grid grid-cols-3 gap-5 mx-auto w-[fit-content]">
                <div  >
                    <Popover>
                        <PopoverTrigger>
                            <div className='w-[150px] h-[150px] bg-black m-auto rounded-full flex items-center justify-center'>
                                <img src={om1} alt="" className='w-[100px] h-[100px] object-contain' />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <h2 className='text-xl text-center'>Parking Systems</h2>
                        </PopoverContent>
                    </Popover>
                </div>
                <div  >
                    <Popover>
                        <PopoverTrigger>
                            <div className='w-[150px] h-[150px] bg-black m-auto rounded-full flex items-center justify-center'>
                                <img src={om2} alt="" className='w-[100px] h-[100px] object-contain' />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <h2 className='text-xl text-center'>Transportation Systems</h2>
                        </PopoverContent>
                    </Popover>
                </div>
                <div  >
                    <Popover>
                        <PopoverTrigger>
                            <div className='w-[150px] h-[150px] bg-black m-auto rounded-full flex items-center justify-center'>
                                <img src={om3} alt="" className='w-[100px] h-[100px] object-contain' />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <h2 className='text-xl text-center'>Building Management Systems</h2>
                        </PopoverContent>
                    </Popover>
                </div>

            </Parallax>
        </div>
    </Parallax>
  )
}

export default Operations