import React, { useState } from 'react';

import {
  HomeIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';

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
    href: '/jobs',
    icon: MailIcon,
  },
  {
    title: 'Contact Us',
    href: '#contact-info',
    icon: MailIcon,
  },
  {
    title: 'Language',
    href: '/',
    icon: MailIcon,
  },
];

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export function DesktopNavLinks() {
  return (
    <ul className="flex items-center gap-4">
      {navLinks.map((link) => (
        <li key={link.href}>
          <button
            onClick={() => {
              if (link.href.startsWith('#')) {
                scrollToSection(link.href.substring(1));
              }
              else {
                window.location.href = link.href;
              }
            }}
            className={cn(
              'z-10 flex items-center gap-1',
              '!text-white ',
              'transition-colors duration-200',
              'bg-black/20 p-2 rounded-sm text-lg',
            )}
          >
            <span className='cursor-pointer'>{link.title}</span>
          </button>
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
                <button
                  onClick={() => {
                    if (link.href.startsWith('#')) {
                      scrollToSection(link.href.substring(1));
                      setIsOpen(false);
                    }
                  }}
                  className={cn(
                    'flex items-center gap-2',
                    '!text-white hover:!underline',
                    'transition-colors duration-200',
                    'py-2'
                  )}
                >
                  <link.icon className="size-4" />
                  <span>{link.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </React.Fragment>
  );
}
