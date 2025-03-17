export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
    { href: '#careers', label: 'Careers' },
  ];

  const contactInfo = [
    { type: 'Email', value: 'info@saudicontrols.com' },
    { type: 'Phone', value: '+966 (11) 480 3338' },
    { type: 'Location', value: '5682 Umm Al Hamam Al Sharqi, Riyadh 12321' },
  ];

  return (
    <footer className="bg-neutral-950 pt-16 pb-8 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold">Company Name</h3>
          <p className="mt-2 text-neutral-400">
            Delivering innovative solutions for a smarter future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-400 hover:text-white"
                >
                  {link.label}
                </a>
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
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-neutral-700 pt-4 text-center">
        <p className="text-neutral-400">
          © {currentYear} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
