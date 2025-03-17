import React from 'react';

import logo from '@/assets/images/logo-arabic.png';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { cn } from '@/lib/utils';

import { Wrapper } from '../ui/wrapper';
import { DesktopNavLinks, MobileNavLinks } from './navlinks';

type NavbarProps = {
  pastThreshold: boolean;
  navHeightInPx: number;
};

export const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ pastThreshold, navHeightInPx }, navbarRef) => {
    const { isMobile } = useIsMobile();

    return (
      <header
        ref={navbarRef}
        className={cn(
          'text-muted-foreground bg-neutral-900/75 backdrop-blur',
          'text-sm font-medium',
          'w-full',
          'relative',
          'fixed z-50',
          pastThreshold
            ? `fixed top-0 left-0 bg-neutral-950/75 backdrop-blur ${isMobile ? 'opacity-100' : 'opacity-0'}  hover:opacity-100 transition duration-500`
            : ''
        )}
        style={{
          height: `${navHeightInPx}px`,
        }}
      >
        <Wrapper>
          <div className={cn('py-4', 'flex items-center justify-between')}>
            <img src={logo} alt="Saudi Controls" className="h-16" />

            {isMobile ? <MobileNavLinks /> : <DesktopNavLinks />}
          </div>
        </Wrapper>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';
