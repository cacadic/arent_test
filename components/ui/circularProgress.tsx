import { cn } from '@/lib/utils';
import React from 'react';

interface CircularProgressProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    text: string;
    className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    size = 100,
    strokeWidth = 10,
    text,
    className
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
            <svg width={size} height={size}>
                <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow
                            dx="0"
                            dy="0"
                            stdDeviation="6"
                            floodColor="#FCA500"
                        />
                    </filter>
                </defs>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="transparent"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="white"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </svg>
            <div className='center-abs text-white flex items-baseline gap-x-1'>
                <span className='text-shadow-arent-orange font-inter text-[18px]'>
                    {text}
                </span>
                <span className='font-inter text-[25px] text-shadow-arent-orange'>
                    {value}%
                </span>
            </div>

        </div>
    );
};

export default CircularProgress;
