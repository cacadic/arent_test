import React from 'react';

interface CardRecommendTextProps {
    title: string;
    description: string;
}

const CardRecommendText = (
    { title, description }: CardRecommendTextProps
) => {
    return (
        <div className='flex flex-col items-center justify-center bg-arent-dark-600 p-6 gap-[10px]'>
            <h3 className='text-[22px] leading-[27px] font-normal font-inter text-center text-arent-primary-300'>
                {title}
            </h3>
            <hr className='w-14 h-[1px] bg-white' />
            <p className='text-white font-notoSansJP font-light text-[18px] leading-[26px] text-center'>
                {description}
            </p>
        </div>
    );
};

export default CardRecommendText;