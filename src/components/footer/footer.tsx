import { Link } from 'react-router-dom';

import scImage from '@/assets/images/logo-trans.png';
import snapchat from '@/assets/images/snapchat.webp';
import instagram from '@/assets/images/instagram.webp';
import whatsapp from '@/assets/images/whatsapp.webp';


export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Jobs' },
    { href: '/#contact-info', label: 'Contact Us' },
  ];

  const socialLinks = [
    { img: snapchat, href: 'https://www.snapchat.com/add/kazrec?share_id=RzVqSTQ0RcKp+s0dBuYgqA&locale=en_SA@calendar=gregorian&sid=f12bb636c9da4dfc8fc1180b482c90df', label: 'Follow us on Snapchat' },
    { img: instagram, href: 'https://www.instagram.com/kazrecruiting/', label: 'Follow us on instgram' },
    { img: whatsapp, href: 'https://api.whatsapp.com/send/?phone=966505672650&text&type=phone_number&app_absent=0', label: 'Contact us on WhatsApp' },
  ];

  const contactInfo = [
    { type: 'Email', value: 'info@kazsa.net' },
    { type: 'Phone', value: '+966 57 057 2181' },
    { type: 'Location', value: '5682 Umm Al Hamam Al Sharqi, Riyadh 12321' },
  ];

  return (
    <footer className="bg-gradient-to-r from-neutral-800 to-neutral-950 pt-16 pb-8 text-white  rounded-t-2xl">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
        {/* Company Info */}
        <div className="group">
          <img src={scImage} alt="" className="h-42" />
          <h3 className="text-5xl font-bold text-filled-animation">KAZ </h3>
          <p className="mt-2 text-neutral-400 ">
            We Provide Employment Services To Small, Medium And Large Companies.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            {contactInfo.map((info, index) => (
              <li key={index} className="text-neutral-400">
                {info.type}: {info.value}
              </li>
            ))}
          </ul>
        </div>
        

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Social Links</h3>
          <ul className="mt-2 space-y-2">
            {socialLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src={link.img} className='w-4' alt="" />
                <Link
                  to={link.href}
                  target='_blank'
                  className="text-neutral-400 text-lg hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-neutral-400 text-lg hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 border-t border-neutral-700 pt-4 text-center">
        <p className="text-neutral-400">
          © {currentYear} KAZ. All rights reserved. C.R 1010730192
        </p>
      </div>
    </footer>
  );
}
