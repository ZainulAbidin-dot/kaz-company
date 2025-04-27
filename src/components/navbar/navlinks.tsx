import React, { useState } from 'react';

import {
  ClockIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
  Settings,
  XIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

const navLinks = [
  {
    title: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    title: 'Jobs',
    href: '/',
    icon: MailIcon,
  },
  {
    title: 'Contact Us',
    href: '/#contact-info',
    icon: MailIcon,
  },
  // {
  //   title: 'History',
  //   href: '/history',
  //   icon: ClockIcon,
  // },
  // {
  //   title: 'Solutions',
  //   href: '/solutions',
  //   icon: Settings,
  // },
];

export function DesktopNavLinks() {
  return (
    <ul className="flex items-center gap-4">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className={cn(
              'flex items-center gap-1',
              '!text-white hover:!underline',
              'transition-colors duration-200'
            )}
          >
            <span>{link.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function MobileNavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        variant="default"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="!text-white"
      >
        {isOpen ? (
          <XIcon className="size-8" />
        ) : (
          <MenuIcon className="size-8" />
        )}
      </Button>
      {isOpen ? (
        <nav className="absolute top-24 left-0 w-full bg-neutral-950/95 backdrop-blur">
          <ul className="flex flex-col p-4 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'flex items-center gap-2',
                    '!text-white hover:!underline',
                    'transition-colors duration-200',
                    'py-2'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="size-4" />
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </React.Fragment>
  );
}
