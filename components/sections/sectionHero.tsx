import ChartRecord from '@/components/ChartRecord';
import CircularProgress from '@/components/ui/circularProgress';
import Image from 'next/image';
import React from 'react';

const SectionHero = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(540px,54fr)_minmax(589px,74fr)] grid-rows-[auto] h-auto w-full">
            <div className="bg-black relative h-[312px]">
                <Image
                    src="/images/d01.jpg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                    fill
                    className="object-cover"
                    alt="d01"
                    priority
                />

                <CircularProgress size={181} value={75} strokeWidth={5} text="05/21" className="center-abs" />
            </div>

            <div className="relative h-[312px] bg-arent-dark-600 pl-12 pr-12 xl:pr-32 py-2">
                <ChartRecord height={290} />
            </div>
        </div>
    );
};

export default SectionHero;