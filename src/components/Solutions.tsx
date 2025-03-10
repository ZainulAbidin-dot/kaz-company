import React from 'react'
import st1 from '@/assets/images/st1.png'
import st2 from '@/assets/images/st2.png'
import st3 from '@/assets/images/st3.png'
import st4 from '@/assets/images/st4.png'
import st5 from '@/assets/images/st5.png'
import st6 from '@/assets/images/st6.png'
import st7 from '@/assets/images/st7.png'
import img from '@/assets/images/bg2.webp'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import Tilt from 'react-parallax-tilt';
  import { useParallax, Parallax } from 'react-scroll-parallax';

const Solutions = () => {
    const parallax = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateY: [120, -50],
      });
    
    const parallax2 = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateY: [120, -50],
      });
  return (
    <div className='flex w-full h-screen justify-between items-center relative overflow-hidden'>
        <img src={img} alt="Background" className='absolute inset-0 w-[100%] h-[100%] object-cover opacity-20' />
        <div ref={parallax.ref} className='max-w-[50%] relative z-10 pl-10 ml-4 animate-fadeIn'>
            <h1 className='my-4'>
            Solution & Technologies
            </h1>
            <p>    
            Saudi Controls specializes in personalized solutions that encompass a wide range of high-tech fields, from building systems to the industrial sector, from communications to security. Our decades of experience on the cusp of the latest technologies and our extensive network of experts allow us to provide full-fledged products and services across the entire spectrum of modern technological needs.
            </p>
        </div>
        <div ref={parallax2.ref} className="max-w-[40%] flex flex-wrap justify-between relative z-10 animate-fadeIn">
            <div className="w-[45%] ml-40">
            <Popover>
            <PopoverTrigger>
            <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
            >
            <div className='w-[100px] h-[100px] bg-black m-auto rounded-md flex items-center justify-center'>
                <img src={st1} alt="" className='w-[50px] h-[50px] object-contain' />
            </div>
            </Tilt>
            </PopoverTrigger>
            <PopoverContent className="animate-fadeIn">
            <h2 className='text-xl mb-4'>Building Automation</h2>
            <ul className="list-disc pl-5">
                <li>Building and Energy Management Systems</li>
                <li>HVAC Control</li>
                <li>Lighting Control Systems</li>
                <li>Security / Access Control Systems</li>
                <li>Hotel/Room Management</li>
                <li>Fire Alarm Systems</li>
                <li>Public Address System</li>
            </ul>
            </PopoverContent>
            </Popover>
            </div>
            <div className="w-[45%] mb-10">
            <Popover>
            <PopoverTrigger>
            <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
            >
            <div className='w-[100px] h-[100px] bg-black m-auto rounded-md flex items-center justify-center'>
                <img src={st2} alt="" className='w-[50px] h-[50px] object-contain' />
            </div>
            </Tilt>
            </PopoverTrigger>
            <PopoverContent className="animate-fadeIn">
            <h2 className='text-xl mb-4'>E-Vehicles Charging Systems</h2>
            <ul className="list-disc pl-5">
                <li>EV charging for Smart Cities</li>
            </ul>
            </PopoverContent>
            </Popover>
            </div>
            <div className="w-[45%] mb-10">
            <Popover>
            <PopoverTrigger>
            <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
            >
            <div className='w-[100px] h-[100px] bg-black m-auto rounded-md flex items-center justify-center'>
                <img src={st3} alt="" className='w-[50px] h-[50px] object-contain' />
            </div>
            </Tilt>
            </PopoverTrigger>
            <PopoverContent className="animate-fadeIn">
            <h2 className='text-xl mb-4'>Industrial Automation</h2>
            <ul className="list-disc pl-5">
                <li>Industrial Automation - Scada System</li>
                <li>Internet of Things</li>
                <li>Machine to Machine (M2M)</li>
            </ul>
            </PopoverContent>
            </Popover>
            </div>
            <div className="w-[45%] mb-4">
            <Popover>
            <PopoverTrigger>
            <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
            >
            <div className='w-[100px] h-[100px] bg-black m-auto rounded-md flex items-center justify-center'>
                <img src={st4} alt="" className='w-[50px] h-[50px] object-contain' />
            </div>
            </Tilt>
            </PopoverTrigger>
            <PopoverContent className="animate-fadeIn">
            <h2 className='text-xl mb-4'>Transportation Technology</h2>
            <ul className="list-disc pl-5">
                <li>Intelligent Traffic System</li>
            </ul>
            </PopoverContent>
            </Popover>
            </div>
            <div className="w-[45%] mb-4">
            <Popover>
            <PopoverTrigger>
            <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
            >
            <div className='w-[100px] h-[100px] bg-black m-auto rounded-md flex items-center justify-center'>
                <img src={st5} alt="" className='w-[50px] h-[50px] object-contain' />
            </div>
            </Tilt>
            </PopoverTrigger>
            <PopoverContent className="animate-fadeIn">
            <h2 className='text-xl mb-4'>Telecommunication & IT Networking</h2>
            <ul className="list-disc pl-5">
                <li>Video Conference System</li>
                <li>PTP & PTMP Wireless Communications</li>
                <li>VSAT Systems for Audio, Video & Data communication</li>
                <li>IT Networking</li>
                <li>GPS Tracking Systems</li>
                <li>In Transit Tracking System</li>
                <li>RFID Tracking Technology</li>
                <li>Aircrafts Ground Support Systems</li>
                <li>Internet of Things</li>
                <li>Machine to Machine (M2M)</li>
            </ul>
            </PopoverContent>
            </Popover>
            </div>
            <div className="w-[45%] ml-40 mt-[-1rem]">
            <Popover>
            <PopoverTrigger>
            <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
            >
            <div className='w-[100px] h-[100px] bg-black m-auto rounded-md flex items-center justify-center'>
                <img src={st6} alt="" className='w-[50px] h-[50px] object-contain' />
            </div>
            </Tilt>
            </PopoverTrigger>
            <PopoverContent className="animate-fadeIn">
            <h2 className='text-xl mb-4'>Security System</h2>
            <ul className="list-disc pl-5">
                <li>Closed Circuit Television</li>
                <li>X-Ray Cargo scanners technology</li>
                <li>Perimeter Intrusion Detection Systems & Access Control System</li>
            </ul>
            </PopoverContent>
            </Popover>
            </div>
            
            <div className="w-[45%] ml-35 mt-[-22rem]">
            <Popover>
            <PopoverTrigger className='bg-transparent'>
            <Tilt
            className="background-stripes parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.945}
            scale={1.02}
            >
            <div className='w-[150px] h-[150px] bg-black m-auto rounded-md flex items-center justify-center'>
                <img src={st7} alt="" className='w-[150px] h-[150px] object-contain' />
            </div>
            </Tilt>
            </PopoverTrigger>
            <PopoverContent className="animate-fadeIn">
            <h2 className='text-xl mb-4'>Artifical Intelligence</h2>
            </PopoverContent>
            </Popover>
            </div>
        </div>
    </div>
  )
}

export default Solutions