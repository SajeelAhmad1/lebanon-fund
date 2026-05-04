import { cn } from '@/lib/utils';
import React from 'react';

const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('mx-auto max-w-[1440px] px-4 sm:px-6', className)}>
      {children}
    </div>
  );
};

export default MaxWidth;
