import React from 'react';

import { cn } from '@/lib/utils';

export function Wrapper({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4', className)} {...props}>
      {children}
    </div>
  );
}
