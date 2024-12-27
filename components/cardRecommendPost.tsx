import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardRecommendPostProps {
    imageUrl: string;
}

const CardRecommendPost = (
    { imageUrl }: CardRecommendPostProps
) => {
    return (
        <article className='flex flex-col gap-1'>
            <div className='relative w-full h-[144px]'>
                <Link href="/">
                    <Image
                        src={imageUrl}
                        alt='recommend'
                        fill
                        className='object-cover'
                    />
                </Link>

                <div className='absolute bottom-0 left-0 bg-arent-primary-300 px-2 text-white font-inter font-normal text-[15px] leading-[30px] flex items-center justify-center gap-3'>
                    <span>2021.05.17</span>
                    <span>23:25</span>
                </div>
            </div>

            <Link href="/" className='line-clamp-2 text-ellipsis overflow-hidden font-notoSansJP font-light text-[15px] leading-[22px] hover:underline'>
                魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 知っておきたい魚を食べるメリ
            </Link>

            <div className='flex flex-wrap gap-x-2 font-notoSansJP font-light text-[12px] leading-[22px] text-arent-primary-400'>
                <Link href="/" className='hover:underline'>#魚料理</Link>
                <Link href="/" className='hover:underline'>#和食</Link>
                <Link href="/" className='hover:underline'>#DHA</Link>
            </div>
        </article>
    );
};

export default CardRecommendPost;