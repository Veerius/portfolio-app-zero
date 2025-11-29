import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
                className
            )}
        >
            {children}
        </div>
    );
}

export function BentoCard({ children, className, size = 'medium', onClick }: BentoCardProps) {
    const sizeClasses = {
        small: 'md:col-span-1',
        medium: 'md:col-span-1 lg:col-span-2',
        large: 'md:col-span-2 lg:col-span-3',
    };

    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md',
                sizeClasses[size],
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
