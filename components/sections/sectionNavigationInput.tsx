import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SectionNavigationInput = () => {
    return (
        <section className='max-w-[736px] px-[10px] mx-auto py-6 flex flex-wrap justify-center gap-y-[30px]'>
            <div className='basis-1/2 md:basis-1/4 flex justify-center'>
                <Link href="/" className='hexagon'>
                    <Image
                        src="/icons/icon_knife.svg"
                        alt="Knife"
                        width={56}
                        height={56}
                    />
                    <span className='font-inter text-xl leading-6 font-normal'>Morning</span>
                </Link>
            </div>

            <div className='basis-1/2 md:basis-1/4 flex justify-center'>
                <Link href="/" className='hexagon'>
                    <Image
                        src="/icons/icon_knife.svg"
                        alt="Knife"
                        width={56}
                        height={56}
                    />
                    <span className='font-inter text-xl leading-6 font-normal'>Lunch</span>
                </Link>
            </div>

            <div className='basis-1/2 md:basis-1/4 flex justify-center'>
                <Link href="/" className='hexagon'>
                    <Image
                        src="/icons/icon_knife.svg"
                        alt="Knife"
                        width={56}
                        height={56}
                    />
                    <span className='font-inter text-xl leading-6 font-normal'>Dinner</span>
                </Link>
            </div>

            <div className='basis-1/2 md:basis-1/4 flex justify-center'>
                <Link href="/" className='hexagon'>
                    <Image
                        src="/icons/icon_cup.svg"
                        alt="Knife"
                        width={56}
                        height={56}
                    />
                    <span className='font-inter text-xl leading-6 font-normal'>Snack</span>
                </Link>
            </div>

        </section>
    );
};

export default SectionNavigationInput;