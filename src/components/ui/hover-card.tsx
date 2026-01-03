'use client';
import * as React from 'react';
import { cn } from '../../lib/utils';

interface HoverCardProps {
    trigger: React.ReactNode;
    content: React.ReactNode;
    className?: string;
}

export default function HoverCard({
    trigger,
    content,
    className,
}: HoverCardProps) {
    const [activeId, setActiveId] = React.useState<string | null>(null);
    const id = React.useId();

    return (
        <div
            className={cn('inline-block relative', className)}
            onMouseEnter={() => setActiveId(id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(id)}
            onBlur={() => setActiveId(null)}
            tabIndex={0}>
            {trigger}

            {activeId === id && content && (
                <div
                    className='absolute z-50 w-72 bg-popover text-popover-foreground border rounded-md p-2 shadow-lg 
                     animate-in slide-in-from-bottom-8 fade-in-0 duration-300 ease-out
                     top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-2 max-w-xs
                     bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xs 
                     border-neutral-200 dark:border-neutral-800
                     hover:scale-105 transition-transform'>
                    {content}
                </div>
            )}
        </div>
    );
}
