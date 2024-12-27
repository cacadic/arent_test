import Image from 'next/image';
import React from 'react';

interface CardMealHistoryProps {
    imageUrl: string;
    description: string;
}

const CardMealHistory = (
    { imageUrl, description }: CardMealHistoryProps
) => {
    return (
        <div className='h-[234px] relative'>
            <Image
                src={imageUrl}
                fill
                className="object-cover"
                alt="m01"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
            />
            <span className='absolute bottom-0 left-0 bg-arent-primary-300 py-[7px] pl-[8px] pr-[10px] text-white font-inter font-normal'>
                {description}
            </span>
        </div>
    );
};

export default CardMealHistory;