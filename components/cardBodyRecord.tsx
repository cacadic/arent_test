import Image from 'next/image';
import React from 'react';

interface CardBodyRecordProps {
    imageUrl: string;
    title: string;
    description: string;
}

const CardBodyRecord = (
    { imageUrl, title, description }: CardBodyRecordProps
) => {
    return (
        <div className='w-full h-[288px] relative border-[24px] border-arent-primary-300'>
            <div className='w-full h-full relative'>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className='object-cover mix-blend-luminosity absolute top-0 left-0 w-full h-full'
                />
            </div>

            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60'></div>

            <div className='flex flex-col items-center justify-center gap-3 w-full h-full z-20 absolute top-0 left-0'>
                <p className='font-inter text-[25px] leading-[30px] text-arent-primary-300 uppercase'>{title}</p>
                <p className='bg-arent-primary-400 text-[14px] leading-[20px] w-[160px] h-[24px] flex items-center justify-center text-white'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CardBodyRecord;