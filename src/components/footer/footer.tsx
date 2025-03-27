import { Link } from 'react-router-dom';

import scImage from '@/assets/images/symbol.png';
import pdfFile from '@/assets/files/Brochure.pdf'; // Ensure the PDF is stored in the correct path


export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/history', label: 'History' },
    { href: '/solutions', label: 'Solutions' },
  ];

  const contactInfo = [
    { type: 'Email', value: 'info@saudicontrols.com' },
    { type: 'Phone', value: '+966 (11) 480 3338' },
    { type: 'Location', value: '5682 Umm Al Hamam Al Sharqi, Riyadh 12321' },
  ];

  return (
    <footer className="bg-gradient-to-r from-neutral-800 to-neutral-950 pt-16 pb-8 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {/* Company Info */}
        <div className="group">
          <img src={scImage} alt="" className="h-22 mb-2" />
          <h3 className="text-5xl font-bold text-filled-animation">Saudi Controls Ltd.</h3>
          <p className="mt-2 text-neutral-400 ">
            Delivering innovative solutions for a smarter future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
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
          {/* Downloadable PDF Link */}
          <div className="mt-4">
            <a
              href={pdfFile}
              download
              className="inline-block px-4 py-2 mt-2 text-white bg-blue-600 rounded-sm hover:bg-blue-700"
            >
              Download Brochure (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-neutral-700 pt-4 text-center">
        <p className="text-neutral-400">
          © {currentYear} Saudi Controls. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
