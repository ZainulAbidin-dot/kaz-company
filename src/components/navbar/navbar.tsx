import React from 'react';

import logo from '@/assets/images/logo-trans.png';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { cn } from '@/lib/utils';

import { Wrapper } from '../ui/wrapper';
import { DesktopNavLinks, MobileNavLinks } from './navlinks';

type NavbarProps = {
  pastThreshold: boolean;
  navHeightInPx: number;
};

export const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ pastThreshold }, navbarRef) => {
    const { isMobile } = useIsMobile();

    return (
      <header
        ref={navbarRef}
        className={cn(
          'text-muted-foreground bg-neutral-900/75 backdrop-blur',
          'text-sm font-medium',
          'w-full',
          'fixed top-0 left-0 z-50',
          'transition duration-500',
          pastThreshold
            ? `bg-neutral-950/75 backdrop-blur ${isMobile ? 'opacity-100' : 'opacity-0'} hover:opacity-100`
            : ''
        )}
        style={{
          height: `134px`,
        }}
      >
        <Wrapper className='max-w-[99%]'>
          <div className={cn('py-4', 'flex items-center justify-start gap-[37vw]')}>
            <img src={logo} alt="KAZ" className="h-[100px]" />

            {isMobile ? <MobileNavLinks /> : <DesktopNavLinks />}
          </div>
        </Wrapper>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';
